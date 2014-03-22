// Compiled by ClojureScript 0.0-2173
goog.provide('arosequist.om_autocomplete');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
arosequist.om_autocomplete.autocomplete = (function autocomplete(cursor,owner,p__11041){var map__11160 = p__11041;var map__11160__$1 = ((cljs.core.seq_QMARK_.call(null,map__11160))?cljs.core.apply.call(null,cljs.core.hash_map,map__11160):map__11160);var results_view_opts = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"results-view-opts","results-view-opts",1299448995));var results_view = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"results-view","results-view",2051677582));var input_view_opts = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"input-view-opts","input-view-opts",4467091319));var input_view = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"input-view","input-view",2354464314));var container_view_opts = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"container-view-opts","container-view-opts",4083360622));var container_view = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"container-view","container-view",1823452131));var suggestions_fn = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"suggestions-fn","suggestions-fn",961222616));var result_ch = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"result-ch","result-ch",3489271687));if(typeof arosequist.om_autocomplete.t11161 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.t11161 = (function (map__11160,input_view,container_view,container_view_opts,result_ch,suggestions_fn,results_view_opts,p__11041,owner,cursor,autocomplete,results_view,input_view_opts,meta11162){
this.map__11160 = map__11160;
this.input_view = input_view;
this.container_view = container_view;
this.container_view_opts = container_view_opts;
this.result_ch = result_ch;
this.suggestions_fn = suggestions_fn;
this.results_view_opts = results_view_opts;
this.p__11041 = p__11041;
this.owner = owner;
this.cursor = cursor;
this.autocomplete = autocomplete;
this.results_view = results_view;
this.input_view_opts = input_view_opts;
this.meta11162 = meta11162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.t11161.cljs$lang$type = true;
arosequist.om_autocomplete.t11161.cljs$lang$ctorStr = "arosequist.om-autocomplete/t11161";
arosequist.om_autocomplete.t11161.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete/t11161");
});
arosequist.om_autocomplete.t11161.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.t11161.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11164){var self__ = this;
var map__11165 = p__11164;var map__11165__$1 = ((cljs.core.seq_QMARK_.call(null,map__11165))?cljs.core.apply.call(null,cljs.core.hash_map,map__11165):map__11165);var suggestions = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var focused_QMARK_ = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"focused?","focused?",1066456858));var loading_QMARK_ = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"loading?","loading?",2860136949));var highlighted_index = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322));var value = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"value","value",1125876963));var select_ch = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var highlight_ch = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560));var value_ch = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275));var focus_ch = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052));var ___$1 = this;return om.core.build.call(null,self__.container_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-component","input-component",4686517804),om.core.build.call(null,self__.input_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052),focus_ch,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275),value_ch,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560),highlight_ch,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944),select_ch], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322),highlighted_index], null),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.input_view_opts], null)),new cljs.core.Keyword(null,"results-component","results-component",1518875480),om.core.build.call(null,self__.results_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560),highlight_ch,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944),select_ch], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"loading?","loading?",2860136949),loading_QMARK_,new cljs.core.Keyword(null,"focused?","focused?",1066456858),focused_QMARK_,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585),suggestions,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322),highlighted_index], null),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.results_view_opts], null))], null),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.container_view_opts], null));
});
arosequist.om_autocomplete.t11161.prototype.om$core$IDidUpdate$ = true;
arosequist.om_autocomplete.t11161.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,old){var self__ = this;
var ___$2 = this;var old_value = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(old);var new_value = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.not_EQ_.call(null,old_value,new_value))
{var suggestions_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions-ch","suggestions-ch",961222517));var cancel_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"cancel-suggestions-ch","cancel-suggestions-ch",4437873448));var new_suggestions_ch = cljs.core.async.chan.call(null);var new_cancel_ch = cljs.core.async.chan.call(null);if(cljs.core.truth_(suggestions_ch))
{cljs.core.async.close_BANG_.call(null,suggestions_ch);
} else
{}
if(cljs.core.truth_(cancel_ch))
{cljs.core.async.close_BANG_.call(null,cancel_ch);
} else
{}
var c__6192__auto___11278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11175){var state_val_11176 = (state_11175[1]);if((state_val_11176 === 5))
{var inst_11173 = (state_11175[2]);var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11175__$1,inst_11173);
} else
{if((state_val_11176 === 4))
{var state_11175__$1 = state_11175;var statearr_11177_11279 = state_11175__$1;(statearr_11177_11279[2] = null);
(statearr_11177_11279[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 3))
{var inst_11167 = (state_11175[7]);var inst_11169 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585),inst_11167);var inst_11170 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loading?","loading?",2860136949),false);var state_11175__$1 = (function (){var statearr_11178 = state_11175;(statearr_11178[8] = inst_11169);
return statearr_11178;
})();var statearr_11179_11280 = state_11175__$1;(statearr_11179_11280[2] = inst_11170);
(statearr_11179_11280[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 2))
{var inst_11167 = (state_11175[7]);var inst_11167__$1 = (state_11175[2]);var state_11175__$1 = (function (){var statearr_11180 = state_11175;(statearr_11180[7] = inst_11167__$1);
return statearr_11180;
})();if(cljs.core.truth_(inst_11167__$1))
{var statearr_11181_11281 = state_11175__$1;(statearr_11181_11281[1] = 3);
} else
{var statearr_11182_11282 = state_11175__$1;(statearr_11182_11282[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11176 === 1))
{var state_11175__$1 = state_11175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11175__$1,2,new_suggestions_ch);
} else
{return null;
}
}
}
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11186 = [null,null,null,null,null,null,null,null,null];(statearr_11186[0] = state_machine__6178__auto__);
(statearr_11186[1] = 1);
return statearr_11186;
});
var state_machine__6178__auto____1 = (function (state_11175){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11175);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11187){if((e11187 instanceof Object))
{var ex__6181__auto__ = e11187;var statearr_11188_11283 = state_11175;(statearr_11188_11283[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11284 = state_11175;
state_11175 = G__11284;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11175){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11189 = f__6193__auto__.call(null);(statearr_11189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11278);
return statearr_11189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions-ch","suggestions-ch",961222517),new_suggestions_ch);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cancel-suggestions-ch","cancel-suggestions-ch",4437873448),new_cancel_ch);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loading?","loading?",2860136949),true);
return self__.suggestions_fn.call(null,new_value,new_suggestions_ch,new_cancel_ch);
} else
{return null;
}
});
arosequist.om_autocomplete.t11161.prototype.om$core$IWillMount$ = true;
arosequist.om_autocomplete.t11161.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052));var value_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275));var highlight_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560));var select_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var c__6192__auto___11285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11198){var state_val_11199 = (state_11198[1]);if((state_val_11199 === 4))
{var inst_11192 = (state_11198[2]);var inst_11193 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"focused?","focused?",1066456858),inst_11192);var state_11198__$1 = (function (){var statearr_11200 = state_11198;(statearr_11200[7] = inst_11193);
return statearr_11200;
})();var statearr_11201_11286 = state_11198__$1;(statearr_11201_11286[2] = null);
(statearr_11201_11286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11199 === 3))
{var inst_11196 = (state_11198[2]);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11198__$1,inst_11196);
} else
{if((state_val_11199 === 2))
{var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11198__$1,4,focus_ch);
} else
{if((state_val_11199 === 1))
{var state_11198__$1 = state_11198;var statearr_11202_11287 = state_11198__$1;(statearr_11202_11287[2] = null);
(statearr_11202_11287[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11206 = [null,null,null,null,null,null,null,null];(statearr_11206[0] = state_machine__6178__auto__);
(statearr_11206[1] = 1);
return statearr_11206;
});
var state_machine__6178__auto____1 = (function (state_11198){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11198);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11207){if((e11207 instanceof Object))
{var ex__6181__auto__ = e11207;var statearr_11208_11288 = state_11198;(statearr_11208_11288[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11289 = state_11198;
state_11198 = G__11289;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11198){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11209 = f__6193__auto__.call(null);(statearr_11209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11285);
return statearr_11209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___11290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11218){var state_val_11219 = (state_11218[1]);if((state_val_11219 === 4))
{var inst_11212 = (state_11218[2]);var inst_11213 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963),inst_11212);var state_11218__$1 = (function (){var statearr_11220 = state_11218;(statearr_11220[7] = inst_11213);
return statearr_11220;
})();var statearr_11221_11291 = state_11218__$1;(statearr_11221_11291[2] = null);
(statearr_11221_11291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 3))
{var inst_11216 = (state_11218[2]);var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11218__$1,inst_11216);
} else
{if((state_val_11219 === 2))
{var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11218__$1,4,value_ch);
} else
{if((state_val_11219 === 1))
{var state_11218__$1 = state_11218;var statearr_11222_11292 = state_11218__$1;(statearr_11222_11292[2] = null);
(statearr_11222_11292[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11226 = [null,null,null,null,null,null,null,null];(statearr_11226[0] = state_machine__6178__auto__);
(statearr_11226[1] = 1);
return statearr_11226;
});
var state_machine__6178__auto____1 = (function (state_11218){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11227){if((e11227 instanceof Object))
{var ex__6181__auto__ = e11227;var statearr_11228_11293 = state_11218;(statearr_11228_11293[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11294 = state_11218;
state_11218 = G__11294;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11218){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11229 = f__6193__auto__.call(null);(statearr_11229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11290);
return statearr_11229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___11295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11242){var state_val_11243 = (state_11242[1]);if((state_val_11243 === 4))
{var inst_11232 = (state_11242[2]);var inst_11233 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var inst_11234 = cljs.core.count.call(null,inst_11233);var inst_11235 = ((inst_11232 < inst_11234) ? inst_11232 : inst_11234);var inst_11236 = ((inst_11235 > -1) ? inst_11235 : -1);var inst_11237 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322),inst_11236);var state_11242__$1 = (function (){var statearr_11244 = state_11242;(statearr_11244[7] = inst_11237);
return statearr_11244;
})();var statearr_11245_11296 = state_11242__$1;(statearr_11245_11296[2] = null);
(statearr_11245_11296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11243 === 3))
{var inst_11240 = (state_11242[2]);var state_11242__$1 = state_11242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11242__$1,inst_11240);
} else
{if((state_val_11243 === 2))
{var state_11242__$1 = state_11242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11242__$1,4,highlight_ch);
} else
{if((state_val_11243 === 1))
{var state_11242__$1 = state_11242;var statearr_11246_11297 = state_11242__$1;(statearr_11246_11297[2] = null);
(statearr_11246_11297[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11250 = [null,null,null,null,null,null,null,null];(statearr_11250[0] = state_machine__6178__auto__);
(statearr_11250[1] = 1);
return statearr_11250;
});
var state_machine__6178__auto____1 = (function (state_11242){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11242);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11251){if((e11251 instanceof Object))
{var ex__6181__auto__ = e11251;var statearr_11252_11298 = state_11242;(statearr_11252_11298[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11299 = state_11242;
state_11242 = G__11299;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11242){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11253 = f__6193__auto__.call(null);(statearr_11253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11295);
return statearr_11253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11266){var state_val_11267 = (state_11266[1]);if((state_val_11267 === 4))
{var inst_11256 = (state_11266[2]);var inst_11257 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var inst_11258 = cljs.core.nth.call(null,inst_11257,inst_11256);var inst_11259 = [inst_11256,inst_11258];var inst_11260 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11259,null));var inst_11261 = cljs.core.async.put_BANG_.call(null,self__.result_ch,inst_11260);var state_11266__$1 = (function (){var statearr_11268 = state_11266;(statearr_11268[7] = inst_11261);
return statearr_11268;
})();var statearr_11269_11300 = state_11266__$1;(statearr_11269_11300[2] = null);
(statearr_11269_11300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11267 === 3))
{var inst_11264 = (state_11266[2]);var state_11266__$1 = state_11266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11266__$1,inst_11264);
} else
{if((state_val_11267 === 2))
{var state_11266__$1 = state_11266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11266__$1,4,select_ch);
} else
{if((state_val_11267 === 1))
{var state_11266__$1 = state_11266;var statearr_11270_11301 = state_11266__$1;(statearr_11270_11301[2] = null);
(statearr_11270_11301[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11274 = [null,null,null,null,null,null,null,null];(statearr_11274[0] = state_machine__6178__auto__);
(statearr_11274[1] = 1);
return statearr_11274;
});
var state_machine__6178__auto____1 = (function (state_11266){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11266);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11275){if((e11275 instanceof Object))
{var ex__6181__auto__ = e11275;var statearr_11276_11302 = state_11266;(statearr_11276_11302[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11303 = state_11266;
state_11266 = G__11303;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11266){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11277 = f__6193__auto__.call(null);(statearr_11277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
arosequist.om_autocomplete.t11161.prototype.om$core$IInitState$ = true;
arosequist.om_autocomplete.t11161.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"value-ch","value-ch",3898660275),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"select-ch","select-ch",3592847944),cljs.core.async.chan.call(null)], null);
});
arosequist.om_autocomplete.t11161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11163){var self__ = this;
var _11163__$1 = this;return self__.meta11162;
});
arosequist.om_autocomplete.t11161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11163,meta11162__$1){var self__ = this;
var _11163__$1 = this;return (new arosequist.om_autocomplete.t11161(self__.map__11160,self__.input_view,self__.container_view,self__.container_view_opts,self__.result_ch,self__.suggestions_fn,self__.results_view_opts,self__.p__11041,self__.owner,self__.cursor,self__.autocomplete,self__.results_view,self__.input_view_opts,meta11162__$1));
});
arosequist.om_autocomplete.__GT_t11161 = (function __GT_t11161(map__11160__$2,input_view__$1,container_view__$1,container_view_opts__$1,result_ch__$1,suggestions_fn__$1,results_view_opts__$1,p__11041__$1,owner__$1,cursor__$1,autocomplete__$1,results_view__$1,input_view_opts__$1,meta11162){return (new arosequist.om_autocomplete.t11161(map__11160__$2,input_view__$1,container_view__$1,container_view_opts__$1,result_ch__$1,suggestions_fn__$1,results_view_opts__$1,p__11041__$1,owner__$1,cursor__$1,autocomplete__$1,results_view__$1,input_view_opts__$1,meta11162));
});
}
return (new arosequist.om_autocomplete.t11161(map__11160__$1,input_view,container_view,container_view_opts,result_ch,suggestions_fn,results_view_opts,p__11041,owner,cursor,autocomplete,results_view,input_view_opts,null));
});

//# sourceMappingURL=om_autocomplete.js.map