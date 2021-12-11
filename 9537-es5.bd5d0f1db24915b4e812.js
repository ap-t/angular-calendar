!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[9537],{57671:function(e,t,n){n.d(t,{S:function(){return u}});var r=n(38583),o=n(93092),i=n(95008),a=n(37716),u=function e(){s(this,e)};u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=a.oAB({type:u}),u.\u0275inj=a.cJS({imports:[[r.ez,o.u5,i._8]]})},99537:function(t,n,u){u.r(n),u.d(n,{DemoModule:function(){return J}});var f=u(38583),l=u(89328),v=u(95008),p=u(90008),w=u(53976),d=u(38711),h=u(96937),m=u(3050),g=u(25755),y=u(33550),b=u(23501),_=u(4547),D=u(37716),T=u(31726),O=u(22167),U=u(60897),A=u(59687),k=u(12153);function C(e,t){if(1&e&&(D.TgZ(0,"div",12),D._uU(1),D.ALo(2,"calendarDate"),D.qZA()),2&e){var n=D.oxw(),r=n.segment,o=n.locale;D.xp6(1),D.hij("\n      ",D.Dn7(2,1,r.date,"weekViewHour",o),"\n    ")}}function Z(e,t){if(1&e){var n=D.EpF();D._uU(0,"\n  "),D.TgZ(1,"div",9,10),D.NdJ("mousedown",function(e){var t=D.CHM(n).segment,r=D.MAs(2);return D.oxw().startDragToCreate(t,e,r)}),D._uU(3,"\n    "),D.YNc(4,C,3,5,"div",11),D._uU(5,"\n  "),D.qZA(),D._uU(6,"\n")}if(2&e){var r=t.segment,o=t.segmentHeight,i=t.isTimeLabel;D.xp6(1),D.Udp("height",o,"px"),D.ekj("cal-hour-start",r.isStart)("cal-after-hour-start",!r.isStart),D.Q6J("ngClass",r.cssClass),D.xp6(3),D.Q6J("ngIf",i)}}var S,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=a(n);function n(){return s(this,n),t.apply(this,arguments)}return r(n,[{key:"weekTooltip",value:function(e,t){if(!e.meta.tmpEvent)return o(c(n.prototype),"weekTooltip",this).call(this,e,t)}},{key:"dayTooltip",value:function(e,t){if(!e.meta.tmpEvent)return o(c(n.prototype),"dayTooltip",this).call(this,e,t)}}]),n}(d.K);x.\u0275fac=function(e){return(S||(S=D.n5z(x)))(e||x)},x.\u0275prov=D.Yz7({token:x,factory:x.\u0275fac});var j=function(){function t(e){s(this,t),this.cdr=e,this.viewDate=new Date,this.events=[],this.dragToCreateActive=!1,this.weekStartsOn=0}return r(t,[{key:"startDragToCreate",value:function(t,n,r){var o=this,i={id:this.events.length,title:"New event",start:t.date,meta:{tmpEvent:!0}};this.events=[].concat(e(this.events),[i]);var a=r.getBoundingClientRect();this.dragToCreateActive=!0;var u=(0,y.Z)(this.viewDate,{weekStartsOn:this.weekStartsOn});(0,h.R)(document,"mousemove").pipe((0,m.x)(function(){delete i.meta.tmpEvent,o.dragToCreateActive=!1,o.refresh()}),(0,g.R)((0,h.R)(document,"mouseup"))).subscribe(function(e){var n=function(e,t){return 30*Math.ceil(e/30)}(e.clientY-a.top),r=function(e,t){return Math.floor(e/t)*t}(e.clientX-a.left,a.width)/a.width,c=(0,b.Z)((0,_.Z)(t.date,n),r);c>t.date&&c<u&&(i.end=c),o.refresh()})}},{key:"refresh",value:function(){this.events=e(this.events),this.cdr.detectChanges()}}]),t}();j.\u0275fac=function(e){return new(e||j)(D.Y36(D.sBO))},j.\u0275cmp=D.Xpm({type:j,selectors:[["mwl-demo-component"]],features:[D._Bn([{provide:d.K,useClass:x}])],decls:33,vars:13,consts:[[1,"row"],[1,"col-md-6"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"col-md-6","text-right"],["weekViewHourSegmentTemplate",""],[3,"viewDate","events","hourSegmentTemplate","weekStartsOn"],[1,"cal-hour-segment",3,"ngClass","mousedown"],["segmentElement",""],["class","cal-time",4,"ngIf"],[1,"cal-time"]],template:function(e,t){if(1&e&&(D.TgZ(0,"div",0),D._uU(1,"\n  "),D.TgZ(2,"div",1),D._uU(3,"\n    "),D.TgZ(4,"div",2),D._uU(5,"\n      "),D.TgZ(6,"div",3),D.NdJ("viewDateChange",function(e){return t.viewDate=e}),D._uU(7,"\n        Previous\n      "),D.qZA(),D._uU(8,"\n      "),D.TgZ(9,"div",4),D.NdJ("viewDateChange",function(e){return t.viewDate=e}),D._uU(10,"\n        Today\n      "),D.qZA(),D._uU(11,"\n      "),D.TgZ(12,"div",5),D.NdJ("viewDateChange",function(e){return t.viewDate=e}),D._uU(13,"\n        Next\n      "),D.qZA(),D._uU(14,"\n    "),D.qZA(),D._uU(15,"\n  "),D.qZA(),D._uU(16,"\n  "),D.TgZ(17,"div",6),D._uU(18,"\n    "),D.TgZ(19,"h3"),D._uU(20),D.ALo(21,"calendarDate"),D.qZA(),D._uU(22,"\n  "),D.qZA(),D._uU(23,"\n"),D.qZA(),D._uU(24,"\n"),D._UZ(25,"br"),D._uU(26,"\n\n"),D.YNc(27,Z,7,8,"ng-template",null,7,D.W1O),D._uU(29,"\n\n"),D.TgZ(30,"mwl-calendar-week-view",8),D._uU(31,"\n"),D.qZA(),D._uU(32,"\n")),2&e){var n=D.MAs(28);D.xp6(6),D.Q6J("view","week")("viewDate",t.viewDate),D.xp6(3),D.Q6J("viewDate",t.viewDate),D.xp6(3),D.Q6J("view","week")("viewDate",t.viewDate),D.xp6(8),D.Oqu(D.xi3(21,10,t.viewDate,"weekViewTitle")),D.xp6(10),D.Q6J("viewDate",t.viewDate)("events",t.events)("hourSegmentTemplate",n)("weekStartsOn",t.weekStartsOn)}},directives:[T.O,O.i,U.T,A.T,f.mk,f.O5],pipes:[k.J],styles:[".disable-hover{pointer-events:none}\n"],encapsulation:2,changeDetection:0});var R=u(57671),J=function e(){s(this,e)};J.\u0275fac=function(e){return new(e||J)},J.\u0275mod=D.oAB({type:J}),J.\u0275inj=D.cJS({imports:[[f.ez,v._8.forRoot({provide:p._,useFactory:w.x}),R.S,l.Bz.forChild([{path:"",component:j}])]]})}}])}();