// Compiled by ClojureScript 1.10.520 {}
goog.provide('test_project.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("test-project.subs","name","test-project.subs/name",29302126),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("test-project.subs","series","test-project.subs/series",2142868195),(function (db,args){
console.log("series-id:",args);

return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.Keyword(null,"series2","series2",-1532467778)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("test-project.subs","status","test-project.subs/status",-455547976),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("test-project.subs","series","test-project.subs/series",2142868195)], null),(function (series,args){
console.log(series,args);

return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(series);
}));

//# sourceMappingURL=subs.js.map?rel=1558533991552
