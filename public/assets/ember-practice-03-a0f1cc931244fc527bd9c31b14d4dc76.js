"use strict";define("ember-practice-03/app",["exports","ember","ember/resolver","ember/load-initializers","ember-practice-03/config/environment"],function(e,t,r,n,a){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:r["default"]}),(0,n["default"])(i,a["default"].modulePrefix),e["default"]=i}),define("ember-practice-03/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-practice-03/config/environment"],function(e,t,r){var n=r["default"].APP.name,a=r["default"].APP.version;e["default"]=t["default"].extend({version:a,name:n})}),define("ember-practice-03/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-practice-03/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-practice-03/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-practice-03/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("ember-practice-03/initializers/export-application-global",["exports","ember","ember-practice-03/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,a=r["default"].exportApplicationGlobal;n="string"==typeof a?a:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("ember-practice-03/router",["exports","ember","ember-practice-03/config/environment"],function(e,t,r){var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){this.route("dashboard")}),e["default"]=n}),define("ember-practice-03/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"ember-practice-03/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"id","title");var n=e.createTextNode("Collabowrite");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,2,2,r),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("ember-practice-03/templates/dashboard",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:1,column:0}},moduleName:"ember-practice-03/templates/dashboard.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment();return t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("ember-practice-03/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ember-practice-03/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h3"),n=e.createTextNode("Hello from Index");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("ember-practice-03/config/environment",["ember"],function(e){var t="ember-practice-03";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("ember-practice-03/app")["default"].create({name:"ember-practice-03",version:"0.0.0+60c322e6"});