// Compiled by ClojureScript 1.10.520 {}
goog.provide('bulma_cljs.components.pagination');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
bulma_cljs.components.pagination.pages_fn_BANG_ = (function bulma_cljs$components$pagination$pages_fn_BANG_(total_pages,current_page){
if((total_pages <= (10))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-page","start-page",510274786),(1),new cljs.core.Keyword(null,"end-page","end-page",1676062706),total_pages], null);
} else {
if((current_page < (6))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-page","start-page",510274786),(1),new cljs.core.Keyword(null,"end-page","end-page",1676062706),(10)], null);
} else {
if((((4) + current_page) > total_pages)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-page","start-page",510274786),(total_pages - (9)),new cljs.core.Keyword(null,"end-page","end-page",1676062706),total_pages], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-page","start-page",510274786),(current_page - (5)),new cljs.core.Keyword(null,"end-page","end-page",1676062706),(current_page + (4))], null);

}
}
}
});
bulma_cljs.components.pagination.pagination = (function bulma_cljs$components$pagination$pagination(p__22764){
var map__22765 = p__22764;
var map__22765__$1 = (((((!((map__22765 == null))))?(((((map__22765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22765):map__22765);
var initial_page = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"initial-page","initial-page",1974282031));
var total_pages = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"total-pages","total-pages",685894112));
var on_change_page = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"on-change-page","on-change-page",1552351005));
var current_page = reagent.core.atom.call(null,initial_page);
var page_fn_BANG_ = ((function (current_page,map__22765,map__22765__$1,initial_page,total_pages,on_change_page){
return (function (page){
return on_change_page.call(null,cljs.core.reset_BANG_.call(null,current_page,page));
});})(current_page,map__22765,map__22765__$1,initial_page,total_pages,on_change_page))
;
var next_fn_BANG_ = ((function (current_page,page_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page){
return (function (){
return on_change_page.call(null,cljs.core.swap_BANG_.call(null,current_page,cljs.core.inc));
});})(current_page,page_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page))
;
var prev_fn_BANG_ = ((function (current_page,page_fn_BANG_,next_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page){
return (function (){
return on_change_page.call(null,cljs.core.swap_BANG_.call(null,current_page,cljs.core.dec));
});})(current_page,page_fn_BANG_,next_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page))
;
return ((function (current_page,page_fn_BANG_,next_fn_BANG_,prev_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page){
return (function (p__22767){
var map__22768 = p__22767;
var map__22768__$1 = (((((!((map__22768 == null))))?(((((map__22768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22768):map__22768);
var initial_page__$1 = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"initial-page","initial-page",1974282031));
var total_pages__$1 = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"total-pages","total-pages",685894112));
var on_change_page__$1 = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"on-change-page","on-change-page",1552351005));
var map__22770 = bulma_cljs.components.pagination.pages_fn_BANG_.call(null,total_pages__$1,cljs.core.deref.call(null,current_page));
var map__22770__$1 = (((((!((map__22770 == null))))?(((((map__22770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22770):map__22770);
var start_page = cljs.core.get.call(null,map__22770__$1,new cljs.core.Keyword(null,"start-page","start-page",510274786));
var end_page = cljs.core.get.call(null,map__22770__$1,new cljs.core.Keyword(null,"end-page","end-page",1676062706));
var start_page_QMARK_ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_page),start_page);
var end_page_QMARK_ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_page),end_page);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.pagination","nav.pagination",1341143463),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pagination-previous","button.pagination-previous",-784494871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),start_page_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),prev_fn_BANG_], null),"Previous"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pagination-next","button.pagination-next",-1872270256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),end_page_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),next_fn_BANG_], null),"Next"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pagination-list","ul.pagination-list",1729064308),(((cljs.core.deref.call(null,current_page) > (6)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pagination-ellipsis","span.pagination-ellipsis",1851479807),goog.string.unescapeEntities("&hellip;")], null)], null):null),cljs.core.map.call(null,((function (map__22770,map__22770__$1,start_page,end_page,start_page_QMARK_,end_page_QMARK_,map__22768,map__22768__$1,initial_page__$1,total_pages__$1,on_change_page__$1,current_page,page_fn_BANG_,next_fn_BANG_,prev_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page){
return (function (page){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pagination-link","button.pagination-link",1401379410),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,page,cljs.core.deref.call(null,current_page)))?"is-current":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22770,map__22770__$1,start_page,end_page,start_page_QMARK_,end_page_QMARK_,map__22768,map__22768__$1,initial_page__$1,total_pages__$1,on_change_page__$1,current_page,page_fn_BANG_,next_fn_BANG_,prev_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page){
return (function (){
if(cljs.core.not_EQ_.call(null,page,cljs.core.deref.call(null,current_page))){
return page_fn_BANG_.call(null,page);
} else {
return null;
}
});})(map__22770,map__22770__$1,start_page,end_page,start_page_QMARK_,end_page_QMARK_,map__22768,map__22768__$1,initial_page__$1,total_pages__$1,on_change_page__$1,current_page,page_fn_BANG_,next_fn_BANG_,prev_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page))
], null),page], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["p-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join('')], null));
});})(map__22770,map__22770__$1,start_page,end_page,start_page_QMARK_,end_page_QMARK_,map__22768,map__22768__$1,initial_page__$1,total_pages__$1,on_change_page__$1,current_page,page_fn_BANG_,next_fn_BANG_,prev_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page))
,cljs.core.range.call(null,start_page,(end_page + (1)))),(((cljs.core.deref.call(null,current_page) < (total_pages__$1 - (4))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pagination-ellipsis","span.pagination-ellipsis",1851479807),goog.string.unescapeEntities("&hellip;")], null)], null):null)], null)], null);
});
;})(current_page,page_fn_BANG_,next_fn_BANG_,prev_fn_BANG_,map__22765,map__22765__$1,initial_page,total_pages,on_change_page))
});

//# sourceMappingURL=pagination.js.map?rel=1557276007162
