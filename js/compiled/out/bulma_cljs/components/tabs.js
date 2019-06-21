// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.components.tabs');
goog.require('cljs.core');
bulma_cljs.components.tabs.tabs = (function bulma_cljs$components$tabs$tabs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22685 = arguments.length;
var i__4731__auto___22686 = (0);
while(true){
if((i__4731__auto___22686 < len__4730__auto___22685)){
args__4736__auto__.push((arguments[i__4731__auto___22686]));

var G__22687 = (i__4731__auto___22686 + (1));
i__4731__auto___22686 = G__22687;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return bulma_cljs.components.tabs.tabs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

bulma_cljs.components.tabs.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (content,p__22679){
var vec__22680 = p__22679;
var map__22683 = cljs.core.nth.call(null,vec__22680,(0),null);
var map__22683__$1 = (((((!((map__22683 == null))))?(((((map__22683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22683):map__22683);
var alignment = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"alignment","alignment",1040093386));
var size = cljs.core.get.call(null,map__22683__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tabs","div.tabs",-1767258748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alignment,size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),content], null)], null);
});

bulma_cljs.components.tabs.tabs.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bulma_cljs.components.tabs.tabs.cljs$lang$applyTo = (function (seq22677){
var G__22678 = cljs.core.first.call(null,seq22677);
var seq22677__$1 = cljs.core.next.call(null,seq22677);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22678,seq22677__$1);
});


//# sourceMappingURL=tabs.js.map?rel=1557276006914
