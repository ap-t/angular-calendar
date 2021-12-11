"use strict";(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[1659],{57671:function(e,n,t){t.d(n,{S:function(){return u}});var a=t(38583),i=t(93092),w=t(95008),c=t(37716);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=c.oAB({type:u}),u.\u0275inj=c.cJS({imports:[[a.ez,i.u5,w._8]]})},21659:function(e,n,t){t.r(n),t.d(n,{DemoModule:function(){return C}});var a=t(38583),i=t(89328),w=t(95008),c=t(90008),u=t(57671),v=t(4606),s=t(90104),r=t(55155),d=t(37716),l=t(31726),o=t(22167),D=t(60897),_=t(9072),U=t(59687),g=t(50811),h=t(12153);function x(e,n){if(1&e&&(d.TgZ(0,"mwl-calendar-month-view",11),d._uU(1,"\n  "),d.qZA()),2&e){const e=d.oxw();d.Q6J("viewDate",e.viewDate)("events",e.events)("excludeDays",e.excludeDays)}}function y(e,n){if(1&e&&(d.TgZ(0,"mwl-calendar-week-view",12),d._uU(1,"\n  "),d.qZA()),2&e){const e=d.oxw();d.Q6J("excludeDays",e.excludeDays)("viewDate",e.viewDate)("events",e.events)}}function Z(e,n){if(1&e&&(d.TgZ(0,"mwl-calendar-day-view",13),d._uU(1,"\n  "),d.qZA()),2&e){const e=d.oxw();d.Q6J("viewDate",e.viewDate)("events",e.events)}}const p=function(e,n,t,a){return[e,n,"en",t,a]};class m{constructor(){this.view=v.w.Month,this.viewDate=new Date("2016-01-05"),this.events=[{start:new Date("2016-01-08"),end:new Date("2016-01-10"),title:"One day excluded event",color:r.O.red,allDay:!0},{start:new Date("2016-01-01"),end:new Date("2016-01-09"),title:"Multiple weeks event",allDay:!0}],this.excludeDays=[0,6],this.weekStartsOn=s.sb.SUNDAY,this.CalendarView=v.w}}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=d.Xpm({type:m,selectors:[["mwl-demo-component"]],decls:51,vars:29,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","excludeDays","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","excludeDays","viewDateChange"],[1,"btn","btn-primary",3,"click"],[3,"ngSwitch"],[3,"viewDate","events","excludeDays",4,"ngSwitchCase"],[3,"excludeDays","viewDate","events",4,"ngSwitchCase"],[3,"viewDate","events",4,"ngSwitchCase"],[3,"viewDate","events","excludeDays"],[3,"excludeDays","viewDate","events"],[3,"viewDate","events"]],template:function(e,n){1&e&&(d.TgZ(0,"div",0),d._uU(1,"\n  "),d.TgZ(2,"div",1),d._uU(3,"\n    "),d.TgZ(4,"div",2),d._uU(5,"\n      "),d.TgZ(6,"div",3),d.NdJ("viewDateChange",function(e){return n.viewDate=e}),d._uU(7,"\n        Previous\n      "),d.qZA(),d._uU(8,"\n      "),d.TgZ(9,"div",4),d.NdJ("viewDateChange",function(e){return n.viewDate=e}),d._uU(10,"\n        Today\n      "),d.qZA(),d._uU(11,"\n      "),d.TgZ(12,"div",5),d.NdJ("viewDateChange",function(e){return n.viewDate=e}),d._uU(13,"\n        Next\n      "),d.qZA(),d._uU(14,"\n    "),d.qZA(),d._uU(15,"\n  "),d.qZA(),d._uU(16,"\n  "),d.TgZ(17,"div",1),d._uU(18,"\n    "),d.TgZ(19,"h3"),d._uU(20),d.ALo(21,"calendarDate"),d.qZA(),d._uU(22,"\n  "),d.qZA(),d._uU(23,"\n  "),d.TgZ(24,"div",1),d._uU(25,"\n    "),d.TgZ(26,"div",2),d._uU(27,"\n      "),d.TgZ(28,"div",6),d.NdJ("click",function(){return n.view=n.CalendarView.Month}),d._uU(29,"\n        Month\n      "),d.qZA(),d._uU(30,"\n      "),d.TgZ(31,"div",6),d.NdJ("click",function(){return n.view=n.CalendarView.Week}),d._uU(32,"\n        Week\n      "),d.qZA(),d._uU(33,"\n      "),d.TgZ(34,"div",6),d.NdJ("click",function(){return n.view=n.CalendarView.Day}),d._uU(35,"\n        Day\n      "),d.qZA(),d._uU(36,"\n    "),d.qZA(),d._uU(37,"\n  "),d.qZA(),d._uU(38,"\n"),d.qZA(),d._uU(39,"\n"),d._UZ(40,"br"),d._uU(41,"\n\n"),d.TgZ(42,"div",7),d._uU(43,"\n  "),d.YNc(44,x,2,3,"mwl-calendar-month-view",8),d._uU(45,"\n  "),d.YNc(46,y,2,3,"mwl-calendar-week-view",9),d._uU(47,"\n  "),d.YNc(48,Z,2,2,"mwl-calendar-day-view",10),d._uU(49,"\n"),d.qZA(),d._uU(50,"\n")),2&e&&(d.xp6(6),d.Q6J("view",n.view)("viewDate",n.viewDate)("excludeDays",n.excludeDays),d.xp6(3),d.Q6J("viewDate",n.viewDate),d.xp6(3),d.Q6J("view",n.view)("viewDate",n.viewDate)("excludeDays",n.excludeDays),d.xp6(8),d.hij("\n      ",d.G7q(21,18,d.l5B(24,p,n.viewDate,n.view+"ViewTitle",n.weekStartsOn,n.excludeDays)),"\n    "),d.xp6(8),d.ekj("active","month"===n.view),d.xp6(3),d.ekj("active","week"===n.view),d.xp6(3),d.ekj("active","day"===n.view),d.xp6(8),d.Q6J("ngSwitch",n.view),d.xp6(2),d.Q6J("ngSwitchCase","month"),d.xp6(2),d.Q6J("ngSwitchCase","week"),d.xp6(2),d.Q6J("ngSwitchCase","day"))},directives:[l.O,o.i,D.T,a.RF,a.n9,_.G,U.T,g.S],pipes:[h.J],encapsulation:2,changeDetection:0});var f=t(53976);class C{}C.\u0275fac=function(e){return new(e||C)},C.\u0275mod=d.oAB({type:C}),C.\u0275inj=d.cJS({imports:[[a.ez,w._8.forRoot({provide:c._,useFactory:f.x}),u.S,i.Bz.forChild([{path:"",component:m}])]]})}}]);