// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31269){
var map__31270 = p__31269;
var map__31270__$1 = (((((!((map__31270 == null))))?(((((map__31270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31270):map__31270);
var m = map__31270__$1;
var n = cljs.core.get.call(null,map__31270__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31270__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31272_31304 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31273_31305 = null;
var count__31274_31306 = (0);
var i__31275_31307 = (0);
while(true){
if((i__31275_31307 < count__31274_31306)){
var f_31308 = cljs.core._nth.call(null,chunk__31273_31305,i__31275_31307);
cljs.core.println.call(null,"  ",f_31308);


var G__31309 = seq__31272_31304;
var G__31310 = chunk__31273_31305;
var G__31311 = count__31274_31306;
var G__31312 = (i__31275_31307 + (1));
seq__31272_31304 = G__31309;
chunk__31273_31305 = G__31310;
count__31274_31306 = G__31311;
i__31275_31307 = G__31312;
continue;
} else {
var temp__5720__auto___31313 = cljs.core.seq.call(null,seq__31272_31304);
if(temp__5720__auto___31313){
var seq__31272_31314__$1 = temp__5720__auto___31313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31272_31314__$1)){
var c__4550__auto___31315 = cljs.core.chunk_first.call(null,seq__31272_31314__$1);
var G__31316 = cljs.core.chunk_rest.call(null,seq__31272_31314__$1);
var G__31317 = c__4550__auto___31315;
var G__31318 = cljs.core.count.call(null,c__4550__auto___31315);
var G__31319 = (0);
seq__31272_31304 = G__31316;
chunk__31273_31305 = G__31317;
count__31274_31306 = G__31318;
i__31275_31307 = G__31319;
continue;
} else {
var f_31320 = cljs.core.first.call(null,seq__31272_31314__$1);
cljs.core.println.call(null,"  ",f_31320);


var G__31321 = cljs.core.next.call(null,seq__31272_31314__$1);
var G__31322 = null;
var G__31323 = (0);
var G__31324 = (0);
seq__31272_31304 = G__31321;
chunk__31273_31305 = G__31322;
count__31274_31306 = G__31323;
i__31275_31307 = G__31324;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31325 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31325);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31325)))?cljs.core.second.call(null,arglists_31325):arglists_31325));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31276_31326 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31277_31327 = null;
var count__31278_31328 = (0);
var i__31279_31329 = (0);
while(true){
if((i__31279_31329 < count__31278_31328)){
var vec__31290_31330 = cljs.core._nth.call(null,chunk__31277_31327,i__31279_31329);
var name_31331 = cljs.core.nth.call(null,vec__31290_31330,(0),null);
var map__31293_31332 = cljs.core.nth.call(null,vec__31290_31330,(1),null);
var map__31293_31333__$1 = (((((!((map__31293_31332 == null))))?(((((map__31293_31332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31293_31332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31293_31332):map__31293_31332);
var doc_31334 = cljs.core.get.call(null,map__31293_31333__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31335 = cljs.core.get.call(null,map__31293_31333__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31331);

cljs.core.println.call(null," ",arglists_31335);

if(cljs.core.truth_(doc_31334)){
cljs.core.println.call(null," ",doc_31334);
} else {
}


var G__31336 = seq__31276_31326;
var G__31337 = chunk__31277_31327;
var G__31338 = count__31278_31328;
var G__31339 = (i__31279_31329 + (1));
seq__31276_31326 = G__31336;
chunk__31277_31327 = G__31337;
count__31278_31328 = G__31338;
i__31279_31329 = G__31339;
continue;
} else {
var temp__5720__auto___31340 = cljs.core.seq.call(null,seq__31276_31326);
if(temp__5720__auto___31340){
var seq__31276_31341__$1 = temp__5720__auto___31340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31276_31341__$1)){
var c__4550__auto___31342 = cljs.core.chunk_first.call(null,seq__31276_31341__$1);
var G__31343 = cljs.core.chunk_rest.call(null,seq__31276_31341__$1);
var G__31344 = c__4550__auto___31342;
var G__31345 = cljs.core.count.call(null,c__4550__auto___31342);
var G__31346 = (0);
seq__31276_31326 = G__31343;
chunk__31277_31327 = G__31344;
count__31278_31328 = G__31345;
i__31279_31329 = G__31346;
continue;
} else {
var vec__31295_31347 = cljs.core.first.call(null,seq__31276_31341__$1);
var name_31348 = cljs.core.nth.call(null,vec__31295_31347,(0),null);
var map__31298_31349 = cljs.core.nth.call(null,vec__31295_31347,(1),null);
var map__31298_31350__$1 = (((((!((map__31298_31349 == null))))?(((((map__31298_31349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31298_31349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31298_31349):map__31298_31349);
var doc_31351 = cljs.core.get.call(null,map__31298_31350__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31352 = cljs.core.get.call(null,map__31298_31350__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31348);

cljs.core.println.call(null," ",arglists_31352);

if(cljs.core.truth_(doc_31351)){
cljs.core.println.call(null," ",doc_31351);
} else {
}


var G__31353 = cljs.core.next.call(null,seq__31276_31341__$1);
var G__31354 = null;
var G__31355 = (0);
var G__31356 = (0);
seq__31276_31326 = G__31353;
chunk__31277_31327 = G__31354;
count__31278_31328 = G__31355;
i__31279_31329 = G__31356;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__31300 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31301 = null;
var count__31302 = (0);
var i__31303 = (0);
while(true){
if((i__31303 < count__31302)){
var role = cljs.core._nth.call(null,chunk__31301,i__31303);
var temp__5720__auto___31357__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31357__$1)){
var spec_31358 = temp__5720__auto___31357__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31358));
} else {
}


var G__31359 = seq__31300;
var G__31360 = chunk__31301;
var G__31361 = count__31302;
var G__31362 = (i__31303 + (1));
seq__31300 = G__31359;
chunk__31301 = G__31360;
count__31302 = G__31361;
i__31303 = G__31362;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__31300);
if(temp__5720__auto____$1){
var seq__31300__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31300__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31300__$1);
var G__31363 = cljs.core.chunk_rest.call(null,seq__31300__$1);
var G__31364 = c__4550__auto__;
var G__31365 = cljs.core.count.call(null,c__4550__auto__);
var G__31366 = (0);
seq__31300 = G__31363;
chunk__31301 = G__31364;
count__31302 = G__31365;
i__31303 = G__31366;
continue;
} else {
var role = cljs.core.first.call(null,seq__31300__$1);
var temp__5720__auto___31367__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31367__$2)){
var spec_31368 = temp__5720__auto___31367__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31368));
} else {
}


var G__31369 = cljs.core.next.call(null,seq__31300__$1);
var G__31370 = null;
var G__31371 = (0);
var G__31372 = (0);
seq__31300 = G__31369;
chunk__31301 = G__31370;
count__31302 = G__31371;
i__31303 = G__31372;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31373 = cljs.core.conj.call(null,via,t);
var G__31374 = cljs.core.ex_cause.call(null,t);
via = G__31373;
t = G__31374;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31377 = datafied_throwable;
var map__31377__$1 = (((((!((map__31377 == null))))?(((((map__31377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31377):map__31377);
var via = cljs.core.get.call(null,map__31377__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31377__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31377__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31378 = cljs.core.last.call(null,via);
var map__31378__$1 = (((((!((map__31378 == null))))?(((((map__31378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31378):map__31378);
var type = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31378__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31379 = data;
var map__31379__$1 = (((((!((map__31379 == null))))?(((((map__31379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31379):map__31379);
var problems = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31379__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31380 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31380__$1 = (((((!((map__31380 == null))))?(((((map__31380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31380):map__31380);
var top_data = map__31380__$1;
var source = cljs.core.get.call(null,map__31380__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31385 = phase;
var G__31385__$1 = (((G__31385 instanceof cljs.core.Keyword))?G__31385.fqn:null);
switch (G__31385__$1) {
case "read-source":
var map__31386 = data;
var map__31386__$1 = (((((!((map__31386 == null))))?(((((map__31386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31386):map__31386);
var line = cljs.core.get.call(null,map__31386__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31386__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31388 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31388__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31388,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31388);
var G__31388__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31388__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31388__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31388__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31389 = top_data;
var G__31389__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31389,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31389);
var G__31389__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31389__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31389__$1);
var G__31389__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31389__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31389__$2);
var G__31389__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31389__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31389__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31389__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31389__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31390 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31390,(0),null);
var method = cljs.core.nth.call(null,vec__31390,(1),null);
var file = cljs.core.nth.call(null,vec__31390,(2),null);
var line = cljs.core.nth.call(null,vec__31390,(3),null);
var G__31393 = top_data;
var G__31393__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31393,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31393);
var G__31393__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31393__$1);
var G__31393__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__31393__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31393__$2);
var G__31393__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31393__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31393__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31393__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31393__$4;
}

break;
case "execution":
var vec__31394 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31394,(0),null);
var method = cljs.core.nth.call(null,vec__31394,(1),null);
var file = cljs.core.nth.call(null,vec__31394,(2),null);
var line = cljs.core.nth.call(null,vec__31394,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__31394,source__$1,method,file,line,G__31385,G__31385__$1,map__31377,map__31377__$1,via,trace,phase,map__31378,map__31378__$1,type,message,data,map__31379,map__31379__$1,problems,fn,caller,map__31380,map__31380__$1,top_data,source){
return (function (p1__31376_SHARP_){
var or__4131__auto__ = (p1__31376_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31376_SHARP_);
}
});})(vec__31394,source__$1,method,file,line,G__31385,G__31385__$1,map__31377,map__31377__$1,via,trace,phase,map__31378,map__31378__$1,type,message,data,map__31379,map__31379__$1,problems,fn,caller,map__31380,map__31380__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31397 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31397__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31397,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31397);
var G__31397__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31397__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31397__$1);
var G__31397__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31397__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31397__$2);
var G__31397__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31397__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31397__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31397__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31397__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31385__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31401){
var map__31402 = p__31401;
var map__31402__$1 = (((((!((map__31402 == null))))?(((((map__31402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31402):map__31402);
var triage_data = map__31402__$1;
var phase = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31404 = phase;
var G__31404__$1 = (((G__31404 instanceof cljs.core.Keyword))?G__31404.fqn:null);
switch (G__31404__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31405_31414 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31406_31415 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31407_31416 = true;
var _STAR_print_fn_STAR__temp_val__31408_31417 = ((function (_STAR_print_newline_STAR__orig_val__31405_31414,_STAR_print_fn_STAR__orig_val__31406_31415,_STAR_print_newline_STAR__temp_val__31407_31416,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31405_31414,_STAR_print_fn_STAR__orig_val__31406_31415,_STAR_print_newline_STAR__temp_val__31407_31416,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31407_31416;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31408_31417;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31405_31414,_STAR_print_fn_STAR__orig_val__31406_31415,_STAR_print_newline_STAR__temp_val__31407_31416,_STAR_print_fn_STAR__temp_val__31408_31417,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31405_31414,_STAR_print_fn_STAR__orig_val__31406_31415,_STAR_print_newline_STAR__temp_val__31407_31416,_STAR_print_fn_STAR__temp_val__31408_31417,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31399_SHARP_){
return cljs.core.dissoc.call(null,p1__31399_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31405_31414,_STAR_print_fn_STAR__orig_val__31406_31415,_STAR_print_newline_STAR__temp_val__31407_31416,_STAR_print_fn_STAR__temp_val__31408_31417,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31405_31414,_STAR_print_fn_STAR__orig_val__31406_31415,_STAR_print_newline_STAR__temp_val__31407_31416,_STAR_print_fn_STAR__temp_val__31408_31417,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31406_31415;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31405_31414;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31409_31418 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31410_31419 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31411_31420 = true;
var _STAR_print_fn_STAR__temp_val__31412_31421 = ((function (_STAR_print_newline_STAR__orig_val__31409_31418,_STAR_print_fn_STAR__orig_val__31410_31419,_STAR_print_newline_STAR__temp_val__31411_31420,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31409_31418,_STAR_print_fn_STAR__orig_val__31410_31419,_STAR_print_newline_STAR__temp_val__31411_31420,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31411_31420;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31412_31421;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31409_31418,_STAR_print_fn_STAR__orig_val__31410_31419,_STAR_print_newline_STAR__temp_val__31411_31420,_STAR_print_fn_STAR__temp_val__31412_31421,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31409_31418,_STAR_print_fn_STAR__orig_val__31410_31419,_STAR_print_newline_STAR__temp_val__31411_31420,_STAR_print_fn_STAR__temp_val__31412_31421,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31400_SHARP_){
return cljs.core.dissoc.call(null,p1__31400_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31409_31418,_STAR_print_fn_STAR__orig_val__31410_31419,_STAR_print_newline_STAR__temp_val__31411_31420,_STAR_print_fn_STAR__temp_val__31412_31421,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31409_31418,_STAR_print_fn_STAR__orig_val__31410_31419,_STAR_print_newline_STAR__temp_val__31411_31420,_STAR_print_fn_STAR__temp_val__31412_31421,sb__4661__auto__,G__31404,G__31404__$1,loc,class_name,simple_class,cause_type,format,map__31402,map__31402__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31410_31419;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31409_31418;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31404__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1557276014303
