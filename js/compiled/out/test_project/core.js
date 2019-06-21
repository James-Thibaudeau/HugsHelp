// Compiled by ClojureScript 1.10.520 {}
goog.provide('test_project.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('test_project.events');
goog.require('test_project.views');
goog.require('test_project.config');
test_project.core.dev_setup = (function test_project$core$dev_setup(){
if(test_project.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
test_project.core.mount_root = (function test_project$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_project.views.main_panel], null),document.getElementById("app"));
});
test_project.core.init = (function test_project$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-project.events","initialize-db","test-project.events/initialize-db",191730055)], null));

test_project.core.dev_setup.call(null);

return test_project.core.mount_root.call(null);
});
goog.exportSymbol('test_project.core.init', test_project.core.init);

//# sourceMappingURL=core.js.map?rel=1561075344455
