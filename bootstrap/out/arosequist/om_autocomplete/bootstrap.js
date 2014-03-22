// Compiled by ClojureScript 0.0-2173
goog.provide('arosequist.om_autocomplete.bootstrap');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
arosequist.om_autocomplete.bootstrap.container_view = (function container_view(_,___$1,p__12221){var map__12228 = p__12221;var map__12228__$1 = ((cljs.core.seq_QMARK_.call(null,map__12228))?cljs.core.apply.call(null,cljs.core.hash_map,map__12228):map__12228);var class_name = cljs.core.get.call(null,map__12228__$1,new cljs.core.Keyword(null,"class-name","class-name",677253426));if(typeof arosequist.om_autocomplete.bootstrap.t12229 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.bootstrap.t12229 = (function (class_name,map__12228,p__12221,_,container_view,meta12230){
this.class_name = class_name;
this.map__12228 = map__12228;
this.p__12221 = p__12221;
this._ = _;
this.container_view = container_view;
this.meta12230 = meta12230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.bootstrap.t12229.cljs$lang$type = true;
arosequist.om_autocomplete.bootstrap.t12229.cljs$lang$ctorStr = "arosequist.om-autocomplete.bootstrap/t12229";
arosequist.om_autocomplete.bootstrap.t12229.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.bootstrap/t12229");
});
arosequist.om_autocomplete.bootstrap.t12229.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.bootstrap.t12229.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$3,p__12232){var self__ = this;
var map__12233 = p__12232;var map__12233__$1 = ((cljs.core.seq_QMARK_.call(null,map__12233))?cljs.core.apply.call(null,cljs.core.hash_map,map__12233):map__12233);var results_component = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"results-component","results-component",1518875480));var input_component = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"input-component","input-component",4686517804));var ___$4 = this;return React.DOM.div({"className": [cljs.core.str("dropdown "),cljs.core.str(self__.class_name)].join('')},input_component,results_component);
});
arosequist.om_autocomplete.bootstrap.t12229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12231){var self__ = this;
var _12231__$1 = this;return self__.meta12230;
});
arosequist.om_autocomplete.bootstrap.t12229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12231,meta12230__$1){var self__ = this;
var _12231__$1 = this;return (new arosequist.om_autocomplete.bootstrap.t12229(self__.class_name,self__.map__12228,self__.p__12221,self__._,self__.container_view,meta12230__$1));
});
arosequist.om_autocomplete.bootstrap.__GT_t12229 = (function __GT_t12229(class_name__$1,map__12228__$2,p__12221__$1,___$2,container_view__$1,meta12230){return (new arosequist.om_autocomplete.bootstrap.t12229(class_name__$1,map__12228__$2,p__12221__$1,___$2,container_view__$1,meta12230));
});
}
return (new arosequist.om_autocomplete.bootstrap.t12229(class_name,map__12228__$1,p__12221,___$1,container_view,null));
});
arosequist.om_autocomplete.bootstrap.input_view = (function input_view(_,___$1,p__12235){var map__12258 = p__12235;var map__12258__$1 = ((cljs.core.seq_QMARK_.call(null,map__12258))?cljs.core.apply.call(null,cljs.core.hash_map,map__12258):map__12258);var placeholder = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013));var class_name = cljs.core.get.call(null,map__12258__$1,new cljs.core.Keyword(null,"class-name","class-name",677253426));if(typeof arosequist.om_autocomplete.bootstrap.t12259 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.bootstrap.t12259 = (function (class_name,placeholder,map__12258,p__12235,_,input_view,meta12260){
this.class_name = class_name;
this.placeholder = placeholder;
this.map__12258 = map__12258;
this.p__12235 = p__12235;
this._ = _;
this.input_view = input_view;
this.meta12260 = meta12260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.bootstrap.t12259.cljs$lang$type = true;
arosequist.om_autocomplete.bootstrap.t12259.cljs$lang$ctorStr = "arosequist.om-autocomplete.bootstrap/t12259";
arosequist.om_autocomplete.bootstrap.t12259.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.bootstrap/t12259");
});
arosequist.om_autocomplete.bootstrap.t12259.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.bootstrap.t12259.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$3,p__12262){var self__ = this;
var map__12263 = p__12262;var map__12263__$1 = ((cljs.core.seq_QMARK_.call(null,map__12263))?cljs.core.apply.call(null,cljs.core.hash_map,map__12263):map__12263);var highlighted_index = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322));var value = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"value","value",1125876963));var select_ch = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var highlight_ch = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560));var value_ch = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"value-ch","value-ch",3898660275));var focus_ch = cljs.core.get.call(null,map__12263__$1,new cljs.core.Keyword(null,"focus-ch","focus-ch",1066403052));var ___$4 = this;return om.dom.input.call(null,{"spellCheck": "false", "onKeyDown": (function (e){var G__12264 = e.keyCode;if(cljs.core._EQ_.call(null,13,G__12264))
{return cljs.core.async.put_BANG_.call(null,select_ch,highlighted_index);
} else
{if(cljs.core._EQ_.call(null,38,G__12264))
{return cljs.core.async.put_BANG_.call(null,highlight_ch,(highlighted_index - 1));
} else
{if(cljs.core._EQ_.call(null,40,G__12264))
{return cljs.core.async.put_BANG_.call(null,highlight_ch,(highlighted_index + 1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}), "autoComplete": "off", "onBlur": (function (){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12270){var state_val_12271 = (state_12270[1]);if((state_val_12271 === 2))
{var inst_12267 = (state_12270[2]);var inst_12268 = cljs.core.async.put_BANG_.call(null,focus_ch,false);var state_12270__$1 = (function (){var statearr_12272 = state_12270;(statearr_12272[7] = inst_12267);
return statearr_12272;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12270__$1,inst_12268);
} else
{if((state_val_12271 === 1))
{var inst_12265 = cljs.core.async.timeout.call(null,100);var state_12270__$1 = state_12270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12270__$1,2,inst_12265);
} else
{return null;
}
}
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_12276 = [null,null,null,null,null,null,null,null];(statearr_12276[0] = state_machine__6178__auto__);
(statearr_12276[1] = 1);
return statearr_12276;
});
var state_machine__6178__auto____1 = (function (state_12270){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12270);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12277){if((e12277 instanceof Object))
{var ex__6181__auto__ = e12277;var statearr_12278_12280 = state_12270;(statearr_12278_12280[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12270);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12281 = state_12270;
state_12270 = G__12281;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12270){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12279 = f__6193__auto__.call(null);(statearr_12279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
}), "onChange": (function (p1__12234_SHARP_){return cljs.core.async.put_BANG_.call(null,value_ch,p1__12234_SHARP_.target.value);
}), "type": "text", "onFocus": (function (){return cljs.core.async.put_BANG_.call(null,focus_ch,true);
}), "className": [cljs.core.str("form-control "),cljs.core.str(self__.class_name)].join(''), "value": value, "placeholder": self__.placeholder});
});
arosequist.om_autocomplete.bootstrap.t12259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12261){var self__ = this;
var _12261__$1 = this;return self__.meta12260;
});
arosequist.om_autocomplete.bootstrap.t12259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12261,meta12260__$1){var self__ = this;
var _12261__$1 = this;return (new arosequist.om_autocomplete.bootstrap.t12259(self__.class_name,self__.placeholder,self__.map__12258,self__.p__12235,self__._,self__.input_view,meta12260__$1));
});
arosequist.om_autocomplete.bootstrap.__GT_t12259 = (function __GT_t12259(class_name__$1,placeholder__$1,map__12258__$2,p__12235__$1,___$2,input_view__$1,meta12260){return (new arosequist.om_autocomplete.bootstrap.t12259(class_name__$1,placeholder__$1,map__12258__$2,p__12235__$1,___$2,input_view__$1,meta12260));
});
}
return (new arosequist.om_autocomplete.bootstrap.t12259(class_name,placeholder,map__12258__$1,p__12235,___$1,input_view,null));
});
arosequist.om_autocomplete.bootstrap.results_view = (function results_view(app,_,p__12282){var map__12289 = p__12282;var map__12289__$1 = ((cljs.core.seq_QMARK_.call(null,map__12289))?cljs.core.apply.call(null,cljs.core.hash_map,map__12289):map__12289);var render_item_opts = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"render-item-opts","render-item-opts",551835285));var render_item = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"render-item","render-item",3634814044));var loading_view_opts = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"loading-view-opts","loading-view-opts",4086844009));var loading_view = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"loading-view","loading-view",2379666440));var class_name = cljs.core.get.call(null,map__12289__$1,new cljs.core.Keyword(null,"class-name","class-name",677253426));if(typeof arosequist.om_autocomplete.bootstrap.t12290 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.bootstrap.t12290 = (function (app,loading_view_opts,render_item_opts,p__12282,loading_view,class_name,_,map__12289,render_item,results_view,meta12291){
this.app = app;
this.loading_view_opts = loading_view_opts;
this.render_item_opts = render_item_opts;
this.p__12282 = p__12282;
this.loading_view = loading_view;
this.class_name = class_name;
this._ = _;
this.map__12289 = map__12289;
this.render_item = render_item;
this.results_view = results_view;
this.meta12291 = meta12291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.bootstrap.t12290.cljs$lang$type = true;
arosequist.om_autocomplete.bootstrap.t12290.cljs$lang$ctorStr = "arosequist.om-autocomplete.bootstrap/t12290";
arosequist.om_autocomplete.bootstrap.t12290.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.bootstrap/t12290");
});
arosequist.om_autocomplete.bootstrap.t12290.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.bootstrap.t12290.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$2,p__12293){var self__ = this;
var map__12294 = p__12293;var map__12294__$1 = ((cljs.core.seq_QMARK_.call(null,map__12294))?cljs.core.apply.call(null,cljs.core.hash_map,map__12294):map__12294);var highlighted_index = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322));var suggestions = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"suggestions","suggestions",3783551585));var focused_QMARK_ = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"focused?","focused?",1066456858));var loading_QMARK_ = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"loading?","loading?",2860136949));var value = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"value","value",1125876963));var select_ch = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var highlight_ch = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560));var ___$3 = this;var display_QMARK_ = (function (){var and__3431__auto__ = focused_QMARK_;if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = value;if(cljs.core.truth_(and__3431__auto____$1))
{return cljs.core.not_EQ_.call(null,value,"");
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
})();var display = (cljs.core.truth_(display_QMARK_)?"block":"none");var attrs = {"style": {"display": display}, "className": "dropdown-menu"};if(cljs.core.truth_(loading_QMARK_))
{return React.DOM.ul(attrs,om.core.build.call(null,self__.loading_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),self__.loading_view_opts], null)));
} else
{return cljs.core.apply.call(null,om.dom.ul,attrs,cljs.core.map_indexed.call(null,(function (idx,item){return om.core.build.call(null,self__.render_item,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560),highlight_ch,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944),select_ch], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",1017147013),item,new cljs.core.Keyword(null,"index","index",1114250308),idx,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322),highlighted_index], null),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.render_item_opts], null));
}),suggestions));
}
});
arosequist.om_autocomplete.bootstrap.t12290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12292){var self__ = this;
var _12292__$1 = this;return self__.meta12291;
});
arosequist.om_autocomplete.bootstrap.t12290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12292,meta12291__$1){var self__ = this;
var _12292__$1 = this;return (new arosequist.om_autocomplete.bootstrap.t12290(self__.app,self__.loading_view_opts,self__.render_item_opts,self__.p__12282,self__.loading_view,self__.class_name,self__._,self__.map__12289,self__.render_item,self__.results_view,meta12291__$1));
});
arosequist.om_autocomplete.bootstrap.__GT_t12290 = (function __GT_t12290(app__$1,loading_view_opts__$1,render_item_opts__$1,p__12282__$1,loading_view__$1,class_name__$1,___$1,map__12289__$2,render_item__$1,results_view__$1,meta12291){return (new arosequist.om_autocomplete.bootstrap.t12290(app__$1,loading_view_opts__$1,render_item_opts__$1,p__12282__$1,loading_view__$1,class_name__$1,___$1,map__12289__$2,render_item__$1,results_view__$1,meta12291));
});
}
return (new arosequist.om_autocomplete.bootstrap.t12290(app,loading_view_opts,render_item_opts,p__12282,loading_view,class_name,_,map__12289__$1,render_item,results_view,null));
});
arosequist.om_autocomplete.bootstrap.render_item = (function render_item(app,owner,p__12295){var map__12322 = p__12295;var map__12322__$1 = ((cljs.core.seq_QMARK_.call(null,map__12322))?cljs.core.apply.call(null,cljs.core.hash_map,map__12322):map__12322);var text_fn = cljs.core.get.call(null,map__12322__$1,new cljs.core.Keyword(null,"text-fn","text-fn",3890985178));var class_name = cljs.core.get.call(null,map__12322__$1,new cljs.core.Keyword(null,"class-name","class-name",677253426));if(typeof arosequist.om_autocomplete.bootstrap.t12323 !== 'undefined')
{} else
{
/**
* @constructor
*/
arosequist.om_autocomplete.bootstrap.t12323 = (function (class_name,text_fn,map__12322,p__12295,owner,app,render_item,meta12324){
this.class_name = class_name;
this.text_fn = text_fn;
this.map__12322 = map__12322;
this.p__12295 = p__12295;
this.owner = owner;
this.app = app;
this.render_item = render_item;
this.meta12324 = meta12324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
arosequist.om_autocomplete.bootstrap.t12323.cljs$lang$type = true;
arosequist.om_autocomplete.bootstrap.t12323.cljs$lang$ctorStr = "arosequist.om-autocomplete.bootstrap/t12323";
arosequist.om_autocomplete.bootstrap.t12323.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"arosequist.om-autocomplete.bootstrap/t12323");
});
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IRenderState$ = true;
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__12326){var self__ = this;
var map__12327 = p__12326;var map__12327__$1 = ((cljs.core.seq_QMARK_.call(null,map__12327))?cljs.core.apply.call(null,cljs.core.hash_map,map__12327):map__12327);var highlighted_index = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"highlighted-index","highlighted-index",2217845322));var index = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"index","index",1114250308));var item = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"item","item",1017147013));var select_ch = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var click_ch = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"click-ch","click-ch",1920308796));var ___$1 = this;var highlighted_QMARK_ = cljs.core._EQ_.call(null,index,highlighted_index);return React.DOM.li({"className": ((highlighted_QMARK_)?[cljs.core.str("active "),cljs.core.str(self__.class_name)].join(''):self__.class_name)},React.DOM.a({"href": "#"},self__.text_fn.call(null,item,index)));
});
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IDidMount$ = true;
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var index = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"index","index",1114250308));var highlight_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"highlight-ch","highlight-ch",786460560));var click_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-ch","click-ch",1920308796));var node = om.core.get_node.call(null,self__.owner);goog.events.listen(node,goog.events.EventType.MOUSEOVER,(function (){return cljs.core.async.put_BANG_.call(null,highlight_ch,index);
}));
return goog.events.listen(node,goog.events.EventType.CLICK,(function (){return cljs.core.async.put_BANG_.call(null,click_ch,true);
}));
});
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IWillMount$ = true;
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var click_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-ch","click-ch",1920308796));var select_ch = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"select-ch","select-ch",3592847944));var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_12336){var state_val_12337 = (state_12336[1]);if((state_val_12337 === 4))
{var inst_12330 = (state_12336[2]);var inst_12331 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"index","index",1114250308));var inst_12332 = cljs.core.async.put_BANG_.call(null,select_ch,inst_12331);var state_12336__$1 = (function (){var statearr_12338 = state_12336;(statearr_12338[7] = inst_12330);
return statearr_12338;
})();var statearr_12339_12348 = state_12336__$1;(statearr_12339_12348[2] = inst_12332);
(statearr_12339_12348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 3))
{var inst_12334 = (state_12336[2]);var state_12336__$1 = state_12336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12336__$1,inst_12334);
} else
{if((state_val_12337 === 2))
{var state_12336__$1 = state_12336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12336__$1,4,click_ch);
} else
{if((state_val_12337 === 1))
{var state_12336__$1 = state_12336;var statearr_12340_12349 = state_12336__$1;(statearr_12340_12349[2] = null);
(statearr_12340_12349[1] = 2);
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
var state_machine__6178__auto____0 = (function (){var statearr_12344 = [null,null,null,null,null,null,null,null];(statearr_12344[0] = state_machine__6178__auto__);
(statearr_12344[1] = 1);
return statearr_12344;
});
var state_machine__6178__auto____1 = (function (state_12336){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_12336);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e12345){if((e12345 instanceof Object))
{var ex__6181__auto__ = e12345;var statearr_12346_12350 = state_12336;(statearr_12346_12350[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12336);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12351 = state_12336;
state_12336 = G__12351;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_12336){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_12336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_12347 = f__6193__auto__.call(null);(statearr_12347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_12347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IInitState$ = true;
arosequist.om_autocomplete.bootstrap.t12323.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-ch","click-ch",1920308796),cljs.core.async.chan.call(null)], null);
});
arosequist.om_autocomplete.bootstrap.t12323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12325){var self__ = this;
var _12325__$1 = this;return self__.meta12324;
});
arosequist.om_autocomplete.bootstrap.t12323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12325,meta12324__$1){var self__ = this;
var _12325__$1 = this;return (new arosequist.om_autocomplete.bootstrap.t12323(self__.class_name,self__.text_fn,self__.map__12322,self__.p__12295,self__.owner,self__.app,self__.render_item,meta12324__$1));
});
arosequist.om_autocomplete.bootstrap.__GT_t12323 = (function __GT_t12323(class_name__$1,text_fn__$1,map__12322__$2,p__12295__$1,owner__$1,app__$1,render_item__$1,meta12324){return (new arosequist.om_autocomplete.bootstrap.t12323(class_name__$1,text_fn__$1,map__12322__$2,p__12295__$1,owner__$1,app__$1,render_item__$1,meta12324));
});
}
return (new arosequist.om_autocomplete.bootstrap.t12323(class_name,text_fn,map__12322__$1,p__12295,owner,app,render_item,null));
});

//# sourceMappingURL=bootstrap.js.map