// Compiled by ClojureScript 0.0-2173
goog.provide('arosequist.om_autocomplete');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
arosequist.om_autocomplete.autocomplete = (function autocomplete(cursor,owner,p__11345){var map__11463 = p__11345;var map__11463__$1 = ((cljs.core.seq_QMARK_.call(null,map__11463))?cljs.core.apply.call(null,cljs.core.hash_map,map__11463):map__11463);var results_view_opts = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"results-view-opts","results-view-opts",1299448995));var results_view = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"results-view","results-view",2051677582));var input_view_opts = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"input-view-opts","input-view-opts",4467091319));var input_view = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"input-view","input-view",2354464314));var container_view_opts = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"container-view-opts","container-view-opts",4083360622));var container_view = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"container-view","container-view",1823452131));var suggestions_fn = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"suggestions-fn","suggestions-fn",961222616));var result_ch = cljs.core.get.call(null,map__11463__$1,new cljs.core.Keyword(null,"result-ch","result-ch",3489271687));if(typeof arosequist.om_autocomplete.t11464 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.t11464 = (function (input_view,container_view,container_view_opts,result_ch,map__11463,suggestions_fn,results_view_opts,owner,cursor,autocomplete,results_view,p__11345,input_view_opts,meta11465){
this.input_view = input_view;
this.container_view = container_view;
this.container_view_opts = container_view_opts;
this.result_ch = result_ch;
this.map__11463 = map__11463;
this.suggestions_fn = suggestions_fn;
this.results_view_opts = results_view_opts;
this.owner = owner;
this.cursor = cursor;
this.autocomplete = autocomplete;
this.results_view = results_view;
this.p__11345 = p__11345;
this.input_view_opts = input_view_opts;
this.meta11465 = meta11465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.t11464.cljs$lang$type = true;
arosequist.om_autocomplete.t11464.cljs$lang$ctorStr = "arosequist.om-autocomplete/t11464";
arosequist.om_autocomplete.t11464.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete/t11464");
});
arosequist.om_autocomplete.t11464.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.t11464.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11467){var self__ = this;
var map__11468 = p__11467;var map__11468__$1 = ((cljs.core.seq_QMARK_.call(null,map__11468))?cljs.core.apply.call(null,cljs.core.hash_map,map__11468):map__11468);var suggestions = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var focused_QMARK_ = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"focused?","focused?",1066456858));var loading_QMARK_ = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"loading?","loading?",2860136949));var highlighted_index = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322));var value = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"value","value",1125876963));var select_ch = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var highlight_ch = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560));var value_ch = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275));var focus_ch = cljs.core.get.call(null,map__11468__$1,new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052));var ___$1 = this;return om.core.build.call(null,self__.container_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-component","input-component",4686517804),om.core.build.call(null,self__.input_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052),focus_ch,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275),value_ch,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560),highlight_ch,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944),select_ch], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322),highlighted_index], null),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.input_view_opts], null)),new cljs.core.Keyword(null,"results-component","results-component",1518875480),om.core.build.call(null,self__.results_view,self__.cursor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560),highlight_ch,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944),select_ch], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"loading?","loading?",2860136949),loading_QMARK_,new cljs.core.Keyword(null,"focused?","focused?",1066456858),focused_QMARK_,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585),suggestions,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322),highlighted_index], null),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.results_view_opts], null))], null),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.container_view_opts], null));
});
arosequist.om_autocomplete.t11464.prototype.om$core$IDidUpdate$ = true;
arosequist.om_autocomplete.t11464.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,old){var self__ = this;
var ___$2 = this;var old_value = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(old);var new_value = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963));if(cljs.core.not_EQ_.call(null,old_value,new_value))
{om.core.update_state_BANG_.call(null,self__.owner,(function (state){var old_suggestions_ch = new cljs.core.Keyword(null,"suggestions-ch","suggestions-ch",961222517).cljs$core$IFn$_invoke$arity$1(state);var old_cancel_ch = new cljs.core.Keyword(null,"cancel-suggestions-ch","cancel-suggestions-ch",4437873448).cljs$core$IFn$_invoke$arity$1(state);var new_suggestions_ch = cljs.core.async.chan.call(null);var new_cancel_ch = cljs.core.async.chan.call(null);if(cljs.core.truth_(old_suggestions_ch))
{cljs.core.async.close_BANG_.call(null,old_suggestions_ch);
} else
{}
if(cljs.core.truth_(old_cancel_ch))
{cljs.core.async.close_BANG_.call(null,old_cancel_ch);
} else
{}
var c__6192__auto___11580 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11478){var state_val_11479 = (state_11478[1]);if((state_val_11479 === 5))
{var inst_11476 = (state_11478[2]);var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11478__$1,inst_11476);
} else
{if((state_val_11479 === 4))
{var state_11478__$1 = state_11478;var statearr_11480_11581 = state_11478__$1;(statearr_11480_11581[2] = null);
(statearr_11480_11581[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 3))
{var inst_11470 = (state_11478[7]);var inst_11472 = (function (){var suggestions = inst_11470;var temp__4092__auto__ = inst_11470;return ((function (suggestions,temp__4092__auto__,inst_11470,state_val_11479){
return (function (s){return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585),suggestions,new cljs.core.Keyword(null,"loading?","loading?",2860136949),false);
});
;})(suggestions,temp__4092__auto__,inst_11470,state_val_11479))
})();var inst_11473 = om.core.update_state_BANG_.call(null,self__.owner,inst_11472);var state_11478__$1 = state_11478;var statearr_11481_11582 = state_11478__$1;(statearr_11481_11582[2] = inst_11473);
(statearr_11481_11582[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 2))
{var inst_11470 = (state_11478[7]);var inst_11470__$1 = (state_11478[2]);var state_11478__$1 = (function (){var statearr_11482 = state_11478;(statearr_11482[7] = inst_11470__$1);
return statearr_11482;
})();if(cljs.core.truth_(inst_11470__$1))
{var statearr_11483_11583 = state_11478__$1;(statearr_11483_11583[1] = 3);
} else
{var statearr_11484_11584 = state_11478__$1;(statearr_11484_11584[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11479 === 1))
{var state_11478__$1 = state_11478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11478__$1,2,new_suggestions_ch);
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
var state_machine__6178__auto____0 = (function (){var statearr_11488 = [null,null,null,null,null,null,null,null];(statearr_11488[0] = state_machine__6178__auto__);
(statearr_11488[1] = 1);
return statearr_11488;
});
var state_machine__6178__auto____1 = (function (state_11478){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11489){if((e11489 instanceof Object))
{var ex__6181__auto__ = e11489;var statearr_11490_11585 = state_11478;(statearr_11490_11585[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11586 = state_11478;
state_11478 = G__11586;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11478){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11491 = f__6193__auto__.call(null);(statearr_11491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11580);
return statearr_11491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions-ch","suggestions-ch",961222517),new_suggestions_ch,new cljs.core.Keyword(null,"cancel-suggestions-ch","cancel-suggestions-ch",4437873448),new_cancel_ch,new cljs.core.Keyword(null,"loading?","loading?",2860136949),true);
}));
return self__.suggestions_fn.call(null,new_value,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions-ch","suggestions-ch",961222517)),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"cancel-suggestions-ch","cancel-suggestions-ch",4437873448)));
} else
{return null;
}
});
arosequist.om_autocomplete.t11464.prototype.om$core$IWillMount$ = true;
arosequist.om_autocomplete.t11464.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var focus_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052));var value_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275));var highlight_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560));var select_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var c__6192__auto___11587 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11500){var state_val_11501 = (state_11500[1]);if((state_val_11501 === 4))
{var inst_11494 = (state_11500[2]);var inst_11495 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"focused?","focused?",1066456858),inst_11494);var state_11500__$1 = (function (){var statearr_11502 = state_11500;(statearr_11502[7] = inst_11495);
return statearr_11502;
})();var statearr_11503_11588 = state_11500__$1;(statearr_11503_11588[2] = null);
(statearr_11503_11588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11501 === 3))
{var inst_11498 = (state_11500[2]);var state_11500__$1 = state_11500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11500__$1,inst_11498);
} else
{if((state_val_11501 === 2))
{var state_11500__$1 = state_11500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11500__$1,4,focus_ch);
} else
{if((state_val_11501 === 1))
{var state_11500__$1 = state_11500;var statearr_11504_11589 = state_11500__$1;(statearr_11504_11589[2] = null);
(statearr_11504_11589[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11508 = [null,null,null,null,null,null,null,null];(statearr_11508[0] = state_machine__6178__auto__);
(statearr_11508[1] = 1);
return statearr_11508;
});
var state_machine__6178__auto____1 = (function (state_11500){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11500);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11509){if((e11509 instanceof Object))
{var ex__6181__auto__ = e11509;var statearr_11510_11590 = state_11500;(statearr_11510_11590[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11500);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11591 = state_11500;
state_11500 = G__11591;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11500){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11511 = f__6193__auto__.call(null);(statearr_11511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11587);
return statearr_11511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___11592 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11520){var state_val_11521 = (state_11520[1]);if((state_val_11521 === 4))
{var inst_11514 = (state_11520[2]);var inst_11515 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"value","value",1125876963),inst_11514);var state_11520__$1 = (function (){var statearr_11522 = state_11520;(statearr_11522[7] = inst_11515);
return statearr_11522;
})();var statearr_11523_11593 = state_11520__$1;(statearr_11523_11593[2] = null);
(statearr_11523_11593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11521 === 3))
{var inst_11518 = (state_11520[2]);var state_11520__$1 = state_11520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11520__$1,inst_11518);
} else
{if((state_val_11521 === 2))
{var state_11520__$1 = state_11520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11520__$1,4,value_ch);
} else
{if((state_val_11521 === 1))
{var state_11520__$1 = state_11520;var statearr_11524_11594 = state_11520__$1;(statearr_11524_11594[2] = null);
(statearr_11524_11594[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11528 = [null,null,null,null,null,null,null,null];(statearr_11528[0] = state_machine__6178__auto__);
(statearr_11528[1] = 1);
return statearr_11528;
});
var state_machine__6178__auto____1 = (function (state_11520){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11529){if((e11529 instanceof Object))
{var ex__6181__auto__ = e11529;var statearr_11530_11595 = state_11520;(statearr_11530_11595[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11596 = state_11520;
state_11520 = G__11596;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11520){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11531 = f__6193__auto__.call(null);(statearr_11531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11592);
return statearr_11531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto___11597 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11544){var state_val_11545 = (state_11544[1]);if((state_val_11545 === 4))
{var inst_11534 = (state_11544[2]);var inst_11535 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var inst_11536 = cljs.core.count.call(null,inst_11535);var inst_11537 = ((inst_11534 < inst_11536) ? inst_11534 : inst_11536);var inst_11538 = ((inst_11537 > -1) ? inst_11537 : -1);var inst_11539 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322),inst_11538);var state_11544__$1 = (function (){var statearr_11546 = state_11544;(statearr_11546[7] = inst_11539);
return statearr_11546;
})();var statearr_11547_11598 = state_11544__$1;(statearr_11547_11598[2] = null);
(statearr_11547_11598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11545 === 3))
{var inst_11542 = (state_11544[2]);var state_11544__$1 = state_11544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11544__$1,inst_11542);
} else
{if((state_val_11545 === 2))
{var state_11544__$1 = state_11544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11544__$1,4,highlight_ch);
} else
{if((state_val_11545 === 1))
{var state_11544__$1 = state_11544;var statearr_11548_11599 = state_11544__$1;(statearr_11548_11599[2] = null);
(statearr_11548_11599[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11552 = [null,null,null,null,null,null,null,null];(statearr_11552[0] = state_machine__6178__auto__);
(statearr_11552[1] = 1);
return statearr_11552;
});
var state_machine__6178__auto____1 = (function (state_11544){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11544);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11553){if((e11553 instanceof Object))
{var ex__6181__auto__ = e11553;var statearr_11554_11600 = state_11544;(statearr_11554_11600[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11544);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11601 = state_11544;
state_11544 = G__11601;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11544){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11555 = f__6193__auto__.call(null);(statearr_11555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11597);
return statearr_11555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11568){var state_val_11569 = (state_11568[1]);if((state_val_11569 === 4))
{var inst_11558 = (state_11568[2]);var inst_11559 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var inst_11560 = cljs.core.nth.call(null,inst_11559,inst_11558);var inst_11561 = [inst_11558,inst_11560];var inst_11562 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11561,null));var inst_11563 = cljs.core.async.put_BANG_.call(null,self__.result_ch,inst_11562);var state_11568__$1 = (function (){var statearr_11570 = state_11568;(statearr_11570[7] = inst_11563);
return statearr_11570;
})();var statearr_11571_11602 = state_11568__$1;(statearr_11571_11602[2] = null);
(statearr_11571_11602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11569 === 3))
{var inst_11566 = (state_11568[2]);var state_11568__$1 = state_11568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11568__$1,inst_11566);
} else
{if((state_val_11569 === 2))
{var state_11568__$1 = state_11568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11568__$1,4,select_ch);
} else
{if((state_val_11569 === 1))
{var state_11568__$1 = state_11568;var statearr_11572_11603 = state_11568__$1;(statearr_11572_11603[2] = null);
(statearr_11572_11603[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_11576 = [null,null,null,null,null,null,null,null];(statearr_11576[0] = state_machine__6178__auto__);
(statearr_11576[1] = 1);
return statearr_11576;
});
var state_machine__6178__auto____1 = (function (state_11568){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11568);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11577){if((e11577 instanceof Object))
{var ex__6181__auto__ = e11577;var statearr_11578_11604 = state_11568;(statearr_11578_11604[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11568);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11605 = state_11568;
state_11568 = G__11605;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11568){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11579 = f__6193__auto__.call(null);(statearr_11579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_11579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
arosequist.om_autocomplete.t11464.prototype.om$core$IInitState$ = true;
arosequist.om_autocomplete.t11464.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"value-ch","value-ch",3898660275),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"select-ch","select-ch",3592847944),cljs.core.async.chan.call(null)], null);
});
arosequist.om_autocomplete.t11464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11466){var self__ = this;
var _11466__$1 = this;return self__.meta11465;
});
arosequist.om_autocomplete.t11464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11466,meta11465__$1){var self__ = this;
var _11466__$1 = this;return (new arosequist.om_autocomplete.t11464(self__.input_view,self__.container_view,self__.container_view_opts,self__.result_ch,self__.map__11463,self__.suggestions_fn,self__.results_view_opts,self__.owner,self__.cursor,self__.autocomplete,self__.results_view,self__.p__11345,self__.input_view_opts,meta11465__$1));
});
arosequist.om_autocomplete.__GT_t11464 = (function __GT_t11464(input_view__$1,container_view__$1,container_view_opts__$1,result_ch__$1,map__11463__$2,suggestions_fn__$1,results_view_opts__$1,owner__$1,cursor__$1,autocomplete__$1,results_view__$1,p__11345__$1,input_view_opts__$1,meta11465){return (new arosequist.om_autocomplete.t11464(input_view__$1,container_view__$1,container_view_opts__$1,result_ch__$1,map__11463__$2,suggestions_fn__$1,results_view_opts__$1,owner__$1,cursor__$1,autocomplete__$1,results_view__$1,p__11345__$1,input_view_opts__$1,meta11465));
});
}
return (new arosequist.om_autocomplete.t11464(input_view,container_view,container_view_opts,result_ch,map__11463__$1,suggestions_fn,results_view_opts,owner,cursor,autocomplete,results_view,p__11345,input_view_opts,null));
});

//# sourceMappingURL=om_autocomplete.js.map