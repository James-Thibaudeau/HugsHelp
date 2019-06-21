// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.utils');
goog.require('cljs.core');
/**
 * children is used to populate the children of 
 * a component, if key is already provided will 
 * use that, if not defaults to index
 */
bulma_cljs.utils.children = (function bulma_cljs$utils$children(elements){
return cljs.core.map_indexed.call(null,(function (index,item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,item)))){
return item;
} else {
return cljs.core.with_meta.call(null,item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
}
}),elements);
});

//# sourceMappingURL=utils.js.map?rel=1557276006768
