"use strict";(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[3732],{13732:function(e,n,t){t.r(n),t.d(n,{DemoModule:function(){return _}});var a=t(38583),i=t(89328),w=t(95008),v=t(90008),c=t(57671),u=t(4606),r=t(55155),o=t(37716),s=t(78767),l=t(9072),d=t(59687),D=t(50811);function h(e,n){if(1&e&&(o.TgZ(0,"mwl-calendar-month-view",4),o._uU(1,"\n  "),o.qZA()),2&e){const e=o.oxw();o.Q6J("viewDate",e.viewDate)("events",e.events)("activeDayIsOpen",!0)}}function g(e,n){if(1&e&&(o.TgZ(0,"mwl-calendar-week-view",5),o._uU(1,"\n  "),o.qZA()),2&e){const e=o.oxw();o.Q6J("viewDate",e.viewDate)("events",e.events)}}function p(e,n){if(1&e&&(o.TgZ(0,"mwl-calendar-day-view",5),o._uU(1,"\n  "),o.qZA()),2&e){const e=o.oxw();o.Q6J("viewDate",e.viewDate)("events",e.events)}}class m{constructor(){this.view=u.w.Month,this.viewDate=new Date,this.events=[{title:"Has custom class",color:r.O.yellow,start:new Date,cssClass:"my-custom-class"}]}}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=o.Xpm({type:m,selectors:[["mwl-demo-component"]],decls:12,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],[3,"ngSwitch"],[3,"viewDate","events","activeDayIsOpen",4,"ngSwitchCase"],[3,"viewDate","events",4,"ngSwitchCase"],[3,"viewDate","events","activeDayIsOpen"],[3,"viewDate","events"]],template:function(e,n){1&e&&(o.TgZ(0,"mwl-demo-utils-calendar-header",0),o.NdJ("viewChange",function(e){return n.view=e})("viewDateChange",function(e){return n.viewDate=e}),o._uU(1,"\n"),o.qZA(),o._uU(2,"\n\n"),o.TgZ(3,"div",1),o._uU(4,"\n  "),o.YNc(5,h,2,3,"mwl-calendar-month-view",2),o._uU(6,"\n  "),o.YNc(7,g,2,2,"mwl-calendar-week-view",3),o._uU(8,"\n  "),o.YNc(9,p,2,2,"mwl-calendar-day-view",3),o._uU(10,"\n"),o.qZA(),o._uU(11,"\n")),2&e&&(o.Q6J("view",n.view)("viewDate",n.viewDate),o.xp6(3),o.Q6J("ngSwitch",n.view),o.xp6(2),o.Q6J("ngSwitchCase","month"),o.xp6(2),o.Q6J("ngSwitchCase","week"),o.xp6(2),o.Q6J("ngSwitchCase","day"))},directives:[s.$,a.RF,a.n9,l.G,d.T,D.S],styles:[".my-custom-class span{color:#ff3d7f!important}\n"],encapsulation:2,changeDetection:0});var C=t(53976);class _{}_.\u0275fac=function(e){return new(e||_)},_.\u0275mod=o.oAB({type:_}),_.\u0275inj=o.cJS({imports:[[a.ez,w._8.forRoot({provide:v._,useFactory:C.x}),c.S,i.Bz.forChild([{path:"",component:m}])]]})},78767:function(e,n,t){t.d(n,{$:function(){return r}});var a=t(37716),i=t(4606),w=t(31726),v=t(22167),c=t(60897),u=t(12153);class r{constructor(){this.locale="en",this.viewChange=new a.vpe,this.viewDateChange=new a.vpe,this.CalendarView=i.w}}r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(a._uU(0,"\n    "),a.TgZ(1,"div",0),a._uU(2,"\n      "),a.TgZ(3,"div",1),a._uU(4,"\n        "),a.TgZ(5,"div",2),a._uU(6,"\n          "),a.TgZ(7,"div",3),a.NdJ("viewDateChange",function(e){return n.viewDate=e})("viewDateChange",function(){return n.viewDateChange.next(n.viewDate)}),a._uU(8,"\n            Previous\n          "),a.qZA(),a._uU(9,"\n          "),a.TgZ(10,"div",4),a.NdJ("viewDateChange",function(e){return n.viewDate=e})("viewDateChange",function(){return n.viewDateChange.next(n.viewDate)}),a._uU(11,"\n            Today\n          "),a.qZA(),a._uU(12,"\n          "),a.TgZ(13,"div",5),a.NdJ("viewDateChange",function(e){return n.viewDate=e})("viewDateChange",function(){return n.viewDateChange.next(n.viewDate)}),a._uU(14,"\n            Next\n          "),a.qZA(),a._uU(15,"\n        "),a.qZA(),a._uU(16,"\n      "),a.qZA(),a._uU(17,"\n      "),a.TgZ(18,"div",1),a._uU(19,"\n        "),a.TgZ(20,"h3"),a._uU(21),a.ALo(22,"calendarDate"),a.qZA(),a._uU(23,"\n      "),a.qZA(),a._uU(24,"\n      "),a.TgZ(25,"div",1),a._uU(26,"\n        "),a.TgZ(27,"div",2),a._uU(28,"\n          "),a.TgZ(29,"div",6),a.NdJ("click",function(){return n.viewChange.emit(n.CalendarView.Month)}),a._uU(30,"\n            Month\n          "),a.qZA(),a._uU(31,"\n          "),a.TgZ(32,"div",6),a.NdJ("click",function(){return n.viewChange.emit(n.CalendarView.Week)}),a._uU(33,"\n            Week\n          "),a.qZA(),a._uU(34,"\n          "),a.TgZ(35,"div",6),a.NdJ("click",function(){return n.viewChange.emit(n.CalendarView.Day)}),a._uU(36,"\n            Day\n          "),a.qZA(),a._uU(37,"\n        "),a.qZA(),a._uU(38,"\n      "),a.qZA(),a._uU(39,"\n    "),a.qZA(),a._uU(40,"\n    "),a._UZ(41,"br"),a._uU(42,"\n  ")),2&e&&(a.xp6(7),a.Q6J("view",n.view)("viewDate",n.viewDate),a.xp6(3),a.Q6J("viewDate",n.viewDate),a.xp6(3),a.Q6J("view",n.view)("viewDate",n.viewDate),a.xp6(8),a.Oqu(a.Dn7(22,12,n.viewDate,n.view+"ViewTitle",n.locale)),a.xp6(8),a.ekj("active",n.view===n.CalendarView.Month),a.xp6(3),a.ekj("active",n.view===n.CalendarView.Week),a.xp6(3),a.ekj("active",n.view===n.CalendarView.Day))},directives:[w.O,v.i,c.T],pipes:[u.J],encapsulation:2})},57671:function(e,n,t){t.d(n,{S:function(){return c}});var a=t(38583),i=t(93092),w=t(95008),v=t(37716);class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=v.oAB({type:c}),c.\u0275inj=v.cJS({imports:[[a.ez,i.u5,w._8]]})}}]);