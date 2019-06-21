// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.elements.tag');
goog.require('cljs.core');
bulma_cljs.elements.tag.tag_list = (function bulma_cljs$elements$tag$tag_list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22747 = arguments.length;
var i__4731__auto___22748 = (0);
while(true){
if((i__4731__auto___22748 < len__4730__auto___22747)){
args__4736__auto__.push((arguments[i__4731__auto___22748]));

var G__22749 = (i__4731__auto___22748 + (1));
i__4731__auto___22748 = G__22749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return bulma_cljs.elements.tag.tag_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

bulma_cljs.elements.tag.tag_list.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags","div.tags",-1073137818)], null),tags);
});

bulma_cljs.elements.tag.tag_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
bulma_cljs.elements.tag.tag_list.cljs$lang$applyTo = (function (seq22746){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22746));
});

bulma_cljs.elements.tag.tag = (function bulma_cljs$elements$tag$tag(content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),content], null);
});
bulma_cljs.elements.tag.delete_tag = (function bulma_cljs$elements$tag$delete_tag(content,delete_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags.has-addons","div.tags.has-addons",119759135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.is-delete","span.tag.is-delete",41313765),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),delete_fn], null)], null)], null);
});

//# sourceMappingURL=tag.js.map?rel=1557276007101
