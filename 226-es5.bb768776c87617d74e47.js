!function(){"use strict";function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[226],{57671:function(e,t,a){a.d(t,{S:function(){return s}});var i=a(38583),c=a(93092),o=a(95008),r=a(37716),s=function e(){n(this,e)};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[i.ez,c.u5,o._8]]})},10226:function(t,a,i){i.r(a),i.d(a,{DemoModule:function(){return y}});var c=i(38583),o=i(95008),r=i(90008),s=i(89328),u=i(57671),l=i(57888),v=i(12297),f=i(55155),d=i(37716),p=i(9072),h=function(){function t(){n(this,t),this.viewDate=new Date,this.events=[{start:new Date,title:"An event",color:f.O.red}]}var a,i,c;return a=t,(i=[{key:"dayClicked",value:function(e){var n=e.date,t=e.events;(0,l.Z)(n,this.viewDate)&&((0,v.Z)(this.viewDate,n)&&!0===this.activeDayIsOpen||0===t.length?this.activeDayIsOpen=!1:(this.activeDayIsOpen=!0,this.viewDate=n))}}])&&e(a.prototype,i),c&&e(a,c),t}();h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=d.Xpm({type:h,selectors:[["mwl-demo-component"]],decls:3,vars:4,consts:[[3,"viewDate","events","activeDayIsOpen","dayClicked"]],template:function(e,n){1&e&&(d.TgZ(0,"mwl-calendar-month-view",0),d.NdJ("dayClicked",function(e){return n.dayClicked(e.day)}),d._uU(1,"\n"),d.qZA(),d._uU(2,"\n")),2&e&&d.Q6J("@.disabled",!0)("viewDate",n.viewDate)("events",n.events)("activeDayIsOpen",n.activeDayIsOpen)},directives:[p.G],encapsulation:2,changeDetection:0});var w=i(53976),y=function e(){n(this,e)};y.\u0275fac=function(e){return new(e||y)},y.\u0275mod=d.oAB({type:y}),y.\u0275inj=d.cJS({imports:[[c.ez,o._8.forRoot({provide:r._,useFactory:w.x}),u.S,s.Bz.forChild([{path:"",component:h}])]]})}}])}();