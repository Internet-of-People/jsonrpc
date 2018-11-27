use std::fmt;
use std::rc::Rc;
use std::sync::Arc;
use types::{Params, Value, Error};
use futures::{Future, IntoFuture};
use BoxFuture;

/// Metadata trait
pub trait Metadata: Clone + 'static {}
impl Metadata for () {}
impl<T: Metadata> Metadata for Option<T> {}
impl<T: Metadata> Metadata for Box<T> {}
impl<T: 'static> Metadata for Rc<T> {}
impl<T: 'static> Metadata for Arc<T> {}

/// Asynchronous Method
pub trait RpcMethodSimple: 'static {
	/// Output future
	type Out: Future<Item = Value, Error = Error>;
	/// Call method
	fn call(&self, params: Params) -> Self::Out;
}

/// Asynchronous Method with Metadata
pub trait RpcMethod<T: Metadata>: 'static {
	/// Call method
	fn call(&self, params: Params, meta: T) -> BoxFuture<Value>;
}

/// Notification
pub trait RpcNotificationSimple: 'static {
	/// Execute notification
	fn execute(&self, params: Params);
}

/// Notification with Metadata
pub trait RpcNotification<T: Metadata>: 'static {
	/// Execute notification
	fn execute(&self, params: Params, meta: T);
}

/// Possible Remote Procedures with Metadata
#[derive(Clone)]
pub enum RemoteProcedure<T: Metadata> {
	/// A method call
	Method(Arc<RpcMethod<T>>),
	/// A notification
	Notification(Arc<RpcNotification<T>>),
	/// An alias to other method,
	Alias(String),
}

impl<T: Metadata> fmt::Debug for RemoteProcedure<T> {
	fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
		use self::RemoteProcedure::*;
		match *self {
			Method(..) => write!(fmt, "<method>"),
			Notification(..) => write!(fmt, "<notification>"),
			Alias(ref alias) => write!(fmt, "alias => {:?}", alias)
		}
	}
}

impl<F: 'static, X: 'static, I> RpcMethodSimple for F where
	F: Fn(Params) -> I,
	X: Future<Item = Value, Error = Error>,
	I: IntoFuture<Item = Value, Error = Error, Future = X>,
{
	type Out = X;
	fn call(&self, params: Params) -> Self::Out {
		self(params).into_future()
	}
}

impl<F: 'static> RpcNotificationSimple for F where
	F: Fn(Params),
{
	fn execute(&self, params: Params) {
		self(params)
	}
}

impl<F: 'static, X: 'static, T, I> RpcMethod<T> for F where
	T: Metadata,
	F: Fn(Params, T) -> I,
	I: IntoFuture<Item = Value, Error = Error, Future = X>,
	X: Future<Item = Value, Error = Error>,
{
	fn call(&self, params: Params, meta: T) -> BoxFuture<Value> {
		Box::new(self(params, meta).into_future())
	}
}

impl<F: 'static, T> RpcNotification<T> for F where
	T: Metadata,
	F: Fn(Params, T),
{
	fn execute(&self, params: Params, meta: T) {
		self(params, meta)
	}
}
