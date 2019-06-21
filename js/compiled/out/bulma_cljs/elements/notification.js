// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.elements.notification');
goog.require('cljs.core');
goog.require('bulma_cljs.elements.button');
bulma_cljs.elements.notification.notification = (function bulma_cljs$elements$notification$notification(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22575 = arguments.length;
var i__4731__auto___22576 = (0);
while(true){
if((i__4731__auto___22576 < len__4730__auto___22575)){
args__4736__auto__.push((arguments[i__4731__auto___22576]));

var G__22577 = (i__4731__auto___22576 + (1));
i__4731__auto___22576 = G__22577;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return bulma_cljs.elements.notification.notification.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

bulma_cljs.elements.notification.notification.cljs$core$IFn$_invoke$arity$variadic = (function (content,delete_fn,p__22569){
var vec__22570 = p__22569;
var map__22573 = cljs.core.nth.call(null,vec__22570,(0),null);
var map__22573__$1 = (((((!((map__22573 == null))))?(((((map__22573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22573):map__22573);
var class$ = cljs.core.get.call(null,map__22573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.notification","div.notification",-180031586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.elements.button.delete_button,delete_fn], null),content], null);
});

bulma_cljs.elements.notification.notification.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bulma_cljs.elements.notification.notification.cljs$lang$applyTo = (function (seq22566){
var G__22567 = cljs.core.first.call(null,seq22566);
var seq22566__$1 = cljs.core.next.call(null,seq22566);
var G__22568 = cljs.core.first.call(null,seq22566__$1);
var seq22566__$2 = cljs.core.next.call(null,seq22566__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22567,G__22568,seq22566__$2);
});


//# sourceMappingURL=notification.js.map?rel=1557276006658
