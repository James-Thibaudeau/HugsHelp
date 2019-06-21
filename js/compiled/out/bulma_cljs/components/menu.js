// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.components.menu');
goog.require('cljs.core');
bulma_cljs.components.menu.sub_menu = (function bulma_cljs$components$menu$sub_menu(p__22530){
var map__22531 = p__22530;
var map__22531__$1 = (((((!((map__22531 == null))))?(((((map__22531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22531):map__22531);
var label = cljs.core.get.call(null,map__22531__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var items = cljs.core.get.call(null,map__22531__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.menu-label","p.menu-label",330368170),label], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.menu-list","ul.menu-list",-953263704)], null),cljs.core.map.call(null,((function (map__22531,map__22531__$1,label,items){
return (function (p__22533){
var map__22534 = p__22533;
var map__22534__$1 = (((((!((map__22534 == null))))?(((((map__22534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22534):map__22534);
var item = cljs.core.get.call(null,map__22534__$1,new cljs.core.Keyword(null,"item","item",249373802));
var on_click = cljs.core.get.call(null,map__22534__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null));
});})(map__22531,map__22531__$1,label,items))
,items))], null);
});
bulma_cljs.components.menu.menu = (function bulma_cljs$components$menu$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22537 = arguments.length;
var i__4731__auto___22538 = (0);
while(true){
if((i__4731__auto___22538 < len__4730__auto___22537)){
args__4736__auto__.push((arguments[i__4731__auto___22538]));

var G__22539 = (i__4731__auto___22538 + (1));
i__4731__auto___22538 = G__22539;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bulma_cljs.components.menu.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bulma_cljs.components.menu.menu.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.menu","aside.menu",-50115976)], null),content);
});

bulma_cljs.components.menu.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bulma_cljs.components.menu.menu.cljs$lang$applyTo = (function (seq22536){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22536));
});


//# sourceMappingURL=menu.js.map?rel=1557276006609
