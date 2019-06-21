// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.components.breadcrumb');
goog.require('cljs.core');
bulma_cljs.components.breadcrumb.crumb = (function bulma_cljs$components$breadcrumb$crumb(p__22580){
var map__22581 = p__22580;
var map__22581__$1 = (((((!((map__22581 == null))))?(((((map__22581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22581):map__22581);
var on_click = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var active_QMARK_ = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var text = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active_QMARK_)?"is-active":null)], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),text], null)], null);
});
bulma_cljs.components.breadcrumb.breadcrumb = (function bulma_cljs$components$breadcrumb$breadcrumb(options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.breadcrumb","nav.breadcrumb",620768866),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.call(null,(function (props){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bulma_cljs.components.breadcrumb.crumb,props], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(props)], null));
}),options))], null);
});

//# sourceMappingURL=breadcrumb.js.map?rel=1557276006681
