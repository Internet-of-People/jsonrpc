(function() {var implementors = {};
implementors["jsonrpc_macros"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"jsonrpc_macros/struct.Trailing.html\" title=\"struct jsonrpc_macros::Trailing\">Trailing</a>&lt;T&gt;",synthetic:false,types:["jsonrpc_macros::auto_args::Trailing"]},{text:"impl&lt;T, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"jsonrpc_core/calls/enum.RemoteProcedure.html\" title=\"enum jsonrpc_core::calls::RemoteProcedure\">RemoteProcedure</a>&lt;M&gt;&gt;&gt; for <a class=\"struct\" href=\"jsonrpc_macros/struct.IoDelegate.html\" title=\"struct jsonrpc_macros::IoDelegate\">IoDelegate</a>&lt;T, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"jsonrpc_core/calls/trait.Metadata.html\" title=\"trait jsonrpc_core::calls::Metadata\">Metadata</a>,&nbsp;</span>",synthetic:false,types:["jsonrpc_macros::delegates::IoDelegate"]},];
implementors["jsonrpc_pubsub"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"jsonrpc_pubsub/trait.PubSubMetadata.html\" title=\"trait jsonrpc_pubsub::PubSubMetadata\">PubSubMetadata</a>, S:&nbsp;<a class=\"trait\" href=\"jsonrpc_core/middleware/trait.Middleware.html\" title=\"trait jsonrpc_core::middleware::Middleware\">Middleware</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"jsonrpc_core/io/struct.MetaIoHandler.html\" title=\"struct jsonrpc_core::io::MetaIoHandler\">MetaIoHandler</a>&lt;T, S&gt;&gt; for <a class=\"struct\" href=\"jsonrpc_pubsub/struct.PubSubHandler.html\" title=\"struct jsonrpc_pubsub::PubSubHandler\">PubSubHandler</a>&lt;T, S&gt;",synthetic:false,types:["jsonrpc_pubsub::handler::PubSubHandler"]},];
implementors["jsonrpc_server_utils"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"enum\" href=\"jsonrpc_server_utils/cors/enum.AllowCors.html\" title=\"enum jsonrpc_server_utils::cors::AllowCors\">AllowCors</a>&lt;T&gt;",synthetic:false,types:["jsonrpc_server_utils::cors::AllowCors"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;&gt;&gt; for <a class=\"enum\" href=\"jsonrpc_server_utils/hosts/enum.DomainsValidation.html\" title=\"enum jsonrpc_server_utils::hosts::DomainsValidation\">DomainsValidation</a>&lt;T&gt;",synthetic:false,types:["jsonrpc_server_utils::hosts::DomainsValidation"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
