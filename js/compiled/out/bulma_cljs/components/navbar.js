// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.components.navbar');
goog.require('cljs.core');
goog.require('bulma_cljs.utils');
bulma_cljs.components.navbar.navbar = (function bulma_cljs$components$navbar$navbar(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22609 = arguments.length;
var i__4731__auto___22610 = (0);
while(true){
if((i__4731__auto___22610 < len__4730__auto___22609)){
args__4736__auto__.push((arguments[i__4731__auto___22610]));

var G__22611 = (i__4731__auto___22610 + (1));
i__4731__auto___22610 = G__22611;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bulma_cljs.components.navbar.navbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bulma_cljs.components.navbar.navbar.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499)], null),content);
});

bulma_cljs.components.navbar.navbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bulma_cljs.components.navbar.navbar.cljs$lang$applyTo = (function (seq22608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22608));
});

bulma_cljs.components.navbar.navbar_brand = (function bulma_cljs$components$navbar$navbar_brand(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22614 = arguments.length;
var i__4731__auto___22615 = (0);
while(true){
if((i__4731__auto___22615 < len__4730__auto___22614)){
args__4736__auto__.push((arguments[i__4731__auto___22615]));

var G__22616 = (i__4731__auto___22615 + (1));
i__4731__auto___22615 = G__22616;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return bulma_cljs.components.navbar.navbar_brand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

bulma_cljs.components.navbar.navbar_brand.cljs$core$IFn$_invoke$arity$variadic = (function (logo_src,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),logo_src], null)], null)], null),bulma_cljs.utils.children.call(null,content)], null);
});

bulma_cljs.components.navbar.navbar_brand.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bulma_cljs.components.navbar.navbar_brand.cljs$lang$applyTo = (function (seq22612){
var G__22613 = cljs.core.first.call(null,seq22612);
var seq22612__$1 = cljs.core.next.call(null,seq22612);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22613,seq22612__$1);
});

bulma_cljs.components.navbar.navbar_burger = (function bulma_cljs$components$navbar$navbar_burger(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-burger","a.navbar-burger",1841860714),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null);
});
bulma_cljs.components.navbar.navbar_item = (function bulma_cljs$components$navbar$navbar_item(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22625 = arguments.length;
var i__4731__auto___22626 = (0);
while(true){
if((i__4731__auto___22626 < len__4730__auto___22625)){
args__4736__auto__.push((arguments[i__4731__auto___22626]));

var G__22627 = (i__4731__auto___22626 + (1));
i__4731__auto___22626 = G__22627;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return bulma_cljs.components.navbar.navbar_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

bulma_cljs.components.navbar.navbar_item.cljs$core$IFn$_invoke$arity$variadic = (function (content,p__22619){
var vec__22620 = p__22619;
var map__22623 = cljs.core.nth.call(null,vec__22620,(0),null);
var map__22623__$1 = (((((!((map__22623 == null))))?(((((map__22623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22623):map__22623);
var on_click = cljs.core.get.call(null,map__22623__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item","div.navbar-item",-404991620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),content], null)], null);
});

bulma_cljs.components.navbar.navbar_item.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bulma_cljs.components.navbar.navbar_item.cljs$lang$applyTo = (function (seq22617){
var G__22618 = cljs.core.first.call(null,seq22617);
var seq22617__$1 = cljs.core.next.call(null,seq22617);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22618,seq22617__$1);
});

bulma_cljs.components.navbar.navbar_menu = (function bulma_cljs$components$navbar$navbar_menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22629 = arguments.length;
var i__4731__auto___22630 = (0);
while(true){
if((i__4731__auto___22630 < len__4730__auto___22629)){
args__4736__auto__.push((arguments[i__4731__auto___22630]));

var G__22631 = (i__4731__auto___22630 + (1));
i__4731__auto___22630 = G__22631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bulma_cljs.components.navbar.navbar_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bulma_cljs.components.navbar.navbar_menu.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-menu","div.navbar-menu",2078797180)], null),content);
});

bulma_cljs.components.navbar.navbar_menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bulma_cljs.components.navbar.navbar_menu.cljs$lang$applyTo = (function (seq22628){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22628));
});

bulma_cljs.components.navbar.navbar_start = (function bulma_cljs$components$navbar$navbar_start(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22633 = arguments.length;
var i__4731__auto___22634 = (0);
while(true){
if((i__4731__auto___22634 < len__4730__auto___22633)){
args__4736__auto__.push((arguments[i__4731__auto___22634]));

var G__22635 = (i__4731__auto___22634 + (1));
i__4731__auto___22634 = G__22635;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bulma_cljs.components.navbar.navbar_start.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bulma_cljs.components.navbar.navbar_start.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-start","div.navbar-start",1801160723)], null),content);
});

bulma_cljs.components.navbar.navbar_start.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bulma_cljs.components.navbar.navbar_start.cljs$lang$applyTo = (function (seq22632){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22632));
});

bulma_cljs.components.navbar.navbar_end = (function bulma_cljs$components$navbar$navbar_end(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22637 = arguments.length;
var i__4731__auto___22638 = (0);
while(true){
if((i__4731__auto___22638 < len__4730__auto___22637)){
args__4736__auto__.push((arguments[i__4731__auto___22638]));

var G__22639 = (i__4731__auto___22638 + (1));
i__4731__auto___22638 = G__22639;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bulma_cljs.components.navbar.navbar_end.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bulma_cljs.components.navbar.navbar_end.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-end","div.navbar-end",-365075861)], null),content);
});

bulma_cljs.components.navbar.navbar_end.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bulma_cljs.components.navbar.navbar_end.cljs$lang$applyTo = (function (seq22636){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22636));
});

bulma_cljs.components.navbar.navbar_dropdown = (function bulma_cljs$components$navbar$navbar_dropdown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22642 = arguments.length;
var i__4731__auto___22643 = (0);
while(true){
if((i__4731__auto___22643 < len__4730__auto___22642)){
args__4736__auto__.push((arguments[i__4731__auto___22643]));

var G__22644 = (i__4731__auto___22643 + (1));
i__4731__auto___22643 = G__22644;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return bulma_cljs.components.navbar.navbar_dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

bulma_cljs.components.navbar.navbar_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (title,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown","div.navbar-item.has-dropdown",1796376111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-link","a.navbar-link",1730266033),title], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-dropdown","div.navbar-dropdown",-445802110)], null),content)], null);
});

bulma_cljs.components.navbar.navbar_dropdown.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bulma_cljs.components.navbar.navbar_dropdown.cljs$lang$applyTo = (function (seq22640){
var G__22641 = cljs.core.first.call(null,seq22640);
var seq22640__$1 = cljs.core.next.call(null,seq22640);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22641,seq22640__$1);
});

bulma_cljs.components.navbar.navbar_divider = (function bulma_cljs$components$navbar$navbar_divider(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.navbar-divider","hr.navbar-divider",1589717640)], null);
});

//# sourceMappingURL=navbar.js.map?rel=1557276006828
