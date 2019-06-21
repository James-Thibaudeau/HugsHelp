// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.elements.button');
goog.require('cljs.core');
bulma_cljs.elements.button.button = (function bulma_cljs$elements$button$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22430 = arguments.length;
var i__4731__auto___22431 = (0);
while(true){
if((i__4731__auto___22431 < len__4730__auto___22430)){
args__4736__auto__.push((arguments[i__4731__auto___22431]));

var G__22432 = (i__4731__auto___22431 + (1));
i__4731__auto___22431 = G__22432;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return bulma_cljs.elements.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

bulma_cljs.elements.button.button.cljs$core$IFn$_invoke$arity$variadic = (function (label,on_click,p__22424){
var vec__22425 = p__22424;
var map__22428 = cljs.core.nth.call(null,vec__22425,(0),null);
var map__22428__$1 = (((((!((map__22428 == null))))?(((((map__22428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22428):map__22428);
var class$ = cljs.core.get.call(null,map__22428__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click], null),label], null);
});

bulma_cljs.elements.button.button.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bulma_cljs.elements.button.button.cljs$lang$applyTo = (function (seq22421){
var G__22422 = cljs.core.first.call(null,seq22421);
var seq22421__$1 = cljs.core.next.call(null,seq22421);
var G__22423 = cljs.core.first.call(null,seq22421__$1);
var seq22421__$2 = cljs.core.next.call(null,seq22421__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22422,G__22423,seq22421__$2);
});

bulma_cljs.elements.button.button_list = (function bulma_cljs$elements$button$button_list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22434 = arguments.length;
var i__4731__auto___22435 = (0);
while(true){
if((i__4731__auto___22435 < len__4730__auto___22434)){
args__4736__auto__.push((arguments[i__4731__auto___22435]));

var G__22436 = (i__4731__auto___22435 + (1));
i__4731__auto___22435 = G__22436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bulma_cljs.elements.button.button_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bulma_cljs.elements.button.button_list.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttons","div.buttons",-536342249)], null),content);
});

bulma_cljs.elements.button.button_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bulma_cljs.elements.button.button_list.cljs$lang$applyTo = (function (seq22433){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22433));
});

bulma_cljs.elements.button.delete_button = (function bulma_cljs$elements$button$delete_button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22445 = arguments.length;
var i__4731__auto___22446 = (0);
while(true){
if((i__4731__auto___22446 < len__4730__auto___22445)){
args__4736__auto__.push((arguments[i__4731__auto___22446]));

var G__22447 = (i__4731__auto___22446 + (1));
i__4731__auto___22446 = G__22447;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return bulma_cljs.elements.button.delete_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

bulma_cljs.elements.button.delete_button.cljs$core$IFn$_invoke$arity$variadic = (function (on_click,p__22439){
var vec__22440 = p__22439;
var map__22443 = cljs.core.nth.call(null,vec__22440,(0),null);
var map__22443__$1 = (((((!((map__22443 == null))))?(((((map__22443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22443):map__22443);
var class$ = cljs.core.get.call(null,map__22443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete","button.delete",898132078),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click], null)], null);
});

bulma_cljs.elements.button.delete_button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bulma_cljs.elements.button.delete_button.cljs$lang$applyTo = (function (seq22437){
var G__22438 = cljs.core.first.call(null,seq22437);
var seq22437__$1 = cljs.core.next.call(null,seq22437);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22438,seq22437__$1);
});

bulma_cljs.elements.button.inverted_button = (function bulma_cljs$elements$button$inverted_button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22457 = arguments.length;
var i__4731__auto___22458 = (0);
while(true){
if((i__4731__auto___22458 < len__4730__auto___22457)){
args__4736__auto__.push((arguments[i__4731__auto___22458]));

var G__22459 = (i__4731__auto___22458 + (1));
i__4731__auto___22458 = G__22459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return bulma_cljs.elements.button.inverted_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

bulma_cljs.elements.button.inverted_button.cljs$core$IFn$_invoke$arity$variadic = (function (label,on_click,p__22451){
var vec__22452 = p__22451;
var map__22455 = cljs.core.nth.call(null,vec__22452,(0),null);
var map__22455__$1 = (((((!((map__22455 == null))))?(((((map__22455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22455):map__22455);
var class$ = cljs.core.get.call(null,map__22455__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is-inverted"], null),class$),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click], null),label], null);
});

bulma_cljs.elements.button.inverted_button.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bulma_cljs.elements.button.inverted_button.cljs$lang$applyTo = (function (seq22448){
var G__22449 = cljs.core.first.call(null,seq22448);
var seq22448__$1 = cljs.core.next.call(null,seq22448);
var G__22450 = cljs.core.first.call(null,seq22448__$1);
var seq22448__$2 = cljs.core.next.call(null,seq22448__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22449,G__22450,seq22448__$2);
});

bulma_cljs.elements.button.round_button = (function bulma_cljs$elements$button$round_button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22469 = arguments.length;
var i__4731__auto___22470 = (0);
while(true){
if((i__4731__auto___22470 < len__4730__auto___22469)){
args__4736__auto__.push((arguments[i__4731__auto___22470]));

var G__22471 = (i__4731__auto___22470 + (1));
i__4731__auto___22470 = G__22471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return bulma_cljs.elements.button.round_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

bulma_cljs.elements.button.round_button.cljs$core$IFn$_invoke$arity$variadic = (function (label,on_click,p__22463){
var vec__22464 = p__22463;
var map__22467 = cljs.core.nth.call(null,vec__22464,(0),null);
var map__22467__$1 = (((((!((map__22467 == null))))?(((((map__22467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22467):map__22467);
var class$ = cljs.core.get.call(null,map__22467__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["is-rounded"], null),class$),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click], null),label], null);
});

bulma_cljs.elements.button.round_button.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bulma_cljs.elements.button.round_button.cljs$lang$applyTo = (function (seq22460){
var G__22461 = cljs.core.first.call(null,seq22460);
var seq22460__$1 = cljs.core.next.call(null,seq22460);
var G__22462 = cljs.core.first.call(null,seq22460__$1);
var seq22460__$2 = cljs.core.next.call(null,seq22460__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22461,G__22462,seq22460__$2);
});


//# sourceMappingURL=button.js.map?rel=1557276006470
