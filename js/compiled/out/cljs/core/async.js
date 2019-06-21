// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27684 = arguments.length;
switch (G__27684) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27685 = (function (f,blockable,meta27686){
this.f = f;
this.blockable = blockable;
this.meta27686 = meta27686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27687,meta27686__$1){
var self__ = this;
var _27687__$1 = this;
return (new cljs.core.async.t_cljs$core$async27685(self__.f,self__.blockable,meta27686__$1));
});

cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27687){
var self__ = this;
var _27687__$1 = this;
return self__.meta27686;
});

cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27686","meta27686",-881032349,null)], null);
});

cljs.core.async.t_cljs$core$async27685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27685";

cljs.core.async.t_cljs$core$async27685.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27685");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27685.
 */
cljs.core.async.__GT_t_cljs$core$async27685 = (function cljs$core$async$__GT_t_cljs$core$async27685(f__$1,blockable__$1,meta27686){
return (new cljs.core.async.t_cljs$core$async27685(f__$1,blockable__$1,meta27686));
});

}

return (new cljs.core.async.t_cljs$core$async27685(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27691 = arguments.length;
switch (G__27691) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27694 = arguments.length;
switch (G__27694) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27697 = arguments.length;
switch (G__27697) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27699 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27699);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27699,ret){
return (function (){
return fn1.call(null,val_27699);
});})(val_27699,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27701 = arguments.length;
switch (G__27701) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___27703 = n;
var x_27704 = (0);
while(true){
if((x_27704 < n__4607__auto___27703)){
(a[x_27704] = (0));

var G__27705 = (x_27704 + (1));
x_27704 = G__27705;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27706 = (i + (1));
i = G__27706;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27707 = (function (flag,meta27708){
this.flag = flag;
this.meta27708 = meta27708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27709,meta27708__$1){
var self__ = this;
var _27709__$1 = this;
return (new cljs.core.async.t_cljs$core$async27707(self__.flag,meta27708__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27709){
var self__ = this;
var _27709__$1 = this;
return self__.meta27708;
});})(flag))
;

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27707.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27708","meta27708",1800936663,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27707";

cljs.core.async.t_cljs$core$async27707.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27707");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27707.
 */
cljs.core.async.__GT_t_cljs$core$async27707 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27707(flag__$1,meta27708){
return (new cljs.core.async.t_cljs$core$async27707(flag__$1,meta27708));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27707(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27710 = (function (flag,cb,meta27711){
this.flag = flag;
this.cb = cb;
this.meta27711 = meta27711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27712,meta27711__$1){
var self__ = this;
var _27712__$1 = this;
return (new cljs.core.async.t_cljs$core$async27710(self__.flag,self__.cb,meta27711__$1));
});

cljs.core.async.t_cljs$core$async27710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27712){
var self__ = this;
var _27712__$1 = this;
return self__.meta27711;
});

cljs.core.async.t_cljs$core$async27710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27711","meta27711",1745991640,null)], null);
});

cljs.core.async.t_cljs$core$async27710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27710";

cljs.core.async.t_cljs$core$async27710.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27710");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27710.
 */
cljs.core.async.__GT_t_cljs$core$async27710 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27710(flag__$1,cb__$1,meta27711){
return (new cljs.core.async.t_cljs$core$async27710(flag__$1,cb__$1,meta27711));
});

}

