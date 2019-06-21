// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.components.dropdown');
goog.require('cljs.core');
goog.require('reagent.core');
bulma_cljs.components.dropdown.dropdown = (function bulma_cljs$components$dropdown$dropdown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22708 = arguments.length;
var i__4731__auto___22709 = (0);
while(true){
if((i__4731__auto___22709 < len__4730__auto___22708)){
args__4736__auto__.push((arguments[i__4731__auto___22709]));

var G__22710 = (i__4731__auto___22709 + (1));
i__4731__auto___22709 = G__22710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return bulma_cljs.components.dropdown.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

bulma_cljs.components.dropdown.dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (content,p__22696){
var vec__22697 = p__22696;
var map__22700 = cljs.core.nth.call(null,vec__22697,(0),null);
var map__22700__$1 = (((((!((map__22700 == null))))?(((((map__22700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22700):map__22700);
var on_click = cljs.core.get.call(null,map__22700__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var active_QMARK_ = reagent.core.atom.call(null,false);
var toggle_dd = ((function (active_QMARK_,vec__22697,map__22700,map__22700__$1,on_click){
return (function (){
return cljs.core.swap_BANG_.call(null,active_QMARK_,cljs.core.not);
});})(active_QMARK_,vec__22697,map__22700,map__22700__$1,on_click))
;
var on_click_fn = ((function (active_QMARK_,toggle_dd,vec__22697,map__22700,map__22700__$1,on_click){
return (function (){
toggle_dd.call(null);

if(cljs.core.truth_(on_click)){
return on_click.call(null);
} else {
return null;
}
});})(active_QMARK_,toggle_dd,vec__22697,map__22700,map__22700__$1,on_click))
;
return ((function (active_QMARK_,toggle_dd,on_click_fn,vec__22697,map__22700,map__22700__$1,on_click){
return (function() { 
var G__22711__delegate = function (content__$1,p__22702){
var vec__22703 = p__22702;
var map__22706 = cljs.core.nth.call(null,vec__22703,(0),null);
var map__22706__$1 = (((((!((map__22706 == null))))?(((((map__22706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22706):map__22706);
var on_click__$1 = cljs.core.get.call(null,map__22706__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,active_QMARK_))?"is-active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click_fn], null),content__$1], null);
};
var G__22711 = function (content__$1,var_args){
var p__22702 = null;
if (arguments.length > 1) {
var G__22712__i = 0, G__22712__a = new Array(arguments.length -  1);
while (G__22712__i < G__22712__a.length) {G__22712__a[G__22712__i] = arguments[G__22712__i + 1]; ++G__22712__i;}
  p__22702 = new cljs.core.IndexedSeq(G__22712__a,0,null);
} 
return G__22711__delegate.call(this,content__$1,p__22702);};
G__22711.cljs$lang$maxFixedArity = 1;
G__22711.cljs$lang$applyTo = (function (arglist__22713){
var content__$1 = cljs.core.first(arglist__22713);
var p__22702 = cljs.core.rest(arglist__22713);
return G__22711__delegate(content__$1,p__22702);
});
G__22711.cljs$core$IFn$_invoke$arity$variadic = G__22711__delegate;
return G__22711;
})()
;
;})(active_QMARK_,toggle_dd,on_click_fn,vec__22697,map__22700,map__22700__$1,on_click))
});

bulma_cljs.components.dropdown.dropdown.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bulma_cljs.components.dropdown.dropdown.cljs$lang$applyTo = (function (seq22694){
var G__22695 = cljs.core.first.call(null,seq22694);
var seq22694__$1 = cljs.core.next.call(null,seq22694);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22695,seq22694__$1);
});


//# sourceMappingURL=dropdown.js.map?rel=1557276006960
