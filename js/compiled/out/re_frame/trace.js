// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21925){
var map__21926 = p__21925;
var map__21926__$1 = (((((!((map__21926 == null))))?(((((map__21926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21926):map__21926);
var operation = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__21926__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__21928_21948 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__21929_21949 = null;
var count__21930_21950 = (0);
var i__21931_21951 = (0);
while(true){
if((i__21931_21951 < count__21930_21950)){
var vec__21940_21952 = cljs.core._nth.call(null,chunk__21929_21949,i__21931_21951);
var k_21953 = cljs.core.nth.call(null,vec__21940_21952,(0),null);
var cb_21954 = cljs.core.nth.call(null,vec__21940_21952,(1),null);
try{cb_21954.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21943){var e_21955 = e21943;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21953,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21955);
}

var G__21956 = seq__21928_21948;
var G__21957 = chunk__21929_21949;
var G__21958 = count__21930_21950;
var G__21959 = (i__21931_21951 + (1));
seq__21928_21948 = G__21956;
chunk__21929_21949 = G__21957;
count__21930_21950 = G__21958;
i__21931_21951 = G__21959;
continue;
} else {
var temp__5720__auto___21960 = cljs.core.seq.call(null,seq__21928_21948);
if(temp__5720__auto___21960){
var seq__21928_21961__$1 = temp__5720__auto___21960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21928_21961__$1)){
var c__4550__auto___21962 = cljs.core.chunk_first.call(null,seq__21928_21961__$1);
var G__21963 = cljs.core.chunk_rest.call(null,seq__21928_21961__$1);
var G__21964 = c__4550__auto___21962;
var G__21965 = cljs.core.count.call(null,c__4550__auto___21962);
var G__21966 = (0);
seq__21928_21948 = G__21963;
chunk__21929_21949 = G__21964;
count__21930_21950 = G__21965;
i__21931_21951 = G__21966;
continue;
} else {
var vec__21944_21967 = cljs.core.first.call(null,seq__21928_21961__$1);
var k_21968 = cljs.core.nth.call(null,vec__21944_21967,(0),null);
var cb_21969 = cljs.core.nth.call(null,vec__21944_21967,(1),null);
try{cb_21969.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21947){var e_21970 = e21947;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21968,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21970);
}

var G__21971 = cljs.core.next.call(null,seq__21928_21961__$1);
var G__21972 = null;
var G__21973 = (0);
var G__21974 = (0);
seq__21928_21948 = G__21971;
chunk__21929_21949 = G__21972;
count__21930_21950 = G__21973;
i__21931_21951 = G__21974;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1557276005761
