// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.form.select');
goog.require('cljs.core');
bulma_cljs.form.select.option = (function bulma_cljs$form$select$option(value,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),text], null);
});
bulma_cljs.form.select.select = (function bulma_cljs$form$select$select(options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select","div.select",1512138448),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503)], null),cljs.core.map.call(null,(function (p__22585){
var map__22586 = p__22585;
var map__22586__$1 = (((((!((map__22586 == null))))?(((((map__22586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22586):map__22586);
var value = cljs.core.get.call(null,map__22586__$1,new cljs.core.Keyword(null,"value","value",305978217));
var text = cljs.core.get.call(null,map__22586__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.form.select.option,value,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),text], null));
}),options))], null);
});

//# sourceMappingURL=select.js.map?rel=1557276006736
