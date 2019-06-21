// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22074 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22075 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22075;

try{try{var seq__22076 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22077 = null;
var count__22078 = (0);
var i__22079 = (0);
while(true){
if((i__22079 < count__22078)){
var vec__22086 = cljs.core._nth.call(null,chunk__22077,i__22079);
var effect_key = cljs.core.nth.call(null,vec__22086,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22086,(1),null);
var temp__5718__auto___22108 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22108)){
var effect_fn_22109 = temp__5718__auto___22108;
effect_fn_22109.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22110 = seq__22076;
var G__22111 = chunk__22077;
var G__22112 = count__22078;
var G__22113 = (i__22079 + (1));
seq__22076 = G__22110;
chunk__22077 = G__22111;
count__22078 = G__22112;
i__22079 = G__22113;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22076);
if(temp__5720__auto__){
var seq__22076__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22076__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22076__$1);
var G__22114 = cljs.core.chunk_rest.call(null,seq__22076__$1);
var G__22115 = c__4550__auto__;
var G__22116 = cljs.core.count.call(null,c__4550__auto__);
var G__22117 = (0);
seq__22076 = G__22114;
chunk__22077 = G__22115;
count__22078 = G__22116;
i__22079 = G__22117;
continue;
} else {
var vec__22089 = cljs.core.first.call(null,seq__22076__$1);
var effect_key = cljs.core.nth.call(null,vec__22089,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22089,(1),null);
var temp__5718__auto___22118 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22118)){
var effect_fn_22119 = temp__5718__auto___22118;
effect_fn_22119.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22120 = cljs.core.next.call(null,seq__22076__$1);
var G__22121 = null;
var G__22122 = (0);
var G__22123 = (0);
seq__22076 = G__22120;
chunk__22077 = G__22121;
count__22078 = G__22122;
i__22079 = G__22123;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21903__auto___22124 = re_frame.interop.now.call(null);
var duration__21904__auto___22125 = (end__21903__auto___22124 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21904__auto___22125,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21903__auto___22124);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22074;
}} else {
var seq__22092 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22093 = null;
var count__22094 = (0);
var i__22095 = (0);
while(true){
if((i__22095 < count__22094)){
var vec__22102 = cljs.core._nth.call(null,chunk__22093,i__22095);
var effect_key = cljs.core.nth.call(null,vec__22102,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22102,(1),null);
var temp__5718__auto___22126 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22126)){
var effect_fn_22127 = temp__5718__auto___22126;
effect_fn_22127.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22128 = seq__22092;
var G__22129 = chunk__22093;
var G__22130 = count__22094;
var G__22131 = (i__22095 + (1));
seq__22092 = G__22128;
chunk__22093 = G__22129;
count__22094 = G__22130;
i__22095 = G__22131;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22092);
if(temp__5720__auto__){
var seq__22092__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22092__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22092__$1);
var G__22132 = cljs.core.chunk_rest.call(null,seq__22092__$1);
var G__22133 = c__4550__auto__;
var G__22134 = cljs.core.count.call(null,c__4550__auto__);
var G__22135 = (0);
seq__22092 = G__22132;
chunk__22093 = G__22133;
count__22094 = G__22134;
i__22095 = G__22135;
continue;
} else {
var vec__22105 = cljs.core.first.call(null,seq__22092__$1);
var effect_key = cljs.core.nth.call(null,vec__22105,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22105,(1),null);
var temp__5718__auto___22136 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22136)){
var effect_fn_22137 = temp__5718__auto___22136;
effect_fn_22137.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22138 = cljs.core.next.call(null,seq__22092__$1);
var G__22139 = null;
var G__22140 = (0);
var G__22141 = (0);
seq__22092 = G__22138;
chunk__22093 = G__22139;
count__22094 = G__22140;
i__22095 = G__22141;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22142 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22143 = null;
var count__22144 = (0);
var i__22145 = (0);
while(true){
if((i__22145 < count__22144)){
var map__22150 = cljs.core._nth.call(null,chunk__22143,i__22145);
var map__22150__$1 = (((((!((map__22150 == null))))?(((((map__22150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22150):map__22150);
var effect = map__22150__$1;
var ms = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22142,chunk__22143,count__22144,i__22145,map__22150,map__22150__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22142,chunk__22143,count__22144,i__22145,map__22150,map__22150__$1,effect,ms,dispatch))
,ms);
}


var G__22154 = seq__22142;
var G__22155 = chunk__22143;
var G__22156 = count__22144;
var G__22157 = (i__22145 + (1));
seq__22142 = G__22154;
chunk__22143 = G__22155;
count__22144 = G__22156;
i__22145 = G__22157;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22142);
if(temp__5720__auto__){
var seq__22142__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22142__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22142__$1);
var G__22158 = cljs.core.chunk_rest.call(null,seq__22142__$1);
var G__22159 = c__4550__auto__;
var G__22160 = cljs.core.count.call(null,c__4550__auto__);
var G__22161 = (0);
seq__22142 = G__22158;
chunk__22143 = G__22159;
count__22144 = G__22160;
i__22145 = G__22161;
continue;
} else {
var map__22152 = cljs.core.first.call(null,seq__22142__$1);
var map__22152__$1 = (((((!((map__22152 == null))))?(((((map__22152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22152):map__22152);
var effect = map__22152__$1;
var ms = cljs.core.get.call(null,map__22152__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22152__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22142,chunk__22143,count__22144,i__22145,map__22152,map__22152__$1,effect,ms,dispatch,seq__22142__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22142,chunk__22143,count__22144,i__22145,map__22152,map__22152__$1,effect,ms,dispatch,seq__22142__$1,temp__5720__auto__))
,ms);
}


var G__22162 = cljs.core.next.call(null,seq__22142__$1);
var G__22163 = null;
var G__22164 = (0);
var G__22165 = (0);
seq__22142 = G__22162;
chunk__22143 = G__22163;
count__22144 = G__22164;
i__22145 = G__22165;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__22166 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22167 = null;
var count__22168 = (0);
var i__22169 = (0);
while(true){
if((i__22169 < count__22168)){
var event = cljs.core._nth.call(null,chunk__22167,i__22169);
re_frame.router.dispatch.call(null,event);


var G__22170 = seq__22166;
var G__22171 = chunk__22167;
var G__22172 = count__22168;
var G__22173 = (i__22169 + (1));
seq__22166 = G__22170;
chunk__22167 = G__22171;
count__22168 = G__22172;
i__22169 = G__22173;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22166);
if(temp__5720__auto__){
var seq__22166__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22166__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22166__$1);
var G__22174 = cljs.core.chunk_rest.call(null,seq__22166__$1);
var G__22175 = c__4550__auto__;
var G__22176 = cljs.core.count.call(null,c__4550__auto__);
var G__22177 = (0);
seq__22166 = G__22174;
chunk__22167 = G__22175;
count__22168 = G__22176;
i__22169 = G__22177;
continue;
} else {
var event = cljs.core.first.call(null,seq__22166__$1);
re_frame.router.dispatch.call(null,event);


var G__22178 = cljs.core.next.call(null,seq__22166__$1);
var G__22179 = null;
var G__22180 = (0);
var G__22181 = (0);
seq__22166 = G__22178;
chunk__22167 = G__22179;
count__22168 = G__22180;
i__22169 = G__22181;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22182 = cljs.core.seq.call(null,value);
var chunk__22183 = null;
var count__22184 = (0);
var i__22185 = (0);
while(true){
if((i__22185 < count__22184)){
var event = cljs.core._nth.call(null,chunk__22183,i__22185);
clear_event.call(null,event);


var G__22186 = seq__22182;
var G__22187 = chunk__22183;
var G__22188 = count__22184;
var G__22189 = (i__22185 + (1));
seq__22182 = G__22186;
chunk__22183 = G__22187;
count__22184 = G__22188;
i__22185 = G__22189;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22182);
if(temp__5720__auto__){
var seq__22182__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22182__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22182__$1);
var G__22190 = cljs.core.chunk_rest.call(null,seq__22182__$1);
var G__22191 = c__4550__auto__;
var G__22192 = cljs.core.count.call(null,c__4550__auto__);
var G__22193 = (0);
seq__22182 = G__22190;
chunk__22183 = G__22191;
count__22184 = G__22192;
i__22185 = G__22193;
continue;
} else {
var event = cljs.core.first.call(null,seq__22182__$1);
clear_event.call(null,event);


var G__22194 = cljs.core.next.call(null,seq__22182__$1);
var G__22195 = null;
var G__22196 = (0);
var G__22197 = (0);
seq__22182 = G__22194;
chunk__22183 = G__22195;
count__22184 = G__22196;
i__22185 = G__22197;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1557276006069