return (new cljs.core.async.t_cljs$core$async27710(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27713_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27713_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27714_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27714_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27715 = (i + (1));
i = G__27715;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27721 = arguments.length;
var i__4731__auto___27722 = (0);
while(true){
if((i__4731__auto___27722 < len__4730__auto___27721)){
args__4736__auto__.push((arguments[i__4731__auto___27722]));

var G__27723 = (i__4731__auto___27722 + (1));
i__4731__auto___27722 = G__27723;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27718){
var map__27719 = p__27718;
var map__27719__$1 = (((((!((map__27719 == null))))?(((((map__27719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27719):map__27719);
var opts = map__27719__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27716){
var G__27717 = cljs.core.first.call(null,seq27716);
var seq27716__$1 = cljs.core.next.call(null,seq27716);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27717,seq27716__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27725 = arguments.length;
switch (G__27725) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27624__auto___27771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___27771){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___27771){
return (function (state_27749){
var state_val_27750 = (state_27749[(1)]);
if((state_val_27750 === (7))){
var inst_27745 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27751_27772 = state_27749__$1;
(statearr_27751_27772[(2)] = inst_27745);

(statearr_27751_27772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (1))){
var state_27749__$1 = state_27749;
var statearr_27752_27773 = state_27749__$1;
(statearr_27752_27773[(2)] = null);

(statearr_27752_27773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (4))){
var inst_27728 = (state_27749[(7)]);
var inst_27728__$1 = (state_27749[(2)]);
var inst_27729 = (inst_27728__$1 == null);
var state_27749__$1 = (function (){var statearr_27753 = state_27749;
(statearr_27753[(7)] = inst_27728__$1);

return statearr_27753;
})();
if(cljs.core.truth_(inst_27729)){
var statearr_27754_27774 = state_27749__$1;
(statearr_27754_27774[(1)] = (5));

} else {
var statearr_27755_27775 = state_27749__$1;
(statearr_27755_27775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (13))){
var state_27749__$1 = state_27749;
var statearr_27756_27776 = state_27749__$1;
(statearr_27756_27776[(2)] = null);

(statearr_27756_27776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (6))){
var inst_27728 = (state_27749[(7)]);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27749__$1,(11),to,inst_27728);
} else {
if((state_val_27750 === (3))){
var inst_27747 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27749__$1,inst_27747);
} else {
if((state_val_27750 === (12))){
var state_27749__$1 = state_27749;
var statearr_27757_27777 = state_27749__$1;
(statearr_27757_27777[(2)] = null);

(statearr_27757_27777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (2))){
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27749__$1,(4),from);
} else {
if((state_val_27750 === (11))){
var inst_27738 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
if(cljs.core.truth_(inst_27738)){
var statearr_27758_27778 = state_27749__$1;
(statearr_27758_27778[(1)] = (12));

} else {
var statearr_27759_27779 = state_27749__$1;
(statearr_27759_27779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (9))){
var state_27749__$1 = state_27749;
var statearr_27760_27780 = state_27749__$1;
(statearr_27760_27780[(2)] = null);

(statearr_27760_27780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (5))){
var state_27749__$1 = state_27749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27761_27781 = state_27749__$1;
(statearr_27761_27781[(1)] = (8));

} else {
var statearr_27762_27782 = state_27749__$1;
(statearr_27762_27782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (14))){
var inst_27743 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27763_27783 = state_27749__$1;
(statearr_27763_27783[(2)] = inst_27743);

(statearr_27763_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (10))){
var inst_27735 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
var statearr_27764_27784 = state_27749__$1;
(statearr_27764_27784[(2)] = inst_27735);

(statearr_27764_27784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27750 === (8))){
var inst_27732 = cljs.core.async.close_BANG_.call(null,to);
var state_27749__$1 = state_27749;
var statearr_27765_27785 = state_27749__$1;
(statearr_27765_27785[(2)] = inst_27732);

(statearr_27765_27785[(1)] = (10));


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
});})(c__27624__auto___27771))
;
return ((function (switch__27529__auto__,c__27624__auto___27771){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_27766 = [null,null,null,null,null,null,null,null];
(statearr_27766[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_27766[(1)] = (1));

return statearr_27766;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_27749){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_27749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e27767){if((e27767 instanceof Object)){
var ex__27533__auto__ = e27767;
var statearr_27768_27786 = state_27749;
(statearr_27768_27786[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27787 = state_27749;
state_27749 = G__27787;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_27749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_27749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___27771))
})();
var state__27626__auto__ = (function (){var statearr_27769 = f__27625__auto__.call(null);
(statearr_27769[(6)] = c__27624__auto___27771);

return statearr_27769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___27771))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27788){
var vec__27789 = p__27788;
var v = cljs.core.nth.call(null,vec__27789,(0),null);
var p = cljs.core.nth.call(null,vec__27789,(1),null);
var job = vec__27789;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27624__auto___27960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___27960,res,vec__27789,v,p,job,jobs,results){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___27960,res,vec__27789,v,p,job,jobs,results){
return (function (state_27796){
var state_val_27797 = (state_27796[(1)]);
if((state_val_27797 === (1))){
var state_27796__$1 = state_27796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27796__$1,(2),res,v);
} else {
if((state_val_27797 === (2))){
var inst_27793 = (state_27796[(2)]);
var inst_27794 = cljs.core.async.close_BANG_.call(null,res);
var state_27796__$1 = (function (){var statearr_27798 = state_27796;
(statearr_27798[(7)] = inst_27793);

return statearr_27798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27796__$1,inst_27794);
} else {
return null;
}
}
});})(c__27624__auto___27960,res,vec__27789,v,p,job,jobs,results))
;
return ((function (switch__27529__auto__,c__27624__auto___27960,res,vec__27789,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0 = (function (){
var statearr_27799 = [null,null,null,null,null,null,null,null];
(statearr_27799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__);

(statearr_27799[(1)] = (1));

return statearr_27799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1 = (function (state_27796){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_27796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e27800){if((e27800 instanceof Object)){
var ex__27533__auto__ = e27800;
var statearr_27801_27961 = state_27796;
(statearr_27801_27961[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27962 = state_27796;
state_27796 = G__27962;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = function(state_27796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1.call(this,state_27796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___27960,res,vec__27789,v,p,job,jobs,results))
})();
var state__27626__auto__ = (function (){var statearr_27802 = f__27625__auto__.call(null);
(statearr_27802[(6)] = c__27624__auto___27960);

return statearr_27802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___27960,res,vec__27789,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27803){
var vec__27804 = p__27803;
var v = cljs.core.nth.call(null,vec__27804,(0),null);
var p = cljs.core.nth.call(null,vec__27804,(1),null);
var job = vec__27804;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___27963 = n;
var __27964 = (0);
while(true){
if((__27964 < n__4607__auto___27963)){
var G__27807_27965 = type;
var G__27807_27966__$1 = (((G__27807_27965 instanceof cljs.core.Keyword))?G__27807_27965.fqn:null);
switch (G__27807_27966__$1) {
case "compute":
var c__27624__auto___27968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27964,c__27624__auto___27968,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (__27964,c__27624__auto___27968,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async){
return (function (state_27820){
var state_val_27821 = (state_27820[(1)]);
if((state_val_27821 === (1))){
var state_27820__$1 = state_27820;
var statearr_27822_27969 = state_27820__$1;
(statearr_27822_27969[(2)] = null);

(statearr_27822_27969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (2))){
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27820__$1,(4),jobs);
} else {
if((state_val_27821 === (3))){
var inst_27818 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27820__$1,inst_27818);
} else {
if((state_val_27821 === (4))){
var inst_27810 = (state_27820[(2)]);
var inst_27811 = process.call(null,inst_27810);
var state_27820__$1 = state_27820;
if(cljs.core.truth_(inst_27811)){
var statearr_27823_27970 = state_27820__$1;
(statearr_27823_27970[(1)] = (5));

} else {
var statearr_27824_27971 = state_27820__$1;
(statearr_27824_27971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (5))){
var state_27820__$1 = state_27820;
var statearr_27825_27972 = state_27820__$1;
(statearr_27825_27972[(2)] = null);

(statearr_27825_27972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (6))){
var state_27820__$1 = state_27820;
var statearr_27826_27973 = state_27820__$1;
(statearr_27826_27973[(2)] = null);

(statearr_27826_27973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (7))){
var inst_27816 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27827_27974 = state_27820__$1;
(statearr_27827_27974[(2)] = inst_27816);

(statearr_27827_27974[(1)] = (3));


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
});})(__27964,c__27624__auto___27968,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async))
;
return ((function (__27964,switch__27529__auto__,c__27624__auto___27968,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0 = (function (){
var statearr_27828 = [null,null,null,null,null,null,null];
(statearr_27828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__);

(statearr_27828[(1)] = (1));

return statearr_27828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1 = (function (state_27820){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_27820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e27829){if((e27829 instanceof Object)){
var ex__27533__auto__ = e27829;
var statearr_27830_27975 = state_27820;
(statearr_27830_27975[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27976 = state_27820;
state_27820 = G__27976;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = function(state_27820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1.call(this,state_27820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__;
})()
;})(__27964,switch__27529__auto__,c__27624__auto___27968,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async))
})();
var state__27626__auto__ = (function (){var statearr_27831 = f__27625__auto__.call(null);
(statearr_27831[(6)] = c__27624__auto___27968);

return statearr_27831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(__27964,c__27624__auto___27968,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async))
);


break;
case "async":
var c__27624__auto___27977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27964,c__27624__auto___27977,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (__27964,c__27624__auto___27977,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async){
return (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (1))){
var state_27844__$1 = state_27844;
var statearr_27846_27978 = state_27844__$1;
(statearr_27846_27978[(2)] = null);

(statearr_27846_27978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (2))){
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27844__$1,(4),jobs);
} else {
if((state_val_27845 === (3))){
var inst_27842 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27844__$1,inst_27842);
} else {
if((state_val_27845 === (4))){
var inst_27834 = (state_27844[(2)]);
var inst_27835 = async.call(null,inst_27834);
var state_27844__$1 = state_27844;
if(cljs.core.truth_(inst_27835)){
var statearr_27847_27979 = state_27844__$1;
(statearr_27847_27979[(1)] = (5));

} else {
var statearr_27848_27980 = state_27844__$1;
(statearr_27848_27980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (5))){
var state_27844__$1 = state_27844;
var statearr_27849_27981 = state_27844__$1;
(statearr_27849_27981[(2)] = null);

(statearr_27849_27981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (6))){
var state_27844__$1 = state_27844;
var statearr_27850_27982 = state_27844__$1;
(statearr_27850_27982[(2)] = null);

(statearr_27850_27982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (7))){
var inst_27840 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27851_27983 = state_27844__$1;
(statearr_27851_27983[(2)] = inst_27840);

(statearr_27851_27983[(1)] = (3));


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
});})(__27964,c__27624__auto___27977,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async))
;
return ((function (__27964,switch__27529__auto__,c__27624__auto___27977,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0 = (function (){
var statearr_27852 = [null,null,null,null,null,null,null];
(statearr_27852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__);

(statearr_27852[(1)] = (1));

return statearr_27852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1 = (function (state_27844){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_27844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e27853){if((e27853 instanceof Object)){
var ex__27533__auto__ = e27853;
var statearr_27854_27984 = state_27844;
(statearr_27854_27984[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27985 = state_27844;
state_27844 = G__27985;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__;
})()
;})(__27964,switch__27529__auto__,c__27624__auto___27977,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async))
})();
var state__27626__auto__ = (function (){var statearr_27855 = f__27625__auto__.call(null);
(statearr_27855[(6)] = c__27624__auto___27977);

return statearr_27855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(__27964,c__27624__auto___27977,G__27807_27965,G__27807_27966__$1,n__4607__auto___27963,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27807_27966__$1)].join('')));

}

var G__27986 = (__27964 + (1));
__27964 = G__27986;
continue;
} else {
}
break;
}

var c__27624__auto___27987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___27987,jobs,results,process,async){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___27987,jobs,results,process,async){
return (function (state_27877){
var state_val_27878 = (state_27877[(1)]);
if((state_val_27878 === (7))){
var inst_27873 = (state_27877[(2)]);
var state_27877__$1 = state_27877;
var statearr_27879_27988 = state_27877__$1;
(statearr_27879_27988[(2)] = inst_27873);

(statearr_27879_27988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (1))){
var state_27877__$1 = state_27877;
var statearr_27880_27989 = state_27877__$1;
(statearr_27880_27989[(2)] = null);

(statearr_27880_27989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (4))){
var inst_27858 = (state_27877[(7)]);
var inst_27858__$1 = (state_27877[(2)]);
var inst_27859 = (inst_27858__$1 == null);
var state_27877__$1 = (function (){var statearr_27881 = state_27877;
(statearr_27881[(7)] = inst_27858__$1);

return statearr_27881;
})();
if(cljs.core.truth_(inst_27859)){
var statearr_27882_27990 = state_27877__$1;
(statearr_27882_27990[(1)] = (5));

} else {
var statearr_27883_27991 = state_27877__$1;
(statearr_27883_27991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (6))){
var inst_27858 = (state_27877[(7)]);
var inst_27863 = (state_27877[(8)]);
var inst_27863__$1 = cljs.core.async.chan.call(null,(1));
var inst_27864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27865 = [inst_27858,inst_27863__$1];
var inst_27866 = (new cljs.core.PersistentVector(null,2,(5),inst_27864,inst_27865,null));
var state_27877__$1 = (function (){var statearr_27884 = state_27877;
(statearr_27884[(8)] = inst_27863__$1);

return statearr_27884;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27877__$1,(8),jobs,inst_27866);
} else {
if((state_val_27878 === (3))){
var inst_27875 = (state_27877[(2)]);
var state_27877__$1 = state_27877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27877__$1,inst_27875);
} else {
if((state_val_27878 === (2))){
var state_27877__$1 = state_27877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27877__$1,(4),from);
} else {
if((state_val_27878 === (9))){
var inst_27870 = (state_27877[(2)]);
var state_27877__$1 = (function (){var statearr_27885 = state_27877;
(statearr_27885[(9)] = inst_27870);

return statearr_27885;
})();
var statearr_27886_27992 = state_27877__$1;
(statearr_27886_27992[(2)] = null);

(statearr_27886_27992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (5))){
var inst_27861 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27877__$1 = state_27877;
var statearr_27887_27993 = state_27877__$1;
(statearr_27887_27993[(2)] = inst_27861);

(statearr_27887_27993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (8))){
var inst_27863 = (state_27877[(8)]);
var inst_27868 = (state_27877[(2)]);
var state_27877__$1 = (function (){var statearr_27888 = state_27877;
(statearr_27888[(10)] = inst_27868);

return statearr_27888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27877__$1,(9),results,inst_27863);
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
});})(c__27624__auto___27987,jobs,results,process,async))
;
return ((function (switch__27529__auto__,c__27624__auto___27987,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0 = (function (){
var statearr_27889 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__);

(statearr_27889[(1)] = (1));

return statearr_27889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1 = (function (state_27877){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_27877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e27890){if((e27890 instanceof Object)){
var ex__27533__auto__ = e27890;
var statearr_27891_27994 = state_27877;
(statearr_27891_27994[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27995 = state_27877;
state_27877 = G__27995;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = function(state_27877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1.call(this,state_27877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___27987,jobs,results,process,async))
})();
var state__27626__auto__ = (function (){var statearr_27892 = f__27625__auto__.call(null);
(statearr_27892[(6)] = c__27624__auto___27987);

return statearr_27892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___27987,jobs,results,process,async))
);


var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__,jobs,results,process,async){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__,jobs,results,process,async){
return (function (state_27930){
var state_val_27931 = (state_27930[(1)]);
if((state_val_27931 === (7))){
var inst_27926 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
var statearr_27932_27996 = state_27930__$1;
(statearr_27932_27996[(2)] = inst_27926);

(statearr_27932_27996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (20))){
var state_27930__$1 = state_27930;
var statearr_27933_27997 = state_27930__$1;
(statearr_27933_27997[(2)] = null);

(statearr_27933_27997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (1))){
var state_27930__$1 = state_27930;
var statearr_27934_27998 = state_27930__$1;
(statearr_27934_27998[(2)] = null);

(statearr_27934_27998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (4))){
var inst_27895 = (state_27930[(7)]);
var inst_27895__$1 = (state_27930[(2)]);
var inst_27896 = (inst_27895__$1 == null);
var state_27930__$1 = (function (){var statearr_27935 = state_27930;
(statearr_27935[(7)] = inst_27895__$1);

return statearr_27935;
})();
if(cljs.core.truth_(inst_27896)){
var statearr_27936_27999 = state_27930__$1;
(statearr_27936_27999[(1)] = (5));

} else {
var statearr_27937_28000 = state_27930__$1;
(statearr_27937_28000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (15))){
var inst_27908 = (state_27930[(8)]);
var state_27930__$1 = state_27930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27930__$1,(18),to,inst_27908);
} else {
if((state_val_27931 === (21))){
var inst_27921 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
var statearr_27938_28001 = state_27930__$1;
(statearr_27938_28001[(2)] = inst_27921);

(statearr_27938_28001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (13))){
var inst_27923 = (state_27930[(2)]);
var state_27930__$1 = (function (){var statearr_27939 = state_27930;
(statearr_27939[(9)] = inst_27923);

return statearr_27939;
})();
var statearr_27940_28002 = state_27930__$1;
(statearr_27940_28002[(2)] = null);

(statearr_27940_28002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (6))){
var inst_27895 = (state_27930[(7)]);
var state_27930__$1 = state_27930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27930__$1,(11),inst_27895);
} else {
if((state_val_27931 === (17))){
var inst_27916 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
if(cljs.core.truth_(inst_27916)){
var statearr_27941_28003 = state_27930__$1;
(statearr_27941_28003[(1)] = (19));

} else {
var statearr_27942_28004 = state_27930__$1;
(statearr_27942_28004[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (3))){
var inst_27928 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27930__$1,inst_27928);
} else {
if((state_val_27931 === (12))){
var inst_27905 = (state_27930[(10)]);
var state_27930__$1 = state_27930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27930__$1,(14),inst_27905);
} else {
if((state_val_27931 === (2))){
var state_27930__$1 = state_27930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27930__$1,(4),results);
} else {
if((state_val_27931 === (19))){
var state_27930__$1 = state_27930;
var statearr_27943_28005 = state_27930__$1;
(statearr_27943_28005[(2)] = null);

(statearr_27943_28005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (11))){
var inst_27905 = (state_27930[(2)]);
var state_27930__$1 = (function (){var statearr_27944 = state_27930;
(statearr_27944[(10)] = inst_27905);

return statearr_27944;
})();
var statearr_27945_28006 = state_27930__$1;
(statearr_27945_28006[(2)] = null);

(statearr_27945_28006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (9))){
var state_27930__$1 = state_27930;
var statearr_27946_28007 = state_27930__$1;
(statearr_27946_28007[(2)] = null);

(statearr_27946_28007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (5))){
var state_27930__$1 = state_27930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27947_28008 = state_27930__$1;
(statearr_27947_28008[(1)] = (8));

} else {
var statearr_27948_28009 = state_27930__$1;
(statearr_27948_28009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (14))){
var inst_27910 = (state_27930[(11)]);
var inst_27908 = (state_27930[(8)]);
var inst_27908__$1 = (state_27930[(2)]);
var inst_27909 = (inst_27908__$1 == null);
var inst_27910__$1 = cljs.core.not.call(null,inst_27909);
var state_27930__$1 = (function (){var statearr_27949 = state_27930;
(statearr_27949[(11)] = inst_27910__$1);

(statearr_27949[(8)] = inst_27908__$1);

return statearr_27949;
})();
if(inst_27910__$1){
var statearr_27950_28010 = state_27930__$1;
(statearr_27950_28010[(1)] = (15));

} else {
var statearr_27951_28011 = state_27930__$1;
(statearr_27951_28011[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (16))){
var inst_27910 = (state_27930[(11)]);
var state_27930__$1 = state_27930;
var statearr_27952_28012 = state_27930__$1;
(statearr_27952_28012[(2)] = inst_27910);

(statearr_27952_28012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (10))){
var inst_27902 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
var statearr_27953_28013 = state_27930__$1;
(statearr_27953_28013[(2)] = inst_27902);

(statearr_27953_28013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (18))){
var inst_27913 = (state_27930[(2)]);
var state_27930__$1 = state_27930;
var statearr_27954_28014 = state_27930__$1;
(statearr_27954_28014[(2)] = inst_27913);

(statearr_27954_28014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27931 === (8))){
var inst_27899 = cljs.core.async.close_BANG_.call(null,to);
var state_27930__$1 = state_27930;
var statearr_27955_28015 = state_27930__$1;
(statearr_27955_28015[(2)] = inst_27899);

(statearr_27955_28015[(1)] = (10));


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
}
}
}
}
});})(c__27624__auto__,jobs,results,process,async))
;
return ((function (switch__27529__auto__,c__27624__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0 = (function (){
var statearr_27956 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__);

(statearr_27956[(1)] = (1));

return statearr_27956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1 = (function (state_27930){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_27930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e27957){if((e27957 instanceof Object)){
var ex__27533__auto__ = e27957;
var statearr_27958_28016 = state_27930;
(statearr_27958_28016[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28017 = state_27930;
state_27930 = G__28017;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__ = function(state_27930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1.call(this,state_27930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27530__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__,jobs,results,process,async))
})();
var state__27626__auto__ = (function (){var statearr_27959 = f__27625__auto__.call(null);
(statearr_27959[(6)] = c__27624__auto__);

return statearr_27959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__,jobs,results,process,async))
);

return c__27624__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28019 = arguments.length;
switch (G__28019) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28022 = arguments.length;
switch (G__28022) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28025 = arguments.length;
switch (G__28025) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27624__auto___28074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___28074,tc,fc){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___28074,tc,fc){
return (function (state_28051){
var state_val_28052 = (state_28051[(1)]);
if((state_val_28052 === (7))){
var inst_28047 = (state_28051[(2)]);
var state_28051__$1 = state_28051;
var statearr_28053_28075 = state_28051__$1;
(statearr_28053_28075[(2)] = inst_28047);

(statearr_28053_28075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (1))){
var state_28051__$1 = state_28051;
var statearr_28054_28076 = state_28051__$1;
(statearr_28054_28076[(2)] = null);

(statearr_28054_28076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (4))){
var inst_28028 = (state_28051[(7)]);
var inst_28028__$1 = (state_28051[(2)]);
var inst_28029 = (inst_28028__$1 == null);
var state_28051__$1 = (function (){var statearr_28055 = state_28051;
(statearr_28055[(7)] = inst_28028__$1);

return statearr_28055;
})();
if(cljs.core.truth_(inst_28029)){
var statearr_28056_28077 = state_28051__$1;
(statearr_28056_28077[(1)] = (5));

} else {
var statearr_28057_28078 = state_28051__$1;
(statearr_28057_28078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (13))){
var state_28051__$1 = state_28051;
var statearr_28058_28079 = state_28051__$1;
(statearr_28058_28079[(2)] = null);

(statearr_28058_28079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (6))){
var inst_28028 = (state_28051[(7)]);
var inst_28034 = p.call(null,inst_28028);
var state_28051__$1 = state_28051;
if(cljs.core.truth_(inst_28034)){
var statearr_28059_28080 = state_28051__$1;
(statearr_28059_28080[(1)] = (9));

} else {
var statearr_28060_28081 = state_28051__$1;
(statearr_28060_28081[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (3))){
var inst_28049 = (state_28051[(2)]);
var state_28051__$1 = state_28051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28051__$1,inst_28049);
} else {
if((state_val_28052 === (12))){
var state_28051__$1 = state_28051;
var statearr_28061_28082 = state_28051__$1;
(statearr_28061_28082[(2)] = null);

(statearr_28061_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (2))){
var state_28051__$1 = state_28051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28051__$1,(4),ch);
} else {
if((state_val_28052 === (11))){
var inst_28028 = (state_28051[(7)]);
var inst_28038 = (state_28051[(2)]);
var state_28051__$1 = state_28051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28051__$1,(8),inst_28038,inst_28028);
} else {
if((state_val_28052 === (9))){
var state_28051__$1 = state_28051;
var statearr_28062_28083 = state_28051__$1;
(statearr_28062_28083[(2)] = tc);

(statearr_28062_28083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (5))){
var inst_28031 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28032 = cljs.core.async.close_BANG_.call(null,fc);
var state_28051__$1 = (function (){var statearr_28063 = state_28051;
(statearr_28063[(8)] = inst_28031);

return statearr_28063;
})();
var statearr_28064_28084 = state_28051__$1;
(statearr_28064_28084[(2)] = inst_28032);

(statearr_28064_28084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (14))){
var inst_28045 = (state_28051[(2)]);
var state_28051__$1 = state_28051;
var statearr_28065_28085 = state_28051__$1;
(statearr_28065_28085[(2)] = inst_28045);

(statearr_28065_28085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (10))){
var state_28051__$1 = state_28051;
var statearr_28066_28086 = state_28051__$1;
(statearr_28066_28086[(2)] = fc);

(statearr_28066_28086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (8))){
var inst_28040 = (state_28051[(2)]);
var state_28051__$1 = state_28051;
if(cljs.core.truth_(inst_28040)){
var statearr_28067_28087 = state_28051__$1;
(statearr_28067_28087[(1)] = (12));

} else {
var statearr_28068_28088 = state_28051__$1;
(statearr_28068_28088[(1)] = (13));

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
});})(c__27624__auto___28074,tc,fc))
;
return ((function (switch__27529__auto__,c__27624__auto___28074,tc,fc){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_28069 = [null,null,null,null,null,null,null,null,null];
(statearr_28069[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_28069[(1)] = (1));

return statearr_28069;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_28051){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28070){if((e28070 instanceof Object)){
var ex__27533__auto__ = e28070;
var statearr_28071_28089 = state_28051;
(statearr_28071_28089[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28090 = state_28051;
state_28051 = G__28090;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_28051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_28051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___28074,tc,fc))
})();
var state__27626__auto__ = (function (){var statearr_28072 = f__27625__auto__.call(null);
(statearr_28072[(6)] = c__27624__auto___28074);

return statearr_28072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___28074,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__){
return (function (state_28111){
var state_val_28112 = (state_28111[(1)]);
if((state_val_28112 === (7))){
var inst_28107 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
var statearr_28113_28131 = state_28111__$1;
(statearr_28113_28131[(2)] = inst_28107);

(statearr_28113_28131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (1))){
var inst_28091 = init;
var state_28111__$1 = (function (){var statearr_28114 = state_28111;
(statearr_28114[(7)] = inst_28091);

return statearr_28114;
})();
var statearr_28115_28132 = state_28111__$1;
(statearr_28115_28132[(2)] = null);

(statearr_28115_28132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (4))){
var inst_28094 = (state_28111[(8)]);
var inst_28094__$1 = (state_28111[(2)]);
var inst_28095 = (inst_28094__$1 == null);
var state_28111__$1 = (function (){var statearr_28116 = state_28111;
(statearr_28116[(8)] = inst_28094__$1);

return statearr_28116;
})();
if(cljs.core.truth_(inst_28095)){
var statearr_28117_28133 = state_28111__$1;
(statearr_28117_28133[(1)] = (5));

} else {
var statearr_28118_28134 = state_28111__$1;
(statearr_28118_28134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (6))){
var inst_28094 = (state_28111[(8)]);
var inst_28091 = (state_28111[(7)]);
var inst_28098 = (state_28111[(9)]);
var inst_28098__$1 = f.call(null,inst_28091,inst_28094);
var inst_28099 = cljs.core.reduced_QMARK_.call(null,inst_28098__$1);
var state_28111__$1 = (function (){var statearr_28119 = state_28111;
(statearr_28119[(9)] = inst_28098__$1);

return statearr_28119;
})();
if(inst_28099){
var statearr_28120_28135 = state_28111__$1;
(statearr_28120_28135[(1)] = (8));

} else {
var statearr_28121_28136 = state_28111__$1;
(statearr_28121_28136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (3))){
var inst_28109 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28111__$1,inst_28109);
} else {
if((state_val_28112 === (2))){
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28111__$1,(4),ch);
} else {
if((state_val_28112 === (9))){
var inst_28098 = (state_28111[(9)]);
var inst_28091 = inst_28098;
var state_28111__$1 = (function (){var statearr_28122 = state_28111;
(statearr_28122[(7)] = inst_28091);

return statearr_28122;
})();
var statearr_28123_28137 = state_28111__$1;
(statearr_28123_28137[(2)] = null);

(statearr_28123_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (5))){
var inst_28091 = (state_28111[(7)]);
var state_28111__$1 = state_28111;
var statearr_28124_28138 = state_28111__$1;
(statearr_28124_28138[(2)] = inst_28091);

(statearr_28124_28138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (10))){
var inst_28105 = (state_28111[(2)]);
var state_28111__$1 = state_28111;
var statearr_28125_28139 = state_28111__$1;
(statearr_28125_28139[(2)] = inst_28105);

(statearr_28125_28139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28112 === (8))){
var inst_28098 = (state_28111[(9)]);
var inst_28101 = cljs.core.deref.call(null,inst_28098);
var state_28111__$1 = state_28111;
var statearr_28126_28140 = state_28111__$1;
(statearr_28126_28140[(2)] = inst_28101);

(statearr_28126_28140[(1)] = (10));


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
});})(c__27624__auto__))
;
return ((function (switch__27529__auto__,c__27624__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27530__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27530__auto____0 = (function (){
var statearr_28127 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28127[(0)] = cljs$core$async$reduce_$_state_machine__27530__auto__);

(statearr_28127[(1)] = (1));

return statearr_28127;
});
var cljs$core$async$reduce_$_state_machine__27530__auto____1 = (function (state_28111){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28128){if((e28128 instanceof Object)){
var ex__27533__auto__ = e28128;
var statearr_28129_28141 = state_28111;
(statearr_28129_28141[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28142 = state_28111;
state_28111 = G__28142;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27530__auto__ = function(state_28111){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27530__auto____1.call(this,state_28111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27530__auto____0;
cljs$core$async$reduce_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27530__auto____1;
return cljs$core$async$reduce_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__))
})();
var state__27626__auto__ = (function (){var statearr_28130 = f__27625__auto__.call(null);
(statearr_28130[(6)] = c__27624__auto__);

return statearr_28130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__))
);

return c__27624__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__,f__$1){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__,f__$1){
return (function (state_28148){
var state_val_28149 = (state_28148[(1)]);
if((state_val_28149 === (1))){
var inst_28143 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28148__$1 = state_28148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28148__$1,(2),inst_28143);
} else {
if((state_val_28149 === (2))){
var inst_28145 = (state_28148[(2)]);
var inst_28146 = f__$1.call(null,inst_28145);
var state_28148__$1 = state_28148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28148__$1,inst_28146);
} else {
return null;
}
}
});})(c__27624__auto__,f__$1))
;
return ((function (switch__27529__auto__,c__27624__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27530__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27530__auto____0 = (function (){
var statearr_28150 = [null,null,null,null,null,null,null];
(statearr_28150[(0)] = cljs$core$async$transduce_$_state_machine__27530__auto__);

(statearr_28150[(1)] = (1));

return statearr_28150;
});
var cljs$core$async$transduce_$_state_machine__27530__auto____1 = (function (state_28148){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28151){if((e28151 instanceof Object)){
var ex__27533__auto__ = e28151;
var statearr_28152_28154 = state_28148;
(statearr_28152_28154[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28155 = state_28148;
state_28148 = G__28155;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27530__auto__ = function(state_28148){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27530__auto____1.call(this,state_28148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27530__auto____0;
cljs$core$async$transduce_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27530__auto____1;
return cljs$core$async$transduce_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__,f__$1))
})();
var state__27626__auto__ = (function (){var statearr_28153 = f__27625__auto__.call(null);
(statearr_28153[(6)] = c__27624__auto__);

return statearr_28153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__,f__$1))
);

return c__27624__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28157 = arguments.length;
switch (G__28157) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__){
return (function (state_28182){
var state_val_28183 = (state_28182[(1)]);
if((state_val_28183 === (7))){
var inst_28164 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28184_28205 = state_28182__$1;
(statearr_28184_28205[(2)] = inst_28164);

(statearr_28184_28205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (1))){
var inst_28158 = cljs.core.seq.call(null,coll);
var inst_28159 = inst_28158;
var state_28182__$1 = (function (){var statearr_28185 = state_28182;
(statearr_28185[(7)] = inst_28159);

return statearr_28185;
})();
var statearr_28186_28206 = state_28182__$1;
(statearr_28186_28206[(2)] = null);

(statearr_28186_28206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (4))){
var inst_28159 = (state_28182[(7)]);
var inst_28162 = cljs.core.first.call(null,inst_28159);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28182__$1,(7),ch,inst_28162);
} else {
if((state_val_28183 === (13))){
var inst_28176 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28187_28207 = state_28182__$1;
(statearr_28187_28207[(2)] = inst_28176);

(statearr_28187_28207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (6))){
var inst_28167 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28167)){
var statearr_28188_28208 = state_28182__$1;
(statearr_28188_28208[(1)] = (8));

} else {
var statearr_28189_28209 = state_28182__$1;
(statearr_28189_28209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (3))){
var inst_28180 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28182__$1,inst_28180);
} else {
if((state_val_28183 === (12))){
var state_28182__$1 = state_28182;
var statearr_28190_28210 = state_28182__$1;
(statearr_28190_28210[(2)] = null);

(statearr_28190_28210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (2))){
var inst_28159 = (state_28182[(7)]);
var state_28182__$1 = state_28182;
if(cljs.core.truth_(inst_28159)){
var statearr_28191_28211 = state_28182__$1;
(statearr_28191_28211[(1)] = (4));

} else {
var statearr_28192_28212 = state_28182__$1;
(statearr_28192_28212[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (11))){
var inst_28173 = cljs.core.async.close_BANG_.call(null,ch);
var state_28182__$1 = state_28182;
var statearr_28193_28213 = state_28182__$1;
(statearr_28193_28213[(2)] = inst_28173);

(statearr_28193_28213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (9))){
var state_28182__$1 = state_28182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28194_28214 = state_28182__$1;
(statearr_28194_28214[(1)] = (11));

} else {
var statearr_28195_28215 = state_28182__$1;
(statearr_28195_28215[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (5))){
var inst_28159 = (state_28182[(7)]);
var state_28182__$1 = state_28182;
var statearr_28196_28216 = state_28182__$1;
(statearr_28196_28216[(2)] = inst_28159);

(statearr_28196_28216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (10))){
var inst_28178 = (state_28182[(2)]);
var state_28182__$1 = state_28182;
var statearr_28197_28217 = state_28182__$1;
(statearr_28197_28217[(2)] = inst_28178);

(statearr_28197_28217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28183 === (8))){
var inst_28159 = (state_28182[(7)]);
var inst_28169 = cljs.core.next.call(null,inst_28159);
var inst_28159__$1 = inst_28169;
var state_28182__$1 = (function (){var statearr_28198 = state_28182;
(statearr_28198[(7)] = inst_28159__$1);

return statearr_28198;
})();
var statearr_28199_28218 = state_28182__$1;
(statearr_28199_28218[(2)] = null);

(statearr_28199_28218[(1)] = (2));


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
});})(c__27624__auto__))
;
return ((function (switch__27529__auto__,c__27624__auto__){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_28200 = [null,null,null,null,null,null,null,null];
(statearr_28200[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_28200[(1)] = (1));

return statearr_28200;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_28182){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28201){if((e28201 instanceof Object)){
var ex__27533__auto__ = e28201;
var statearr_28202_28219 = state_28182;
(statearr_28202_28219[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28220 = state_28182;
state_28182 = G__28220;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_28182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_28182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__))
})();
var state__27626__auto__ = (function (){var statearr_28203 = f__27625__auto__.call(null);
(statearr_28203[(6)] = c__27624__auto__);

return statearr_28203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__))
);

return c__27624__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28221 = (function (ch,cs,meta28222){
this.ch = ch;
this.cs = cs;
this.meta28222 = meta28222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28223,meta28222__$1){
var self__ = this;
var _28223__$1 = this;
return (new cljs.core.async.t_cljs$core$async28221(self__.ch,self__.cs,meta28222__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28223){
var self__ = this;
var _28223__$1 = this;
return self__.meta28222;
});})(cs))
;

cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28221.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28221.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28222","meta28222",-1046301978,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28221";

cljs.core.async.t_cljs$core$async28221.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28221");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28221.
 */
cljs.core.async.__GT_t_cljs$core$async28221 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28221(ch__$1,cs__$1,meta28222){
return (new cljs.core.async.t_cljs$core$async28221(ch__$1,cs__$1,meta28222));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28221(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27624__auto___28443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___28443,cs,m,dchan,dctr,done){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___28443,cs,m,dchan,dctr,done){
return (function (state_28358){
var state_val_28359 = (state_28358[(1)]);
if((state_val_28359 === (7))){
var inst_28354 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28360_28444 = state_28358__$1;
(statearr_28360_28444[(2)] = inst_28354);

(statearr_28360_28444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (20))){
var inst_28257 = (state_28358[(7)]);
var inst_28269 = cljs.core.first.call(null,inst_28257);
var inst_28270 = cljs.core.nth.call(null,inst_28269,(0),null);
var inst_28271 = cljs.core.nth.call(null,inst_28269,(1),null);
var state_28358__$1 = (function (){var statearr_28361 = state_28358;
(statearr_28361[(8)] = inst_28270);

return statearr_28361;
})();
if(cljs.core.truth_(inst_28271)){
var statearr_28362_28445 = state_28358__$1;
(statearr_28362_28445[(1)] = (22));

} else {
var statearr_28363_28446 = state_28358__$1;
(statearr_28363_28446[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (27))){
var inst_28301 = (state_28358[(9)]);
var inst_28306 = (state_28358[(10)]);
var inst_28299 = (state_28358[(11)]);
var inst_28226 = (state_28358[(12)]);
var inst_28306__$1 = cljs.core._nth.call(null,inst_28299,inst_28301);
var inst_28307 = cljs.core.async.put_BANG_.call(null,inst_28306__$1,inst_28226,done);
var state_28358__$1 = (function (){var statearr_28364 = state_28358;
(statearr_28364[(10)] = inst_28306__$1);

return statearr_28364;
})();
if(cljs.core.truth_(inst_28307)){
var statearr_28365_28447 = state_28358__$1;
(statearr_28365_28447[(1)] = (30));

} else {
var statearr_28366_28448 = state_28358__$1;
(statearr_28366_28448[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (1))){
var state_28358__$1 = state_28358;
var statearr_28367_28449 = state_28358__$1;
(statearr_28367_28449[(2)] = null);

(statearr_28367_28449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (24))){
var inst_28257 = (state_28358[(7)]);
var inst_28276 = (state_28358[(2)]);
var inst_28277 = cljs.core.next.call(null,inst_28257);
var inst_28235 = inst_28277;
var inst_28236 = null;
var inst_28237 = (0);
var inst_28238 = (0);
var state_28358__$1 = (function (){var statearr_28368 = state_28358;
(statearr_28368[(13)] = inst_28276);

(statearr_28368[(14)] = inst_28238);

(statearr_28368[(15)] = inst_28237);

(statearr_28368[(16)] = inst_28235);

(statearr_28368[(17)] = inst_28236);

return statearr_28368;
})();
var statearr_28369_28450 = state_28358__$1;
(statearr_28369_28450[(2)] = null);

(statearr_28369_28450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (39))){
var state_28358__$1 = state_28358;
var statearr_28373_28451 = state_28358__$1;
(statearr_28373_28451[(2)] = null);

(statearr_28373_28451[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (4))){
var inst_28226 = (state_28358[(12)]);
var inst_28226__$1 = (state_28358[(2)]);
var inst_28227 = (inst_28226__$1 == null);
var state_28358__$1 = (function (){var statearr_28374 = state_28358;
(statearr_28374[(12)] = inst_28226__$1);

return statearr_28374;
})();
if(cljs.core.truth_(inst_28227)){
var statearr_28375_28452 = state_28358__$1;
(statearr_28375_28452[(1)] = (5));

} else {
var statearr_28376_28453 = state_28358__$1;
(statearr_28376_28453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (15))){
var inst_28238 = (state_28358[(14)]);
var inst_28237 = (state_28358[(15)]);
var inst_28235 = (state_28358[(16)]);
var inst_28236 = (state_28358[(17)]);
var inst_28253 = (state_28358[(2)]);
var inst_28254 = (inst_28238 + (1));
var tmp28370 = inst_28237;
var tmp28371 = inst_28235;
var tmp28372 = inst_28236;
var inst_28235__$1 = tmp28371;
var inst_28236__$1 = tmp28372;
var inst_28237__$1 = tmp28370;
var inst_28238__$1 = inst_28254;
var state_28358__$1 = (function (){var statearr_28377 = state_28358;
(statearr_28377[(14)] = inst_28238__$1);

(statearr_28377[(18)] = inst_28253);

(statearr_28377[(15)] = inst_28237__$1);

(statearr_28377[(16)] = inst_28235__$1);

(statearr_28377[(17)] = inst_28236__$1);

return statearr_28377;
})();
var statearr_28378_28454 = state_28358__$1;
(statearr_28378_28454[(2)] = null);

(statearr_28378_28454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (21))){
var inst_28280 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28382_28455 = state_28358__$1;
(statearr_28382_28455[(2)] = inst_28280);

(statearr_28382_28455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (31))){
var inst_28306 = (state_28358[(10)]);
var inst_28310 = done.call(null,null);
var inst_28311 = cljs.core.async.untap_STAR_.call(null,m,inst_28306);
var state_28358__$1 = (function (){var statearr_28383 = state_28358;
(statearr_28383[(19)] = inst_28310);

return statearr_28383;
})();
var statearr_28384_28456 = state_28358__$1;
(statearr_28384_28456[(2)] = inst_28311);

(statearr_28384_28456[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (32))){
var inst_28300 = (state_28358[(20)]);
var inst_28301 = (state_28358[(9)]);
var inst_28299 = (state_28358[(11)]);
var inst_28298 = (state_28358[(21)]);
var inst_28313 = (state_28358[(2)]);
var inst_28314 = (inst_28301 + (1));
var tmp28379 = inst_28300;
var tmp28380 = inst_28299;
var tmp28381 = inst_28298;
var inst_28298__$1 = tmp28381;
var inst_28299__$1 = tmp28380;
var inst_28300__$1 = tmp28379;
var inst_28301__$1 = inst_28314;
var state_28358__$1 = (function (){var statearr_28385 = state_28358;
(statearr_28385[(20)] = inst_28300__$1);

(statearr_28385[(9)] = inst_28301__$1);

(statearr_28385[(11)] = inst_28299__$1);

(statearr_28385[(21)] = inst_28298__$1);

(statearr_28385[(22)] = inst_28313);

return statearr_28385;
})();
var statearr_28386_28457 = state_28358__$1;
(statearr_28386_28457[(2)] = null);

(statearr_28386_28457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (40))){
var inst_28326 = (state_28358[(23)]);
var inst_28330 = done.call(null,null);
var inst_28331 = cljs.core.async.untap_STAR_.call(null,m,inst_28326);
var state_28358__$1 = (function (){var statearr_28387 = state_28358;
(statearr_28387[(24)] = inst_28330);

return statearr_28387;
})();
var statearr_28388_28458 = state_28358__$1;
(statearr_28388_28458[(2)] = inst_28331);

(statearr_28388_28458[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (33))){
var inst_28317 = (state_28358[(25)]);
var inst_28319 = cljs.core.chunked_seq_QMARK_.call(null,inst_28317);
var state_28358__$1 = state_28358;
if(inst_28319){
var statearr_28389_28459 = state_28358__$1;
(statearr_28389_28459[(1)] = (36));

} else {
var statearr_28390_28460 = state_28358__$1;
(statearr_28390_28460[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (13))){
var inst_28247 = (state_28358[(26)]);
var inst_28250 = cljs.core.async.close_BANG_.call(null,inst_28247);
var state_28358__$1 = state_28358;
var statearr_28391_28461 = state_28358__$1;
(statearr_28391_28461[(2)] = inst_28250);

(statearr_28391_28461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (22))){
var inst_28270 = (state_28358[(8)]);
var inst_28273 = cljs.core.async.close_BANG_.call(null,inst_28270);
var state_28358__$1 = state_28358;
var statearr_28392_28462 = state_28358__$1;
(statearr_28392_28462[(2)] = inst_28273);

(statearr_28392_28462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (36))){
var inst_28317 = (state_28358[(25)]);
var inst_28321 = cljs.core.chunk_first.call(null,inst_28317);
var inst_28322 = cljs.core.chunk_rest.call(null,inst_28317);
var inst_28323 = cljs.core.count.call(null,inst_28321);
var inst_28298 = inst_28322;
var inst_28299 = inst_28321;
var inst_28300 = inst_28323;
var inst_28301 = (0);
var state_28358__$1 = (function (){var statearr_28393 = state_28358;
(statearr_28393[(20)] = inst_28300);

(statearr_28393[(9)] = inst_28301);

(statearr_28393[(11)] = inst_28299);

(statearr_28393[(21)] = inst_28298);

return statearr_28393;
})();
var statearr_28394_28463 = state_28358__$1;
(statearr_28394_28463[(2)] = null);

(statearr_28394_28463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (41))){
var inst_28317 = (state_28358[(25)]);
var inst_28333 = (state_28358[(2)]);
var inst_28334 = cljs.core.next.call(null,inst_28317);
var inst_28298 = inst_28334;
var inst_28299 = null;
var inst_28300 = (0);
var inst_28301 = (0);
var state_28358__$1 = (function (){var statearr_28395 = state_28358;
(statearr_28395[(20)] = inst_28300);

(statearr_28395[(9)] = inst_28301);

(statearr_28395[(11)] = inst_28299);

(statearr_28395[(27)] = inst_28333);

(statearr_28395[(21)] = inst_28298);

return statearr_28395;
})();
var statearr_28396_28464 = state_28358__$1;
(statearr_28396_28464[(2)] = null);

(statearr_28396_28464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (43))){
var state_28358__$1 = state_28358;
var statearr_28397_28465 = state_28358__$1;
(statearr_28397_28465[(2)] = null);

(statearr_28397_28465[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (29))){
var inst_28342 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28398_28466 = state_28358__$1;
(statearr_28398_28466[(2)] = inst_28342);

(statearr_28398_28466[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (44))){
var inst_28351 = (state_28358[(2)]);
var state_28358__$1 = (function (){var statearr_28399 = state_28358;
(statearr_28399[(28)] = inst_28351);

return statearr_28399;
})();
var statearr_28400_28467 = state_28358__$1;
(statearr_28400_28467[(2)] = null);

(statearr_28400_28467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (6))){
var inst_28290 = (state_28358[(29)]);
var inst_28289 = cljs.core.deref.call(null,cs);
var inst_28290__$1 = cljs.core.keys.call(null,inst_28289);
var inst_28291 = cljs.core.count.call(null,inst_28290__$1);
var inst_28292 = cljs.core.reset_BANG_.call(null,dctr,inst_28291);
var inst_28297 = cljs.core.seq.call(null,inst_28290__$1);
var inst_28298 = inst_28297;
var inst_28299 = null;
var inst_28300 = (0);
var inst_28301 = (0);
var state_28358__$1 = (function (){var statearr_28401 = state_28358;
(statearr_28401[(30)] = inst_28292);

(statearr_28401[(20)] = inst_28300);

(statearr_28401[(9)] = inst_28301);

(statearr_28401[(11)] = inst_28299);

(statearr_28401[(21)] = inst_28298);

(statearr_28401[(29)] = inst_28290__$1);

return statearr_28401;
})();
var statearr_28402_28468 = state_28358__$1;
(statearr_28402_28468[(2)] = null);

(statearr_28402_28468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (28))){
var inst_28317 = (state_28358[(25)]);
var inst_28298 = (state_28358[(21)]);
var inst_28317__$1 = cljs.core.seq.call(null,inst_28298);
var state_28358__$1 = (function (){var statearr_28403 = state_28358;
(statearr_28403[(25)] = inst_28317__$1);

return statearr_28403;
})();
if(inst_28317__$1){
var statearr_28404_28469 = state_28358__$1;
(statearr_28404_28469[(1)] = (33));

} else {
var statearr_28405_28470 = state_28358__$1;
(statearr_28405_28470[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (25))){
var inst_28300 = (state_28358[(20)]);
var inst_28301 = (state_28358[(9)]);
var inst_28303 = (inst_28301 < inst_28300);
var inst_28304 = inst_28303;
var state_28358__$1 = state_28358;
if(cljs.core.truth_(inst_28304)){
var statearr_28406_28471 = state_28358__$1;
(statearr_28406_28471[(1)] = (27));

} else {
var statearr_28407_28472 = state_28358__$1;
(statearr_28407_28472[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (34))){
var state_28358__$1 = state_28358;
var statearr_28408_28473 = state_28358__$1;
(statearr_28408_28473[(2)] = null);

(statearr_28408_28473[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (17))){
var state_28358__$1 = state_28358;
var statearr_28409_28474 = state_28358__$1;
(statearr_28409_28474[(2)] = null);

(statearr_28409_28474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (3))){
var inst_28356 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28358__$1,inst_28356);
} else {
if((state_val_28359 === (12))){
var inst_28285 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28410_28475 = state_28358__$1;
(statearr_28410_28475[(2)] = inst_28285);

(statearr_28410_28475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (2))){
var state_28358__$1 = state_28358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28358__$1,(4),ch);
} else {
if((state_val_28359 === (23))){
var state_28358__$1 = state_28358;
var statearr_28411_28476 = state_28358__$1;
(statearr_28411_28476[(2)] = null);

(statearr_28411_28476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (35))){
var inst_28340 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28412_28477 = state_28358__$1;
(statearr_28412_28477[(2)] = inst_28340);

(statearr_28412_28477[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (19))){
var inst_28257 = (state_28358[(7)]);
var inst_28261 = cljs.core.chunk_first.call(null,inst_28257);
var inst_28262 = cljs.core.chunk_rest.call(null,inst_28257);
var inst_28263 = cljs.core.count.call(null,inst_28261);
var inst_28235 = inst_28262;
var inst_28236 = inst_28261;
var inst_28237 = inst_28263;
var inst_28238 = (0);
var state_28358__$1 = (function (){var statearr_28413 = state_28358;
(statearr_28413[(14)] = inst_28238);

(statearr_28413[(15)] = inst_28237);

(statearr_28413[(16)] = inst_28235);

(statearr_28413[(17)] = inst_28236);

return statearr_28413;
})();
var statearr_28414_28478 = state_28358__$1;
(statearr_28414_28478[(2)] = null);

(statearr_28414_28478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (11))){
var inst_28257 = (state_28358[(7)]);
var inst_28235 = (state_28358[(16)]);
var inst_28257__$1 = cljs.core.seq.call(null,inst_28235);
var state_28358__$1 = (function (){var statearr_28415 = state_28358;
(statearr_28415[(7)] = inst_28257__$1);

return statearr_28415;
})();
if(inst_28257__$1){
var statearr_28416_28479 = state_28358__$1;
(statearr_28416_28479[(1)] = (16));

} else {
var statearr_28417_28480 = state_28358__$1;
(statearr_28417_28480[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (9))){
var inst_28287 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28418_28481 = state_28358__$1;
(statearr_28418_28481[(2)] = inst_28287);

(statearr_28418_28481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (5))){
var inst_28233 = cljs.core.deref.call(null,cs);
var inst_28234 = cljs.core.seq.call(null,inst_28233);
var inst_28235 = inst_28234;
var inst_28236 = null;
var inst_28237 = (0);
var inst_28238 = (0);
var state_28358__$1 = (function (){var statearr_28419 = state_28358;
(statearr_28419[(14)] = inst_28238);

(statearr_28419[(15)] = inst_28237);

(statearr_28419[(16)] = inst_28235);

(statearr_28419[(17)] = inst_28236);

return statearr_28419;
})();
var statearr_28420_28482 = state_28358__$1;
(statearr_28420_28482[(2)] = null);

(statearr_28420_28482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (14))){
var state_28358__$1 = state_28358;
var statearr_28421_28483 = state_28358__$1;
(statearr_28421_28483[(2)] = null);

(statearr_28421_28483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (45))){
var inst_28348 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28422_28484 = state_28358__$1;
(statearr_28422_28484[(2)] = inst_28348);

(statearr_28422_28484[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (26))){
var inst_28290 = (state_28358[(29)]);
var inst_28344 = (state_28358[(2)]);
var inst_28345 = cljs.core.seq.call(null,inst_28290);
var state_28358__$1 = (function (){var statearr_28423 = state_28358;
(statearr_28423[(31)] = inst_28344);

return statearr_28423;
})();
if(inst_28345){
var statearr_28424_28485 = state_28358__$1;
(statearr_28424_28485[(1)] = (42));

} else {
var statearr_28425_28486 = state_28358__$1;
(statearr_28425_28486[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (16))){
var inst_28257 = (state_28358[(7)]);
var inst_28259 = cljs.core.chunked_seq_QMARK_.call(null,inst_28257);
var state_28358__$1 = state_28358;
if(inst_28259){
var statearr_28426_28487 = state_28358__$1;
(statearr_28426_28487[(1)] = (19));

} else {
var statearr_28427_28488 = state_28358__$1;
(statearr_28427_28488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (38))){
var inst_28337 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28428_28489 = state_28358__$1;
(statearr_28428_28489[(2)] = inst_28337);

(statearr_28428_28489[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (30))){
var state_28358__$1 = state_28358;
var statearr_28429_28490 = state_28358__$1;
(statearr_28429_28490[(2)] = null);

(statearr_28429_28490[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (10))){
var inst_28238 = (state_28358[(14)]);
var inst_28236 = (state_28358[(17)]);
var inst_28246 = cljs.core._nth.call(null,inst_28236,inst_28238);
var inst_28247 = cljs.core.nth.call(null,inst_28246,(0),null);
var inst_28248 = cljs.core.nth.call(null,inst_28246,(1),null);
var state_28358__$1 = (function (){var statearr_28430 = state_28358;
(statearr_28430[(26)] = inst_28247);

return statearr_28430;
})();
if(cljs.core.truth_(inst_28248)){
var statearr_28431_28491 = state_28358__$1;
(statearr_28431_28491[(1)] = (13));

} else {
var statearr_28432_28492 = state_28358__$1;
(statearr_28432_28492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (18))){
var inst_28283 = (state_28358[(2)]);
var state_28358__$1 = state_28358;
var statearr_28433_28493 = state_28358__$1;
(statearr_28433_28493[(2)] = inst_28283);

(statearr_28433_28493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (42))){
var state_28358__$1 = state_28358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28358__$1,(45),dchan);
} else {
if((state_val_28359 === (37))){
var inst_28317 = (state_28358[(25)]);
var inst_28326 = (state_28358[(23)]);
var inst_28226 = (state_28358[(12)]);
var inst_28326__$1 = cljs.core.first.call(null,inst_28317);
var inst_28327 = cljs.core.async.put_BANG_.call(null,inst_28326__$1,inst_28226,done);
var state_28358__$1 = (function (){var statearr_28434 = state_28358;
(statearr_28434[(23)] = inst_28326__$1);

return statearr_28434;
})();
if(cljs.core.truth_(inst_28327)){
var statearr_28435_28494 = state_28358__$1;
(statearr_28435_28494[(1)] = (39));

} else {
var statearr_28436_28495 = state_28358__$1;
(statearr_28436_28495[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28359 === (8))){
var inst_28238 = (state_28358[(14)]);
var inst_28237 = (state_28358[(15)]);
var inst_28240 = (inst_28238 < inst_28237);
var inst_28241 = inst_28240;
var state_28358__$1 = state_28358;
if(cljs.core.truth_(inst_28241)){
var statearr_28437_28496 = state_28358__$1;
(statearr_28437_28496[(1)] = (10));

} else {
var statearr_28438_28497 = state_28358__$1;
(statearr_28438_28497[(1)] = (11));

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
});})(c__27624__auto___28443,cs,m,dchan,dctr,done))
;
return ((function (switch__27529__auto__,c__27624__auto___28443,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27530__auto__ = null;
var cljs$core$async$mult_$_state_machine__27530__auto____0 = (function (){
var statearr_28439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28439[(0)] = cljs$core$async$mult_$_state_machine__27530__auto__);

(statearr_28439[(1)] = (1));

return statearr_28439;
});
var cljs$core$async$mult_$_state_machine__27530__auto____1 = (function (state_28358){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28440){if((e28440 instanceof Object)){
var ex__27533__auto__ = e28440;
var statearr_28441_28498 = state_28358;
(statearr_28441_28498[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28499 = state_28358;
state_28358 = G__28499;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27530__auto__ = function(state_28358){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27530__auto____1.call(this,state_28358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27530__auto____0;
cljs$core$async$mult_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27530__auto____1;
return cljs$core$async$mult_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___28443,cs,m,dchan,dctr,done))
})();
var state__27626__auto__ = (function (){var statearr_28442 = f__27625__auto__.call(null);
(statearr_28442[(6)] = c__27624__auto___28443);

return statearr_28442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___28443,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28501 = arguments.length;
switch (G__28501) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28513 = arguments.length;
var i__4731__auto___28514 = (0);
while(true){
if((i__4731__auto___28514 < len__4730__auto___28513)){
args__4736__auto__.push((arguments[i__4731__auto___28514]));

var G__28515 = (i__4731__auto___28514 + (1));
i__4731__auto___28514 = G__28515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28507){
var map__28508 = p__28507;
var map__28508__$1 = (((((!((map__28508 == null))))?(((((map__28508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28508):map__28508);
var opts = map__28508__$1;
var statearr_28510_28516 = state;
(statearr_28510_28516[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__28508,map__28508__$1,opts){
return (function (val){
var statearr_28511_28517 = state;
(statearr_28511_28517[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28508,map__28508__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28512_28518 = state;
(statearr_28512_28518[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28503){
var G__28504 = cljs.core.first.call(null,seq28503);
var seq28503__$1 = cljs.core.next.call(null,seq28503);
var G__28505 = cljs.core.first.call(null,seq28503__$1);
var seq28503__$2 = cljs.core.next.call(null,seq28503__$1);
var G__28506 = cljs.core.first.call(null,seq28503__$2);
var seq28503__$3 = cljs.core.next.call(null,seq28503__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28504,G__28505,G__28506,seq28503__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28519 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28520){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28520 = meta28520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28521,meta28520__$1){
var self__ = this;
var _28521__$1 = this;
return (new cljs.core.async.t_cljs$core$async28519(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28520__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28521){
var self__ = this;
var _28521__$1 = this;
return self__.meta28520;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28520","meta28520",175290398,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28519";

cljs.core.async.t_cljs$core$async28519.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28519");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28519.
 */
cljs.core.async.__GT_t_cljs$core$async28519 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28519(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28520){
return (new cljs.core.async.t_cljs$core$async28519(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28520));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28519(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27624__auto___28683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___28683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___28683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28623){
var state_val_28624 = (state_28623[(1)]);
if((state_val_28624 === (7))){
var inst_28538 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28625_28684 = state_28623__$1;
(statearr_28625_28684[(2)] = inst_28538);

(statearr_28625_28684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (20))){
var inst_28550 = (state_28623[(7)]);
var state_28623__$1 = state_28623;
var statearr_28626_28685 = state_28623__$1;
(statearr_28626_28685[(2)] = inst_28550);

(statearr_28626_28685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (27))){
var state_28623__$1 = state_28623;
var statearr_28627_28686 = state_28623__$1;
(statearr_28627_28686[(2)] = null);

(statearr_28627_28686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (1))){
var inst_28525 = (state_28623[(8)]);
var inst_28525__$1 = calc_state.call(null);
var inst_28527 = (inst_28525__$1 == null);
var inst_28528 = cljs.core.not.call(null,inst_28527);
var state_28623__$1 = (function (){var statearr_28628 = state_28623;
(statearr_28628[(8)] = inst_28525__$1);

return statearr_28628;
})();
if(inst_28528){
var statearr_28629_28687 = state_28623__$1;
(statearr_28629_28687[(1)] = (2));

} else {
var statearr_28630_28688 = state_28623__$1;
(statearr_28630_28688[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (24))){
var inst_28574 = (state_28623[(9)]);
var inst_28583 = (state_28623[(10)]);
var inst_28597 = (state_28623[(11)]);
var inst_28597__$1 = inst_28574.call(null,inst_28583);
var state_28623__$1 = (function (){var statearr_28631 = state_28623;
(statearr_28631[(11)] = inst_28597__$1);

return statearr_28631;
})();
if(cljs.core.truth_(inst_28597__$1)){
var statearr_28632_28689 = state_28623__$1;
(statearr_28632_28689[(1)] = (29));

} else {
var statearr_28633_28690 = state_28623__$1;
(statearr_28633_28690[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (4))){
var inst_28541 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28541)){
var statearr_28634_28691 = state_28623__$1;
(statearr_28634_28691[(1)] = (8));

} else {
var statearr_28635_28692 = state_28623__$1;
(statearr_28635_28692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (15))){
var inst_28568 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28568)){
var statearr_28636_28693 = state_28623__$1;
(statearr_28636_28693[(1)] = (19));

} else {
var statearr_28637_28694 = state_28623__$1;
(statearr_28637_28694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (21))){
var inst_28573 = (state_28623[(12)]);
var inst_28573__$1 = (state_28623[(2)]);
var inst_28574 = cljs.core.get.call(null,inst_28573__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28575 = cljs.core.get.call(null,inst_28573__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28576 = cljs.core.get.call(null,inst_28573__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28623__$1 = (function (){var statearr_28638 = state_28623;
(statearr_28638[(9)] = inst_28574);

(statearr_28638[(12)] = inst_28573__$1);

(statearr_28638[(13)] = inst_28575);

return statearr_28638;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28623__$1,(22),inst_28576);
} else {
if((state_val_28624 === (31))){
var inst_28605 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28605)){
var statearr_28639_28695 = state_28623__$1;
(statearr_28639_28695[(1)] = (32));

} else {
var statearr_28640_28696 = state_28623__$1;
(statearr_28640_28696[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (32))){
var inst_28582 = (state_28623[(14)]);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28623__$1,(35),out,inst_28582);
} else {
if((state_val_28624 === (33))){
var inst_28573 = (state_28623[(12)]);
var inst_28550 = inst_28573;
var state_28623__$1 = (function (){var statearr_28641 = state_28623;
(statearr_28641[(7)] = inst_28550);

return statearr_28641;
})();
var statearr_28642_28697 = state_28623__$1;
(statearr_28642_28697[(2)] = null);

(statearr_28642_28697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (13))){
var inst_28550 = (state_28623[(7)]);
var inst_28557 = inst_28550.cljs$lang$protocol_mask$partition0$;
var inst_28558 = (inst_28557 & (64));
var inst_28559 = inst_28550.cljs$core$ISeq$;
var inst_28560 = (cljs.core.PROTOCOL_SENTINEL === inst_28559);
var inst_28561 = ((inst_28558) || (inst_28560));
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28561)){
var statearr_28643_28698 = state_28623__$1;
(statearr_28643_28698[(1)] = (16));

} else {
var statearr_28644_28699 = state_28623__$1;
(statearr_28644_28699[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (22))){
var inst_28582 = (state_28623[(14)]);
var inst_28583 = (state_28623[(10)]);
var inst_28581 = (state_28623[(2)]);
var inst_28582__$1 = cljs.core.nth.call(null,inst_28581,(0),null);
var inst_28583__$1 = cljs.core.nth.call(null,inst_28581,(1),null);
var inst_28584 = (inst_28582__$1 == null);
var inst_28585 = cljs.core._EQ_.call(null,inst_28583__$1,change);
var inst_28586 = ((inst_28584) || (inst_28585));
var state_28623__$1 = (function (){var statearr_28645 = state_28623;
(statearr_28645[(14)] = inst_28582__$1);

(statearr_28645[(10)] = inst_28583__$1);

return statearr_28645;
})();
if(cljs.core.truth_(inst_28586)){
var statearr_28646_28700 = state_28623__$1;
(statearr_28646_28700[(1)] = (23));

} else {
var statearr_28647_28701 = state_28623__$1;
(statearr_28647_28701[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (36))){
var inst_28573 = (state_28623[(12)]);
var inst_28550 = inst_28573;
var state_28623__$1 = (function (){var statearr_28648 = state_28623;
(statearr_28648[(7)] = inst_28550);

return statearr_28648;
})();
var statearr_28649_28702 = state_28623__$1;
(statearr_28649_28702[(2)] = null);

(statearr_28649_28702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (29))){
var inst_28597 = (state_28623[(11)]);
var state_28623__$1 = state_28623;
var statearr_28650_28703 = state_28623__$1;
(statearr_28650_28703[(2)] = inst_28597);

(statearr_28650_28703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (6))){
var state_28623__$1 = state_28623;
var statearr_28651_28704 = state_28623__$1;
(statearr_28651_28704[(2)] = false);

(statearr_28651_28704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (28))){
var inst_28593 = (state_28623[(2)]);
var inst_28594 = calc_state.call(null);
var inst_28550 = inst_28594;
var state_28623__$1 = (function (){var statearr_28652 = state_28623;
(statearr_28652[(7)] = inst_28550);

(statearr_28652[(15)] = inst_28593);

return statearr_28652;
})();
var statearr_28653_28705 = state_28623__$1;
(statearr_28653_28705[(2)] = null);

(statearr_28653_28705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (25))){
var inst_28619 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28654_28706 = state_28623__$1;
(statearr_28654_28706[(2)] = inst_28619);

(statearr_28654_28706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (34))){
var inst_28617 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28655_28707 = state_28623__$1;
(statearr_28655_28707[(2)] = inst_28617);

(statearr_28655_28707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (17))){
var state_28623__$1 = state_28623;
var statearr_28656_28708 = state_28623__$1;
(statearr_28656_28708[(2)] = false);

(statearr_28656_28708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (3))){
var state_28623__$1 = state_28623;
var statearr_28657_28709 = state_28623__$1;
(statearr_28657_28709[(2)] = false);

(statearr_28657_28709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (12))){
var inst_28621 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28623__$1,inst_28621);
} else {
if((state_val_28624 === (2))){
var inst_28525 = (state_28623[(8)]);
var inst_28530 = inst_28525.cljs$lang$protocol_mask$partition0$;
var inst_28531 = (inst_28530 & (64));
var inst_28532 = inst_28525.cljs$core$ISeq$;
var inst_28533 = (cljs.core.PROTOCOL_SENTINEL === inst_28532);
var inst_28534 = ((inst_28531) || (inst_28533));
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28534)){
var statearr_28658_28710 = state_28623__$1;
(statearr_28658_28710[(1)] = (5));

} else {
var statearr_28659_28711 = state_28623__$1;
(statearr_28659_28711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (23))){
var inst_28582 = (state_28623[(14)]);
var inst_28588 = (inst_28582 == null);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28588)){
var statearr_28660_28712 = state_28623__$1;
(statearr_28660_28712[(1)] = (26));

} else {
var statearr_28661_28713 = state_28623__$1;
(statearr_28661_28713[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (35))){
var inst_28608 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28608)){
var statearr_28662_28714 = state_28623__$1;
(statearr_28662_28714[(1)] = (36));

} else {
var statearr_28663_28715 = state_28623__$1;
(statearr_28663_28715[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (19))){
var inst_28550 = (state_28623[(7)]);
var inst_28570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28550);
var state_28623__$1 = state_28623;
var statearr_28664_28716 = state_28623__$1;
(statearr_28664_28716[(2)] = inst_28570);

(statearr_28664_28716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (11))){
var inst_28550 = (state_28623[(7)]);
var inst_28554 = (inst_28550 == null);
var inst_28555 = cljs.core.not.call(null,inst_28554);
var state_28623__$1 = state_28623;
if(inst_28555){
var statearr_28665_28717 = state_28623__$1;
(statearr_28665_28717[(1)] = (13));

} else {
var statearr_28666_28718 = state_28623__$1;
(statearr_28666_28718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (9))){
var inst_28525 = (state_28623[(8)]);
var state_28623__$1 = state_28623;
var statearr_28667_28719 = state_28623__$1;
(statearr_28667_28719[(2)] = inst_28525);

(statearr_28667_28719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (5))){
var state_28623__$1 = state_28623;
var statearr_28668_28720 = state_28623__$1;
(statearr_28668_28720[(2)] = true);

(statearr_28668_28720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (14))){
var state_28623__$1 = state_28623;
var statearr_28669_28721 = state_28623__$1;
(statearr_28669_28721[(2)] = false);

(statearr_28669_28721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (26))){
var inst_28583 = (state_28623[(10)]);
var inst_28590 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28583);
var state_28623__$1 = state_28623;
var statearr_28670_28722 = state_28623__$1;
(statearr_28670_28722[(2)] = inst_28590);

(statearr_28670_28722[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (16))){
var state_28623__$1 = state_28623;
var statearr_28671_28723 = state_28623__$1;
(statearr_28671_28723[(2)] = true);

(statearr_28671_28723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (38))){
var inst_28613 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28672_28724 = state_28623__$1;
(statearr_28672_28724[(2)] = inst_28613);

(statearr_28672_28724[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (30))){
var inst_28574 = (state_28623[(9)]);
var inst_28575 = (state_28623[(13)]);
var inst_28583 = (state_28623[(10)]);
var inst_28600 = cljs.core.empty_QMARK_.call(null,inst_28574);
var inst_28601 = inst_28575.call(null,inst_28583);
var inst_28602 = cljs.core.not.call(null,inst_28601);
var inst_28603 = ((inst_28600) && (inst_28602));
var state_28623__$1 = state_28623;
var statearr_28673_28725 = state_28623__$1;
(statearr_28673_28725[(2)] = inst_28603);

(statearr_28673_28725[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (10))){
var inst_28525 = (state_28623[(8)]);
var inst_28546 = (state_28623[(2)]);
var inst_28547 = cljs.core.get.call(null,inst_28546,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28548 = cljs.core.get.call(null,inst_28546,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28549 = cljs.core.get.call(null,inst_28546,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28550 = inst_28525;
var state_28623__$1 = (function (){var statearr_28674 = state_28623;
(statearr_28674[(16)] = inst_28547);

(statearr_28674[(17)] = inst_28548);

(statearr_28674[(7)] = inst_28550);

(statearr_28674[(18)] = inst_28549);

return statearr_28674;
})();
var statearr_28675_28726 = state_28623__$1;
(statearr_28675_28726[(2)] = null);

(statearr_28675_28726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (18))){
var inst_28565 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28676_28727 = state_28623__$1;
(statearr_28676_28727[(2)] = inst_28565);

(statearr_28676_28727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (37))){
var state_28623__$1 = state_28623;
var statearr_28677_28728 = state_28623__$1;
(statearr_28677_28728[(2)] = null);

(statearr_28677_28728[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (8))){
var inst_28525 = (state_28623[(8)]);
var inst_28543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28525);
var state_28623__$1 = state_28623;
var statearr_28678_28729 = state_28623__$1;
(statearr_28678_28729[(2)] = inst_28543);

(statearr_28678_28729[(1)] = (10));


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
});})(c__27624__auto___28683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27529__auto__,c__27624__auto___28683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27530__auto__ = null;
var cljs$core$async$mix_$_state_machine__27530__auto____0 = (function (){
var statearr_28679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28679[(0)] = cljs$core$async$mix_$_state_machine__27530__auto__);

(statearr_28679[(1)] = (1));

return statearr_28679;
});
var cljs$core$async$mix_$_state_machine__27530__auto____1 = (function (state_28623){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28680){if((e28680 instanceof Object)){
var ex__27533__auto__ = e28680;
var statearr_28681_28730 = state_28623;
(statearr_28681_28730[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28731 = state_28623;
state_28623 = G__28731;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27530__auto__ = function(state_28623){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27530__auto____1.call(this,state_28623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27530__auto____0;
cljs$core$async$mix_$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27530__auto____1;
return cljs$core$async$mix_$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___28683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27626__auto__ = (function (){var statearr_28682 = f__27625__auto__.call(null);
(statearr_28682[(6)] = c__27624__auto___28683);

return statearr_28682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___28683,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28733 = arguments.length;
switch (G__28733) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28737 = arguments.length;
switch (G__28737) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__28735_SHARP_){
if(cljs.core.truth_(p1__28735_SHARP_.call(null,topic))){
return p1__28735_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28735_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28738 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28739){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28739 = meta28739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28740,meta28739__$1){
var self__ = this;
var _28740__$1 = this;
return (new cljs.core.async.t_cljs$core$async28738(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28739__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28740){
var self__ = this;
var _28740__$1 = this;
return self__.meta28739;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28739","meta28739",-1923473298,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28738";

cljs.core.async.t_cljs$core$async28738.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28738");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28738.
 */
cljs.core.async.__GT_t_cljs$core$async28738 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28738(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28739){
return (new cljs.core.async.t_cljs$core$async28738(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28739));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28738(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27624__auto___28858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___28858,mults,ensure_mult,p){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___28858,mults,ensure_mult,p){
return (function (state_28812){
var state_val_28813 = (state_28812[(1)]);
if((state_val_28813 === (7))){
var inst_28808 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28814_28859 = state_28812__$1;
(statearr_28814_28859[(2)] = inst_28808);

(statearr_28814_28859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (20))){
var state_28812__$1 = state_28812;
var statearr_28815_28860 = state_28812__$1;
(statearr_28815_28860[(2)] = null);

(statearr_28815_28860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (1))){
var state_28812__$1 = state_28812;
var statearr_28816_28861 = state_28812__$1;
(statearr_28816_28861[(2)] = null);

(statearr_28816_28861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (24))){
var inst_28791 = (state_28812[(7)]);
var inst_28800 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28791);
var state_28812__$1 = state_28812;
var statearr_28817_28862 = state_28812__$1;
(statearr_28817_28862[(2)] = inst_28800);

(statearr_28817_28862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (4))){
var inst_28743 = (state_28812[(8)]);
var inst_28743__$1 = (state_28812[(2)]);
var inst_28744 = (inst_28743__$1 == null);
var state_28812__$1 = (function (){var statearr_28818 = state_28812;
(statearr_28818[(8)] = inst_28743__$1);

return statearr_28818;
})();
if(cljs.core.truth_(inst_28744)){
var statearr_28819_28863 = state_28812__$1;
(statearr_28819_28863[(1)] = (5));

} else {
var statearr_28820_28864 = state_28812__$1;
(statearr_28820_28864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (15))){
var inst_28785 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28821_28865 = state_28812__$1;
(statearr_28821_28865[(2)] = inst_28785);

(statearr_28821_28865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (21))){
var inst_28805 = (state_28812[(2)]);
var state_28812__$1 = (function (){var statearr_28822 = state_28812;
(statearr_28822[(9)] = inst_28805);

return statearr_28822;
})();
var statearr_28823_28866 = state_28812__$1;
(statearr_28823_28866[(2)] = null);

(statearr_28823_28866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (13))){
var inst_28767 = (state_28812[(10)]);
var inst_28769 = cljs.core.chunked_seq_QMARK_.call(null,inst_28767);
var state_28812__$1 = state_28812;
if(inst_28769){
var statearr_28824_28867 = state_28812__$1;
(statearr_28824_28867[(1)] = (16));

} else {
var statearr_28825_28868 = state_28812__$1;
(statearr_28825_28868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (22))){
var inst_28797 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
if(cljs.core.truth_(inst_28797)){
var statearr_28826_28869 = state_28812__$1;
(statearr_28826_28869[(1)] = (23));

} else {
var statearr_28827_28870 = state_28812__$1;
(statearr_28827_28870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (6))){
var inst_28793 = (state_28812[(11)]);
var inst_28791 = (state_28812[(7)]);
var inst_28743 = (state_28812[(8)]);
var inst_28791__$1 = topic_fn.call(null,inst_28743);
var inst_28792 = cljs.core.deref.call(null,mults);
var inst_28793__$1 = cljs.core.get.call(null,inst_28792,inst_28791__$1);
var state_28812__$1 = (function (){var statearr_28828 = state_28812;
(statearr_28828[(11)] = inst_28793__$1);

(statearr_28828[(7)] = inst_28791__$1);

return statearr_28828;
})();
if(cljs.core.truth_(inst_28793__$1)){
var statearr_28829_28871 = state_28812__$1;
(statearr_28829_28871[(1)] = (19));

} else {
var statearr_28830_28872 = state_28812__$1;
(statearr_28830_28872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (25))){
var inst_28802 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28831_28873 = state_28812__$1;
(statearr_28831_28873[(2)] = inst_28802);

(statearr_28831_28873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (17))){
var inst_28767 = (state_28812[(10)]);
var inst_28776 = cljs.core.first.call(null,inst_28767);
var inst_28777 = cljs.core.async.muxch_STAR_.call(null,inst_28776);
var inst_28778 = cljs.core.async.close_BANG_.call(null,inst_28777);
var inst_28779 = cljs.core.next.call(null,inst_28767);
var inst_28753 = inst_28779;
var inst_28754 = null;
var inst_28755 = (0);
var inst_28756 = (0);
var state_28812__$1 = (function (){var statearr_28832 = state_28812;
(statearr_28832[(12)] = inst_28754);

(statearr_28832[(13)] = inst_28756);

(statearr_28832[(14)] = inst_28778);

(statearr_28832[(15)] = inst_28753);

(statearr_28832[(16)] = inst_28755);

return statearr_28832;
})();
var statearr_28833_28874 = state_28812__$1;
(statearr_28833_28874[(2)] = null);

(statearr_28833_28874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (3))){
var inst_28810 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28812__$1,inst_28810);
} else {
if((state_val_28813 === (12))){
var inst_28787 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28834_28875 = state_28812__$1;
(statearr_28834_28875[(2)] = inst_28787);

(statearr_28834_28875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (2))){
var state_28812__$1 = state_28812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28812__$1,(4),ch);
} else {
if((state_val_28813 === (23))){
var state_28812__$1 = state_28812;
var statearr_28835_28876 = state_28812__$1;
(statearr_28835_28876[(2)] = null);

(statearr_28835_28876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (19))){
var inst_28793 = (state_28812[(11)]);
var inst_28743 = (state_28812[(8)]);
var inst_28795 = cljs.core.async.muxch_STAR_.call(null,inst_28793);
var state_28812__$1 = state_28812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28812__$1,(22),inst_28795,inst_28743);
} else {
if((state_val_28813 === (11))){
var inst_28753 = (state_28812[(15)]);
var inst_28767 = (state_28812[(10)]);
var inst_28767__$1 = cljs.core.seq.call(null,inst_28753);
var state_28812__$1 = (function (){var statearr_28836 = state_28812;
(statearr_28836[(10)] = inst_28767__$1);

return statearr_28836;
})();
if(inst_28767__$1){
var statearr_28837_28877 = state_28812__$1;
(statearr_28837_28877[(1)] = (13));

} else {
var statearr_28838_28878 = state_28812__$1;
(statearr_28838_28878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (9))){
var inst_28789 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28839_28879 = state_28812__$1;
(statearr_28839_28879[(2)] = inst_28789);

(statearr_28839_28879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (5))){
var inst_28750 = cljs.core.deref.call(null,mults);
var inst_28751 = cljs.core.vals.call(null,inst_28750);
var inst_28752 = cljs.core.seq.call(null,inst_28751);
var inst_28753 = inst_28752;
var inst_28754 = null;
var inst_28755 = (0);
var inst_28756 = (0);
var state_28812__$1 = (function (){var statearr_28840 = state_28812;
(statearr_28840[(12)] = inst_28754);

(statearr_28840[(13)] = inst_28756);

(statearr_28840[(15)] = inst_28753);

(statearr_28840[(16)] = inst_28755);

return statearr_28840;
})();
var statearr_28841_28880 = state_28812__$1;
(statearr_28841_28880[(2)] = null);

(statearr_28841_28880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (14))){
var state_28812__$1 = state_28812;
var statearr_28845_28881 = state_28812__$1;
(statearr_28845_28881[(2)] = null);

(statearr_28845_28881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (16))){
var inst_28767 = (state_28812[(10)]);
var inst_28771 = cljs.core.chunk_first.call(null,inst_28767);
var inst_28772 = cljs.core.chunk_rest.call(null,inst_28767);
var inst_28773 = cljs.core.count.call(null,inst_28771);
var inst_28753 = inst_28772;
var inst_28754 = inst_28771;
var inst_28755 = inst_28773;
var inst_28756 = (0);
var state_28812__$1 = (function (){var statearr_28846 = state_28812;
(statearr_28846[(12)] = inst_28754);

(statearr_28846[(13)] = inst_28756);

(statearr_28846[(15)] = inst_28753);

(statearr_28846[(16)] = inst_28755);

return statearr_28846;
})();
var statearr_28847_28882 = state_28812__$1;
(statearr_28847_28882[(2)] = null);

(statearr_28847_28882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (10))){
var inst_28754 = (state_28812[(12)]);
var inst_28756 = (state_28812[(13)]);
var inst_28753 = (state_28812[(15)]);
var inst_28755 = (state_28812[(16)]);
var inst_28761 = cljs.core._nth.call(null,inst_28754,inst_28756);
var inst_28762 = cljs.core.async.muxch_STAR_.call(null,inst_28761);
var inst_28763 = cljs.core.async.close_BANG_.call(null,inst_28762);
var inst_28764 = (inst_28756 + (1));
var tmp28842 = inst_28754;
var tmp28843 = inst_28753;
var tmp28844 = inst_28755;
var inst_28753__$1 = tmp28843;
var inst_28754__$1 = tmp28842;
var inst_28755__$1 = tmp28844;
var inst_28756__$1 = inst_28764;
var state_28812__$1 = (function (){var statearr_28848 = state_28812;
(statearr_28848[(12)] = inst_28754__$1);

(statearr_28848[(13)] = inst_28756__$1);

(statearr_28848[(15)] = inst_28753__$1);

(statearr_28848[(17)] = inst_28763);

(statearr_28848[(16)] = inst_28755__$1);

return statearr_28848;
})();
var statearr_28849_28883 = state_28812__$1;
(statearr_28849_28883[(2)] = null);

(statearr_28849_28883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (18))){
var inst_28782 = (state_28812[(2)]);
var state_28812__$1 = state_28812;
var statearr_28850_28884 = state_28812__$1;
(statearr_28850_28884[(2)] = inst_28782);

(statearr_28850_28884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28813 === (8))){
var inst_28756 = (state_28812[(13)]);
var inst_28755 = (state_28812[(16)]);
var inst_28758 = (inst_28756 < inst_28755);
var inst_28759 = inst_28758;
var state_28812__$1 = state_28812;
if(cljs.core.truth_(inst_28759)){
var statearr_28851_28885 = state_28812__$1;
(statearr_28851_28885[(1)] = (10));

} else {
var statearr_28852_28886 = state_28812__$1;
(statearr_28852_28886[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__27624__auto___28858,mults,ensure_mult,p))
;
return ((function (switch__27529__auto__,c__27624__auto___28858,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_28853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28853[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_28853[(1)] = (1));

return statearr_28853;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_28812){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28854){if((e28854 instanceof Object)){
var ex__27533__auto__ = e28854;
var statearr_28855_28887 = state_28812;
(statearr_28855_28887[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28888 = state_28812;
state_28812 = G__28888;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_28812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_28812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___28858,mults,ensure_mult,p))
})();
var state__27626__auto__ = (function (){var statearr_28856 = f__27625__auto__.call(null);
(statearr_28856[(6)] = c__27624__auto___28858);

return statearr_28856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___28858,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28890 = arguments.length;
switch (G__28890) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28893 = arguments.length;
switch (G__28893) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28896 = arguments.length;
switch (G__28896) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27624__auto___28963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28935){
var state_val_28936 = (state_28935[(1)]);
if((state_val_28936 === (7))){
var state_28935__$1 = state_28935;
var statearr_28937_28964 = state_28935__$1;
(statearr_28937_28964[(2)] = null);

(statearr_28937_28964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (1))){
var state_28935__$1 = state_28935;
var statearr_28938_28965 = state_28935__$1;
(statearr_28938_28965[(2)] = null);

(statearr_28938_28965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (4))){
var inst_28899 = (state_28935[(7)]);
var inst_28901 = (inst_28899 < cnt);
var state_28935__$1 = state_28935;
if(cljs.core.truth_(inst_28901)){
var statearr_28939_28966 = state_28935__$1;
(statearr_28939_28966[(1)] = (6));

} else {
var statearr_28940_28967 = state_28935__$1;
(statearr_28940_28967[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (15))){
var inst_28931 = (state_28935[(2)]);
var state_28935__$1 = state_28935;
var statearr_28941_28968 = state_28935__$1;
(statearr_28941_28968[(2)] = inst_28931);

(statearr_28941_28968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (13))){
var inst_28924 = cljs.core.async.close_BANG_.call(null,out);
var state_28935__$1 = state_28935;
var statearr_28942_28969 = state_28935__$1;
(statearr_28942_28969[(2)] = inst_28924);

(statearr_28942_28969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (6))){
var state_28935__$1 = state_28935;
var statearr_28943_28970 = state_28935__$1;
(statearr_28943_28970[(2)] = null);

(statearr_28943_28970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (3))){
var inst_28933 = (state_28935[(2)]);
var state_28935__$1 = state_28935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28935__$1,inst_28933);
} else {
if((state_val_28936 === (12))){
var inst_28921 = (state_28935[(8)]);
var inst_28921__$1 = (state_28935[(2)]);
var inst_28922 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28921__$1);
var state_28935__$1 = (function (){var statearr_28944 = state_28935;
(statearr_28944[(8)] = inst_28921__$1);

return statearr_28944;
})();
if(cljs.core.truth_(inst_28922)){
var statearr_28945_28971 = state_28935__$1;
(statearr_28945_28971[(1)] = (13));

} else {
var statearr_28946_28972 = state_28935__$1;
(statearr_28946_28972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (2))){
var inst_28898 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28899 = (0);
var state_28935__$1 = (function (){var statearr_28947 = state_28935;
(statearr_28947[(9)] = inst_28898);

(statearr_28947[(7)] = inst_28899);

return statearr_28947;
})();
var statearr_28948_28973 = state_28935__$1;
(statearr_28948_28973[(2)] = null);

(statearr_28948_28973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (11))){
var inst_28899 = (state_28935[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28935,(10),Object,null,(9));
var inst_28908 = chs__$1.call(null,inst_28899);
var inst_28909 = done.call(null,inst_28899);
var inst_28910 = cljs.core.async.take_BANG_.call(null,inst_28908,inst_28909);
var state_28935__$1 = state_28935;
var statearr_28949_28974 = state_28935__$1;
(statearr_28949_28974[(2)] = inst_28910);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (9))){
var inst_28899 = (state_28935[(7)]);
var inst_28912 = (state_28935[(2)]);
var inst_28913 = (inst_28899 + (1));
var inst_28899__$1 = inst_28913;
var state_28935__$1 = (function (){var statearr_28950 = state_28935;
(statearr_28950[(10)] = inst_28912);

(statearr_28950[(7)] = inst_28899__$1);

return statearr_28950;
})();
var statearr_28951_28975 = state_28935__$1;
(statearr_28951_28975[(2)] = null);

(statearr_28951_28975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (5))){
var inst_28919 = (state_28935[(2)]);
var state_28935__$1 = (function (){var statearr_28952 = state_28935;
(statearr_28952[(11)] = inst_28919);

return statearr_28952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28935__$1,(12),dchan);
} else {
if((state_val_28936 === (14))){
var inst_28921 = (state_28935[(8)]);
var inst_28926 = cljs.core.apply.call(null,f,inst_28921);
var state_28935__$1 = state_28935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28935__$1,(16),out,inst_28926);
} else {
if((state_val_28936 === (16))){
var inst_28928 = (state_28935[(2)]);
var state_28935__$1 = (function (){var statearr_28953 = state_28935;
(statearr_28953[(12)] = inst_28928);

return statearr_28953;
})();
var statearr_28954_28976 = state_28935__$1;
(statearr_28954_28976[(2)] = null);

(statearr_28954_28976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (10))){
var inst_28903 = (state_28935[(2)]);
var inst_28904 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28935__$1 = (function (){var statearr_28955 = state_28935;
(statearr_28955[(13)] = inst_28903);

return statearr_28955;
})();
var statearr_28956_28977 = state_28935__$1;
(statearr_28956_28977[(2)] = inst_28904);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28936 === (8))){
var inst_28917 = (state_28935[(2)]);
var state_28935__$1 = state_28935;
var statearr_28957_28978 = state_28935__$1;
(statearr_28957_28978[(2)] = inst_28917);

(statearr_28957_28978[(1)] = (5));


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
});})(c__27624__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27529__auto__,c__27624__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_28958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28958[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_28958[(1)] = (1));

return statearr_28958;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_28935){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_28935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e28959){if((e28959 instanceof Object)){
var ex__27533__auto__ = e28959;
var statearr_28960_28979 = state_28935;
(statearr_28960_28979[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28980 = state_28935;
state_28935 = G__28980;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_28935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_28935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27626__auto__ = (function (){var statearr_28961 = f__27625__auto__.call(null);
(statearr_28961[(6)] = c__27624__auto___28963);

return statearr_28961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28983 = arguments.length;
switch (G__28983) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27624__auto___29037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___29037,out){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___29037,out){
return (function (state_29015){
var state_val_29016 = (state_29015[(1)]);
if((state_val_29016 === (7))){
var inst_28994 = (state_29015[(7)]);
var inst_28995 = (state_29015[(8)]);
var inst_28994__$1 = (state_29015[(2)]);
var inst_28995__$1 = cljs.core.nth.call(null,inst_28994__$1,(0),null);
var inst_28996 = cljs.core.nth.call(null,inst_28994__$1,(1),null);
var inst_28997 = (inst_28995__$1 == null);
var state_29015__$1 = (function (){var statearr_29017 = state_29015;
(statearr_29017[(9)] = inst_28996);

(statearr_29017[(7)] = inst_28994__$1);

(statearr_29017[(8)] = inst_28995__$1);

return statearr_29017;
})();
if(cljs.core.truth_(inst_28997)){
var statearr_29018_29038 = state_29015__$1;
(statearr_29018_29038[(1)] = (8));

} else {
var statearr_29019_29039 = state_29015__$1;
(statearr_29019_29039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (1))){
var inst_28984 = cljs.core.vec.call(null,chs);
var inst_28985 = inst_28984;
var state_29015__$1 = (function (){var statearr_29020 = state_29015;
(statearr_29020[(10)] = inst_28985);

return statearr_29020;
})();
var statearr_29021_29040 = state_29015__$1;
(statearr_29021_29040[(2)] = null);

(statearr_29021_29040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (4))){
var inst_28985 = (state_29015[(10)]);
var state_29015__$1 = state_29015;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29015__$1,(7),inst_28985);
} else {
if((state_val_29016 === (6))){
var inst_29011 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29022_29041 = state_29015__$1;
(statearr_29022_29041[(2)] = inst_29011);

(statearr_29022_29041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (3))){
var inst_29013 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else {
if((state_val_29016 === (2))){
var inst_28985 = (state_29015[(10)]);
var inst_28987 = cljs.core.count.call(null,inst_28985);
var inst_28988 = (inst_28987 > (0));
var state_29015__$1 = state_29015;
if(cljs.core.truth_(inst_28988)){
var statearr_29024_29042 = state_29015__$1;
(statearr_29024_29042[(1)] = (4));

} else {
var statearr_29025_29043 = state_29015__$1;
(statearr_29025_29043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (11))){
var inst_28985 = (state_29015[(10)]);
var inst_29004 = (state_29015[(2)]);
var tmp29023 = inst_28985;
var inst_28985__$1 = tmp29023;
var state_29015__$1 = (function (){var statearr_29026 = state_29015;
(statearr_29026[(11)] = inst_29004);

(statearr_29026[(10)] = inst_28985__$1);

return statearr_29026;
})();
var statearr_29027_29044 = state_29015__$1;
(statearr_29027_29044[(2)] = null);

(statearr_29027_29044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (9))){
var inst_28995 = (state_29015[(8)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29015__$1,(11),out,inst_28995);
} else {
if((state_val_29016 === (5))){
var inst_29009 = cljs.core.async.close_BANG_.call(null,out);
var state_29015__$1 = state_29015;
var statearr_29028_29045 = state_29015__$1;
(statearr_29028_29045[(2)] = inst_29009);

(statearr_29028_29045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (10))){
var inst_29007 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29029_29046 = state_29015__$1;
(statearr_29029_29046[(2)] = inst_29007);

(statearr_29029_29046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (8))){
var inst_28996 = (state_29015[(9)]);
var inst_28994 = (state_29015[(7)]);
var inst_28995 = (state_29015[(8)]);
var inst_28985 = (state_29015[(10)]);
var inst_28999 = (function (){var cs = inst_28985;
var vec__28990 = inst_28994;
var v = inst_28995;
var c = inst_28996;
return ((function (cs,vec__28990,v,c,inst_28996,inst_28994,inst_28995,inst_28985,state_val_29016,c__27624__auto___29037,out){
return (function (p1__28981_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28981_SHARP_);
});
;})(cs,vec__28990,v,c,inst_28996,inst_28994,inst_28995,inst_28985,state_val_29016,c__27624__auto___29037,out))
})();
var inst_29000 = cljs.core.filterv.call(null,inst_28999,inst_28985);
var inst_28985__$1 = inst_29000;
var state_29015__$1 = (function (){var statearr_29030 = state_29015;
(statearr_29030[(10)] = inst_28985__$1);

return statearr_29030;
})();
var statearr_29031_29047 = state_29015__$1;
(statearr_29031_29047[(2)] = null);

(statearr_29031_29047[(1)] = (2));


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
});})(c__27624__auto___29037,out))
;
return ((function (switch__27529__auto__,c__27624__auto___29037,out){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_29032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29032[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_29032[(1)] = (1));

return statearr_29032;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_29015){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29033){if((e29033 instanceof Object)){
var ex__27533__auto__ = e29033;
var statearr_29034_29048 = state_29015;
(statearr_29034_29048[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29049 = state_29015;
state_29015 = G__29049;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___29037,out))
})();
var state__27626__auto__ = (function (){var statearr_29035 = f__27625__auto__.call(null);
(statearr_29035[(6)] = c__27624__auto___29037);

return statearr_29035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___29037,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29051 = arguments.length;
switch (G__29051) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27624__auto___29096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___29096,out){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___29096,out){
return (function (state_29075){
var state_val_29076 = (state_29075[(1)]);
if((state_val_29076 === (7))){
var inst_29057 = (state_29075[(7)]);
var inst_29057__$1 = (state_29075[(2)]);
var inst_29058 = (inst_29057__$1 == null);
var inst_29059 = cljs.core.not.call(null,inst_29058);
var state_29075__$1 = (function (){var statearr_29077 = state_29075;
(statearr_29077[(7)] = inst_29057__$1);

return statearr_29077;
})();
if(inst_29059){
var statearr_29078_29097 = state_29075__$1;
(statearr_29078_29097[(1)] = (8));

} else {
var statearr_29079_29098 = state_29075__$1;
(statearr_29079_29098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (1))){
var inst_29052 = (0);
var state_29075__$1 = (function (){var statearr_29080 = state_29075;
(statearr_29080[(8)] = inst_29052);

return statearr_29080;
})();
var statearr_29081_29099 = state_29075__$1;
(statearr_29081_29099[(2)] = null);

(statearr_29081_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (4))){
var state_29075__$1 = state_29075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29075__$1,(7),ch);
} else {
if((state_val_29076 === (6))){
var inst_29070 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29082_29100 = state_29075__$1;
(statearr_29082_29100[(2)] = inst_29070);

(statearr_29082_29100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (3))){
var inst_29072 = (state_29075[(2)]);
var inst_29073 = cljs.core.async.close_BANG_.call(null,out);
var state_29075__$1 = (function (){var statearr_29083 = state_29075;
(statearr_29083[(9)] = inst_29072);

return statearr_29083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29075__$1,inst_29073);
} else {
if((state_val_29076 === (2))){
var inst_29052 = (state_29075[(8)]);
var inst_29054 = (inst_29052 < n);
var state_29075__$1 = state_29075;
if(cljs.core.truth_(inst_29054)){
var statearr_29084_29101 = state_29075__$1;
(statearr_29084_29101[(1)] = (4));

} else {
var statearr_29085_29102 = state_29075__$1;
(statearr_29085_29102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (11))){
var inst_29052 = (state_29075[(8)]);
var inst_29062 = (state_29075[(2)]);
var inst_29063 = (inst_29052 + (1));
var inst_29052__$1 = inst_29063;
var state_29075__$1 = (function (){var statearr_29086 = state_29075;
(statearr_29086[(10)] = inst_29062);

(statearr_29086[(8)] = inst_29052__$1);

return statearr_29086;
})();
var statearr_29087_29103 = state_29075__$1;
(statearr_29087_29103[(2)] = null);

(statearr_29087_29103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (9))){
var state_29075__$1 = state_29075;
var statearr_29088_29104 = state_29075__$1;
(statearr_29088_29104[(2)] = null);

(statearr_29088_29104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (5))){
var state_29075__$1 = state_29075;
var statearr_29089_29105 = state_29075__$1;
(statearr_29089_29105[(2)] = null);

(statearr_29089_29105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (10))){
var inst_29067 = (state_29075[(2)]);
var state_29075__$1 = state_29075;
var statearr_29090_29106 = state_29075__$1;
(statearr_29090_29106[(2)] = inst_29067);

(statearr_29090_29106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29076 === (8))){
var inst_29057 = (state_29075[(7)]);
var state_29075__$1 = state_29075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29075__$1,(11),out,inst_29057);
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
});})(c__27624__auto___29096,out))
;
return ((function (switch__27529__auto__,c__27624__auto___29096,out){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_29091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29091[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_29091[(1)] = (1));

return statearr_29091;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_29075){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29092){if((e29092 instanceof Object)){
var ex__27533__auto__ = e29092;
var statearr_29093_29107 = state_29075;
(statearr_29093_29107[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29108 = state_29075;
state_29075 = G__29108;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_29075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_29075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___29096,out))
})();
var state__27626__auto__ = (function (){var statearr_29094 = f__27625__auto__.call(null);
(statearr_29094[(6)] = c__27624__auto___29096);

return statearr_29094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___29096,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29110 = (function (f,ch,meta29111){
this.f = f;
this.ch = ch;
this.meta29111 = meta29111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29112,meta29111__$1){
var self__ = this;
var _29112__$1 = this;
return (new cljs.core.async.t_cljs$core$async29110(self__.f,self__.ch,meta29111__$1));
});

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29112){
var self__ = this;
var _29112__$1 = this;
return self__.meta29111;
});

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29113 = (function (f,ch,meta29111,_,fn1,meta29114){
this.f = f;
this.ch = ch;
this.meta29111 = meta29111;
this._ = _;
this.fn1 = fn1;
this.meta29114 = meta29114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29115,meta29114__$1){
var self__ = this;
var _29115__$1 = this;
return (new cljs.core.async.t_cljs$core$async29113(self__.f,self__.ch,self__.meta29111,self__._,self__.fn1,meta29114__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29115){
var self__ = this;
var _29115__$1 = this;
return self__.meta29114;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29109_SHARP_){
return f1.call(null,(((p1__29109_SHARP_ == null))?null:self__.f.call(null,p1__29109_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29113.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29111","meta29111",-163232455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29110","cljs.core.async/t_cljs$core$async29110",1885805568,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29114","meta29114",936232268,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29113";

cljs.core.async.t_cljs$core$async29113.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29113");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29113.
 */
cljs.core.async.__GT_t_cljs$core$async29113 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29113(f__$1,ch__$1,meta29111__$1,___$2,fn1__$1,meta29114){
return (new cljs.core.async.t_cljs$core$async29113(f__$1,ch__$1,meta29111__$1,___$2,fn1__$1,meta29114));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29113(self__.f,self__.ch,self__.meta29111,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29110.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29111","meta29111",-163232455,null)], null);
});

cljs.core.async.t_cljs$core$async29110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29110";

cljs.core.async.t_cljs$core$async29110.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29110");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29110.
 */
cljs.core.async.__GT_t_cljs$core$async29110 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29110(f__$1,ch__$1,meta29111){
return (new cljs.core.async.t_cljs$core$async29110(f__$1,ch__$1,meta29111));
});

}

return (new cljs.core.async.t_cljs$core$async29110(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29116 = (function (f,ch,meta29117){
this.f = f;
this.ch = ch;
this.meta29117 = meta29117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29118,meta29117__$1){
var self__ = this;
var _29118__$1 = this;
return (new cljs.core.async.t_cljs$core$async29116(self__.f,self__.ch,meta29117__$1));
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29118){
var self__ = this;
var _29118__$1 = this;
return self__.meta29117;
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29117","meta29117",-1265947973,null)], null);
});

cljs.core.async.t_cljs$core$async29116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29116";

cljs.core.async.t_cljs$core$async29116.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29116");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29116.
 */
cljs.core.async.__GT_t_cljs$core$async29116 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29116(f__$1,ch__$1,meta29117){
return (new cljs.core.async.t_cljs$core$async29116(f__$1,ch__$1,meta29117));
});

}

return (new cljs.core.async.t_cljs$core$async29116(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29119 = (function (p,ch,meta29120){
this.p = p;
this.ch = ch;
this.meta29120 = meta29120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29121,meta29120__$1){
var self__ = this;
var _29121__$1 = this;
return (new cljs.core.async.t_cljs$core$async29119(self__.p,self__.ch,meta29120__$1));
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29121){
var self__ = this;
var _29121__$1 = this;
return self__.meta29120;
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29120","meta29120",2073436530,null)], null);
});

cljs.core.async.t_cljs$core$async29119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29119";

cljs.core.async.t_cljs$core$async29119.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29119");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29119.
 */
cljs.core.async.__GT_t_cljs$core$async29119 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29119(p__$1,ch__$1,meta29120){
return (new cljs.core.async.t_cljs$core$async29119(p__$1,ch__$1,meta29120));
});

}

return (new cljs.core.async.t_cljs$core$async29119(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29123 = arguments.length;
switch (G__29123) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27624__auto___29163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___29163,out){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___29163,out){
return (function (state_29144){
var state_val_29145 = (state_29144[(1)]);
if((state_val_29145 === (7))){
var inst_29140 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29146_29164 = state_29144__$1;
(statearr_29146_29164[(2)] = inst_29140);

(statearr_29146_29164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (1))){
var state_29144__$1 = state_29144;
var statearr_29147_29165 = state_29144__$1;
(statearr_29147_29165[(2)] = null);

(statearr_29147_29165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (4))){
var inst_29126 = (state_29144[(7)]);
var inst_29126__$1 = (state_29144[(2)]);
var inst_29127 = (inst_29126__$1 == null);
var state_29144__$1 = (function (){var statearr_29148 = state_29144;
(statearr_29148[(7)] = inst_29126__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29127)){
var statearr_29149_29166 = state_29144__$1;
(statearr_29149_29166[(1)] = (5));

} else {
var statearr_29150_29167 = state_29144__$1;
(statearr_29150_29167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (6))){
var inst_29126 = (state_29144[(7)]);
var inst_29131 = p.call(null,inst_29126);
var state_29144__$1 = state_29144;
if(cljs.core.truth_(inst_29131)){
var statearr_29151_29168 = state_29144__$1;
(statearr_29151_29168[(1)] = (8));

} else {
var statearr_29152_29169 = state_29144__$1;
(statearr_29152_29169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (3))){
var inst_29142 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29144__$1,inst_29142);
} else {
if((state_val_29145 === (2))){
var state_29144__$1 = state_29144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29144__$1,(4),ch);
} else {
if((state_val_29145 === (11))){
var inst_29134 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29153_29170 = state_29144__$1;
(statearr_29153_29170[(2)] = inst_29134);

(statearr_29153_29170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (9))){
var state_29144__$1 = state_29144;
var statearr_29154_29171 = state_29144__$1;
(statearr_29154_29171[(2)] = null);

(statearr_29154_29171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (5))){
var inst_29129 = cljs.core.async.close_BANG_.call(null,out);
var state_29144__$1 = state_29144;
var statearr_29155_29172 = state_29144__$1;
(statearr_29155_29172[(2)] = inst_29129);

(statearr_29155_29172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (10))){
var inst_29137 = (state_29144[(2)]);
var state_29144__$1 = (function (){var statearr_29156 = state_29144;
(statearr_29156[(8)] = inst_29137);

return statearr_29156;
})();
var statearr_29157_29173 = state_29144__$1;
(statearr_29157_29173[(2)] = null);

(statearr_29157_29173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (8))){
var inst_29126 = (state_29144[(7)]);
var state_29144__$1 = state_29144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29144__$1,(11),out,inst_29126);
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
});})(c__27624__auto___29163,out))
;
return ((function (switch__27529__auto__,c__27624__auto___29163,out){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_29158 = [null,null,null,null,null,null,null,null,null];
(statearr_29158[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_29158[(1)] = (1));

return statearr_29158;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_29144){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29159){if((e29159 instanceof Object)){
var ex__27533__auto__ = e29159;
var statearr_29160_29174 = state_29144;
(statearr_29160_29174[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29175 = state_29144;
state_29144 = G__29175;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_29144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_29144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___29163,out))
})();
var state__27626__auto__ = (function (){var statearr_29161 = f__27625__auto__.call(null);
(statearr_29161[(6)] = c__27624__auto___29163);

return statearr_29161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___29163,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29177 = arguments.length;
switch (G__29177) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto__){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto__){
return (function (state_29240){
var state_val_29241 = (state_29240[(1)]);
if((state_val_29241 === (7))){
var inst_29236 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29242_29280 = state_29240__$1;
(statearr_29242_29280[(2)] = inst_29236);

(statearr_29242_29280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (20))){
var inst_29206 = (state_29240[(7)]);
var inst_29217 = (state_29240[(2)]);
var inst_29218 = cljs.core.next.call(null,inst_29206);
var inst_29192 = inst_29218;
var inst_29193 = null;
var inst_29194 = (0);
var inst_29195 = (0);
var state_29240__$1 = (function (){var statearr_29243 = state_29240;
(statearr_29243[(8)] = inst_29194);

(statearr_29243[(9)] = inst_29195);

(statearr_29243[(10)] = inst_29192);

(statearr_29243[(11)] = inst_29217);

(statearr_29243[(12)] = inst_29193);

return statearr_29243;
})();
var statearr_29244_29281 = state_29240__$1;
(statearr_29244_29281[(2)] = null);

(statearr_29244_29281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (1))){
var state_29240__$1 = state_29240;
var statearr_29245_29282 = state_29240__$1;
(statearr_29245_29282[(2)] = null);

(statearr_29245_29282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (4))){
var inst_29181 = (state_29240[(13)]);
var inst_29181__$1 = (state_29240[(2)]);
var inst_29182 = (inst_29181__$1 == null);
var state_29240__$1 = (function (){var statearr_29246 = state_29240;
(statearr_29246[(13)] = inst_29181__$1);

return statearr_29246;
})();
if(cljs.core.truth_(inst_29182)){
var statearr_29247_29283 = state_29240__$1;
(statearr_29247_29283[(1)] = (5));

} else {
var statearr_29248_29284 = state_29240__$1;
(statearr_29248_29284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (15))){
var state_29240__$1 = state_29240;
var statearr_29252_29285 = state_29240__$1;
(statearr_29252_29285[(2)] = null);

(statearr_29252_29285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (21))){
var state_29240__$1 = state_29240;
var statearr_29253_29286 = state_29240__$1;
(statearr_29253_29286[(2)] = null);

(statearr_29253_29286[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (13))){
var inst_29194 = (state_29240[(8)]);
var inst_29195 = (state_29240[(9)]);
var inst_29192 = (state_29240[(10)]);
var inst_29193 = (state_29240[(12)]);
var inst_29202 = (state_29240[(2)]);
var inst_29203 = (inst_29195 + (1));
var tmp29249 = inst_29194;
var tmp29250 = inst_29192;
var tmp29251 = inst_29193;
var inst_29192__$1 = tmp29250;
var inst_29193__$1 = tmp29251;
var inst_29194__$1 = tmp29249;
var inst_29195__$1 = inst_29203;
var state_29240__$1 = (function (){var statearr_29254 = state_29240;
(statearr_29254[(14)] = inst_29202);

(statearr_29254[(8)] = inst_29194__$1);

(statearr_29254[(9)] = inst_29195__$1);

(statearr_29254[(10)] = inst_29192__$1);

(statearr_29254[(12)] = inst_29193__$1);

return statearr_29254;
})();
var statearr_29255_29287 = state_29240__$1;
(statearr_29255_29287[(2)] = null);

(statearr_29255_29287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (22))){
var state_29240__$1 = state_29240;
var statearr_29256_29288 = state_29240__$1;
(statearr_29256_29288[(2)] = null);

(statearr_29256_29288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (6))){
var inst_29181 = (state_29240[(13)]);
var inst_29190 = f.call(null,inst_29181);
var inst_29191 = cljs.core.seq.call(null,inst_29190);
var inst_29192 = inst_29191;
var inst_29193 = null;
var inst_29194 = (0);
var inst_29195 = (0);
var state_29240__$1 = (function (){var statearr_29257 = state_29240;
(statearr_29257[(8)] = inst_29194);

(statearr_29257[(9)] = inst_29195);

(statearr_29257[(10)] = inst_29192);

(statearr_29257[(12)] = inst_29193);

return statearr_29257;
})();
var statearr_29258_29289 = state_29240__$1;
(statearr_29258_29289[(2)] = null);

(statearr_29258_29289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (17))){
var inst_29206 = (state_29240[(7)]);
var inst_29210 = cljs.core.chunk_first.call(null,inst_29206);
var inst_29211 = cljs.core.chunk_rest.call(null,inst_29206);
var inst_29212 = cljs.core.count.call(null,inst_29210);
var inst_29192 = inst_29211;
var inst_29193 = inst_29210;
var inst_29194 = inst_29212;
var inst_29195 = (0);
var state_29240__$1 = (function (){var statearr_29259 = state_29240;
(statearr_29259[(8)] = inst_29194);

(statearr_29259[(9)] = inst_29195);

(statearr_29259[(10)] = inst_29192);

(statearr_29259[(12)] = inst_29193);

return statearr_29259;
})();
var statearr_29260_29290 = state_29240__$1;
(statearr_29260_29290[(2)] = null);

(statearr_29260_29290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (3))){
var inst_29238 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29240__$1,inst_29238);
} else {
if((state_val_29241 === (12))){
var inst_29226 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29261_29291 = state_29240__$1;
(statearr_29261_29291[(2)] = inst_29226);

(statearr_29261_29291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (2))){
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29240__$1,(4),in$);
} else {
if((state_val_29241 === (23))){
var inst_29234 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29262_29292 = state_29240__$1;
(statearr_29262_29292[(2)] = inst_29234);

(statearr_29262_29292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (19))){
var inst_29221 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29263_29293 = state_29240__$1;
(statearr_29263_29293[(2)] = inst_29221);

(statearr_29263_29293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (11))){
var inst_29206 = (state_29240[(7)]);
var inst_29192 = (state_29240[(10)]);
var inst_29206__$1 = cljs.core.seq.call(null,inst_29192);
var state_29240__$1 = (function (){var statearr_29264 = state_29240;
(statearr_29264[(7)] = inst_29206__$1);

return statearr_29264;
})();
if(inst_29206__$1){
var statearr_29265_29294 = state_29240__$1;
(statearr_29265_29294[(1)] = (14));

} else {
var statearr_29266_29295 = state_29240__$1;
(statearr_29266_29295[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (9))){
var inst_29228 = (state_29240[(2)]);
var inst_29229 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29240__$1 = (function (){var statearr_29267 = state_29240;
(statearr_29267[(15)] = inst_29228);

return statearr_29267;
})();
if(cljs.core.truth_(inst_29229)){
var statearr_29268_29296 = state_29240__$1;
(statearr_29268_29296[(1)] = (21));

} else {
var statearr_29269_29297 = state_29240__$1;
(statearr_29269_29297[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (5))){
var inst_29184 = cljs.core.async.close_BANG_.call(null,out);
var state_29240__$1 = state_29240;
var statearr_29270_29298 = state_29240__$1;
(statearr_29270_29298[(2)] = inst_29184);

(statearr_29270_29298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (14))){
var inst_29206 = (state_29240[(7)]);
var inst_29208 = cljs.core.chunked_seq_QMARK_.call(null,inst_29206);
var state_29240__$1 = state_29240;
if(inst_29208){
var statearr_29271_29299 = state_29240__$1;
(statearr_29271_29299[(1)] = (17));

} else {
var statearr_29272_29300 = state_29240__$1;
(statearr_29272_29300[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (16))){
var inst_29224 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29273_29301 = state_29240__$1;
(statearr_29273_29301[(2)] = inst_29224);

(statearr_29273_29301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (10))){
var inst_29195 = (state_29240[(9)]);
var inst_29193 = (state_29240[(12)]);
var inst_29200 = cljs.core._nth.call(null,inst_29193,inst_29195);
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29240__$1,(13),out,inst_29200);
} else {
if((state_val_29241 === (18))){
var inst_29206 = (state_29240[(7)]);
var inst_29215 = cljs.core.first.call(null,inst_29206);
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29240__$1,(20),out,inst_29215);
} else {
if((state_val_29241 === (8))){
var inst_29194 = (state_29240[(8)]);
var inst_29195 = (state_29240[(9)]);
var inst_29197 = (inst_29195 < inst_29194);
var inst_29198 = inst_29197;
var state_29240__$1 = state_29240;
if(cljs.core.truth_(inst_29198)){
var statearr_29274_29302 = state_29240__$1;
(statearr_29274_29302[(1)] = (10));

} else {
var statearr_29275_29303 = state_29240__$1;
(statearr_29275_29303[(1)] = (11));

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
}
}
}
}
}
}
});})(c__27624__auto__))
;
return ((function (switch__27529__auto__,c__27624__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27530__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27530__auto____0 = (function (){
var statearr_29276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29276[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27530__auto__);

(statearr_29276[(1)] = (1));

return statearr_29276;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27530__auto____1 = (function (state_29240){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29277){if((e29277 instanceof Object)){
var ex__27533__auto__ = e29277;
var statearr_29278_29304 = state_29240;
(statearr_29278_29304[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29305 = state_29240;
state_29240 = G__29305;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27530__auto__ = function(state_29240){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27530__auto____1.call(this,state_29240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27530__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27530__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto__))
})();
var state__27626__auto__ = (function (){var statearr_29279 = f__27625__auto__.call(null);
(statearr_29279[(6)] = c__27624__auto__);

return statearr_29279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto__))
);

return c__27624__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29307 = arguments.length;
switch (G__29307) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29310 = arguments.length;
switch (G__29310) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29313 = arguments.length;
switch (G__29313) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27624__auto___29360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___29360,out){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___29360,out){
return (function (state_29337){
var state_val_29338 = (state_29337[(1)]);
if((state_val_29338 === (7))){
var inst_29332 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29339_29361 = state_29337__$1;
(statearr_29339_29361[(2)] = inst_29332);

(statearr_29339_29361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (1))){
var inst_29314 = null;
var state_29337__$1 = (function (){var statearr_29340 = state_29337;
(statearr_29340[(7)] = inst_29314);

return statearr_29340;
})();
var statearr_29341_29362 = state_29337__$1;
(statearr_29341_29362[(2)] = null);

(statearr_29341_29362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (4))){
var inst_29317 = (state_29337[(8)]);
var inst_29317__$1 = (state_29337[(2)]);
var inst_29318 = (inst_29317__$1 == null);
var inst_29319 = cljs.core.not.call(null,inst_29318);
var state_29337__$1 = (function (){var statearr_29342 = state_29337;
(statearr_29342[(8)] = inst_29317__$1);

return statearr_29342;
})();
if(inst_29319){
var statearr_29343_29363 = state_29337__$1;
(statearr_29343_29363[(1)] = (5));

} else {
var statearr_29344_29364 = state_29337__$1;
(statearr_29344_29364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (6))){
var state_29337__$1 = state_29337;
var statearr_29345_29365 = state_29337__$1;
(statearr_29345_29365[(2)] = null);

(statearr_29345_29365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (3))){
var inst_29334 = (state_29337[(2)]);
var inst_29335 = cljs.core.async.close_BANG_.call(null,out);
var state_29337__$1 = (function (){var statearr_29346 = state_29337;
(statearr_29346[(9)] = inst_29334);

return statearr_29346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29337__$1,inst_29335);
} else {
if((state_val_29338 === (2))){
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29337__$1,(4),ch);
} else {
if((state_val_29338 === (11))){
var inst_29317 = (state_29337[(8)]);
var inst_29326 = (state_29337[(2)]);
var inst_29314 = inst_29317;
var state_29337__$1 = (function (){var statearr_29347 = state_29337;
(statearr_29347[(7)] = inst_29314);

(statearr_29347[(10)] = inst_29326);

return statearr_29347;
})();
var statearr_29348_29366 = state_29337__$1;
(statearr_29348_29366[(2)] = null);

(statearr_29348_29366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (9))){
var inst_29317 = (state_29337[(8)]);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29337__$1,(11),out,inst_29317);
} else {
if((state_val_29338 === (5))){
var inst_29314 = (state_29337[(7)]);
var inst_29317 = (state_29337[(8)]);
var inst_29321 = cljs.core._EQ_.call(null,inst_29317,inst_29314);
var state_29337__$1 = state_29337;
if(inst_29321){
var statearr_29350_29367 = state_29337__$1;
(statearr_29350_29367[(1)] = (8));

} else {
var statearr_29351_29368 = state_29337__$1;
(statearr_29351_29368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (10))){
var inst_29329 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29352_29369 = state_29337__$1;
(statearr_29352_29369[(2)] = inst_29329);

(statearr_29352_29369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (8))){
var inst_29314 = (state_29337[(7)]);
var tmp29349 = inst_29314;
var inst_29314__$1 = tmp29349;
var state_29337__$1 = (function (){var statearr_29353 = state_29337;
(statearr_29353[(7)] = inst_29314__$1);

return statearr_29353;
})();
var statearr_29354_29370 = state_29337__$1;
(statearr_29354_29370[(2)] = null);

(statearr_29354_29370[(1)] = (2));


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
});})(c__27624__auto___29360,out))
;
return ((function (switch__27529__auto__,c__27624__auto___29360,out){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_29355 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29355[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_29355[(1)] = (1));

return statearr_29355;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_29337){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29356){if((e29356 instanceof Object)){
var ex__27533__auto__ = e29356;
var statearr_29357_29371 = state_29337;
(statearr_29357_29371[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29372 = state_29337;
state_29337 = G__29372;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_29337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_29337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___29360,out))
})();
var state__27626__auto__ = (function (){var statearr_29358 = f__27625__auto__.call(null);
(statearr_29358[(6)] = c__27624__auto___29360);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___29360,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29374 = arguments.length;
switch (G__29374) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27624__auto___29440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___29440,out){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___29440,out){
return (function (state_29412){
var state_val_29413 = (state_29412[(1)]);
if((state_val_29413 === (7))){
var inst_29408 = (state_29412[(2)]);
var state_29412__$1 = state_29412;
var statearr_29414_29441 = state_29412__$1;
(statearr_29414_29441[(2)] = inst_29408);

(statearr_29414_29441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (1))){
var inst_29375 = (new Array(n));
var inst_29376 = inst_29375;
var inst_29377 = (0);
var state_29412__$1 = (function (){var statearr_29415 = state_29412;
(statearr_29415[(7)] = inst_29377);

(statearr_29415[(8)] = inst_29376);

return statearr_29415;
})();
var statearr_29416_29442 = state_29412__$1;
(statearr_29416_29442[(2)] = null);

(statearr_29416_29442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (4))){
var inst_29380 = (state_29412[(9)]);
var inst_29380__$1 = (state_29412[(2)]);
var inst_29381 = (inst_29380__$1 == null);
var inst_29382 = cljs.core.not.call(null,inst_29381);
var state_29412__$1 = (function (){var statearr_29417 = state_29412;
(statearr_29417[(9)] = inst_29380__$1);

return statearr_29417;
})();
if(inst_29382){
var statearr_29418_29443 = state_29412__$1;
(statearr_29418_29443[(1)] = (5));

} else {
var statearr_29419_29444 = state_29412__$1;
(statearr_29419_29444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (15))){
var inst_29402 = (state_29412[(2)]);
var state_29412__$1 = state_29412;
var statearr_29420_29445 = state_29412__$1;
(statearr_29420_29445[(2)] = inst_29402);

(statearr_29420_29445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (13))){
var state_29412__$1 = state_29412;
var statearr_29421_29446 = state_29412__$1;
(statearr_29421_29446[(2)] = null);

(statearr_29421_29446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (6))){
var inst_29377 = (state_29412[(7)]);
var inst_29398 = (inst_29377 > (0));
var state_29412__$1 = state_29412;
if(cljs.core.truth_(inst_29398)){
var statearr_29422_29447 = state_29412__$1;
(statearr_29422_29447[(1)] = (12));

} else {
var statearr_29423_29448 = state_29412__$1;
(statearr_29423_29448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (3))){
var inst_29410 = (state_29412[(2)]);
var state_29412__$1 = state_29412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29412__$1,inst_29410);
} else {
if((state_val_29413 === (12))){
var inst_29376 = (state_29412[(8)]);
var inst_29400 = cljs.core.vec.call(null,inst_29376);
var state_29412__$1 = state_29412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29412__$1,(15),out,inst_29400);
} else {
if((state_val_29413 === (2))){
var state_29412__$1 = state_29412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29412__$1,(4),ch);
} else {
if((state_val_29413 === (11))){
var inst_29392 = (state_29412[(2)]);
var inst_29393 = (new Array(n));
var inst_29376 = inst_29393;
var inst_29377 = (0);
var state_29412__$1 = (function (){var statearr_29424 = state_29412;
(statearr_29424[(7)] = inst_29377);

(statearr_29424[(10)] = inst_29392);

(statearr_29424[(8)] = inst_29376);

return statearr_29424;
})();
var statearr_29425_29449 = state_29412__$1;
(statearr_29425_29449[(2)] = null);

(statearr_29425_29449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (9))){
var inst_29376 = (state_29412[(8)]);
var inst_29390 = cljs.core.vec.call(null,inst_29376);
var state_29412__$1 = state_29412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29412__$1,(11),out,inst_29390);
} else {
if((state_val_29413 === (5))){
var inst_29377 = (state_29412[(7)]);
var inst_29380 = (state_29412[(9)]);
var inst_29385 = (state_29412[(11)]);
var inst_29376 = (state_29412[(8)]);
var inst_29384 = (inst_29376[inst_29377] = inst_29380);
var inst_29385__$1 = (inst_29377 + (1));
var inst_29386 = (inst_29385__$1 < n);
var state_29412__$1 = (function (){var statearr_29426 = state_29412;
(statearr_29426[(12)] = inst_29384);

(statearr_29426[(11)] = inst_29385__$1);

return statearr_29426;
})();
if(cljs.core.truth_(inst_29386)){
var statearr_29427_29450 = state_29412__$1;
(statearr_29427_29450[(1)] = (8));

} else {
var statearr_29428_29451 = state_29412__$1;
(statearr_29428_29451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (14))){
var inst_29405 = (state_29412[(2)]);
var inst_29406 = cljs.core.async.close_BANG_.call(null,out);
var state_29412__$1 = (function (){var statearr_29430 = state_29412;
(statearr_29430[(13)] = inst_29405);

return statearr_29430;
})();
var statearr_29431_29452 = state_29412__$1;
(statearr_29431_29452[(2)] = inst_29406);

(statearr_29431_29452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (10))){
var inst_29396 = (state_29412[(2)]);
var state_29412__$1 = state_29412;
var statearr_29432_29453 = state_29412__$1;
(statearr_29432_29453[(2)] = inst_29396);

(statearr_29432_29453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (8))){
var inst_29385 = (state_29412[(11)]);
var inst_29376 = (state_29412[(8)]);
var tmp29429 = inst_29376;
var inst_29376__$1 = tmp29429;
var inst_29377 = inst_29385;
var state_29412__$1 = (function (){var statearr_29433 = state_29412;
(statearr_29433[(7)] = inst_29377);

(statearr_29433[(8)] = inst_29376__$1);

return statearr_29433;
})();
var statearr_29434_29454 = state_29412__$1;
(statearr_29434_29454[(2)] = null);

(statearr_29434_29454[(1)] = (2));


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
});})(c__27624__auto___29440,out))
;
return ((function (switch__27529__auto__,c__27624__auto___29440,out){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_29435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29435[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_29435[(1)] = (1));

return statearr_29435;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_29412){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29436){if((e29436 instanceof Object)){
var ex__27533__auto__ = e29436;
var statearr_29437_29455 = state_29412;
(statearr_29437_29455[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29456 = state_29412;
state_29412 = G__29456;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_29412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_29412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___29440,out))
})();
var state__27626__auto__ = (function (){var statearr_29438 = f__27625__auto__.call(null);
(statearr_29438[(6)] = c__27624__auto___29440);

return statearr_29438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___29440,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29458 = arguments.length;
switch (G__29458) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27624__auto___29528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27624__auto___29528,out){
return (function (){
var f__27625__auto__ = (function (){var switch__27529__auto__ = ((function (c__27624__auto___29528,out){
return (function (state_29500){
var state_val_29501 = (state_29500[(1)]);
if((state_val_29501 === (7))){
var inst_29496 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29502_29529 = state_29500__$1;
(statearr_29502_29529[(2)] = inst_29496);

(statearr_29502_29529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (1))){
var inst_29459 = [];
var inst_29460 = inst_29459;
var inst_29461 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29500__$1 = (function (){var statearr_29503 = state_29500;
(statearr_29503[(7)] = inst_29461);

(statearr_29503[(8)] = inst_29460);

return statearr_29503;
})();
var statearr_29504_29530 = state_29500__$1;
(statearr_29504_29530[(2)] = null);

(statearr_29504_29530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (4))){
var inst_29464 = (state_29500[(9)]);
var inst_29464__$1 = (state_29500[(2)]);
var inst_29465 = (inst_29464__$1 == null);
var inst_29466 = cljs.core.not.call(null,inst_29465);
var state_29500__$1 = (function (){var statearr_29505 = state_29500;
(statearr_29505[(9)] = inst_29464__$1);

return statearr_29505;
})();
if(inst_29466){
var statearr_29506_29531 = state_29500__$1;
(statearr_29506_29531[(1)] = (5));

} else {
var statearr_29507_29532 = state_29500__$1;
(statearr_29507_29532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (15))){
var inst_29490 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29508_29533 = state_29500__$1;
(statearr_29508_29533[(2)] = inst_29490);

(statearr_29508_29533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (13))){
var state_29500__$1 = state_29500;
var statearr_29509_29534 = state_29500__$1;
(statearr_29509_29534[(2)] = null);

(statearr_29509_29534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (6))){
var inst_29460 = (state_29500[(8)]);
var inst_29485 = inst_29460.length;
var inst_29486 = (inst_29485 > (0));
var state_29500__$1 = state_29500;
if(cljs.core.truth_(inst_29486)){
var statearr_29510_29535 = state_29500__$1;
(statearr_29510_29535[(1)] = (12));

} else {
var statearr_29511_29536 = state_29500__$1;
(statearr_29511_29536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (3))){
var inst_29498 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29500__$1,inst_29498);
} else {
if((state_val_29501 === (12))){
var inst_29460 = (state_29500[(8)]);
var inst_29488 = cljs.core.vec.call(null,inst_29460);
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29500__$1,(15),out,inst_29488);
} else {
if((state_val_29501 === (2))){
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29500__$1,(4),ch);
} else {
if((state_val_29501 === (11))){
var inst_29468 = (state_29500[(10)]);
var inst_29464 = (state_29500[(9)]);
var inst_29478 = (state_29500[(2)]);
var inst_29479 = [];
var inst_29480 = inst_29479.push(inst_29464);
var inst_29460 = inst_29479;
var inst_29461 = inst_29468;
var state_29500__$1 = (function (){var statearr_29512 = state_29500;
(statearr_29512[(7)] = inst_29461);

(statearr_29512[(8)] = inst_29460);

(statearr_29512[(11)] = inst_29478);

(statearr_29512[(12)] = inst_29480);

return statearr_29512;
})();
var statearr_29513_29537 = state_29500__$1;
(statearr_29513_29537[(2)] = null);

(statearr_29513_29537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (9))){
var inst_29460 = (state_29500[(8)]);
var inst_29476 = cljs.core.vec.call(null,inst_29460);
var state_29500__$1 = state_29500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29500__$1,(11),out,inst_29476);
} else {
if((state_val_29501 === (5))){
var inst_29468 = (state_29500[(10)]);
var inst_29461 = (state_29500[(7)]);
var inst_29464 = (state_29500[(9)]);
var inst_29468__$1 = f.call(null,inst_29464);
var inst_29469 = cljs.core._EQ_.call(null,inst_29468__$1,inst_29461);
var inst_29470 = cljs.core.keyword_identical_QMARK_.call(null,inst_29461,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29471 = ((inst_29469) || (inst_29470));
var state_29500__$1 = (function (){var statearr_29514 = state_29500;
(statearr_29514[(10)] = inst_29468__$1);

return statearr_29514;
})();
if(cljs.core.truth_(inst_29471)){
var statearr_29515_29538 = state_29500__$1;
(statearr_29515_29538[(1)] = (8));

} else {
var statearr_29516_29539 = state_29500__$1;
(statearr_29516_29539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (14))){
var inst_29493 = (state_29500[(2)]);
var inst_29494 = cljs.core.async.close_BANG_.call(null,out);
var state_29500__$1 = (function (){var statearr_29518 = state_29500;
(statearr_29518[(13)] = inst_29493);

return statearr_29518;
})();
var statearr_29519_29540 = state_29500__$1;
(statearr_29519_29540[(2)] = inst_29494);

(statearr_29519_29540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (10))){
var inst_29483 = (state_29500[(2)]);
var state_29500__$1 = state_29500;
var statearr_29520_29541 = state_29500__$1;
(statearr_29520_29541[(2)] = inst_29483);

(statearr_29520_29541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29501 === (8))){
var inst_29468 = (state_29500[(10)]);
var inst_29460 = (state_29500[(8)]);
var inst_29464 = (state_29500[(9)]);
var inst_29473 = inst_29460.push(inst_29464);
var tmp29517 = inst_29460;
var inst_29460__$1 = tmp29517;
var inst_29461 = inst_29468;
var state_29500__$1 = (function (){var statearr_29521 = state_29500;
(statearr_29521[(7)] = inst_29461);

(statearr_29521[(8)] = inst_29460__$1);

(statearr_29521[(14)] = inst_29473);

return statearr_29521;
})();
var statearr_29522_29542 = state_29500__$1;
(statearr_29522_29542[(2)] = null);

(statearr_29522_29542[(1)] = (2));


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
});})(c__27624__auto___29528,out))
;
return ((function (switch__27529__auto__,c__27624__auto___29528,out){
return (function() {
var cljs$core$async$state_machine__27530__auto__ = null;
var cljs$core$async$state_machine__27530__auto____0 = (function (){
var statearr_29523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29523[(0)] = cljs$core$async$state_machine__27530__auto__);

(statearr_29523[(1)] = (1));

return statearr_29523;
});
var cljs$core$async$state_machine__27530__auto____1 = (function (state_29500){
while(true){
var ret_value__27531__auto__ = (function (){try{while(true){
var result__27532__auto__ = switch__27529__auto__.call(null,state_29500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27532__auto__;
}
break;
}
}catch (e29524){if((e29524 instanceof Object)){
var ex__27533__auto__ = e29524;
var statearr_29525_29543 = state_29500;
(statearr_29525_29543[(5)] = ex__27533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29544 = state_29500;
state_29500 = G__29544;
continue;
} else {
return ret_value__27531__auto__;
}
break;
}
});
cljs$core$async$state_machine__27530__auto__ = function(state_29500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27530__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27530__auto____1.call(this,state_29500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27530__auto____0;
cljs$core$async$state_machine__27530__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27530__auto____1;
return cljs$core$async$state_machine__27530__auto__;
})()
;})(switch__27529__auto__,c__27624__auto___29528,out))
})();
var state__27626__auto__ = (function (){var statearr_29526 = f__27625__auto__.call(null);
(statearr_29526[(6)] = c__27624__auto___29528);

return statearr_29526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27626__auto__);
});})(c__27624__auto___29528,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1557276012550
