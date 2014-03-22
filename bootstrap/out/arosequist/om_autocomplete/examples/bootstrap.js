// Compiled by ClojureScript 0.0-2173
goog.provide('arosequist.om_autocomplete.examples.bootstrap');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('arosequist.om_autocomplete.bootstrap');
goog.require('arosequist.om_autocomplete.bootstrap');
goog.require('arosequist.om_autocomplete');
goog.require('arosequist.om_autocomplete');
arosequist.om_autocomplete.examples.bootstrap.loading = (function loading(){if(typeof arosequist.om_autocomplete.examples.bootstrap.t10411 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.examples.bootstrap.t10411 = (function (loading,meta10412){
this.loading = loading;
this.meta10412 = meta10412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.examples.bootstrap.t10411.cljs$lang$type = true;
arosequist.om_autocomplete.examples.bootstrap.t10411.cljs$lang$ctorStr = "arosequist.om-autocomplete.examples.bootstrap/t10411";
arosequist.om_autocomplete.examples.bootstrap.t10411.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.examples.bootstrap/t10411");
});
arosequist.om_autocomplete.examples.bootstrap.t10411.prototype.om$core$IRender$ = true;
arosequist.om_autocomplete.examples.bootstrap.t10411.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null," Loading...");
});
arosequist.om_autocomplete.examples.bootstrap.t10411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10413){var self__ = this;
var _10413__$1 = this;return self__.meta10412;
});
arosequist.om_autocomplete.examples.bootstrap.t10411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10413,meta10412__$1){var self__ = this;
var _10413__$1 = this;return (new arosequist.om_autocomplete.examples.bootstrap.t10411(self__.loading,meta10412__$1));
});
arosequist.om_autocomplete.examples.bootstrap.__GT_t10411 = (function __GT_t10411(loading__$1,meta10412){return (new arosequist.om_autocomplete.examples.bootstrap.t10411(loading__$1,meta10412));
});
}
return (new arosequist.om_autocomplete.examples.bootstrap.t10411(loading,null));
});
arosequist.om_autocomplete.examples.bootstrap.suggestions = (function suggestions(value,suggestions_ch,_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10441){var state_val_10442 = (state_10441[1]);if((state_val_10442 === 2))
{var inst_10435 = (state_10441[2]);var inst_10436 = (function (){return ((function (inst_10435,state_val_10442){
return (function (p1__10414_SHARP_){return [cljs.core.str(value),cljs.core.str(" "),cljs.core.str(p1__10414_SHARP_)].join('');
});
;})(inst_10435,state_val_10442))
})();var inst_10437 = cljs.core.range.call(null,1,10);var inst_10438 = cljs.core.mapv.call(null,inst_10436,inst_10437);var inst_10439 = cljs.core.async.put_BANG_.call(null,suggestions_ch,inst_10438);var state_10441__$1 = (function (){var statearr_10443 = state_10441;(statearr_10443[7] = inst_10435);
return statearr_10443;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10441__$1,inst_10439);
} else
{if((state_val_10442 === 1))
{var inst_10433 = cljs.core.async.timeout.call(null,500);var state_10441__$1 = state_10441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10441__$1,2,inst_10433);
} else
{return null;
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10447 = [null,null,null,null,null,null,null,null];(statearr_10447[0] = state_machine__6178__auto__);
(statearr_10447[1] = 1);
return statearr_10447;
});
var state_machine__6178__auto____1 = (function (state_10441){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10448){if((e10448 instanceof Object))
{var ex__6181__auto__ = e10448;var statearr_10449_10451 = state_10441;(statearr_10449_10451[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10452 = state_10441;
state_10441 = G__10452;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10441){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10450 = f__6193__auto__.call(null);(statearr_10450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
arosequist.om_autocomplete.examples.bootstrap.autocomplete = (function autocomplete(app,owner){if(typeof arosequist.om_autocomplete.examples.bootstrap.t10482 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.examples.bootstrap.t10482 = (function (owner,app,autocomplete,meta10483){
this.owner = owner;
this.app = app;
this.autocomplete = autocomplete;
this.meta10483 = meta10483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.examples.bootstrap.t10482.cljs$lang$type = true;
arosequist.om_autocomplete.examples.bootstrap.t10482.cljs$lang$ctorStr = "arosequist.om-autocomplete.examples.bootstrap/t10482";
arosequist.om_autocomplete.examples.bootstrap.t10482.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.examples.bootstrap/t10482");
});
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10485){var self__ = this;
var map__10486 = p__10485;var map__10486__$1 = ((cljs.core.seq_QMARK_.call(null,map__10486))?cljs.core.apply.call(null,cljs.core.hash_map,map__10486):map__10486);var result_ch = cljs.core.get.call(null,map__10486__$1,new cljs.core.Keyword(null,"result-ch","result-ch",3489271687));var ___$1 = this;return om.core.build.call(null,arosequist.om_autocomplete.autocomplete,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"container-view","container-view",1823452131),arosequist.om_autocomplete.bootstrap.container_view,new cljs.core.Keyword(null,"container-view-opts","container-view-opts",4083360622),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"input-view","input-view",2354464314),arosequist.om_autocomplete.bootstrap.input_view,new cljs.core.Keyword(null,"input-view-opts","input-view-opts",4467091319),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Enter anything"], null),new cljs.core.Keyword(null,"results-view","results-view",2051677582),arosequist.om_autocomplete.bootstrap.results_view,new cljs.core.Keyword(null,"results-view-opts","results-view-opts",1299448995),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading-view","loading-view",2379666440),arosequist.om_autocomplete.examples.bootstrap.loading,new cljs.core.Keyword(null,"render-item","render-item",3634814044),arosequist.om_autocomplete.bootstrap.render_item,new cljs.core.Keyword(null,"render-item-opts","render-item-opts",551835285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-fn","text-fn",3890985178),(function (item,___$2){return [cljs.core.str(item)].join('');
})], null)], null),new cljs.core.Keyword(null,"result-ch","result-ch",3489271687),result_ch,new cljs.core.Keyword(null,"suggestions-fn","suggestions-fn",961222616),arosequist.om_autocomplete.examples.bootstrap.suggestions], null)], null));
});
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.om$core$IWillMount$ = true;
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var result_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"result-ch","result-ch",3489271687));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10499){var state_val_10500 = (state_10499[1]);if((state_val_10500 === 4))
{var inst_10490 = (state_10499[2]);var inst_10491 = cljs.core.nth.call(null,inst_10490,0,null);var inst_10492 = cljs.core.nth.call(null,inst_10490,1,null);var inst_10493 = [cljs.core.str("Result is: "),cljs.core.str(inst_10492)].join('');var inst_10494 = alert(inst_10493);var state_10499__$1 = (function (){var statearr_10501 = state_10499;(statearr_10501[7] = inst_10494);
(statearr_10501[8] = inst_10491);
return statearr_10501;
})();var statearr_10502_10511 = state_10499__$1;(statearr_10502_10511[2] = null);
(statearr_10502_10511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10500 === 3))
{var inst_10497 = (state_10499[2]);var state_10499__$1 = state_10499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10499__$1,inst_10497);
} else
{if((state_val_10500 === 2))
{var state_10499__$1 = state_10499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10499__$1,4,result_ch);
} else
{if((state_val_10500 === 1))
{var state_10499__$1 = state_10499;var statearr_10503_10512 = state_10499__$1;(statearr_10503_10512[2] = null);
(statearr_10503_10512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10507 = [null,null,null,null,null,null,null,null,null];(statearr_10507[0] = state_machine__6178__auto__);
(statearr_10507[1] = 1);
return statearr_10507;
});
var state_machine__6178__auto____1 = (function (state_10499){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10499);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10508){if((e10508 instanceof Object))
{var ex__6181__auto__ = e10508;var statearr_10509_10513 = state_10499;(statearr_10509_10513[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10514 = state_10499;
state_10499 = G__10514;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10499){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10510 = f__6193__auto__.call(null);(statearr_10510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_10510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.om$core$IInitState$ = true;
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result-ch","result-ch",3489271687),cljs.core.async.chan.call(null)], null);
});
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10484){var self__ = this;
var _10484__$1 = this;return self__.meta10483;
});
arosequist.om_autocomplete.examples.bootstrap.t10482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10484,meta10483__$1){var self__ = this;
var _10484__$1 = this;return (new arosequist.om_autocomplete.examples.bootstrap.t10482(self__.owner,self__.app,self__.autocomplete,meta10483__$1));
});
arosequist.om_autocomplete.examples.bootstrap.__GT_t10482 = (function __GT_t10482(owner__$1,app__$1,autocomplete__$1,meta10483){return (new arosequist.om_autocomplete.examples.bootstrap.t10482(owner__$1,app__$1,autocomplete__$1,meta10483));
});
}
return (new arosequist.om_autocomplete.examples.bootstrap.t10482(owner,app,autocomplete,null));
});
om.core.root.call(null,arosequist.om_autocomplete.examples.bootstrap.autocomplete,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("autocomplete")], null));

//# sourceMappingURL=bootstrap.js.map