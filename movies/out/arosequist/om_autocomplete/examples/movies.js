// Compiled by ClojureScript 0.0-2173
goog.provide('arosequist.om_autocomplete.examples.movies');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('arosequist.om_autocomplete');
goog.require('goog.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.dom');
goog.require('arosequist.om_autocomplete');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
arosequist.om_autocomplete.examples.movies.container_view = (function container_view(_,___$1){if(typeof arosequist.om_autocomplete.examples.movies.t11682 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.examples.movies.t11682 = (function (_,container_view,meta11683){
this._ = _;
this.container_view = container_view;
this.meta11683 = meta11683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.examples.movies.t11682.cljs$lang$type = true;
arosequist.om_autocomplete.examples.movies.t11682.cljs$lang$ctorStr = "arosequist.om-autocomplete.examples.movies/t11682";
arosequist.om_autocomplete.examples.movies.t11682.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.examples.movies/t11682");
});
arosequist.om_autocomplete.examples.movies.t11682.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.examples.movies.t11682.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$3,p__11685){var self__ = this;
var map__11686 = p__11685;var map__11686__$1 = ((cljs.core.seq_QMARK_.call(null,map__11686))?cljs.core.apply.call(null,cljs.core.hash_map,map__11686):map__11686);var results_component = cljs.core.get.call(null,map__11686__$1,new cljs.core.Keyword(null,"results-component","results-component",1518875480));var input_component = cljs.core.get.call(null,map__11686__$1,new cljs.core.Keyword(null,"input-component","input-component",4686517804));var ___$4 = this;return React.DOM.div(null,input_component,results_component);
});
arosequist.om_autocomplete.examples.movies.t11682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11684){var self__ = this;
var _11684__$1 = this;return self__.meta11683;
});
arosequist.om_autocomplete.examples.movies.t11682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11684,meta11683__$1){var self__ = this;
var _11684__$1 = this;return (new arosequist.om_autocomplete.examples.movies.t11682(self__._,self__.container_view,meta11683__$1));
});
arosequist.om_autocomplete.examples.movies.__GT_t11682 = (function __GT_t11682(___$2,container_view__$1,meta11683){return (new arosequist.om_autocomplete.examples.movies.t11682(___$2,container_view__$1,meta11683));
});
}
return (new arosequist.om_autocomplete.examples.movies.t11682(___$1,container_view,null));
});
arosequist.om_autocomplete.examples.movies.suggestions = (function suggestions(value,suggestions_ch,cancel_ch){var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.SUCCESS,(function (e){return cljs.core.async.put_BANG_.call(null,suggestions_ch,cljs.core.js__GT_clj.call(null,xhr.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}));
var c__6192__auto___11715 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11705){var state_val_11706 = (state_11705[1]);if((state_val_11706 === 2))
{var inst_11702 = (state_11705[2]);var inst_11703 = xhr.abort();var state_11705__$1 = (function (){var statearr_11707 = state_11705;(statearr_11707[7] = inst_11702);
return statearr_11707;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11705__$1,inst_11703);
} else
{if((state_val_11706 === 1))
{var state_11705__$1 = state_11705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11705__$1,2,cancel_ch);
} else
{return null;
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11711 = [null,null,null,null,null,null,null,null];(statearr_11711[0] = state_machine__6178__auto__);
(statearr_11711[1] = 1);
return statearr_11711;
});
var state_machine__6178__auto____1 = (function (state_11705){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11705);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11712){if((e11712 instanceof Object))
{var ex__6181__auto__ = e11712;var statearr_11713_11716 = state_11705;(statearr_11713_11716[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11705);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11717 = state_11705;
state_11705 = G__11717;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11705){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11714 = f__6193__auto__.call(null);(statearr_11714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11715);
return statearr_11714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return xhr.send([cljs.core.str("http://movies-api.elasticbeanstalk.com/items/movies?q="),cljs.core.str(value)].join(''),"GET");
});
arosequist.om_autocomplete.examples.movies.input_view = (function input_view(_,___$1){if(typeof arosequist.om_autocomplete.examples.movies.t11724 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.examples.movies.t11724 = (function (_,input_view,meta11725){
this._ = _;
this.input_view = input_view;
this.meta11725 = meta11725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.examples.movies.t11724.cljs$lang$type = true;
arosequist.om_autocomplete.examples.movies.t11724.cljs$lang$ctorStr = "arosequist.om-autocomplete.examples.movies/t11724";
arosequist.om_autocomplete.examples.movies.t11724.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.examples.movies/t11724");
});
arosequist.om_autocomplete.examples.movies.t11724.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.examples.movies.t11724.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$3,p__11727){var self__ = this;
var map__11728 = p__11727;var map__11728__$1 = ((cljs.core.seq_QMARK_.call(null,map__11728))?cljs.core.apply.call(null,cljs.core.hash_map,map__11728):map__11728);var value = cljs.core.get.call(null,map__11728__$1,new cljs.core.Keyword(null,"value","value",1125876963));var value_ch = cljs.core.get.call(null,map__11728__$1,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275));var ___$4 = this;return om.dom.input.call(null,{"onChange": (function (p1__11718_SHARP_){return cljs.core.async.put_BANG_.call(null,value_ch,p1__11718_SHARP_.target.value);
}), "value": value, "spellCheck": "false", "autoComplete": "off", "type": "text"});
});
arosequist.om_autocomplete.examples.movies.t11724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11726){var self__ = this;
var _11726__$1 = this;return self__.meta11725;
});
arosequist.om_autocomplete.examples.movies.t11724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11726,meta11725__$1){var self__ = this;
var _11726__$1 = this;return (new arosequist.om_autocomplete.examples.movies.t11724(self__._,self__.input_view,meta11725__$1));
});
arosequist.om_autocomplete.examples.movies.__GT_t11724 = (function __GT_t11724(___$2,input_view__$1,meta11725){return (new arosequist.om_autocomplete.examples.movies.t11724(___$2,input_view__$1,meta11725));
});
}
return (new arosequist.om_autocomplete.examples.movies.t11724(___$1,input_view,null));
});
arosequist.om_autocomplete.examples.movies.render_empty_suggestion = (function render_empty_suggestion(){return React.DOM.div({"className": "suggestion"},React.DOM.div({"className": "empty-suggestion-poster"}));
});
arosequist.om_autocomplete.examples.movies.render_suggestion = (function render_suggestion(p__11729){var map__11731 = p__11729;var map__11731__$1 = ((cljs.core.seq_QMARK_.call(null,map__11731))?cljs.core.apply.call(null,cljs.core.hash_map,map__11731):map__11731);var title = cljs.core.get.call(null,map__11731__$1,new cljs.core.Keyword(null,"title","title",1124275658));var link = cljs.core.get.call(null,map__11731__$1,new cljs.core.Keyword(null,"link","link",1017226092));var image = cljs.core.get.call(null,map__11731__$1,new cljs.core.Keyword(null,"image","image",1114217677));return React.DOM.div({"className": "suggestion"},React.DOM.a({"target": "_blank", "href": link},(cljs.core.truth_(image)?React.DOM.img({"height": "225px", "width": "150px", "src": image}):React.DOM.div({"className": "suggestion-poster-missing"}))),React.DOM.div({"className": "suggestion-title"},title));
});
arosequist.om_autocomplete.examples.movies.results_view = (function results_view(_,___$1){if(typeof arosequist.om_autocomplete.examples.movies.t11737 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.examples.movies.t11737 = (function (_,results_view,meta11738){
this._ = _;
this.results_view = results_view;
this.meta11738 = meta11738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.examples.movies.t11737.cljs$lang$type = true;
arosequist.om_autocomplete.examples.movies.t11737.cljs$lang$ctorStr = "arosequist.om-autocomplete.examples.movies/t11737";
arosequist.om_autocomplete.examples.movies.t11737.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.examples.movies/t11737");
});
arosequist.om_autocomplete.examples.movies.t11737.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.examples.movies.t11737.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$3,p__11740){var self__ = this;
var map__11741 = p__11740;var map__11741__$1 = ((cljs.core.seq_QMARK_.call(null,map__11741))?cljs.core.apply.call(null,cljs.core.hash_map,map__11741):map__11741);var suggestions = cljs.core.get.call(null,map__11741__$1,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var ___$4 = this;return cljs.core.apply.call(null,om.dom.div,null,(cljs.core.truth_(suggestions)?cljs.core.map.call(null,arosequist.om_autocomplete.examples.movies.render_suggestion,cljs.core.take.call(null,5,suggestions)):cljs.core.repeatedly.call(null,5,arosequist.om_autocomplete.examples.movies.render_empty_suggestion)));
});
arosequist.om_autocomplete.examples.movies.t11737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11739){var self__ = this;
var _11739__$1 = this;return self__.meta11738;
});
arosequist.om_autocomplete.examples.movies.t11737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11739,meta11738__$1){var self__ = this;
var _11739__$1 = this;return (new arosequist.om_autocomplete.examples.movies.t11737(self__._,self__.results_view,meta11738__$1));
});
arosequist.om_autocomplete.examples.movies.__GT_t11737 = (function __GT_t11737(___$2,results_view__$1,meta11738){return (new arosequist.om_autocomplete.examples.movies.t11737(___$2,results_view__$1,meta11738));
});
}
return (new arosequist.om_autocomplete.examples.movies.t11737(___$1,results_view,null));
});
arosequist.om_autocomplete.examples.movies.autocomplete = (function autocomplete(app,owner){if(typeof arosequist.om_autocomplete.examples.movies.t11745 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.examples.movies.t11745 = (function (owner,app,autocomplete,meta11746){
this.owner = owner;
this.app = app;
this.autocomplete = autocomplete;
this.meta11746 = meta11746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.examples.movies.t11745.cljs$lang$type = true;
arosequist.om_autocomplete.examples.movies.t11745.cljs$lang$ctorStr = "arosequist.om-autocomplete.examples.movies/t11745";
arosequist.om_autocomplete.examples.movies.t11745.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.examples.movies/t11745");
});
arosequist.om_autocomplete.examples.movies.t11745.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.examples.movies.t11745.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.build.call(null,arosequist.om_autocomplete.autocomplete,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"container-view","container-view",1823452131),arosequist.om_autocomplete.examples.movies.container_view,new cljs.core.Keyword(null,"input-view","input-view",2354464314),arosequist.om_autocomplete.examples.movies.input_view,new cljs.core.Keyword(null,"results-view","results-view",2051677582),arosequist.om_autocomplete.examples.movies.results_view,new cljs.core.Keyword(null,"suggestions-fn","suggestions-fn",961222616),arosequist.om_autocomplete.examples.movies.suggestions], null)], null));
});
arosequist.om_autocomplete.examples.movies.t11745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11747){var self__ = this;
var _11747__$1 = this;return self__.meta11746;
});
arosequist.om_autocomplete.examples.movies.t11745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11747,meta11746__$1){var self__ = this;
var _11747__$1 = this;return (new arosequist.om_autocomplete.examples.movies.t11745(self__.owner,self__.app,self__.autocomplete,meta11746__$1));
});
arosequist.om_autocomplete.examples.movies.__GT_t11745 = (function __GT_t11745(owner__$1,app__$1,autocomplete__$1,meta11746){return (new arosequist.om_autocomplete.examples.movies.t11745(owner__$1,app__$1,autocomplete__$1,meta11746));
});
}
return (new arosequist.om_autocomplete.examples.movies.t11745(owner,app,autocomplete,null));
});
om.core.root.call(null,arosequist.om_autocomplete.examples.movies.autocomplete,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("autocomplete")], null));

//# sourceMappingURL=movies.js.map