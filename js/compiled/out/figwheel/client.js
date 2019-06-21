// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31616){if((e31616 instanceof Error)){
var e = e31616;
return "Error: Unable to stringify";
} else {
throw e31616;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31619 = arguments.length;
switch (G__31619) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31617_SHARP_){
if(typeof p1__31617_SHARP_ === 'string'){
return p1__31617_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31617_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31622 = arguments.length;
var i__4731__auto___31623 = (0);
while(true){
if((i__4731__auto___31623 < len__4730__auto___31622)){
args__4736__auto__.push((arguments[i__4731__auto___31623]));

var G__31624 = (i__4731__auto___31623 + (1));
i__4731__auto___31623 = G__31624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31621){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31621));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31626 = arguments.length;
var i__4731__auto___31627 = (0);
while(true){
if((i__4731__auto___31627 < len__4730__auto___31626)){
args__4736__auto__.push((arguments[i__4731__auto___31627]));

var G__31628 = (i__4731__auto___31627 + (1));
i__4731__auto___31627 = G__31628;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31625){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31625));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31629){
var map__31630 = p__31629;
var map__31630__$1 = (((((!((map__31630 == null))))?(((((map__31630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31630):map__31630);
var message = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31630__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27624__auto___31709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___31709,ch){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___31709,ch){
return (function (state_31681){
var state_val_31682 = (state_31681[(1)]);
if((state_val_31682 === (7))){
var inst_31677 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31683_31710 = state_31681__$1;
(statearr_31683_31710[(2)] = inst_31677);

(statearr_31683_31710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (1))){
var state_31681__$1 = state_31681;
var statearr_31684_31711 = state_31681__$1;
(statearr_31684_31711[(2)] = null);

(statearr_31684_31711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (4))){
var inst_31634 = (state_31681[(7)]);
var inst_31634__$1 = (state_31681[(2)]);
var state_31681__$1 = (function (){var statearr_31685 = state_31681;
(statearr_31685[(7)] = inst_31634__$1);

return statearr_31685;
})();
if(cljs.core.truth_(inst_31634__$1)){
var statearr_31686_31712 = state_31681__$1;
(statearr_31686_31712[(1)] = (5));

} else {
var statearr_31687_31713 = state_31681__$1;
(statearr_31687_31713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (15))){
var inst_31641 = (state_31681[(8)]);
var inst_31656 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31641);
var inst_31657 = cljs.core.first.call(null,inst_31656);
var inst_31658 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31657);
var inst_31659 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31658)].join('');
var inst_31660 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31659);
var state_31681__$1 = state_31681;
var statearr_31688_31714 = state_31681__$1;
(statearr_31688_31714[(2)] = inst_31660);

(statearr_31688_31714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (13))){
var inst_31665 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31689_31715 = state_31681__$1;
(statearr_31689_31715[(2)] = inst_31665);

(statearr_31689_31715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (6))){
var state_31681__$1 = state_31681;
var statearr_31690_31716 = state_31681__$1;
(statearr_31690_31716[(2)] = null);

(statearr_31690_31716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (17))){
var inst_31663 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31691_31717 = state_31681__$1;
(statearr_31691_31717[(2)] = inst_31663);

(statearr_31691_31717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (3))){
var inst_31679 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31681__$1,inst_31679);
} else {
if((state_val_31682 === (12))){
var inst_31640 = (state_31681[(9)]);
var inst_31654 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31640,opts);
var state_31681__$1 = state_31681;
if(inst_31654){
var statearr_31692_31718 = state_31681__$1;
(statearr_31692_31718[(1)] = (15));

} else {
var statearr_31693_31719 = state_31681__$1;
(statearr_31693_31719[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (2))){
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31681__$1,(4),ch);
} else {
if((state_val_31682 === (11))){
var inst_31641 = (state_31681[(8)]);
var inst_31646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31647 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31641);
var inst_31648 = cljs.core.async.timeout.call(null,(1000));
var inst_31649 = [inst_31647,inst_31648];
var inst_31650 = (new cljs.core.PersistentVector(null,2,(5),inst_31646,inst_31649,null));
var state_31681__$1 = state_31681;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31681__$1,(14),inst_31650);
} else {
if((state_val_31682 === (9))){
var inst_31641 = (state_31681[(8)]);
var inst_31667 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31668 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31641);
var inst_31669 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31668);
var inst_31670 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31669)].join('');
var inst_31671 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31670);
var state_31681__$1 = (function (){var statearr_31694 = state_31681;
(statearr_31694[(10)] = inst_31667);

return statearr_31694;
})();
var statearr_31695_31720 = state_31681__$1;
(statearr_31695_31720[(2)] = inst_31671);

(statearr_31695_31720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (5))){
var inst_31634 = (state_31681[(7)]);
var inst_31636 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31637 = (new cljs.core.PersistentArrayMap(null,2,inst_31636,null));
var inst_31638 = (new cljs.core.PersistentHashSet(null,inst_31637,null));
var inst_31639 = figwheel.client.focus_msgs.call(null,inst_31638,inst_31634);
var inst_31640 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31639);
var inst_31641 = cljs.core.first.call(null,inst_31639);
var inst_31642 = figwheel.client.autoload_QMARK_.call(null);
var state_31681__$1 = (function (){var statearr_31696 = state_31681;
(statearr_31696[(8)] = inst_31641);

(statearr_31696[(9)] = inst_31640);

return statearr_31696;
})();
if(cljs.core.truth_(inst_31642)){
var statearr_31697_31721 = state_31681__$1;
(statearr_31697_31721[(1)] = (8));

} else {
var statearr_31698_31722 = state_31681__$1;
(statearr_31698_31722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (14))){
var inst_31652 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31699_31723 = state_31681__$1;
(statearr_31699_31723[(2)] = inst_31652);

(statearr_31699_31723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (16))){
var state_31681__$1 = state_31681;
var statearr_31700_31724 = state_31681__$1;
(statearr_31700_31724[(2)] = null);

(statearr_31700_31724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (10))){
var inst_31673 = (state_31681[(2)]);
var state_31681__$1 = (function (){var statearr_31701 = state_31681;
(statearr_31701[(11)] = inst_31673);

return statearr_31701;
})();
var statearr_31702_31725 = state_31681__$1;
(statearr_31702_31725[(2)] = null);

(statearr_31702_31725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (8))){
var inst_31640 = (state_31681[(9)]);
var inst_31644 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31640,opts);
var state_31681__$1 = state_31681;
if(cljs.core.truth_(inst_31644)){
var statearr_31703_31726 = state_31681__$1;
(statearr_31703_31726[(1)] = (11));

} else {
var statearr_31704_31727 = state_31681__$1;
(statearr_31704_31727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27624__auto___31709,ch))
;
return ((function (switch__27529__auto__,c__27624__auto___31709,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27530__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27530__auto____0 = (function (){
var statearr_31705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31705[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27530__auto__);

(statearr_31705[(1)] = (1));

return statearr_31705;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27530__auto____1 = (function (state_31681){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_31681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e31706){if((e31706 instanceof Object)){
var ex__27533__auto__ = e31706;
var statearr_31707_31728 = state_31681;
(statearr_31707_31728[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31729 = state_31681;
state_31681 = G__31729;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27530__auto__ = function(state_31681){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27530__auto____1.call(this,state_31681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27530__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27530__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___31709,ch))
})();
var state__27626__auto__ = (function (){var statearr_31708 = f__27625__auto__.call(null);
(statearr_31708[(6)] = c__27624__auto___31709);

return statearr_31708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___31709,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31730_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31730_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31736 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31736){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31732 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31733 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31734 = true;
var _STAR_print_fn_STAR__temp_val__31735 = ((function (_STAR_print_newline_STAR__orig_val__31732,_STAR_print_fn_STAR__orig_val__31733,_STAR_print_newline_STAR__temp_val__31734,sb,base_path_31736){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__31732,_STAR_print_fn_STAR__orig_val__31733,_STAR_print_newline_STAR__temp_val__31734,sb,base_path_31736))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31734;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31735;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31733;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31732;
}}catch (e31731){if((e31731 instanceof Error)){
var e = e31731;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31736], null));
} else {
var e = e31731;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31736))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31737){
var map__31738 = p__31737;
var map__31738__$1 = (((((!((map__31738 == null))))?(((((map__31738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31738):map__31738);
var opts = map__31738__$1;
var build_id = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31738,map__31738__$1,opts,build_id){
return (function (p__31740){
var vec__31741 = p__31740;
var seq__31742 = cljs.core.seq.call(null,vec__31741);
var first__31743 = cljs.core.first.call(null,seq__31742);
var seq__31742__$1 = cljs.core.next.call(null,seq__31742);
var map__31744 = first__31743;
var map__31744__$1 = (((((!((map__31744 == null))))?(((((map__31744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31744):map__31744);
var msg = map__31744__$1;
var msg_name = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31742__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31741,seq__31742,first__31743,seq__31742__$1,map__31744,map__31744__$1,msg,msg_name,_,map__31738,map__31738__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31741,seq__31742,first__31743,seq__31742__$1,map__31744,map__31744__$1,msg,msg_name,_,map__31738,map__31738__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31738,map__31738__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31746){
var vec__31747 = p__31746;
var seq__31748 = cljs.core.seq.call(null,vec__31747);
var first__31749 = cljs.core.first.call(null,seq__31748);
var seq__31748__$1 = cljs.core.next.call(null,seq__31748);
var map__31750 = first__31749;
var map__31750__$1 = (((((!((map__31750 == null))))?(((((map__31750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31750):map__31750);
var msg = map__31750__$1;
var msg_name = cljs.core.get.call(null,map__31750__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31748__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31752){
var map__31753 = p__31752;
var map__31753__$1 = (((((!((map__31753 == null))))?(((((map__31753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31753):map__31753);
var on_compile_warning = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31753__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31753,map__31753__$1,on_compile_warning,on_compile_fail){
return (function (p__31755){
var vec__31756 = p__31755;
var seq__31757 = cljs.core.seq.call(null,vec__31756);
var first__31758 = cljs.core.first.call(null,seq__31757);
var seq__31757__$1 = cljs.core.next.call(null,seq__31757);
var map__31759 = first__31758;
var map__31759__$1 = (((((!((map__31759 == null))))?(((((map__31759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31759):map__31759);
var msg = map__31759__$1;
var msg_name = cljs.core.get.call(null,map__31759__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31757__$1;
var pred__31761 = cljs.core._EQ_;
var expr__31762 = msg_name;
if(cljs.core.truth_(pred__31761.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31762))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31761.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31762))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31753,map__31753__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__,msg_hist,msg_names,msg){
return (function (state_31851){
var state_val_31852 = (state_31851[(1)]);
if((state_val_31852 === (7))){
var inst_31771 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31771)){
var statearr_31853_31900 = state_31851__$1;
(statearr_31853_31900[(1)] = (8));

} else {
var statearr_31854_31901 = state_31851__$1;
(statearr_31854_31901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (20))){
var inst_31845 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31855_31902 = state_31851__$1;
(statearr_31855_31902[(2)] = inst_31845);

(statearr_31855_31902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (27))){
var inst_31841 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31856_31903 = state_31851__$1;
(statearr_31856_31903[(2)] = inst_31841);

(statearr_31856_31903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (1))){
var inst_31764 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31764)){
var statearr_31857_31904 = state_31851__$1;
(statearr_31857_31904[(1)] = (2));

} else {
var statearr_31858_31905 = state_31851__$1;
(statearr_31858_31905[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (24))){
var inst_31843 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31859_31906 = state_31851__$1;
(statearr_31859_31906[(2)] = inst_31843);

(statearr_31859_31906[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (4))){
var inst_31849 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31851__$1,inst_31849);
} else {
if((state_val_31852 === (15))){
var inst_31847 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31860_31907 = state_31851__$1;
(statearr_31860_31907[(2)] = inst_31847);

(statearr_31860_31907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (21))){
var inst_31800 = (state_31851[(2)]);
var inst_31801 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31802 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31801);
var state_31851__$1 = (function (){var statearr_31861 = state_31851;
(statearr_31861[(7)] = inst_31800);

return statearr_31861;
})();
var statearr_31862_31908 = state_31851__$1;
(statearr_31862_31908[(2)] = inst_31802);

(statearr_31862_31908[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (31))){
var inst_31830 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31851__$1 = state_31851;
if(inst_31830){
var statearr_31863_31909 = state_31851__$1;
(statearr_31863_31909[(1)] = (34));

} else {
var statearr_31864_31910 = state_31851__$1;
(statearr_31864_31910[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (32))){
var inst_31839 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31865_31911 = state_31851__$1;
(statearr_31865_31911[(2)] = inst_31839);

(statearr_31865_31911[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (33))){
var inst_31826 = (state_31851[(2)]);
var inst_31827 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31828 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31827);
var state_31851__$1 = (function (){var statearr_31866 = state_31851;
(statearr_31866[(8)] = inst_31826);

return statearr_31866;
})();
var statearr_31867_31912 = state_31851__$1;
(statearr_31867_31912[(2)] = inst_31828);

(statearr_31867_31912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (13))){
var inst_31785 = figwheel.client.heads_up.clear.call(null);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(16),inst_31785);
} else {
if((state_val_31852 === (22))){
var inst_31806 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31807 = figwheel.client.heads_up.append_warning_message.call(null,inst_31806);
var state_31851__$1 = state_31851;
var statearr_31868_31913 = state_31851__$1;
(statearr_31868_31913[(2)] = inst_31807);

(statearr_31868_31913[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (36))){
var inst_31837 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31869_31914 = state_31851__$1;
(statearr_31869_31914[(2)] = inst_31837);

(statearr_31869_31914[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (29))){
var inst_31817 = (state_31851[(2)]);
var inst_31818 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31819 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31818);
var state_31851__$1 = (function (){var statearr_31870 = state_31851;
(statearr_31870[(9)] = inst_31817);

return statearr_31870;
})();
var statearr_31871_31915 = state_31851__$1;
(statearr_31871_31915[(2)] = inst_31819);

(statearr_31871_31915[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (6))){
var inst_31766 = (state_31851[(10)]);
var state_31851__$1 = state_31851;
var statearr_31872_31916 = state_31851__$1;
(statearr_31872_31916[(2)] = inst_31766);

(statearr_31872_31916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (28))){
var inst_31813 = (state_31851[(2)]);
var inst_31814 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31815 = figwheel.client.heads_up.display_warning.call(null,inst_31814);
var state_31851__$1 = (function (){var statearr_31873 = state_31851;
(statearr_31873[(11)] = inst_31813);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(29),inst_31815);
} else {
if((state_val_31852 === (25))){
var inst_31811 = figwheel.client.heads_up.clear.call(null);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(28),inst_31811);
} else {
if((state_val_31852 === (34))){
var inst_31832 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(37),inst_31832);
} else {
if((state_val_31852 === (17))){
var inst_31791 = (state_31851[(2)]);
var inst_31792 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31793 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31792);
var state_31851__$1 = (function (){var statearr_31874 = state_31851;
(statearr_31874[(12)] = inst_31791);

return statearr_31874;
})();
var statearr_31875_31917 = state_31851__$1;
(statearr_31875_31917[(2)] = inst_31793);

(statearr_31875_31917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (3))){
var inst_31783 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31851__$1 = state_31851;
if(inst_31783){
var statearr_31876_31918 = state_31851__$1;
(statearr_31876_31918[(1)] = (13));

} else {
var statearr_31877_31919 = state_31851__$1;
(statearr_31877_31919[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (12))){
var inst_31779 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31878_31920 = state_31851__$1;
(statearr_31878_31920[(2)] = inst_31779);

(statearr_31878_31920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (2))){
var inst_31766 = (state_31851[(10)]);
var inst_31766__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31851__$1 = (function (){var statearr_31879 = state_31851;
(statearr_31879[(10)] = inst_31766__$1);

return statearr_31879;
})();
if(cljs.core.truth_(inst_31766__$1)){
var statearr_31880_31921 = state_31851__$1;
(statearr_31880_31921[(1)] = (5));

} else {
var statearr_31881_31922 = state_31851__$1;
(statearr_31881_31922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (23))){
var inst_31809 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31851__$1 = state_31851;
if(inst_31809){
var statearr_31882_31923 = state_31851__$1;
(statearr_31882_31923[(1)] = (25));

} else {
var statearr_31883_31924 = state_31851__$1;
(statearr_31883_31924[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (35))){
var state_31851__$1 = state_31851;
var statearr_31884_31925 = state_31851__$1;
(statearr_31884_31925[(2)] = null);

(statearr_31884_31925[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (19))){
var inst_31804 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31851__$1 = state_31851;
if(inst_31804){
var statearr_31885_31926 = state_31851__$1;
(statearr_31885_31926[(1)] = (22));

} else {
var statearr_31886_31927 = state_31851__$1;
(statearr_31886_31927[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (11))){
var inst_31775 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31887_31928 = state_31851__$1;
(statearr_31887_31928[(2)] = inst_31775);

(statearr_31887_31928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (9))){
var inst_31777 = figwheel.client.heads_up.clear.call(null);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(12),inst_31777);
} else {
if((state_val_31852 === (5))){
var inst_31768 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31851__$1 = state_31851;
var statearr_31888_31929 = state_31851__$1;
(statearr_31888_31929[(2)] = inst_31768);

(statearr_31888_31929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (14))){
var inst_31795 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31851__$1 = state_31851;
if(inst_31795){
var statearr_31889_31930 = state_31851__$1;
(statearr_31889_31930[(1)] = (18));

} else {
var statearr_31890_31931 = state_31851__$1;
(statearr_31890_31931[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (26))){
var inst_31821 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31851__$1 = state_31851;
if(inst_31821){
var statearr_31891_31932 = state_31851__$1;
(statearr_31891_31932[(1)] = (30));

} else {
var statearr_31892_31933 = state_31851__$1;
(statearr_31892_31933[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (16))){
var inst_31787 = (state_31851[(2)]);
var inst_31788 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31789 = figwheel.client.heads_up.display_exception.call(null,inst_31788);
var state_31851__$1 = (function (){var statearr_31893 = state_31851;
(statearr_31893[(13)] = inst_31787);

return statearr_31893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(17),inst_31789);
} else {
if((state_val_31852 === (30))){
var inst_31823 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31824 = figwheel.client.heads_up.display_warning.call(null,inst_31823);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(33),inst_31824);
} else {
if((state_val_31852 === (10))){
var inst_31781 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31894_31934 = state_31851__$1;
(statearr_31894_31934[(2)] = inst_31781);

(statearr_31894_31934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (18))){
var inst_31797 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31798 = figwheel.client.heads_up.display_exception.call(null,inst_31797);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(21),inst_31798);
} else {
if((state_val_31852 === (37))){
var inst_31834 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31895_31935 = state_31851__$1;
(statearr_31895_31935[(2)] = inst_31834);

(statearr_31895_31935[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (8))){
var inst_31773 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(11),inst_31773);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27624__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27529__auto__,c__27624__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto____0 = (function (){
var statearr_31896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31896[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto__);

(statearr_31896[(1)] = (1));

return statearr_31896;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto____1 = (function (state_31851){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_31851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e31897){if((e31897 instanceof Object)){
var ex__27533__auto__ = e31897;
var statearr_31898_31936 = state_31851;
(statearr_31898_31936[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31937 = state_31851;
state_31851 = G__31937;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__,msg_hist,msg_names,msg))
})();
var state__27626__auto__ = (function (){var statearr_31899 = f__27625__auto__.call(null);
(statearr_31899[(6)] = c__27624__auto__);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__,msg_hist,msg_names,msg))
);

return c__27624__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27624__auto___31966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___31966,ch){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___31966,ch){
return (function (state_31952){
var state_val_31953 = (state_31952[(1)]);
if((state_val_31953 === (1))){
var state_31952__$1 = state_31952;
var statearr_31954_31967 = state_31952__$1;
(statearr_31954_31967[(2)] = null);

(statearr_31954_31967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (2))){
var state_31952__$1 = state_31952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31952__$1,(4),ch);
} else {
if((state_val_31953 === (3))){
var inst_31950 = (state_31952[(2)]);
var state_31952__$1 = state_31952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31952__$1,inst_31950);
} else {
if((state_val_31953 === (4))){
var inst_31940 = (state_31952[(7)]);
var inst_31940__$1 = (state_31952[(2)]);
var state_31952__$1 = (function (){var statearr_31955 = state_31952;
(statearr_31955[(7)] = inst_31940__$1);

return statearr_31955;
})();
if(cljs.core.truth_(inst_31940__$1)){
var statearr_31956_31968 = state_31952__$1;
(statearr_31956_31968[(1)] = (5));

} else {
var statearr_31957_31969 = state_31952__$1;
(statearr_31957_31969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (5))){
var inst_31940 = (state_31952[(7)]);
var inst_31942 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31940);
var state_31952__$1 = state_31952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31952__$1,(8),inst_31942);
} else {
if((state_val_31953 === (6))){
var state_31952__$1 = state_31952;
var statearr_31958_31970 = state_31952__$1;
(statearr_31958_31970[(2)] = null);

(statearr_31958_31970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (7))){
var inst_31948 = (state_31952[(2)]);
var state_31952__$1 = state_31952;
var statearr_31959_31971 = state_31952__$1;
(statearr_31959_31971[(2)] = inst_31948);

(statearr_31959_31971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31953 === (8))){
var inst_31944 = (state_31952[(2)]);
var state_31952__$1 = (function (){var statearr_31960 = state_31952;
(statearr_31960[(8)] = inst_31944);

return statearr_31960;
})();
var statearr_31961_31972 = state_31952__$1;
(statearr_31961_31972[(2)] = null);

(statearr_31961_31972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27624__auto___31966,ch))
;
return ((function (switch__27529__auto__,c__27624__auto___31966,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27530__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27530__auto____0 = (function (){
var statearr_31962 = [null,null,null,null,null,null,null,null,null];
(statearr_31962[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27530__auto__);

(statearr_31962[(1)] = (1));

return statearr_31962;
});
var figwheel$client$heads_up_plugin_$_state_machine__27530__auto____1 = (function (state_31952){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_31952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e31963){if((e31963 instanceof Object)){
var ex__27533__auto__ = e31963;
var statearr_31964_31973 = state_31952;
(statearr_31964_31973[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31974 = state_31952;
state_31952 = G__31974;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27530__auto__ = function(state_31952){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27530__auto____1.call(this,state_31952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27530__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27530__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___31966,ch))
})();
var state__27626__auto__ = (function (){var statearr_31965 = f__27625__auto__.call(null);
(statearr_31965[(6)] = c__27624__auto___31966);

return statearr_31965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___31966,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__){
return (function (state_31980){
var state_val_31981 = (state_31980[(1)]);
if((state_val_31981 === (1))){
var inst_31975 = cljs.core.async.timeout.call(null,(3000));
var state_31980__$1 = state_31980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31980__$1,(2),inst_31975);
} else {
if((state_val_31981 === (2))){
var inst_31977 = (state_31980[(2)]);
var inst_31978 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31980__$1 = (function (){var statearr_31982 = state_31980;
(statearr_31982[(7)] = inst_31977);

return statearr_31982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31980__$1,inst_31978);
} else {
return null;
}
}
});})(c__27624__auto__))
;
return ((function (switch__27529__auto__,c__27624__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27530__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27530__auto____0 = (function (){
var statearr_31983 = [null,null,null,null,null,null,null,null];
(statearr_31983[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27530__auto__);

(statearr_31983[(1)] = (1));

return statearr_31983;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27530__auto____1 = (function (state_31980){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_31980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e31984){if((e31984 instanceof Object)){
var ex__27533__auto__ = e31984;
var statearr_31985_31987 = state_31980;
(statearr_31985_31987[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31988 = state_31980;
state_31980 = G__31988;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27530__auto__ = function(state_31980){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27530__auto____1.call(this,state_31980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27530__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27530__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__))
})();
var state__27626__auto__ = (function (){var statearr_31986 = f__27625__auto__.call(null);
(statearr_31986[(6)] = c__27624__auto__);

return statearr_31986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__))
);

return c__27624__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__,figwheel_version,temp__5720__auto__){
return (function (state_31995){
var state_val_31996 = (state_31995[(1)]);
if((state_val_31996 === (1))){
var inst_31989 = cljs.core.async.timeout.call(null,(2000));
var state_31995__$1 = state_31995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31995__$1,(2),inst_31989);
} else {
if((state_val_31996 === (2))){
var inst_31991 = (state_31995[(2)]);
var inst_31992 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31993 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31992);
var state_31995__$1 = (function (){var statearr_31997 = state_31995;
(statearr_31997[(7)] = inst_31991);

return statearr_31997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31995__$1,inst_31993);
} else {
return null;
}
}
});})(c__27624__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__27529__auto__,c__27624__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto____0 = (function (){
var statearr_31998 = [null,null,null,null,null,null,null,null];
(statearr_31998[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto__);

(statearr_31998[(1)] = (1));

return statearr_31998;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto____1 = (function (state_31995){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_31995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e31999){if((e31999 instanceof Object)){
var ex__27533__auto__ = e31999;
var statearr_32000_32002 = state_31995;
(statearr_32000_32002[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32003 = state_31995;
state_31995 = G__32003;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto__ = function(state_31995){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto____1.call(this,state_31995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__,figwheel_version,temp__5720__auto__))
})();
var state__27626__auto__ = (function (){var statearr_32001 = f__27625__auto__.call(null);
(statearr_32001[(6)] = c__27624__auto__);

return statearr_32001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__,figwheel_version,temp__5720__auto__))
);

return c__27624__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32004){
var map__32005 = p__32004;
var map__32005__$1 = (((((!((map__32005 == null))))?(((((map__32005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32005):map__32005);
var file = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32007 = "";
var G__32007__$1 = (cljs.core.truth_(file)?[G__32007,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32007);
var G__32007__$2 = (cljs.core.truth_(line)?[G__32007__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32007__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__32007__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32007__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32008){
var map__32009 = p__32008;
var map__32009__$1 = (((((!((map__32009 == null))))?(((((map__32009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32009):map__32009);
var ed = map__32009__$1;
var exception_data = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32012 = (function (){var G__32011 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32011)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32011;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32012);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32013){
var map__32014 = p__32013;
var map__32014__$1 = (((((!((map__32014 == null))))?(((((map__32014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32014):map__32014);
var w = map__32014__$1;
var message = cljs.core.get.call(null,map__32014__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32016 = cljs.core.seq.call(null,plugins);
var chunk__32017 = null;
var count__32018 = (0);
var i__32019 = (0);
while(true){
if((i__32019 < count__32018)){
var vec__32026 = cljs.core._nth.call(null,chunk__32017,i__32019);
var k = cljs.core.nth.call(null,vec__32026,(0),null);
var plugin = cljs.core.nth.call(null,vec__32026,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32032 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32016,chunk__32017,count__32018,i__32019,pl_32032,vec__32026,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32032.call(null,msg_hist);
});})(seq__32016,chunk__32017,count__32018,i__32019,pl_32032,vec__32026,k,plugin))
);
} else {
}


var G__32033 = seq__32016;
var G__32034 = chunk__32017;
var G__32035 = count__32018;
var G__32036 = (i__32019 + (1));
seq__32016 = G__32033;
chunk__32017 = G__32034;
count__32018 = G__32035;
i__32019 = G__32036;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32016);
if(temp__5720__auto__){
var seq__32016__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32016__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32016__$1);
var G__32037 = cljs.core.chunk_rest.call(null,seq__32016__$1);
var G__32038 = c__4550__auto__;
var G__32039 = cljs.core.count.call(null,c__4550__auto__);
var G__32040 = (0);
seq__32016 = G__32037;
chunk__32017 = G__32038;
count__32018 = G__32039;
i__32019 = G__32040;
continue;
} else {
var vec__32029 = cljs.core.first.call(null,seq__32016__$1);
var k = cljs.core.nth.call(null,vec__32029,(0),null);
var plugin = cljs.core.nth.call(null,vec__32029,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32041 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32016,chunk__32017,count__32018,i__32019,pl_32041,vec__32029,k,plugin,seq__32016__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32041.call(null,msg_hist);
});})(seq__32016,chunk__32017,count__32018,i__32019,pl_32041,vec__32029,k,plugin,seq__32016__$1,temp__5720__auto__))
);
} else {
}


var G__32042 = cljs.core.next.call(null,seq__32016__$1);
var G__32043 = null;
var G__32044 = (0);
var G__32045 = (0);
seq__32016 = G__32042;
chunk__32017 = G__32043;
count__32018 = G__32044;
i__32019 = G__32045;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32047 = arguments.length;
switch (G__32047) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32048_32053 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32049_32054 = null;
var count__32050_32055 = (0);
var i__32051_32056 = (0);
while(true){
if((i__32051_32056 < count__32050_32055)){
var msg_32057 = cljs.core._nth.call(null,chunk__32049_32054,i__32051_32056);
figwheel.client.socket.handle_incoming_message.call(null,msg_32057);


var G__32058 = seq__32048_32053;
var G__32059 = chunk__32049_32054;
var G__32060 = count__32050_32055;
var G__32061 = (i__32051_32056 + (1));
seq__32048_32053 = G__32058;
chunk__32049_32054 = G__32059;
count__32050_32055 = G__32060;
i__32051_32056 = G__32061;
continue;
} else {
var temp__5720__auto___32062 = cljs.core.seq.call(null,seq__32048_32053);
if(temp__5720__auto___32062){
var seq__32048_32063__$1 = temp__5720__auto___32062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32048_32063__$1)){
var c__4550__auto___32064 = cljs.core.chunk_first.call(null,seq__32048_32063__$1);
var G__32065 = cljs.core.chunk_rest.call(null,seq__32048_32063__$1);
var G__32066 = c__4550__auto___32064;
var G__32067 = cljs.core.count.call(null,c__4550__auto___32064);
var G__32068 = (0);
seq__32048_32053 = G__32065;
chunk__32049_32054 = G__32066;
count__32050_32055 = G__32067;
i__32051_32056 = G__32068;
continue;
} else {
var msg_32069 = cljs.core.first.call(null,seq__32048_32063__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32069);


var G__32070 = cljs.core.next.call(null,seq__32048_32063__$1);
var G__32071 = null;
var G__32072 = (0);
var G__32073 = (0);
seq__32048_32053 = G__32070;
chunk__32049_32054 = G__32071;
count__32050_32055 = G__32072;
i__32051_32056 = G__32073;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32078 = arguments.length;
var i__4731__auto___32079 = (0);
while(true){
if((i__4731__auto___32079 < len__4730__auto___32078)){
args__4736__auto__.push((arguments[i__4731__auto___32079]));

var G__32080 = (i__4731__auto___32079 + (1));
i__4731__auto___32079 = G__32080;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32075){
var map__32076 = p__32075;
var map__32076__$1 = (((((!((map__32076 == null))))?(((((map__32076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32076):map__32076);
var opts = map__32076__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32074){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32074));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32081){if((e32081 instanceof Error)){
var e = e32081;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32081;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32082){
var map__32083 = p__32082;
var map__32083__$1 = (((((!((map__32083 == null))))?(((((map__32083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32083):map__32083);
var msg_name = cljs.core.get.call(null,map__32083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1557276014705
