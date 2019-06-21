// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20929__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20930__i = 0, G__20930__a = new Array(arguments.length -  0);
while (G__20930__i < G__20930__a.length) {G__20930__a[G__20930__i] = arguments[G__20930__i + 0]; ++G__20930__i;}
  args = new cljs.core.IndexedSeq(G__20930__a,0,null);
} 
return G__20929__delegate.call(this,args);};
G__20929.cljs$lang$maxFixedArity = 0;
G__20929.cljs$lang$applyTo = (function (arglist__20931){
var args = cljs.core.seq(arglist__20931);
return G__20929__delegate(args);
});
G__20929.cljs$core$IFn$_invoke$arity$variadic = G__20929__delegate;
return G__20929;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20932__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20933__i = 0, G__20933__a = new Array(arguments.length -  0);
while (G__20933__i < G__20933__a.length) {G__20933__a[G__20933__i] = arguments[G__20933__i + 0]; ++G__20933__i;}
  args = new cljs.core.IndexedSeq(G__20933__a,0,null);
} 
return G__20932__delegate.call(this,args);};
G__20932.cljs$lang$maxFixedArity = 0;
G__20932.cljs$lang$applyTo = (function (arglist__20934){
var args = cljs.core.seq(arglist__20934);
return G__20932__delegate(args);
});
G__20932.cljs$core$IFn$_invoke$arity$variadic = G__20932__delegate;
return G__20932;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1557276004310
