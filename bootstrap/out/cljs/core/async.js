// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10843 = (function (f,fn_handler,meta10844){
this.f = f;
this.fn_handler = fn_handler;
this.meta10844 = meta10844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10843.cljs$lang$type = true;
cljs.core.async.t10843.cljs$lang$ctorStr = "cljs.core.async/t10843";
cljs.core.async.t10843.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10843");
});
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10845){var self__ = this;
var _10845__$1 = this;return self__.meta10844;
});
cljs.core.async.t10843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10845,meta10844__$1){var self__ = this;
var _10845__$1 = this;return (new cljs.core.async.t10843(self__.f,self__.fn_handler,meta10844__$1));
});
cljs.core.async.__GT_t10843 = (function __GT_t10843(f__$1,fn_handler__$1,meta10844){return (new cljs.core.async.t10843(f__$1,fn_handler__$1,meta10844));
});
}
return (new cljs.core.async.t10843(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10847 = buff;if(G__10847)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__10847.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10847.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10847);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10847);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10848 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10848);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10848);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___10849 = n;var x_10850 = 0;while(true){
if((x_10850 < n__4291__auto___10849))
{(a[x_10850] = 0);
{
var G__10851 = (x_10850 + 1);
x_10850 = G__10851;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10852 = (i + 1);
i = G__10852;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10856 = (function (flag,alt_flag,meta10857){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10857 = meta10857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10856.cljs$lang$type = true;
cljs.core.async.t10856.cljs$lang$ctorStr = "cljs.core.async/t10856";
cljs.core.async.t10856.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10856");
});
cljs.core.async.t10856.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10858){var self__ = this;
var _10858__$1 = this;return self__.meta10857;
});
cljs.core.async.t10856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10858,meta10857__$1){var self__ = this;
var _10858__$1 = this;return (new cljs.core.async.t10856(self__.flag,self__.alt_flag,meta10857__$1));
});
cljs.core.async.__GT_t10856 = (function __GT_t10856(flag__$1,alt_flag__$1,meta10857){return (new cljs.core.async.t10856(flag__$1,alt_flag__$1,meta10857));
});
}
return (new cljs.core.async.t10856(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10862 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10862 = (function (cb,flag,alt_handler,meta10863){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10863 = meta10863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10862.cljs$lang$type = true;
cljs.core.async.t10862.cljs$lang$ctorStr = "cljs.core.async/t10862";
cljs.core.async.t10862.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10862");
});
cljs.core.async.t10862.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10864){var self__ = this;
var _10864__$1 = this;return self__.meta10863;
});
cljs.core.async.t10862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10864,meta10863__$1){var self__ = this;
var _10864__$1 = this;return (new cljs.core.async.t10862(self__.cb,self__.flag,self__.alt_handler,meta10863__$1));
});
cljs.core.async.__GT_t10862 = (function __GT_t10862(cb__$1,flag__$1,alt_handler__$1,meta10863){return (new cljs.core.async.t10862(cb__$1,flag__$1,alt_handler__$1,meta10863));
});
}
return (new cljs.core.async.t10862(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10865_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10865_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10866 = (i + 1);
i = G__10866;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10867){var map__10869 = p__10867;var map__10869__$1 = ((cljs.core.seq_QMARK_.call(null,map__10869))?cljs.core.apply.call(null,cljs.core.hash_map,map__10869):map__10869);var opts = map__10869__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10867 = null;if (arguments.length > 1) {
  p__10867 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10867);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10870){
var ports = cljs.core.first(arglist__10870);
var p__10867 = cljs.core.rest(arglist__10870);
return alts_BANG___delegate(ports,p__10867);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10878 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10878 = (function (ch,f,map_LT_,meta10879){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10879 = meta10879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10878.cljs$lang$type = true;
cljs.core.async.t10878.cljs$lang$ctorStr = "cljs.core.async/t10878";
cljs.core.async.t10878.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10878");
});
cljs.core.async.t10878.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10878.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10881 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10881 = (function (fn1,_,meta10879,ch,f,map_LT_,meta10882){
this.fn1 = fn1;
this._ = _;
this.meta10879 = meta10879;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10882 = meta10882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10881.cljs$lang$type = true;
cljs.core.async.t10881.cljs$lang$ctorStr = "cljs.core.async/t10881";
cljs.core.async.t10881.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10881");
});
cljs.core.async.t10881.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10881.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10871_SHARP_){return f1.call(null,(((p1__10871_SHARP_ == null))?null:self__.f.call(null,p1__10871_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10883){var self__ = this;
var _10883__$1 = this;return self__.meta10882;
});
cljs.core.async.t10881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10883,meta10882__$1){var self__ = this;
var _10883__$1 = this;return (new cljs.core.async.t10881(self__.fn1,self__._,self__.meta10879,self__.ch,self__.f,self__.map_LT_,meta10882__$1));
});
cljs.core.async.__GT_t10881 = (function __GT_t10881(fn1__$1,___$2,meta10879__$1,ch__$2,f__$2,map_LT___$2,meta10882){return (new cljs.core.async.t10881(fn1__$1,___$2,meta10879__$1,ch__$2,f__$2,map_LT___$2,meta10882));
});
}
return (new cljs.core.async.t10881(fn1,___$1,self__.meta10879,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10878.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10880){var self__ = this;
var _10880__$1 = this;return self__.meta10879;
});
cljs.core.async.t10878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10880,meta10879__$1){var self__ = this;
var _10880__$1 = this;return (new cljs.core.async.t10878(self__.ch,self__.f,self__.map_LT_,meta10879__$1));
});
cljs.core.async.__GT_t10878 = (function __GT_t10878(ch__$1,f__$1,map_LT___$1,meta10879){return (new cljs.core.async.t10878(ch__$1,f__$1,map_LT___$1,meta10879));
});
}
return (new cljs.core.async.t10878(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10887 = (function (ch,f,map_GT_,meta10888){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10888 = meta10888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10887.cljs$lang$type = true;
cljs.core.async.t10887.cljs$lang$ctorStr = "cljs.core.async/t10887";
cljs.core.async.t10887.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10887");
});
cljs.core.async.t10887.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10887.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10887.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10889){var self__ = this;
var _10889__$1 = this;return self__.meta10888;
});
cljs.core.async.t10887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10889,meta10888__$1){var self__ = this;
var _10889__$1 = this;return (new cljs.core.async.t10887(self__.ch,self__.f,self__.map_GT_,meta10888__$1));
});
cljs.core.async.__GT_t10887 = (function __GT_t10887(ch__$1,f__$1,map_GT___$1,meta10888){return (new cljs.core.async.t10887(ch__$1,f__$1,map_GT___$1,meta10888));
});
}
return (new cljs.core.async.t10887(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10893 = (function (ch,p,filter_GT_,meta10894){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10894 = meta10894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10893.cljs$lang$type = true;
cljs.core.async.t10893.cljs$lang$ctorStr = "cljs.core.async/t10893";
cljs.core.async.t10893.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10893");
});
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10895){var self__ = this;
var _10895__$1 = this;return self__.meta10894;
});
cljs.core.async.t10893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10895,meta10894__$1){var self__ = this;
var _10895__$1 = this;return (new cljs.core.async.t10893(self__.ch,self__.p,self__.filter_GT_,meta10894__$1));
});
cljs.core.async.__GT_t10893 = (function __GT_t10893(ch__$1,p__$1,filter_GT___$1,meta10894){return (new cljs.core.async.t10893(ch__$1,p__$1,filter_GT___$1,meta10894));
});
}
return (new cljs.core.async.t10893(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___10978 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10957){var state_val_10958 = (state_10957[1]);if((state_val_10958 === 1))
{var state_10957__$1 = state_10957;var statearr_10959_10979 = state_10957__$1;(statearr_10959_10979[2] = null);
(statearr_10959_10979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 2))
{var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10957__$1,4,ch);
} else
{if((state_val_10958 === 3))
{var inst_10955 = (state_10957[2]);var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10957__$1,inst_10955);
} else
{if((state_val_10958 === 4))
{var inst_10939 = (state_10957[7]);var inst_10939__$1 = (state_10957[2]);var inst_10940 = (inst_10939__$1 == null);var state_10957__$1 = (function (){var statearr_10960 = state_10957;(statearr_10960[7] = inst_10939__$1);
return statearr_10960;
})();if(cljs.core.truth_(inst_10940))
{var statearr_10961_10980 = state_10957__$1;(statearr_10961_10980[1] = 5);
} else
{var statearr_10962_10981 = state_10957__$1;(statearr_10962_10981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 5))
{var inst_10942 = cljs.core.async.close_BANG_.call(null,out);var state_10957__$1 = state_10957;var statearr_10963_10982 = state_10957__$1;(statearr_10963_10982[2] = inst_10942);
(statearr_10963_10982[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 6))
{var inst_10939 = (state_10957[7]);var inst_10944 = p.call(null,inst_10939);var state_10957__$1 = state_10957;if(cljs.core.truth_(inst_10944))
{var statearr_10964_10983 = state_10957__$1;(statearr_10964_10983[1] = 8);
} else
{var statearr_10965_10984 = state_10957__$1;(statearr_10965_10984[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 7))
{var inst_10953 = (state_10957[2]);var state_10957__$1 = state_10957;var statearr_10966_10985 = state_10957__$1;(statearr_10966_10985[2] = inst_10953);
(statearr_10966_10985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 8))
{var inst_10939 = (state_10957[7]);var state_10957__$1 = state_10957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10957__$1,11,out,inst_10939);
} else
{if((state_val_10958 === 9))
{var state_10957__$1 = state_10957;var statearr_10967_10986 = state_10957__$1;(statearr_10967_10986[2] = null);
(statearr_10967_10986[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 10))
{var inst_10950 = (state_10957[2]);var state_10957__$1 = (function (){var statearr_10968 = state_10957;(statearr_10968[8] = inst_10950);
return statearr_10968;
})();var statearr_10969_10987 = state_10957__$1;(statearr_10969_10987[2] = null);
(statearr_10969_10987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10958 === 11))
{var inst_10947 = (state_10957[2]);var state_10957__$1 = state_10957;var statearr_10970_10988 = state_10957__$1;(statearr_10970_10988[2] = inst_10947);
(statearr_10970_10988[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10974 = [null,null,null,null,null,null,null,null,null];(statearr_10974[0] = state_machine__6178__auto__);
(statearr_10974[1] = 1);
return statearr_10974;
});
var state_machine__6178__auto____1 = (function (state_10957){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10957);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10975){if((e10975 instanceof Object))
{var ex__6181__auto__ = e10975;var statearr_10976_10989 = state_10957;(statearr_10976_10989[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10990 = state_10957;
state_10957 = G__10990;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10957){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10977 = f__6193__auto__.call(null);(statearr_10977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10978);
return statearr_10977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11142){var state_val_11143 = (state_11142[1]);if((state_val_11143 === 1))
{var state_11142__$1 = state_11142;var statearr_11144_11181 = state_11142__$1;(statearr_11144_11181[2] = null);
(statearr_11144_11181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 2))
{var state_11142__$1 = state_11142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11142__$1,4,in$);
} else
{if((state_val_11143 === 3))
{var inst_11140 = (state_11142[2]);var state_11142__$1 = state_11142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11142__$1,inst_11140);
} else
{if((state_val_11143 === 4))
{var inst_11088 = (state_11142[7]);var inst_11088__$1 = (state_11142[2]);var inst_11089 = (inst_11088__$1 == null);var state_11142__$1 = (function (){var statearr_11145 = state_11142;(statearr_11145[7] = inst_11088__$1);
return statearr_11145;
})();if(cljs.core.truth_(inst_11089))
{var statearr_11146_11182 = state_11142__$1;(statearr_11146_11182[1] = 5);
} else
{var statearr_11147_11183 = state_11142__$1;(statearr_11147_11183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 5))
{var inst_11091 = cljs.core.async.close_BANG_.call(null,out);var state_11142__$1 = state_11142;var statearr_11148_11184 = state_11142__$1;(statearr_11148_11184[2] = inst_11091);
(statearr_11148_11184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 6))
{var inst_11088 = (state_11142[7]);var inst_11093 = f.call(null,inst_11088);var inst_11098 = cljs.core.seq.call(null,inst_11093);var inst_11099 = inst_11098;var inst_11100 = null;var inst_11101 = 0;var inst_11102 = 0;var state_11142__$1 = (function (){var statearr_11149 = state_11142;(statearr_11149[8] = inst_11099);
(statearr_11149[9] = inst_11102);
(statearr_11149[10] = inst_11101);
(statearr_11149[11] = inst_11100);
return statearr_11149;
})();var statearr_11150_11185 = state_11142__$1;(statearr_11150_11185[2] = null);
(statearr_11150_11185[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 7))
{var inst_11138 = (state_11142[2]);var state_11142__$1 = state_11142;var statearr_11151_11186 = state_11142__$1;(statearr_11151_11186[2] = inst_11138);
(statearr_11151_11186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 8))
{var inst_11102 = (state_11142[9]);var inst_11101 = (state_11142[10]);var inst_11104 = (inst_11102 < inst_11101);var inst_11105 = inst_11104;var state_11142__$1 = state_11142;if(cljs.core.truth_(inst_11105))
{var statearr_11152_11187 = state_11142__$1;(statearr_11152_11187[1] = 10);
} else
{var statearr_11153_11188 = state_11142__$1;(statearr_11153_11188[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 9))
{var inst_11135 = (state_11142[2]);var state_11142__$1 = (function (){var statearr_11154 = state_11142;(statearr_11154[12] = inst_11135);
return statearr_11154;
})();var statearr_11155_11189 = state_11142__$1;(statearr_11155_11189[2] = null);
(statearr_11155_11189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 10))
{var inst_11102 = (state_11142[9]);var inst_11100 = (state_11142[11]);var inst_11107 = cljs.core._nth.call(null,inst_11100,inst_11102);var state_11142__$1 = state_11142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11142__$1,13,out,inst_11107);
} else
{if((state_val_11143 === 11))
{var inst_11099 = (state_11142[8]);var inst_11113 = (state_11142[13]);var inst_11113__$1 = cljs.core.seq.call(null,inst_11099);var state_11142__$1 = (function (){var statearr_11159 = state_11142;(statearr_11159[13] = inst_11113__$1);
return statearr_11159;
})();if(inst_11113__$1)
{var statearr_11160_11190 = state_11142__$1;(statearr_11160_11190[1] = 14);
} else
{var statearr_11161_11191 = state_11142__$1;(statearr_11161_11191[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 12))
{var inst_11133 = (state_11142[2]);var state_11142__$1 = state_11142;var statearr_11162_11192 = state_11142__$1;(statearr_11162_11192[2] = inst_11133);
(statearr_11162_11192[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 13))
{var inst_11099 = (state_11142[8]);var inst_11102 = (state_11142[9]);var inst_11101 = (state_11142[10]);var inst_11100 = (state_11142[11]);var inst_11109 = (state_11142[2]);var inst_11110 = (inst_11102 + 1);var tmp11156 = inst_11099;var tmp11157 = inst_11101;var tmp11158 = inst_11100;var inst_11099__$1 = tmp11156;var inst_11100__$1 = tmp11158;var inst_11101__$1 = tmp11157;var inst_11102__$1 = inst_11110;var state_11142__$1 = (function (){var statearr_11163 = state_11142;(statearr_11163[14] = inst_11109);
(statearr_11163[8] = inst_11099__$1);
(statearr_11163[9] = inst_11102__$1);
(statearr_11163[10] = inst_11101__$1);
(statearr_11163[11] = inst_11100__$1);
return statearr_11163;
})();var statearr_11164_11193 = state_11142__$1;(statearr_11164_11193[2] = null);
(statearr_11164_11193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 14))
{var inst_11113 = (state_11142[13]);var inst_11115 = cljs.core.chunked_seq_QMARK_.call(null,inst_11113);var state_11142__$1 = state_11142;if(inst_11115)
{var statearr_11165_11194 = state_11142__$1;(statearr_11165_11194[1] = 17);
} else
{var statearr_11166_11195 = state_11142__$1;(statearr_11166_11195[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 15))
{var state_11142__$1 = state_11142;var statearr_11167_11196 = state_11142__$1;(statearr_11167_11196[2] = null);
(statearr_11167_11196[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 16))
{var inst_11131 = (state_11142[2]);var state_11142__$1 = state_11142;var statearr_11168_11197 = state_11142__$1;(statearr_11168_11197[2] = inst_11131);
(statearr_11168_11197[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 17))
{var inst_11113 = (state_11142[13]);var inst_11117 = cljs.core.chunk_first.call(null,inst_11113);var inst_11118 = cljs.core.chunk_rest.call(null,inst_11113);var inst_11119 = cljs.core.count.call(null,inst_11117);var inst_11099 = inst_11118;var inst_11100 = inst_11117;var inst_11101 = inst_11119;var inst_11102 = 0;var state_11142__$1 = (function (){var statearr_11169 = state_11142;(statearr_11169[8] = inst_11099);
(statearr_11169[9] = inst_11102);
(statearr_11169[10] = inst_11101);
(statearr_11169[11] = inst_11100);
return statearr_11169;
})();var statearr_11170_11198 = state_11142__$1;(statearr_11170_11198[2] = null);
(statearr_11170_11198[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 18))
{var inst_11113 = (state_11142[13]);var inst_11122 = cljs.core.first.call(null,inst_11113);var state_11142__$1 = state_11142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11142__$1,20,out,inst_11122);
} else
{if((state_val_11143 === 19))
{var inst_11128 = (state_11142[2]);var state_11142__$1 = state_11142;var statearr_11171_11199 = state_11142__$1;(statearr_11171_11199[2] = inst_11128);
(statearr_11171_11199[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 20))
{var inst_11113 = (state_11142[13]);var inst_11124 = (state_11142[2]);var inst_11125 = cljs.core.next.call(null,inst_11113);var inst_11099 = inst_11125;var inst_11100 = null;var inst_11101 = 0;var inst_11102 = 0;var state_11142__$1 = (function (){var statearr_11172 = state_11142;(statearr_11172[8] = inst_11099);
(statearr_11172[9] = inst_11102);
(statearr_11172[10] = inst_11101);
(statearr_11172[11] = inst_11100);
(statearr_11172[15] = inst_11124);
return statearr_11172;
})();var statearr_11173_11200 = state_11142__$1;(statearr_11173_11200[2] = null);
(statearr_11173_11200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11177[0] = state_machine__6178__auto__);
(statearr_11177[1] = 1);
return statearr_11177;
});
var state_machine__6178__auto____1 = (function (state_11142){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11178){if((e11178 instanceof Object))
{var ex__6181__auto__ = e11178;var statearr_11179_11201 = state_11142;(statearr_11179_11201[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11202 = state_11142;
state_11142 = G__11202;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11142){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11180 = f__6193__auto__.call(null);(statearr_11180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___11283 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11262){var state_val_11263 = (state_11262[1]);if((state_val_11263 === 1))
{var state_11262__$1 = state_11262;var statearr_11264_11284 = state_11262__$1;(statearr_11264_11284[2] = null);
(statearr_11264_11284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11263 === 2))
{var state_11262__$1 = state_11262;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11262__$1,4,from);
} else
{if((state_val_11263 === 3))
{var inst_11260 = (state_11262[2]);var state_11262__$1 = state_11262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11262__$1,inst_11260);
} else
{if((state_val_11263 === 4))
{var inst_11245 = (state_11262[7]);var inst_11245__$1 = (state_11262[2]);var inst_11246 = (inst_11245__$1 == null);var state_11262__$1 = (function (){var statearr_11265 = state_11262;(statearr_11265[7] = inst_11245__$1);
return statearr_11265;
})();if(cljs.core.truth_(inst_11246))
{var statearr_11266_11285 = state_11262__$1;(statearr_11266_11285[1] = 5);
} else
{var statearr_11267_11286 = state_11262__$1;(statearr_11267_11286[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11263 === 5))
{var state_11262__$1 = state_11262;if(cljs.core.truth_(close_QMARK_))
{var statearr_11268_11287 = state_11262__$1;(statearr_11268_11287[1] = 8);
} else
{var statearr_11269_11288 = state_11262__$1;(statearr_11269_11288[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11263 === 6))
{var inst_11245 = (state_11262[7]);var state_11262__$1 = state_11262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11262__$1,11,to,inst_11245);
} else
{if((state_val_11263 === 7))
{var inst_11258 = (state_11262[2]);var state_11262__$1 = state_11262;var statearr_11270_11289 = state_11262__$1;(statearr_11270_11289[2] = inst_11258);
(statearr_11270_11289[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11263 === 8))
{var inst_11249 = cljs.core.async.close_BANG_.call(null,to);var state_11262__$1 = state_11262;var statearr_11271_11290 = state_11262__$1;(statearr_11271_11290[2] = inst_11249);
(statearr_11271_11290[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11263 === 9))
{var state_11262__$1 = state_11262;var statearr_11272_11291 = state_11262__$1;(statearr_11272_11291[2] = null);
(statearr_11272_11291[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11263 === 10))
{var inst_11252 = (state_11262[2]);var state_11262__$1 = state_11262;var statearr_11273_11292 = state_11262__$1;(statearr_11273_11292[2] = inst_11252);
(statearr_11273_11292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11263 === 11))
{var inst_11255 = (state_11262[2]);var state_11262__$1 = (function (){var statearr_11274 = state_11262;(statearr_11274[8] = inst_11255);
return statearr_11274;
})();var statearr_11275_11293 = state_11262__$1;(statearr_11275_11293[2] = null);
(statearr_11275_11293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11279 = [null,null,null,null,null,null,null,null,null];(statearr_11279[0] = state_machine__6178__auto__);
(statearr_11279[1] = 1);
return statearr_11279;
});
var state_machine__6178__auto____1 = (function (state_11262){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11262);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11280){if((e11280 instanceof Object))
{var ex__6181__auto__ = e11280;var statearr_11281_11294 = state_11262;(statearr_11281_11294[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11262);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11295 = state_11262;
state_11262 = G__11295;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11262){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11282 = f__6193__auto__.call(null);(statearr_11282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11283);
return statearr_11282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___11382 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11360){var state_val_11361 = (state_11360[1]);if((state_val_11361 === 1))
{var state_11360__$1 = state_11360;var statearr_11362_11383 = state_11360__$1;(statearr_11362_11383[2] = null);
(statearr_11362_11383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 2))
{var state_11360__$1 = state_11360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11360__$1,4,ch);
} else
{if((state_val_11361 === 3))
{var inst_11358 = (state_11360[2]);var state_11360__$1 = state_11360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11360__$1,inst_11358);
} else
{if((state_val_11361 === 4))
{var inst_11341 = (state_11360[7]);var inst_11341__$1 = (state_11360[2]);var inst_11342 = (inst_11341__$1 == null);var state_11360__$1 = (function (){var statearr_11363 = state_11360;(statearr_11363[7] = inst_11341__$1);
return statearr_11363;
})();if(cljs.core.truth_(inst_11342))
{var statearr_11364_11384 = state_11360__$1;(statearr_11364_11384[1] = 5);
} else
{var statearr_11365_11385 = state_11360__$1;(statearr_11365_11385[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 5))
{var inst_11344 = cljs.core.async.close_BANG_.call(null,tc);var inst_11345 = cljs.core.async.close_BANG_.call(null,fc);var state_11360__$1 = (function (){var statearr_11366 = state_11360;(statearr_11366[8] = inst_11344);
return statearr_11366;
})();var statearr_11367_11386 = state_11360__$1;(statearr_11367_11386[2] = inst_11345);
(statearr_11367_11386[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 6))
{var inst_11341 = (state_11360[7]);var inst_11347 = p.call(null,inst_11341);var state_11360__$1 = state_11360;if(cljs.core.truth_(inst_11347))
{var statearr_11368_11387 = state_11360__$1;(statearr_11368_11387[1] = 9);
} else
{var statearr_11369_11388 = state_11360__$1;(statearr_11369_11388[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 7))
{var inst_11356 = (state_11360[2]);var state_11360__$1 = state_11360;var statearr_11370_11389 = state_11360__$1;(statearr_11370_11389[2] = inst_11356);
(statearr_11370_11389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 8))
{var inst_11353 = (state_11360[2]);var state_11360__$1 = (function (){var statearr_11371 = state_11360;(statearr_11371[9] = inst_11353);
return statearr_11371;
})();var statearr_11372_11390 = state_11360__$1;(statearr_11372_11390[2] = null);
(statearr_11372_11390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 9))
{var state_11360__$1 = state_11360;var statearr_11373_11391 = state_11360__$1;(statearr_11373_11391[2] = tc);
(statearr_11373_11391[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 10))
{var state_11360__$1 = state_11360;var statearr_11374_11392 = state_11360__$1;(statearr_11374_11392[2] = fc);
(statearr_11374_11392[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11361 === 11))
{var inst_11341 = (state_11360[7]);var inst_11351 = (state_11360[2]);var state_11360__$1 = state_11360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11360__$1,8,inst_11351,inst_11341);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11378 = [null,null,null,null,null,null,null,null,null,null];(statearr_11378[0] = state_machine__6178__auto__);
(statearr_11378[1] = 1);
return statearr_11378;
});
var state_machine__6178__auto____1 = (function (state_11360){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11360);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11379){if((e11379 instanceof Object))
{var ex__6181__auto__ = e11379;var statearr_11380_11393 = state_11360;(statearr_11380_11393[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11394 = state_11360;
state_11360 = G__11394;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11360){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11381 = f__6193__auto__.call(null);(statearr_11381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11382);
return statearr_11381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11441){var state_val_11442 = (state_11441[1]);if((state_val_11442 === 7))
{var inst_11437 = (state_11441[2]);var state_11441__$1 = state_11441;var statearr_11443_11459 = state_11441__$1;(statearr_11443_11459[2] = inst_11437);
(statearr_11443_11459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 6))
{var inst_11427 = (state_11441[7]);var inst_11430 = (state_11441[8]);var inst_11434 = f.call(null,inst_11427,inst_11430);var inst_11427__$1 = inst_11434;var state_11441__$1 = (function (){var statearr_11444 = state_11441;(statearr_11444[7] = inst_11427__$1);
return statearr_11444;
})();var statearr_11445_11460 = state_11441__$1;(statearr_11445_11460[2] = null);
(statearr_11445_11460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 5))
{var inst_11427 = (state_11441[7]);var state_11441__$1 = state_11441;var statearr_11446_11461 = state_11441__$1;(statearr_11446_11461[2] = inst_11427);
(statearr_11446_11461[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 4))
{var inst_11430 = (state_11441[8]);var inst_11430__$1 = (state_11441[2]);var inst_11431 = (inst_11430__$1 == null);var state_11441__$1 = (function (){var statearr_11447 = state_11441;(statearr_11447[8] = inst_11430__$1);
return statearr_11447;
})();if(cljs.core.truth_(inst_11431))
{var statearr_11448_11462 = state_11441__$1;(statearr_11448_11462[1] = 5);
} else
{var statearr_11449_11463 = state_11441__$1;(statearr_11449_11463[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11442 === 3))
{var inst_11439 = (state_11441[2]);var state_11441__$1 = state_11441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11441__$1,inst_11439);
} else
{if((state_val_11442 === 2))
{var state_11441__$1 = state_11441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11441__$1,4,ch);
} else
{if((state_val_11442 === 1))
{var inst_11427 = init;var state_11441__$1 = (function (){var statearr_11450 = state_11441;(statearr_11450[7] = inst_11427);
return statearr_11450;
})();var statearr_11451_11464 = state_11441__$1;(statearr_11451_11464[2] = null);
(statearr_11451_11464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11455 = [null,null,null,null,null,null,null,null,null];(statearr_11455[0] = state_machine__6178__auto__);
(statearr_11455[1] = 1);
return statearr_11455;
});
var state_machine__6178__auto____1 = (function (state_11441){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11456){if((e11456 instanceof Object))
{var ex__6181__auto__ = e11456;var statearr_11457_11465 = state_11441;(statearr_11457_11465[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11456;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11466 = state_11441;
state_11441 = G__11466;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11441){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11458 = f__6193__auto__.call(null);(statearr_11458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11528){var state_val_11529 = (state_11528[1]);if((state_val_11529 === 1))
{var inst_11508 = cljs.core.seq.call(null,coll);var inst_11509 = inst_11508;var state_11528__$1 = (function (){var statearr_11530 = state_11528;(statearr_11530[7] = inst_11509);
return statearr_11530;
})();var statearr_11531_11549 = state_11528__$1;(statearr_11531_11549[2] = null);
(statearr_11531_11549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 2))
{var inst_11509 = (state_11528[7]);var state_11528__$1 = state_11528;if(cljs.core.truth_(inst_11509))
{var statearr_11532_11550 = state_11528__$1;(statearr_11532_11550[1] = 4);
} else
{var statearr_11533_11551 = state_11528__$1;(statearr_11533_11551[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 3))
{var inst_11526 = (state_11528[2]);var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11528__$1,inst_11526);
} else
{if((state_val_11529 === 4))
{var inst_11509 = (state_11528[7]);var inst_11512 = cljs.core.first.call(null,inst_11509);var state_11528__$1 = state_11528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11528__$1,7,ch,inst_11512);
} else
{if((state_val_11529 === 5))
{var state_11528__$1 = state_11528;if(cljs.core.truth_(close_QMARK_))
{var statearr_11534_11552 = state_11528__$1;(statearr_11534_11552[1] = 8);
} else
{var statearr_11535_11553 = state_11528__$1;(statearr_11535_11553[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 6))
{var inst_11524 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11536_11554 = state_11528__$1;(statearr_11536_11554[2] = inst_11524);
(statearr_11536_11554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 7))
{var inst_11509 = (state_11528[7]);var inst_11514 = (state_11528[2]);var inst_11515 = cljs.core.next.call(null,inst_11509);var inst_11509__$1 = inst_11515;var state_11528__$1 = (function (){var statearr_11537 = state_11528;(statearr_11537[7] = inst_11509__$1);
(statearr_11537[8] = inst_11514);
return statearr_11537;
})();var statearr_11538_11555 = state_11528__$1;(statearr_11538_11555[2] = null);
(statearr_11538_11555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 8))
{var inst_11519 = cljs.core.async.close_BANG_.call(null,ch);var state_11528__$1 = state_11528;var statearr_11539_11556 = state_11528__$1;(statearr_11539_11556[2] = inst_11519);
(statearr_11539_11556[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 9))
{var state_11528__$1 = state_11528;var statearr_11540_11557 = state_11528__$1;(statearr_11540_11557[2] = null);
(statearr_11540_11557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11529 === 10))
{var inst_11522 = (state_11528[2]);var state_11528__$1 = state_11528;var statearr_11541_11558 = state_11528__$1;(statearr_11541_11558[2] = inst_11522);
(statearr_11541_11558[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11545 = [null,null,null,null,null,null,null,null,null];(statearr_11545[0] = state_machine__6178__auto__);
(statearr_11545[1] = 1);
return statearr_11545;
});
var state_machine__6178__auto____1 = (function (state_11528){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11528);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11546){if((e11546 instanceof Object))
{var ex__6181__auto__ = e11546;var statearr_11547_11559 = state_11528;(statearr_11547_11559[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11560 = state_11528;
state_11528 = G__11560;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11528){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11548 = f__6193__auto__.call(null);(statearr_11548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11562 = {};return obj11562;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11564 = {};return obj11564;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11788 = (function (cs,ch,mult,meta11789){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11789 = meta11789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11788.cljs$lang$type = true;
cljs.core.async.t11788.cljs$lang$ctorStr = "cljs.core.async/t11788";
cljs.core.async.t11788.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11788");
});})(cs))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11788.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11788.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11790){var self__ = this;
var _11790__$1 = this;return self__.meta11789;
});})(cs))
;
cljs.core.async.t11788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11790,meta11789__$1){var self__ = this;
var _11790__$1 = this;return (new cljs.core.async.t11788(self__.cs,self__.ch,self__.mult,meta11789__$1));
});})(cs))
;
cljs.core.async.__GT_t11788 = ((function (cs){
return (function __GT_t11788(cs__$1,ch__$1,mult__$1,meta11789){return (new cljs.core.async.t11788(cs__$1,ch__$1,mult__$1,meta11789));
});})(cs))
;
}
return (new cljs.core.async.t11788(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___12011 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11925){var state_val_11926 = (state_11925[1]);if((state_val_11926 === 32))
{var inst_11869 = (state_11925[7]);var inst_11793 = (state_11925[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11925,31,Object,null,30);var inst_11876 = cljs.core.async.put_BANG_.call(null,inst_11869,inst_11793,done);var state_11925__$1 = state_11925;var statearr_11927_12012 = state_11925__$1;(statearr_11927_12012[2] = inst_11876);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 1))
{var state_11925__$1 = state_11925;var statearr_11928_12013 = state_11925__$1;(statearr_11928_12013[2] = null);
(statearr_11928_12013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 33))
{var inst_11882 = (state_11925[9]);var inst_11884 = cljs.core.chunked_seq_QMARK_.call(null,inst_11882);var state_11925__$1 = state_11925;if(inst_11884)
{var statearr_11929_12014 = state_11925__$1;(statearr_11929_12014[1] = 36);
} else
{var statearr_11930_12015 = state_11925__$1;(statearr_11930_12015[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 2))
{var state_11925__$1 = state_11925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11925__$1,4,ch);
} else
{if((state_val_11926 === 34))
{var state_11925__$1 = state_11925;var statearr_11931_12016 = state_11925__$1;(statearr_11931_12016[2] = null);
(statearr_11931_12016[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 3))
{var inst_11923 = (state_11925[2]);var state_11925__$1 = state_11925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11925__$1,inst_11923);
} else
{if((state_val_11926 === 35))
{var inst_11907 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11932_12017 = state_11925__$1;(statearr_11932_12017[2] = inst_11907);
(statearr_11932_12017[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 4))
{var inst_11793 = (state_11925[8]);var inst_11793__$1 = (state_11925[2]);var inst_11794 = (inst_11793__$1 == null);var state_11925__$1 = (function (){var statearr_11933 = state_11925;(statearr_11933[8] = inst_11793__$1);
return statearr_11933;
})();if(cljs.core.truth_(inst_11794))
{var statearr_11934_12018 = state_11925__$1;(statearr_11934_12018[1] = 5);
} else
{var statearr_11935_12019 = state_11925__$1;(statearr_11935_12019[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 36))
{var inst_11882 = (state_11925[9]);var inst_11886 = cljs.core.chunk_first.call(null,inst_11882);var inst_11887 = cljs.core.chunk_rest.call(null,inst_11882);var inst_11888 = cljs.core.count.call(null,inst_11886);var inst_11861 = inst_11887;var inst_11862 = inst_11886;var inst_11863 = inst_11888;var inst_11864 = 0;var state_11925__$1 = (function (){var statearr_11936 = state_11925;(statearr_11936[10] = inst_11862);
(statearr_11936[11] = inst_11861);
(statearr_11936[12] = inst_11863);
(statearr_11936[13] = inst_11864);
return statearr_11936;
})();var statearr_11937_12020 = state_11925__$1;(statearr_11937_12020[2] = null);
(statearr_11937_12020[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 5))
{var inst_11800 = cljs.core.deref.call(null,cs);var inst_11801 = cljs.core.seq.call(null,inst_11800);var inst_11802 = inst_11801;var inst_11803 = null;var inst_11804 = 0;var inst_11805 = 0;var state_11925__$1 = (function (){var statearr_11938 = state_11925;(statearr_11938[14] = inst_11802);
(statearr_11938[15] = inst_11804);
(statearr_11938[16] = inst_11803);
(statearr_11938[17] = inst_11805);
return statearr_11938;
})();var statearr_11939_12021 = state_11925__$1;(statearr_11939_12021[2] = null);
(statearr_11939_12021[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 37))
{var inst_11882 = (state_11925[9]);var inst_11891 = cljs.core.first.call(null,inst_11882);var state_11925__$1 = (function (){var statearr_11940 = state_11925;(statearr_11940[18] = inst_11891);
return statearr_11940;
})();var statearr_11941_12022 = state_11925__$1;(statearr_11941_12022[2] = null);
(statearr_11941_12022[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 6))
{var inst_11853 = (state_11925[19]);var inst_11852 = cljs.core.deref.call(null,cs);var inst_11853__$1 = cljs.core.keys.call(null,inst_11852);var inst_11854 = cljs.core.count.call(null,inst_11853__$1);var inst_11855 = cljs.core.reset_BANG_.call(null,dctr,inst_11854);var inst_11860 = cljs.core.seq.call(null,inst_11853__$1);var inst_11861 = inst_11860;var inst_11862 = null;var inst_11863 = 0;var inst_11864 = 0;var state_11925__$1 = (function (){var statearr_11942 = state_11925;(statearr_11942[10] = inst_11862);
(statearr_11942[11] = inst_11861);
(statearr_11942[19] = inst_11853__$1);
(statearr_11942[20] = inst_11855);
(statearr_11942[12] = inst_11863);
(statearr_11942[13] = inst_11864);
return statearr_11942;
})();var statearr_11943_12023 = state_11925__$1;(statearr_11943_12023[2] = null);
(statearr_11943_12023[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 38))
{var inst_11904 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11944_12024 = state_11925__$1;(statearr_11944_12024[2] = inst_11904);
(statearr_11944_12024[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 7))
{var inst_11921 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11945_12025 = state_11925__$1;(statearr_11945_12025[2] = inst_11921);
(statearr_11945_12025[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 39))
{var inst_11882 = (state_11925[9]);var inst_11900 = (state_11925[2]);var inst_11901 = cljs.core.next.call(null,inst_11882);var inst_11861 = inst_11901;var inst_11862 = null;var inst_11863 = 0;var inst_11864 = 0;var state_11925__$1 = (function (){var statearr_11946 = state_11925;(statearr_11946[21] = inst_11900);
(statearr_11946[10] = inst_11862);
(statearr_11946[11] = inst_11861);
(statearr_11946[12] = inst_11863);
(statearr_11946[13] = inst_11864);
return statearr_11946;
})();var statearr_11947_12026 = state_11925__$1;(statearr_11947_12026[2] = null);
(statearr_11947_12026[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 8))
{var inst_11804 = (state_11925[15]);var inst_11805 = (state_11925[17]);var inst_11807 = (inst_11805 < inst_11804);var inst_11808 = inst_11807;var state_11925__$1 = state_11925;if(cljs.core.truth_(inst_11808))
{var statearr_11948_12027 = state_11925__$1;(statearr_11948_12027[1] = 10);
} else
{var statearr_11949_12028 = state_11925__$1;(statearr_11949_12028[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 40))
{var inst_11891 = (state_11925[18]);var inst_11892 = (state_11925[2]);var inst_11893 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11894 = cljs.core.async.untap_STAR_.call(null,m,inst_11891);var state_11925__$1 = (function (){var statearr_11950 = state_11925;(statearr_11950[22] = inst_11893);
(statearr_11950[23] = inst_11892);
return statearr_11950;
})();var statearr_11951_12029 = state_11925__$1;(statearr_11951_12029[2] = inst_11894);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 9))
{var inst_11850 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11952_12030 = state_11925__$1;(statearr_11952_12030[2] = inst_11850);
(statearr_11952_12030[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 41))
{var inst_11891 = (state_11925[18]);var inst_11793 = (state_11925[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11925,40,Object,null,39);var inst_11898 = cljs.core.async.put_BANG_.call(null,inst_11891,inst_11793,done);var state_11925__$1 = state_11925;var statearr_11953_12031 = state_11925__$1;(statearr_11953_12031[2] = inst_11898);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 10))
{var inst_11803 = (state_11925[16]);var inst_11805 = (state_11925[17]);var inst_11811 = cljs.core._nth.call(null,inst_11803,inst_11805);var inst_11812 = cljs.core.nth.call(null,inst_11811,0,null);var inst_11813 = cljs.core.nth.call(null,inst_11811,1,null);var state_11925__$1 = (function (){var statearr_11954 = state_11925;(statearr_11954[24] = inst_11812);
return statearr_11954;
})();if(cljs.core.truth_(inst_11813))
{var statearr_11955_12032 = state_11925__$1;(statearr_11955_12032[1] = 13);
} else
{var statearr_11956_12033 = state_11925__$1;(statearr_11956_12033[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 42))
{var state_11925__$1 = state_11925;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11925__$1,45,dchan);
} else
{if((state_val_11926 === 11))
{var inst_11802 = (state_11925[14]);var inst_11822 = (state_11925[25]);var inst_11822__$1 = cljs.core.seq.call(null,inst_11802);var state_11925__$1 = (function (){var statearr_11957 = state_11925;(statearr_11957[25] = inst_11822__$1);
return statearr_11957;
})();if(inst_11822__$1)
{var statearr_11958_12034 = state_11925__$1;(statearr_11958_12034[1] = 16);
} else
{var statearr_11959_12035 = state_11925__$1;(statearr_11959_12035[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 43))
{var state_11925__$1 = state_11925;var statearr_11960_12036 = state_11925__$1;(statearr_11960_12036[2] = null);
(statearr_11960_12036[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 12))
{var inst_11848 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11961_12037 = state_11925__$1;(statearr_11961_12037[2] = inst_11848);
(statearr_11961_12037[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 44))
{var inst_11918 = (state_11925[2]);var state_11925__$1 = (function (){var statearr_11962 = state_11925;(statearr_11962[26] = inst_11918);
return statearr_11962;
})();var statearr_11963_12038 = state_11925__$1;(statearr_11963_12038[2] = null);
(statearr_11963_12038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 13))
{var inst_11812 = (state_11925[24]);var inst_11815 = cljs.core.async.close_BANG_.call(null,inst_11812);var state_11925__$1 = state_11925;var statearr_11964_12039 = state_11925__$1;(statearr_11964_12039[2] = inst_11815);
(statearr_11964_12039[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 45))
{var inst_11915 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11968_12040 = state_11925__$1;(statearr_11968_12040[2] = inst_11915);
(statearr_11968_12040[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 14))
{var state_11925__$1 = state_11925;var statearr_11969_12041 = state_11925__$1;(statearr_11969_12041[2] = null);
(statearr_11969_12041[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 15))
{var inst_11802 = (state_11925[14]);var inst_11804 = (state_11925[15]);var inst_11803 = (state_11925[16]);var inst_11805 = (state_11925[17]);var inst_11818 = (state_11925[2]);var inst_11819 = (inst_11805 + 1);var tmp11965 = inst_11802;var tmp11966 = inst_11804;var tmp11967 = inst_11803;var inst_11802__$1 = tmp11965;var inst_11803__$1 = tmp11967;var inst_11804__$1 = tmp11966;var inst_11805__$1 = inst_11819;var state_11925__$1 = (function (){var statearr_11970 = state_11925;(statearr_11970[14] = inst_11802__$1);
(statearr_11970[15] = inst_11804__$1);
(statearr_11970[16] = inst_11803__$1);
(statearr_11970[17] = inst_11805__$1);
(statearr_11970[27] = inst_11818);
return statearr_11970;
})();var statearr_11971_12042 = state_11925__$1;(statearr_11971_12042[2] = null);
(statearr_11971_12042[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 16))
{var inst_11822 = (state_11925[25]);var inst_11824 = cljs.core.chunked_seq_QMARK_.call(null,inst_11822);var state_11925__$1 = state_11925;if(inst_11824)
{var statearr_11972_12043 = state_11925__$1;(statearr_11972_12043[1] = 19);
} else
{var statearr_11973_12044 = state_11925__$1;(statearr_11973_12044[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 17))
{var state_11925__$1 = state_11925;var statearr_11974_12045 = state_11925__$1;(statearr_11974_12045[2] = null);
(statearr_11974_12045[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 18))
{var inst_11846 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11975_12046 = state_11925__$1;(statearr_11975_12046[2] = inst_11846);
(statearr_11975_12046[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 19))
{var inst_11822 = (state_11925[25]);var inst_11826 = cljs.core.chunk_first.call(null,inst_11822);var inst_11827 = cljs.core.chunk_rest.call(null,inst_11822);var inst_11828 = cljs.core.count.call(null,inst_11826);var inst_11802 = inst_11827;var inst_11803 = inst_11826;var inst_11804 = inst_11828;var inst_11805 = 0;var state_11925__$1 = (function (){var statearr_11976 = state_11925;(statearr_11976[14] = inst_11802);
(statearr_11976[15] = inst_11804);
(statearr_11976[16] = inst_11803);
(statearr_11976[17] = inst_11805);
return statearr_11976;
})();var statearr_11977_12047 = state_11925__$1;(statearr_11977_12047[2] = null);
(statearr_11977_12047[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 20))
{var inst_11822 = (state_11925[25]);var inst_11832 = cljs.core.first.call(null,inst_11822);var inst_11833 = cljs.core.nth.call(null,inst_11832,0,null);var inst_11834 = cljs.core.nth.call(null,inst_11832,1,null);var state_11925__$1 = (function (){var statearr_11978 = state_11925;(statearr_11978[28] = inst_11833);
return statearr_11978;
})();if(cljs.core.truth_(inst_11834))
{var statearr_11979_12048 = state_11925__$1;(statearr_11979_12048[1] = 22);
} else
{var statearr_11980_12049 = state_11925__$1;(statearr_11980_12049[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 21))
{var inst_11843 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11981_12050 = state_11925__$1;(statearr_11981_12050[2] = inst_11843);
(statearr_11981_12050[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 22))
{var inst_11833 = (state_11925[28]);var inst_11836 = cljs.core.async.close_BANG_.call(null,inst_11833);var state_11925__$1 = state_11925;var statearr_11982_12051 = state_11925__$1;(statearr_11982_12051[2] = inst_11836);
(statearr_11982_12051[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 23))
{var state_11925__$1 = state_11925;var statearr_11983_12052 = state_11925__$1;(statearr_11983_12052[2] = null);
(statearr_11983_12052[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 24))
{var inst_11822 = (state_11925[25]);var inst_11839 = (state_11925[2]);var inst_11840 = cljs.core.next.call(null,inst_11822);var inst_11802 = inst_11840;var inst_11803 = null;var inst_11804 = 0;var inst_11805 = 0;var state_11925__$1 = (function (){var statearr_11984 = state_11925;(statearr_11984[29] = inst_11839);
(statearr_11984[14] = inst_11802);
(statearr_11984[15] = inst_11804);
(statearr_11984[16] = inst_11803);
(statearr_11984[17] = inst_11805);
return statearr_11984;
})();var statearr_11985_12053 = state_11925__$1;(statearr_11985_12053[2] = null);
(statearr_11985_12053[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 25))
{var inst_11863 = (state_11925[12]);var inst_11864 = (state_11925[13]);var inst_11866 = (inst_11864 < inst_11863);var inst_11867 = inst_11866;var state_11925__$1 = state_11925;if(cljs.core.truth_(inst_11867))
{var statearr_11986_12054 = state_11925__$1;(statearr_11986_12054[1] = 27);
} else
{var statearr_11987_12055 = state_11925__$1;(statearr_11987_12055[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 26))
{var inst_11853 = (state_11925[19]);var inst_11911 = (state_11925[2]);var inst_11912 = cljs.core.seq.call(null,inst_11853);var state_11925__$1 = (function (){var statearr_11988 = state_11925;(statearr_11988[30] = inst_11911);
return statearr_11988;
})();if(inst_11912)
{var statearr_11989_12056 = state_11925__$1;(statearr_11989_12056[1] = 42);
} else
{var statearr_11990_12057 = state_11925__$1;(statearr_11990_12057[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 27))
{var inst_11862 = (state_11925[10]);var inst_11864 = (state_11925[13]);var inst_11869 = cljs.core._nth.call(null,inst_11862,inst_11864);var state_11925__$1 = (function (){var statearr_11991 = state_11925;(statearr_11991[7] = inst_11869);
return statearr_11991;
})();var statearr_11992_12058 = state_11925__$1;(statearr_11992_12058[2] = null);
(statearr_11992_12058[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 28))
{var inst_11861 = (state_11925[11]);var inst_11882 = (state_11925[9]);var inst_11882__$1 = cljs.core.seq.call(null,inst_11861);var state_11925__$1 = (function (){var statearr_11996 = state_11925;(statearr_11996[9] = inst_11882__$1);
return statearr_11996;
})();if(inst_11882__$1)
{var statearr_11997_12059 = state_11925__$1;(statearr_11997_12059[1] = 33);
} else
{var statearr_11998_12060 = state_11925__$1;(statearr_11998_12060[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 29))
{var inst_11909 = (state_11925[2]);var state_11925__$1 = state_11925;var statearr_11999_12061 = state_11925__$1;(statearr_11999_12061[2] = inst_11909);
(statearr_11999_12061[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 30))
{var inst_11862 = (state_11925[10]);var inst_11861 = (state_11925[11]);var inst_11863 = (state_11925[12]);var inst_11864 = (state_11925[13]);var inst_11878 = (state_11925[2]);var inst_11879 = (inst_11864 + 1);var tmp11993 = inst_11862;var tmp11994 = inst_11861;var tmp11995 = inst_11863;var inst_11861__$1 = tmp11994;var inst_11862__$1 = tmp11993;var inst_11863__$1 = tmp11995;var inst_11864__$1 = inst_11879;var state_11925__$1 = (function (){var statearr_12000 = state_11925;(statearr_12000[10] = inst_11862__$1);
(statearr_12000[11] = inst_11861__$1);
(statearr_12000[31] = inst_11878);
(statearr_12000[12] = inst_11863__$1);
(statearr_12000[13] = inst_11864__$1);
return statearr_12000;
})();var statearr_12001_12062 = state_11925__$1;(statearr_12001_12062[2] = null);
(statearr_12001_12062[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11926 === 31))
{var inst_11869 = (state_11925[7]);var inst_11870 = (state_11925[2]);var inst_11871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11872 = cljs.core.async.untap_STAR_.call(null,m,inst_11869);var state_11925__$1 = (function (){var statearr_12002 = state_11925;(statearr_12002[32] = inst_11871);
(statearr_12002[33] = inst_11870);
return statearr_12002;
})();var statearr_12003_12063 = state_11925__$1;(statearr_12003_12063[2] = inst_11872);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12007[0] = state_machine__6178__auto__);
(statearr_12007[1] = 1);
return statearr_12007;
});
var state_machine__6178__auto____1 = (function (state_11925){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11925);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12008){if((e12008 instanceof Object))
{var ex__6181__auto__ = e12008;var statearr_12009_12064 = state_11925;(statearr_12009_12064[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12065 = state_11925;
state_11925 = G__12065;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11925){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12010 = f__6193__auto__.call(null);(statearr_12010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12011);
return statearr_12010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12067 = {};return obj12067;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12177 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12178){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12178 = meta12178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12177.cljs$lang$type = true;
cljs.core.async.t12177.cljs$lang$ctorStr = "cljs.core.async/t12177";
cljs.core.async.t12177.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12177");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12177.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12179){var self__ = this;
var _12179__$1 = this;return self__.meta12178;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12179,meta12178__$1){var self__ = this;
var _12179__$1 = this;return (new cljs.core.async.t12177(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12178__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12177 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12177(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12178){return (new cljs.core.async.t12177(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12178));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12177(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___12286 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12244){var state_val_12245 = (state_12244[1]);if((state_val_12245 === 1))
{var inst_12183 = (state_12244[7]);var inst_12183__$1 = calc_state.call(null);var inst_12184 = cljs.core.seq_QMARK_.call(null,inst_12183__$1);var state_12244__$1 = (function (){var statearr_12246 = state_12244;(statearr_12246[7] = inst_12183__$1);
return statearr_12246;
})();if(inst_12184)
{var statearr_12247_12287 = state_12244__$1;(statearr_12247_12287[1] = 2);
} else
{var statearr_12248_12288 = state_12244__$1;(statearr_12248_12288[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 2))
{var inst_12183 = (state_12244[7]);var inst_12186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12183);var state_12244__$1 = state_12244;var statearr_12249_12289 = state_12244__$1;(statearr_12249_12289[2] = inst_12186);
(statearr_12249_12289[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 3))
{var inst_12183 = (state_12244[7]);var state_12244__$1 = state_12244;var statearr_12250_12290 = state_12244__$1;(statearr_12250_12290[2] = inst_12183);
(statearr_12250_12290[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 4))
{var inst_12183 = (state_12244[7]);var inst_12189 = (state_12244[2]);var inst_12190 = cljs.core.get.call(null,inst_12189,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12191 = cljs.core.get.call(null,inst_12189,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12192 = cljs.core.get.call(null,inst_12189,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12193 = inst_12183;var state_12244__$1 = (function (){var statearr_12251 = state_12244;(statearr_12251[8] = inst_12193);
(statearr_12251[9] = inst_12192);
(statearr_12251[10] = inst_12190);
(statearr_12251[11] = inst_12191);
return statearr_12251;
})();var statearr_12252_12291 = state_12244__$1;(statearr_12252_12291[2] = null);
(statearr_12252_12291[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 5))
{var inst_12193 = (state_12244[8]);var inst_12196 = cljs.core.seq_QMARK_.call(null,inst_12193);var state_12244__$1 = state_12244;if(inst_12196)
{var statearr_12253_12292 = state_12244__$1;(statearr_12253_12292[1] = 7);
} else
{var statearr_12254_12293 = state_12244__$1;(statearr_12254_12293[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 6))
{var inst_12242 = (state_12244[2]);var state_12244__$1 = state_12244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12244__$1,inst_12242);
} else
{if((state_val_12245 === 7))
{var inst_12193 = (state_12244[8]);var inst_12198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12193);var state_12244__$1 = state_12244;var statearr_12255_12294 = state_12244__$1;(statearr_12255_12294[2] = inst_12198);
(statearr_12255_12294[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 8))
{var inst_12193 = (state_12244[8]);var state_12244__$1 = state_12244;var statearr_12256_12295 = state_12244__$1;(statearr_12256_12295[2] = inst_12193);
(statearr_12256_12295[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 9))
{var inst_12201 = (state_12244[12]);var inst_12201__$1 = (state_12244[2]);var inst_12202 = cljs.core.get.call(null,inst_12201__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12203 = cljs.core.get.call(null,inst_12201__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12204 = cljs.core.get.call(null,inst_12201__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12244__$1 = (function (){var statearr_12257 = state_12244;(statearr_12257[13] = inst_12204);
(statearr_12257[14] = inst_12203);
(statearr_12257[12] = inst_12201__$1);
return statearr_12257;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12244__$1,10,inst_12202);
} else
{if((state_val_12245 === 10))
{var inst_12209 = (state_12244[15]);var inst_12208 = (state_12244[16]);var inst_12207 = (state_12244[2]);var inst_12208__$1 = cljs.core.nth.call(null,inst_12207,0,null);var inst_12209__$1 = cljs.core.nth.call(null,inst_12207,1,null);var inst_12210 = (inst_12208__$1 == null);var inst_12211 = cljs.core._EQ_.call(null,inst_12209__$1,change);var inst_12212 = (inst_12210) || (inst_12211);var state_12244__$1 = (function (){var statearr_12258 = state_12244;(statearr_12258[15] = inst_12209__$1);
(statearr_12258[16] = inst_12208__$1);
return statearr_12258;
})();if(cljs.core.truth_(inst_12212))
{var statearr_12259_12296 = state_12244__$1;(statearr_12259_12296[1] = 11);
} else
{var statearr_12260_12297 = state_12244__$1;(statearr_12260_12297[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 11))
{var inst_12208 = (state_12244[16]);var inst_12214 = (inst_12208 == null);var state_12244__$1 = state_12244;if(cljs.core.truth_(inst_12214))
{var statearr_12261_12298 = state_12244__$1;(statearr_12261_12298[1] = 14);
} else
{var statearr_12262_12299 = state_12244__$1;(statearr_12262_12299[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 12))
{var inst_12209 = (state_12244[15]);var inst_12223 = (state_12244[17]);var inst_12204 = (state_12244[13]);var inst_12223__$1 = inst_12204.call(null,inst_12209);var state_12244__$1 = (function (){var statearr_12263 = state_12244;(statearr_12263[17] = inst_12223__$1);
return statearr_12263;
})();if(cljs.core.truth_(inst_12223__$1))
{var statearr_12264_12300 = state_12244__$1;(statearr_12264_12300[1] = 17);
} else
{var statearr_12265_12301 = state_12244__$1;(statearr_12265_12301[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 13))
{var inst_12240 = (state_12244[2]);var state_12244__$1 = state_12244;var statearr_12266_12302 = state_12244__$1;(statearr_12266_12302[2] = inst_12240);
(statearr_12266_12302[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 14))
{var inst_12209 = (state_12244[15]);var inst_12216 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12209);var state_12244__$1 = state_12244;var statearr_12267_12303 = state_12244__$1;(statearr_12267_12303[2] = inst_12216);
(statearr_12267_12303[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 15))
{var state_12244__$1 = state_12244;var statearr_12268_12304 = state_12244__$1;(statearr_12268_12304[2] = null);
(statearr_12268_12304[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 16))
{var inst_12219 = (state_12244[2]);var inst_12220 = calc_state.call(null);var inst_12193 = inst_12220;var state_12244__$1 = (function (){var statearr_12269 = state_12244;(statearr_12269[8] = inst_12193);
(statearr_12269[18] = inst_12219);
return statearr_12269;
})();var statearr_12270_12305 = state_12244__$1;(statearr_12270_12305[2] = null);
(statearr_12270_12305[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 17))
{var inst_12223 = (state_12244[17]);var state_12244__$1 = state_12244;var statearr_12271_12306 = state_12244__$1;(statearr_12271_12306[2] = inst_12223);
(statearr_12271_12306[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 18))
{var inst_12209 = (state_12244[15]);var inst_12204 = (state_12244[13]);var inst_12203 = (state_12244[14]);var inst_12226 = cljs.core.empty_QMARK_.call(null,inst_12204);var inst_12227 = inst_12203.call(null,inst_12209);var inst_12228 = cljs.core.not.call(null,inst_12227);var inst_12229 = (inst_12226) && (inst_12228);var state_12244__$1 = state_12244;var statearr_12272_12307 = state_12244__$1;(statearr_12272_12307[2] = inst_12229);
(statearr_12272_12307[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 19))
{var inst_12231 = (state_12244[2]);var state_12244__$1 = state_12244;if(cljs.core.truth_(inst_12231))
{var statearr_12273_12308 = state_12244__$1;(statearr_12273_12308[1] = 20);
} else
{var statearr_12274_12309 = state_12244__$1;(statearr_12274_12309[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 20))
{var inst_12208 = (state_12244[16]);var state_12244__$1 = state_12244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12244__$1,23,out,inst_12208);
} else
{if((state_val_12245 === 21))
{var state_12244__$1 = state_12244;var statearr_12275_12310 = state_12244__$1;(statearr_12275_12310[2] = null);
(statearr_12275_12310[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 22))
{var inst_12201 = (state_12244[12]);var inst_12237 = (state_12244[2]);var inst_12193 = inst_12201;var state_12244__$1 = (function (){var statearr_12276 = state_12244;(statearr_12276[8] = inst_12193);
(statearr_12276[19] = inst_12237);
return statearr_12276;
})();var statearr_12277_12311 = state_12244__$1;(statearr_12277_12311[2] = null);
(statearr_12277_12311[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12245 === 23))
{var inst_12234 = (state_12244[2]);var state_12244__$1 = state_12244;var statearr_12278_12312 = state_12244__$1;(statearr_12278_12312[2] = inst_12234);
(statearr_12278_12312[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12282[0] = state_machine__6178__auto__);
(statearr_12282[1] = 1);
return statearr_12282;
});
var state_machine__6178__auto____1 = (function (state_12244){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12244);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12283){if((e12283 instanceof Object))
{var ex__6181__auto__ = e12283;var statearr_12284_12313 = state_12244;(statearr_12284_12313[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12244);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12314 = state_12244;
state_12244 = G__12314;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12244){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12285 = f__6193__auto__.call(null);(statearr_12285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12286);
return statearr_12285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12316 = {};return obj12316;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12317_SHARP_){if(cljs.core.truth_(p1__12317_SHARP_.call(null,topic)))
{return p1__12317_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12317_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12442 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12443){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12443 = meta12443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12442.cljs$lang$type = true;
cljs.core.async.t12442.cljs$lang$ctorStr = "cljs.core.async/t12442";
cljs.core.async.t12442.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12442");
});})(mults,ensure_mult))
;
cljs.core.async.t12442.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12442.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12442.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12442.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12444){var self__ = this;
var _12444__$1 = this;return self__.meta12443;
});})(mults,ensure_mult))
;
cljs.core.async.t12442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12444,meta12443__$1){var self__ = this;
var _12444__$1 = this;return (new cljs.core.async.t12442(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12443__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12442 = ((function (mults,ensure_mult){
return (function __GT_t12442(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12443){return (new cljs.core.async.t12442(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12443));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12442(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___12566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12518){var state_val_12519 = (state_12518[1]);if((state_val_12519 === 1))
{var state_12518__$1 = state_12518;var statearr_12520_12567 = state_12518__$1;(statearr_12520_12567[2] = null);
(statearr_12520_12567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 2))
{var state_12518__$1 = state_12518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12518__$1,4,ch);
} else
{if((state_val_12519 === 3))
{var inst_12516 = (state_12518[2]);var state_12518__$1 = state_12518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12518__$1,inst_12516);
} else
{if((state_val_12519 === 4))
{var inst_12447 = (state_12518[7]);var inst_12447__$1 = (state_12518[2]);var inst_12448 = (inst_12447__$1 == null);var state_12518__$1 = (function (){var statearr_12521 = state_12518;(statearr_12521[7] = inst_12447__$1);
return statearr_12521;
})();if(cljs.core.truth_(inst_12448))
{var statearr_12522_12568 = state_12518__$1;(statearr_12522_12568[1] = 5);
} else
{var statearr_12523_12569 = state_12518__$1;(statearr_12523_12569[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 5))
{var inst_12454 = cljs.core.deref.call(null,mults);var inst_12455 = cljs.core.vals.call(null,inst_12454);var inst_12456 = cljs.core.seq.call(null,inst_12455);var inst_12457 = inst_12456;var inst_12458 = null;var inst_12459 = 0;var inst_12460 = 0;var state_12518__$1 = (function (){var statearr_12524 = state_12518;(statearr_12524[8] = inst_12460);
(statearr_12524[9] = inst_12457);
(statearr_12524[10] = inst_12458);
(statearr_12524[11] = inst_12459);
return statearr_12524;
})();var statearr_12525_12570 = state_12518__$1;(statearr_12525_12570[2] = null);
(statearr_12525_12570[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 6))
{var inst_12447 = (state_12518[7]);var inst_12497 = (state_12518[12]);var inst_12495 = (state_12518[13]);var inst_12495__$1 = topic_fn.call(null,inst_12447);var inst_12496 = cljs.core.deref.call(null,mults);var inst_12497__$1 = cljs.core.get.call(null,inst_12496,inst_12495__$1);var state_12518__$1 = (function (){var statearr_12526 = state_12518;(statearr_12526[12] = inst_12497__$1);
(statearr_12526[13] = inst_12495__$1);
return statearr_12526;
})();if(cljs.core.truth_(inst_12497__$1))
{var statearr_12527_12571 = state_12518__$1;(statearr_12527_12571[1] = 19);
} else
{var statearr_12528_12572 = state_12518__$1;(statearr_12528_12572[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 7))
{var inst_12514 = (state_12518[2]);var state_12518__$1 = state_12518;var statearr_12529_12573 = state_12518__$1;(statearr_12529_12573[2] = inst_12514);
(statearr_12529_12573[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 8))
{var inst_12460 = (state_12518[8]);var inst_12459 = (state_12518[11]);var inst_12462 = (inst_12460 < inst_12459);var inst_12463 = inst_12462;var state_12518__$1 = state_12518;if(cljs.core.truth_(inst_12463))
{var statearr_12533_12574 = state_12518__$1;(statearr_12533_12574[1] = 10);
} else
{var statearr_12534_12575 = state_12518__$1;(statearr_12534_12575[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 9))
{var inst_12493 = (state_12518[2]);var state_12518__$1 = state_12518;var statearr_12535_12576 = state_12518__$1;(statearr_12535_12576[2] = inst_12493);
(statearr_12535_12576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 10))
{var inst_12460 = (state_12518[8]);var inst_12457 = (state_12518[9]);var inst_12458 = (state_12518[10]);var inst_12459 = (state_12518[11]);var inst_12465 = cljs.core._nth.call(null,inst_12458,inst_12460);var inst_12466 = cljs.core.async.muxch_STAR_.call(null,inst_12465);var inst_12467 = cljs.core.async.close_BANG_.call(null,inst_12466);var inst_12468 = (inst_12460 + 1);var tmp12530 = inst_12457;var tmp12531 = inst_12458;var tmp12532 = inst_12459;var inst_12457__$1 = tmp12530;var inst_12458__$1 = tmp12531;var inst_12459__$1 = tmp12532;var inst_12460__$1 = inst_12468;var state_12518__$1 = (function (){var statearr_12536 = state_12518;(statearr_12536[8] = inst_12460__$1);
(statearr_12536[9] = inst_12457__$1);
(statearr_12536[14] = inst_12467);
(statearr_12536[10] = inst_12458__$1);
(statearr_12536[11] = inst_12459__$1);
return statearr_12536;
})();var statearr_12537_12577 = state_12518__$1;(statearr_12537_12577[2] = null);
(statearr_12537_12577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 11))
{var inst_12471 = (state_12518[15]);var inst_12457 = (state_12518[9]);var inst_12471__$1 = cljs.core.seq.call(null,inst_12457);var state_12518__$1 = (function (){var statearr_12538 = state_12518;(statearr_12538[15] = inst_12471__$1);
return statearr_12538;
})();if(inst_12471__$1)
{var statearr_12539_12578 = state_12518__$1;(statearr_12539_12578[1] = 13);
} else
{var statearr_12540_12579 = state_12518__$1;(statearr_12540_12579[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 12))
{var inst_12491 = (state_12518[2]);var state_12518__$1 = state_12518;var statearr_12541_12580 = state_12518__$1;(statearr_12541_12580[2] = inst_12491);
(statearr_12541_12580[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 13))
{var inst_12471 = (state_12518[15]);var inst_12473 = cljs.core.chunked_seq_QMARK_.call(null,inst_12471);var state_12518__$1 = state_12518;if(inst_12473)
{var statearr_12542_12581 = state_12518__$1;(statearr_12542_12581[1] = 16);
} else
{var statearr_12543_12582 = state_12518__$1;(statearr_12543_12582[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 14))
{var state_12518__$1 = state_12518;var statearr_12544_12583 = state_12518__$1;(statearr_12544_12583[2] = null);
(statearr_12544_12583[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 15))
{var inst_12489 = (state_12518[2]);var state_12518__$1 = state_12518;var statearr_12545_12584 = state_12518__$1;(statearr_12545_12584[2] = inst_12489);
(statearr_12545_12584[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 16))
{var inst_12471 = (state_12518[15]);var inst_12475 = cljs.core.chunk_first.call(null,inst_12471);var inst_12476 = cljs.core.chunk_rest.call(null,inst_12471);var inst_12477 = cljs.core.count.call(null,inst_12475);var inst_12457 = inst_12476;var inst_12458 = inst_12475;var inst_12459 = inst_12477;var inst_12460 = 0;var state_12518__$1 = (function (){var statearr_12546 = state_12518;(statearr_12546[8] = inst_12460);
(statearr_12546[9] = inst_12457);
(statearr_12546[10] = inst_12458);
(statearr_12546[11] = inst_12459);
return statearr_12546;
})();var statearr_12547_12585 = state_12518__$1;(statearr_12547_12585[2] = null);
(statearr_12547_12585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 17))
{var inst_12471 = (state_12518[15]);var inst_12480 = cljs.core.first.call(null,inst_12471);var inst_12481 = cljs.core.async.muxch_STAR_.call(null,inst_12480);var inst_12482 = cljs.core.async.close_BANG_.call(null,inst_12481);var inst_12483 = cljs.core.next.call(null,inst_12471);var inst_12457 = inst_12483;var inst_12458 = null;var inst_12459 = 0;var inst_12460 = 0;var state_12518__$1 = (function (){var statearr_12548 = state_12518;(statearr_12548[8] = inst_12460);
(statearr_12548[9] = inst_12457);
(statearr_12548[10] = inst_12458);
(statearr_12548[11] = inst_12459);
(statearr_12548[16] = inst_12482);
return statearr_12548;
})();var statearr_12549_12586 = state_12518__$1;(statearr_12549_12586[2] = null);
(statearr_12549_12586[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 18))
{var inst_12486 = (state_12518[2]);var state_12518__$1 = state_12518;var statearr_12550_12587 = state_12518__$1;(statearr_12550_12587[2] = inst_12486);
(statearr_12550_12587[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 19))
{var state_12518__$1 = state_12518;var statearr_12551_12588 = state_12518__$1;(statearr_12551_12588[2] = null);
(statearr_12551_12588[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 20))
{var state_12518__$1 = state_12518;var statearr_12552_12589 = state_12518__$1;(statearr_12552_12589[2] = null);
(statearr_12552_12589[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 21))
{var inst_12511 = (state_12518[2]);var state_12518__$1 = (function (){var statearr_12553 = state_12518;(statearr_12553[17] = inst_12511);
return statearr_12553;
})();var statearr_12554_12590 = state_12518__$1;(statearr_12554_12590[2] = null);
(statearr_12554_12590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 22))
{var inst_12508 = (state_12518[2]);var state_12518__$1 = state_12518;var statearr_12555_12591 = state_12518__$1;(statearr_12555_12591[2] = inst_12508);
(statearr_12555_12591[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 23))
{var inst_12495 = (state_12518[13]);var inst_12499 = (state_12518[2]);var inst_12500 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12495);var state_12518__$1 = (function (){var statearr_12556 = state_12518;(statearr_12556[18] = inst_12499);
return statearr_12556;
})();var statearr_12557_12592 = state_12518__$1;(statearr_12557_12592[2] = inst_12500);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12518__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12519 === 24))
{var inst_12447 = (state_12518[7]);var inst_12497 = (state_12518[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12518,23,Object,null,22);var inst_12504 = cljs.core.async.muxch_STAR_.call(null,inst_12497);var state_12518__$1 = state_12518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12518__$1,25,inst_12504,inst_12447);
} else
{if((state_val_12519 === 25))
{var inst_12506 = (state_12518[2]);var state_12518__$1 = state_12518;var statearr_12558_12593 = state_12518__$1;(statearr_12558_12593[2] = inst_12506);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12518__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12562[0] = state_machine__6178__auto__);
(statearr_12562[1] = 1);
return statearr_12562;
});
var state_machine__6178__auto____1 = (function (state_12518){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12518);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12563){if((e12563 instanceof Object))
{var ex__6181__auto__ = e12563;var statearr_12564_12594 = state_12518;(statearr_12564_12594[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12595 = state_12518;
state_12518 = G__12595;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12518){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12565 = f__6193__auto__.call(null);(statearr_12565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12566);
return statearr_12565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6192__auto___12732 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12702){var state_val_12703 = (state_12702[1]);if((state_val_12703 === 1))
{var state_12702__$1 = state_12702;var statearr_12704_12733 = state_12702__$1;(statearr_12704_12733[2] = null);
(statearr_12704_12733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 2))
{var inst_12665 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12666 = 0;var state_12702__$1 = (function (){var statearr_12705 = state_12702;(statearr_12705[7] = inst_12666);
(statearr_12705[8] = inst_12665);
return statearr_12705;
})();var statearr_12706_12734 = state_12702__$1;(statearr_12706_12734[2] = null);
(statearr_12706_12734[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 3))
{var inst_12700 = (state_12702[2]);var state_12702__$1 = state_12702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12702__$1,inst_12700);
} else
{if((state_val_12703 === 4))
{var inst_12666 = (state_12702[7]);var inst_12668 = (inst_12666 < cnt);var state_12702__$1 = state_12702;if(cljs.core.truth_(inst_12668))
{var statearr_12707_12735 = state_12702__$1;(statearr_12707_12735[1] = 6);
} else
{var statearr_12708_12736 = state_12702__$1;(statearr_12708_12736[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 5))
{var inst_12686 = (state_12702[2]);var state_12702__$1 = (function (){var statearr_12709 = state_12702;(statearr_12709[9] = inst_12686);
return statearr_12709;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12702__$1,12,dchan);
} else
{if((state_val_12703 === 6))
{var state_12702__$1 = state_12702;var statearr_12710_12737 = state_12702__$1;(statearr_12710_12737[2] = null);
(statearr_12710_12737[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 7))
{var state_12702__$1 = state_12702;var statearr_12711_12738 = state_12702__$1;(statearr_12711_12738[2] = null);
(statearr_12711_12738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 8))
{var inst_12684 = (state_12702[2]);var state_12702__$1 = state_12702;var statearr_12712_12739 = state_12702__$1;(statearr_12712_12739[2] = inst_12684);
(statearr_12712_12739[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 9))
{var inst_12666 = (state_12702[7]);var inst_12679 = (state_12702[2]);var inst_12680 = (inst_12666 + 1);var inst_12666__$1 = inst_12680;var state_12702__$1 = (function (){var statearr_12713 = state_12702;(statearr_12713[7] = inst_12666__$1);
(statearr_12713[10] = inst_12679);
return statearr_12713;
})();var statearr_12714_12740 = state_12702__$1;(statearr_12714_12740[2] = null);
(statearr_12714_12740[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 10))
{var inst_12670 = (state_12702[2]);var inst_12671 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12702__$1 = (function (){var statearr_12715 = state_12702;(statearr_12715[11] = inst_12670);
return statearr_12715;
})();var statearr_12716_12741 = state_12702__$1;(statearr_12716_12741[2] = inst_12671);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12702__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 11))
{var inst_12666 = (state_12702[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12702,10,Object,null,9);var inst_12675 = chs__$1.call(null,inst_12666);var inst_12676 = done.call(null,inst_12666);var inst_12677 = cljs.core.async.take_BANG_.call(null,inst_12675,inst_12676);var state_12702__$1 = state_12702;var statearr_12717_12742 = state_12702__$1;(statearr_12717_12742[2] = inst_12677);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12702__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 12))
{var inst_12688 = (state_12702[12]);var inst_12688__$1 = (state_12702[2]);var inst_12689 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12688__$1);var state_12702__$1 = (function (){var statearr_12718 = state_12702;(statearr_12718[12] = inst_12688__$1);
return statearr_12718;
})();if(cljs.core.truth_(inst_12689))
{var statearr_12719_12743 = state_12702__$1;(statearr_12719_12743[1] = 13);
} else
{var statearr_12720_12744 = state_12702__$1;(statearr_12720_12744[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 13))
{var inst_12691 = cljs.core.async.close_BANG_.call(null,out);var state_12702__$1 = state_12702;var statearr_12721_12745 = state_12702__$1;(statearr_12721_12745[2] = inst_12691);
(statearr_12721_12745[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 14))
{var inst_12688 = (state_12702[12]);var inst_12693 = cljs.core.apply.call(null,f,inst_12688);var state_12702__$1 = state_12702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12702__$1,16,out,inst_12693);
} else
{if((state_val_12703 === 15))
{var inst_12698 = (state_12702[2]);var state_12702__$1 = state_12702;var statearr_12722_12746 = state_12702__$1;(statearr_12722_12746[2] = inst_12698);
(statearr_12722_12746[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12703 === 16))
{var inst_12695 = (state_12702[2]);var state_12702__$1 = (function (){var statearr_12723 = state_12702;(statearr_12723[13] = inst_12695);
return statearr_12723;
})();var statearr_12724_12747 = state_12702__$1;(statearr_12724_12747[2] = null);
(statearr_12724_12747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12728[0] = state_machine__6178__auto__);
(statearr_12728[1] = 1);
return statearr_12728;
});
var state_machine__6178__auto____1 = (function (state_12702){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12729){if((e12729 instanceof Object))
{var ex__6181__auto__ = e12729;var statearr_12730_12748 = state_12702;(statearr_12730_12748[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12749 = state_12702;
state_12702 = G__12749;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12702){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12731 = f__6193__auto__.call(null);(statearr_12731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12732);
return statearr_12731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12833){var state_val_12834 = (state_12833[1]);if((state_val_12834 === 1))
{var inst_12804 = cljs.core.vec.call(null,chs);var inst_12805 = inst_12804;var state_12833__$1 = (function (){var statearr_12835 = state_12833;(statearr_12835[7] = inst_12805);
return statearr_12835;
})();var statearr_12836_12858 = state_12833__$1;(statearr_12836_12858[2] = null);
(statearr_12836_12858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 2))
{var inst_12805 = (state_12833[7]);var inst_12807 = cljs.core.count.call(null,inst_12805);var inst_12808 = (inst_12807 > 0);var state_12833__$1 = state_12833;if(cljs.core.truth_(inst_12808))
{var statearr_12837_12859 = state_12833__$1;(statearr_12837_12859[1] = 4);
} else
{var statearr_12838_12860 = state_12833__$1;(statearr_12838_12860[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 3))
{var inst_12831 = (state_12833[2]);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12833__$1,inst_12831);
} else
{if((state_val_12834 === 4))
{var inst_12805 = (state_12833[7]);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12833__$1,7,inst_12805);
} else
{if((state_val_12834 === 5))
{var inst_12827 = cljs.core.async.close_BANG_.call(null,out);var state_12833__$1 = state_12833;var statearr_12839_12861 = state_12833__$1;(statearr_12839_12861[2] = inst_12827);
(statearr_12839_12861[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 6))
{var inst_12829 = (state_12833[2]);var state_12833__$1 = state_12833;var statearr_12840_12862 = state_12833__$1;(statearr_12840_12862[2] = inst_12829);
(statearr_12840_12862[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 7))
{var inst_12812 = (state_12833[8]);var inst_12813 = (state_12833[9]);var inst_12812__$1 = (state_12833[2]);var inst_12813__$1 = cljs.core.nth.call(null,inst_12812__$1,0,null);var inst_12814 = cljs.core.nth.call(null,inst_12812__$1,1,null);var inst_12815 = (inst_12813__$1 == null);var state_12833__$1 = (function (){var statearr_12841 = state_12833;(statearr_12841[8] = inst_12812__$1);
(statearr_12841[10] = inst_12814);
(statearr_12841[9] = inst_12813__$1);
return statearr_12841;
})();if(cljs.core.truth_(inst_12815))
{var statearr_12842_12863 = state_12833__$1;(statearr_12842_12863[1] = 8);
} else
{var statearr_12843_12864 = state_12833__$1;(statearr_12843_12864[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 8))
{var inst_12805 = (state_12833[7]);var inst_12812 = (state_12833[8]);var inst_12814 = (state_12833[10]);var inst_12813 = (state_12833[9]);var inst_12817 = (function (){var c = inst_12814;var v = inst_12813;var vec__12810 = inst_12812;var cs = inst_12805;return ((function (c,v,vec__12810,cs,inst_12805,inst_12812,inst_12814,inst_12813,state_val_12834){
return (function (p1__12750_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12750_SHARP_);
});
;})(c,v,vec__12810,cs,inst_12805,inst_12812,inst_12814,inst_12813,state_val_12834))
})();var inst_12818 = cljs.core.filterv.call(null,inst_12817,inst_12805);var inst_12805__$1 = inst_12818;var state_12833__$1 = (function (){var statearr_12844 = state_12833;(statearr_12844[7] = inst_12805__$1);
return statearr_12844;
})();var statearr_12845_12865 = state_12833__$1;(statearr_12845_12865[2] = null);
(statearr_12845_12865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 9))
{var inst_12813 = (state_12833[9]);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12833__$1,11,out,inst_12813);
} else
{if((state_val_12834 === 10))
{var inst_12825 = (state_12833[2]);var state_12833__$1 = state_12833;var statearr_12847_12866 = state_12833__$1;(statearr_12847_12866[2] = inst_12825);
(statearr_12847_12866[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 11))
{var inst_12805 = (state_12833[7]);var inst_12822 = (state_12833[2]);var tmp12846 = inst_12805;var inst_12805__$1 = tmp12846;var state_12833__$1 = (function (){var statearr_12848 = state_12833;(statearr_12848[11] = inst_12822);
(statearr_12848[7] = inst_12805__$1);
return statearr_12848;
})();var statearr_12849_12867 = state_12833__$1;(statearr_12849_12867[2] = null);
(statearr_12849_12867[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12853 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12853[0] = state_machine__6178__auto__);
(statearr_12853[1] = 1);
return statearr_12853;
});
var state_machine__6178__auto____1 = (function (state_12833){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12833);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12854){if((e12854 instanceof Object))
{var ex__6181__auto__ = e12854;var statearr_12855_12868 = state_12833;(statearr_12855_12868[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12869 = state_12833;
state_12833 = G__12869;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12833){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12856 = f__6193__auto__.call(null);(statearr_12856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12857);
return statearr_12856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___12962 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12939){var state_val_12940 = (state_12939[1]);if((state_val_12940 === 1))
{var inst_12916 = 0;var state_12939__$1 = (function (){var statearr_12941 = state_12939;(statearr_12941[7] = inst_12916);
return statearr_12941;
})();var statearr_12942_12963 = state_12939__$1;(statearr_12942_12963[2] = null);
(statearr_12942_12963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 2))
{var inst_12916 = (state_12939[7]);var inst_12918 = (inst_12916 < n);var state_12939__$1 = state_12939;if(cljs.core.truth_(inst_12918))
{var statearr_12943_12964 = state_12939__$1;(statearr_12943_12964[1] = 4);
} else
{var statearr_12944_12965 = state_12939__$1;(statearr_12944_12965[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 3))
{var inst_12936 = (state_12939[2]);var inst_12937 = cljs.core.async.close_BANG_.call(null,out);var state_12939__$1 = (function (){var statearr_12945 = state_12939;(statearr_12945[8] = inst_12936);
return statearr_12945;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12939__$1,inst_12937);
} else
{if((state_val_12940 === 4))
{var state_12939__$1 = state_12939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12939__$1,7,ch);
} else
{if((state_val_12940 === 5))
{var state_12939__$1 = state_12939;var statearr_12946_12966 = state_12939__$1;(statearr_12946_12966[2] = null);
(statearr_12946_12966[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 6))
{var inst_12934 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12947_12967 = state_12939__$1;(statearr_12947_12967[2] = inst_12934);
(statearr_12947_12967[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 7))
{var inst_12921 = (state_12939[9]);var inst_12921__$1 = (state_12939[2]);var inst_12922 = (inst_12921__$1 == null);var inst_12923 = cljs.core.not.call(null,inst_12922);var state_12939__$1 = (function (){var statearr_12948 = state_12939;(statearr_12948[9] = inst_12921__$1);
return statearr_12948;
})();if(inst_12923)
{var statearr_12949_12968 = state_12939__$1;(statearr_12949_12968[1] = 8);
} else
{var statearr_12950_12969 = state_12939__$1;(statearr_12950_12969[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 8))
{var inst_12921 = (state_12939[9]);var state_12939__$1 = state_12939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12939__$1,11,out,inst_12921);
} else
{if((state_val_12940 === 9))
{var state_12939__$1 = state_12939;var statearr_12951_12970 = state_12939__$1;(statearr_12951_12970[2] = null);
(statearr_12951_12970[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 10))
{var inst_12931 = (state_12939[2]);var state_12939__$1 = state_12939;var statearr_12952_12971 = state_12939__$1;(statearr_12952_12971[2] = inst_12931);
(statearr_12952_12971[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12940 === 11))
{var inst_12916 = (state_12939[7]);var inst_12926 = (state_12939[2]);var inst_12927 = (inst_12916 + 1);var inst_12916__$1 = inst_12927;var state_12939__$1 = (function (){var statearr_12953 = state_12939;(statearr_12953[7] = inst_12916__$1);
(statearr_12953[10] = inst_12926);
return statearr_12953;
})();var statearr_12954_12972 = state_12939__$1;(statearr_12954_12972[2] = null);
(statearr_12954_12972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12958 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12958[0] = state_machine__6178__auto__);
(statearr_12958[1] = 1);
return statearr_12958;
});
var state_machine__6178__auto____1 = (function (state_12939){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12939);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12959){if((e12959 instanceof Object))
{var ex__6181__auto__ = e12959;var statearr_12960_12973 = state_12939;(statearr_12960_12973[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12974 = state_12939;
state_12939 = G__12974;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12939){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12961 = f__6193__auto__.call(null);(statearr_12961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___12962);
return statearr_12961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13071 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13046){var state_val_13047 = (state_13046[1]);if((state_val_13047 === 1))
{var inst_13023 = null;var state_13046__$1 = (function (){var statearr_13048 = state_13046;(statearr_13048[7] = inst_13023);
return statearr_13048;
})();var statearr_13049_13072 = state_13046__$1;(statearr_13049_13072[2] = null);
(statearr_13049_13072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13047 === 2))
{var state_13046__$1 = state_13046;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13046__$1,4,ch);
} else
{if((state_val_13047 === 3))
{var inst_13043 = (state_13046[2]);var inst_13044 = cljs.core.async.close_BANG_.call(null,out);var state_13046__$1 = (function (){var statearr_13050 = state_13046;(statearr_13050[8] = inst_13043);
return statearr_13050;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13046__$1,inst_13044);
} else
{if((state_val_13047 === 4))
{var inst_13026 = (state_13046[9]);var inst_13026__$1 = (state_13046[2]);var inst_13027 = (inst_13026__$1 == null);var inst_13028 = cljs.core.not.call(null,inst_13027);var state_13046__$1 = (function (){var statearr_13051 = state_13046;(statearr_13051[9] = inst_13026__$1);
return statearr_13051;
})();if(inst_13028)
{var statearr_13052_13073 = state_13046__$1;(statearr_13052_13073[1] = 5);
} else
{var statearr_13053_13074 = state_13046__$1;(statearr_13053_13074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13047 === 5))
{var inst_13026 = (state_13046[9]);var inst_13023 = (state_13046[7]);var inst_13030 = cljs.core._EQ_.call(null,inst_13026,inst_13023);var state_13046__$1 = state_13046;if(inst_13030)
{var statearr_13054_13075 = state_13046__$1;(statearr_13054_13075[1] = 8);
} else
{var statearr_13055_13076 = state_13046__$1;(statearr_13055_13076[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13047 === 6))
{var state_13046__$1 = state_13046;var statearr_13057_13077 = state_13046__$1;(statearr_13057_13077[2] = null);
(statearr_13057_13077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13047 === 7))
{var inst_13041 = (state_13046[2]);var state_13046__$1 = state_13046;var statearr_13058_13078 = state_13046__$1;(statearr_13058_13078[2] = inst_13041);
(statearr_13058_13078[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13047 === 8))
{var inst_13023 = (state_13046[7]);var tmp13056 = inst_13023;var inst_13023__$1 = tmp13056;var state_13046__$1 = (function (){var statearr_13059 = state_13046;(statearr_13059[7] = inst_13023__$1);
return statearr_13059;
})();var statearr_13060_13079 = state_13046__$1;(statearr_13060_13079[2] = null);
(statearr_13060_13079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13047 === 9))
{var inst_13026 = (state_13046[9]);var state_13046__$1 = state_13046;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13046__$1,11,out,inst_13026);
} else
{if((state_val_13047 === 10))
{var inst_13038 = (state_13046[2]);var state_13046__$1 = state_13046;var statearr_13061_13080 = state_13046__$1;(statearr_13061_13080[2] = inst_13038);
(statearr_13061_13080[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13047 === 11))
{var inst_13026 = (state_13046[9]);var inst_13035 = (state_13046[2]);var inst_13023 = inst_13026;var state_13046__$1 = (function (){var statearr_13062 = state_13046;(statearr_13062[10] = inst_13035);
(statearr_13062[7] = inst_13023);
return statearr_13062;
})();var statearr_13063_13081 = state_13046__$1;(statearr_13063_13081[2] = null);
(statearr_13063_13081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13067 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13067[0] = state_machine__6178__auto__);
(statearr_13067[1] = 1);
return statearr_13067;
});
var state_machine__6178__auto____1 = (function (state_13046){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13046);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13068){if((e13068 instanceof Object))
{var ex__6181__auto__ = e13068;var statearr_13069_13082 = state_13046;(statearr_13069_13082[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13046);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13083 = state_13046;
state_13046 = G__13083;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13046){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13070 = f__6193__auto__.call(null);(statearr_13070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13071);
return statearr_13070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13218 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13188){var state_val_13189 = (state_13188[1]);if((state_val_13189 === 1))
{var inst_13151 = (new Array(n));var inst_13152 = inst_13151;var inst_13153 = 0;var state_13188__$1 = (function (){var statearr_13190 = state_13188;(statearr_13190[7] = inst_13153);
(statearr_13190[8] = inst_13152);
return statearr_13190;
})();var statearr_13191_13219 = state_13188__$1;(statearr_13191_13219[2] = null);
(statearr_13191_13219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 2))
{var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13188__$1,4,ch);
} else
{if((state_val_13189 === 3))
{var inst_13186 = (state_13188[2]);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13188__$1,inst_13186);
} else
{if((state_val_13189 === 4))
{var inst_13156 = (state_13188[9]);var inst_13156__$1 = (state_13188[2]);var inst_13157 = (inst_13156__$1 == null);var inst_13158 = cljs.core.not.call(null,inst_13157);var state_13188__$1 = (function (){var statearr_13192 = state_13188;(statearr_13192[9] = inst_13156__$1);
return statearr_13192;
})();if(inst_13158)
{var statearr_13193_13220 = state_13188__$1;(statearr_13193_13220[1] = 5);
} else
{var statearr_13194_13221 = state_13188__$1;(statearr_13194_13221[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 5))
{var inst_13156 = (state_13188[9]);var inst_13153 = (state_13188[7]);var inst_13152 = (state_13188[8]);var inst_13161 = (state_13188[10]);var inst_13160 = (inst_13152[inst_13153] = inst_13156);var inst_13161__$1 = (inst_13153 + 1);var inst_13162 = (inst_13161__$1 < n);var state_13188__$1 = (function (){var statearr_13195 = state_13188;(statearr_13195[10] = inst_13161__$1);
(statearr_13195[11] = inst_13160);
return statearr_13195;
})();if(cljs.core.truth_(inst_13162))
{var statearr_13196_13222 = state_13188__$1;(statearr_13196_13222[1] = 8);
} else
{var statearr_13197_13223 = state_13188__$1;(statearr_13197_13223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 6))
{var inst_13153 = (state_13188[7]);var inst_13174 = (inst_13153 > 0);var state_13188__$1 = state_13188;if(cljs.core.truth_(inst_13174))
{var statearr_13199_13224 = state_13188__$1;(statearr_13199_13224[1] = 12);
} else
{var statearr_13200_13225 = state_13188__$1;(statearr_13200_13225[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 7))
{var inst_13184 = (state_13188[2]);var state_13188__$1 = state_13188;var statearr_13201_13226 = state_13188__$1;(statearr_13201_13226[2] = inst_13184);
(statearr_13201_13226[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 8))
{var inst_13152 = (state_13188[8]);var inst_13161 = (state_13188[10]);var tmp13198 = inst_13152;var inst_13152__$1 = tmp13198;var inst_13153 = inst_13161;var state_13188__$1 = (function (){var statearr_13202 = state_13188;(statearr_13202[7] = inst_13153);
(statearr_13202[8] = inst_13152__$1);
return statearr_13202;
})();var statearr_13203_13227 = state_13188__$1;(statearr_13203_13227[2] = null);
(statearr_13203_13227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 9))
{var inst_13152 = (state_13188[8]);var inst_13166 = cljs.core.vec.call(null,inst_13152);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13188__$1,11,out,inst_13166);
} else
{if((state_val_13189 === 10))
{var inst_13172 = (state_13188[2]);var state_13188__$1 = state_13188;var statearr_13204_13228 = state_13188__$1;(statearr_13204_13228[2] = inst_13172);
(statearr_13204_13228[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 11))
{var inst_13168 = (state_13188[2]);var inst_13169 = (new Array(n));var inst_13152 = inst_13169;var inst_13153 = 0;var state_13188__$1 = (function (){var statearr_13205 = state_13188;(statearr_13205[7] = inst_13153);
(statearr_13205[8] = inst_13152);
(statearr_13205[12] = inst_13168);
return statearr_13205;
})();var statearr_13206_13229 = state_13188__$1;(statearr_13206_13229[2] = null);
(statearr_13206_13229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 12))
{var inst_13152 = (state_13188[8]);var inst_13176 = cljs.core.vec.call(null,inst_13152);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13188__$1,15,out,inst_13176);
} else
{if((state_val_13189 === 13))
{var state_13188__$1 = state_13188;var statearr_13207_13230 = state_13188__$1;(statearr_13207_13230[2] = null);
(statearr_13207_13230[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 14))
{var inst_13181 = (state_13188[2]);var inst_13182 = cljs.core.async.close_BANG_.call(null,out);var state_13188__$1 = (function (){var statearr_13208 = state_13188;(statearr_13208[13] = inst_13181);
return statearr_13208;
})();var statearr_13209_13231 = state_13188__$1;(statearr_13209_13231[2] = inst_13182);
(statearr_13209_13231[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13189 === 15))
{var inst_13178 = (state_13188[2]);var state_13188__$1 = state_13188;var statearr_13210_13232 = state_13188__$1;(statearr_13210_13232[2] = inst_13178);
(statearr_13210_13232[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13214[0] = state_machine__6178__auto__);
(statearr_13214[1] = 1);
return statearr_13214;
});
var state_machine__6178__auto____1 = (function (state_13188){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13188);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13215){if((e13215 instanceof Object))
{var ex__6181__auto__ = e13215;var statearr_13216_13233 = state_13188;(statearr_13216_13233[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13234 = state_13188;
state_13188 = G__13234;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13188){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13217 = f__6193__auto__.call(null);(statearr_13217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13218);
return statearr_13217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___13377 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_13347){var state_val_13348 = (state_13347[1]);if((state_val_13348 === 1))
{var inst_13306 = [];var inst_13307 = inst_13306;var inst_13308 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13347__$1 = (function (){var statearr_13349 = state_13347;(statearr_13349[7] = inst_13307);
(statearr_13349[8] = inst_13308);
return statearr_13349;
})();var statearr_13350_13378 = state_13347__$1;(statearr_13350_13378[2] = null);
(statearr_13350_13378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 2))
{var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13347__$1,4,ch);
} else
{if((state_val_13348 === 3))
{var inst_13345 = (state_13347[2]);var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13347__$1,inst_13345);
} else
{if((state_val_13348 === 4))
{var inst_13311 = (state_13347[9]);var inst_13311__$1 = (state_13347[2]);var inst_13312 = (inst_13311__$1 == null);var inst_13313 = cljs.core.not.call(null,inst_13312);var state_13347__$1 = (function (){var statearr_13351 = state_13347;(statearr_13351[9] = inst_13311__$1);
return statearr_13351;
})();if(inst_13313)
{var statearr_13352_13379 = state_13347__$1;(statearr_13352_13379[1] = 5);
} else
{var statearr_13353_13380 = state_13347__$1;(statearr_13353_13380[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 5))
{var inst_13315 = (state_13347[10]);var inst_13311 = (state_13347[9]);var inst_13308 = (state_13347[8]);var inst_13315__$1 = f.call(null,inst_13311);var inst_13316 = cljs.core._EQ_.call(null,inst_13315__$1,inst_13308);var inst_13317 = cljs.core.keyword_identical_QMARK_.call(null,inst_13308,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13318 = (inst_13316) || (inst_13317);var state_13347__$1 = (function (){var statearr_13354 = state_13347;(statearr_13354[10] = inst_13315__$1);
return statearr_13354;
})();if(cljs.core.truth_(inst_13318))
{var statearr_13355_13381 = state_13347__$1;(statearr_13355_13381[1] = 8);
} else
{var statearr_13356_13382 = state_13347__$1;(statearr_13356_13382[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 6))
{var inst_13307 = (state_13347[7]);var inst_13332 = inst_13307.length;var inst_13333 = (inst_13332 > 0);var state_13347__$1 = state_13347;if(cljs.core.truth_(inst_13333))
{var statearr_13358_13383 = state_13347__$1;(statearr_13358_13383[1] = 12);
} else
{var statearr_13359_13384 = state_13347__$1;(statearr_13359_13384[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 7))
{var inst_13343 = (state_13347[2]);var state_13347__$1 = state_13347;var statearr_13360_13385 = state_13347__$1;(statearr_13360_13385[2] = inst_13343);
(statearr_13360_13385[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 8))
{var inst_13315 = (state_13347[10]);var inst_13307 = (state_13347[7]);var inst_13311 = (state_13347[9]);var inst_13320 = inst_13307.push(inst_13311);var tmp13357 = inst_13307;var inst_13307__$1 = tmp13357;var inst_13308 = inst_13315;var state_13347__$1 = (function (){var statearr_13361 = state_13347;(statearr_13361[11] = inst_13320);
(statearr_13361[7] = inst_13307__$1);
(statearr_13361[8] = inst_13308);
return statearr_13361;
})();var statearr_13362_13386 = state_13347__$1;(statearr_13362_13386[2] = null);
(statearr_13362_13386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 9))
{var inst_13307 = (state_13347[7]);var inst_13323 = cljs.core.vec.call(null,inst_13307);var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13347__$1,11,out,inst_13323);
} else
{if((state_val_13348 === 10))
{var inst_13330 = (state_13347[2]);var state_13347__$1 = state_13347;var statearr_13363_13387 = state_13347__$1;(statearr_13363_13387[2] = inst_13330);
(statearr_13363_13387[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 11))
{var inst_13315 = (state_13347[10]);var inst_13311 = (state_13347[9]);var inst_13325 = (state_13347[2]);var inst_13326 = [];var inst_13327 = inst_13326.push(inst_13311);var inst_13307 = inst_13326;var inst_13308 = inst_13315;var state_13347__$1 = (function (){var statearr_13364 = state_13347;(statearr_13364[12] = inst_13325);
(statearr_13364[7] = inst_13307);
(statearr_13364[8] = inst_13308);
(statearr_13364[13] = inst_13327);
return statearr_13364;
})();var statearr_13365_13388 = state_13347__$1;(statearr_13365_13388[2] = null);
(statearr_13365_13388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 12))
{var inst_13307 = (state_13347[7]);var inst_13335 = cljs.core.vec.call(null,inst_13307);var state_13347__$1 = state_13347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13347__$1,15,out,inst_13335);
} else
{if((state_val_13348 === 13))
{var state_13347__$1 = state_13347;var statearr_13366_13389 = state_13347__$1;(statearr_13366_13389[2] = null);
(statearr_13366_13389[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 14))
{var inst_13340 = (state_13347[2]);var inst_13341 = cljs.core.async.close_BANG_.call(null,out);var state_13347__$1 = (function (){var statearr_13367 = state_13347;(statearr_13367[14] = inst_13340);
return statearr_13367;
})();var statearr_13368_13390 = state_13347__$1;(statearr_13368_13390[2] = inst_13341);
(statearr_13368_13390[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13348 === 15))
{var inst_13337 = (state_13347[2]);var state_13347__$1 = state_13347;var statearr_13369_13391 = state_13347__$1;(statearr_13369_13391[2] = inst_13337);
(statearr_13369_13391[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_13373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13373[0] = state_machine__6178__auto__);
(statearr_13373[1] = 1);
return statearr_13373;
});
var state_machine__6178__auto____1 = (function (state_13347){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_13347);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e13374){if((e13374 instanceof Object))
{var ex__6181__auto__ = e13374;var statearr_13375_13392 = state_13347;(statearr_13375_13392[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13393 = state_13347;
state_13347 = G__13393;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_13347){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_13347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_13376 = f__6193__auto__.call(null);(statearr_13376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___13377);
return statearr_13376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map