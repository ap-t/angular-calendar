"use strict";(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[4245],{4245:function(e,a,l){l.r(a),l.d(a,{DemoModule:function(){return f}});var t=l(38583),o=l(89328),r=l(95008),i=l(90008),c=l(57671),n=l(4606),d=l(55155),w=l(37716),h=l(78767),v=l(9072),s=l(59687),p=l(50811);function m(e,a){if(1&e&&(w.TgZ(0,"mwl-calendar-month-view",4),w._uU(1,"\n  "),w.qZA()),2&e){const e=w.oxw();w.Q6J("viewDate",e.viewDate)("events",e.events)("activeDayIsOpen",!0)}}function g(e,a){if(1&e&&(w.TgZ(0,"mwl-calendar-week-view",5),w._uU(1,"\n  "),w.qZA()),2&e){const e=w.oxw();w.Q6J("viewDate",e.viewDate)("events",e.events)}}function b(e,a){if(1&e&&(w.TgZ(0,"mwl-calendar-day-view",5),w._uU(1,"\n  "),w.qZA()),2&e){const e=w.oxw();w.Q6J("viewDate",e.viewDate)("events",e.events)}}class u{constructor(e){this.document=e,this.view=n.w.Month,this.viewDate=new Date,this.events=[{title:"An event",start:new Date,color:d.O.red}],this.darkThemeClass="dark-theme"}ngOnInit(){this.document.body.classList.add(this.darkThemeClass)}ngOnDestroy(){this.document.body.classList.remove(this.darkThemeClass)}}u.\u0275fac=function(e){return new(e||u)(w.Y36(t.K0))},u.\u0275cmp=w.Xpm({type:u,selectors:[["mwl-demo-component"]],decls:12,vars:6,consts:[[3,"view","viewDate","viewChange","viewDateChange"],[3,"ngSwitch"],[3,"viewDate","events","activeDayIsOpen",4,"ngSwitchCase"],[3,"viewDate","events",4,"ngSwitchCase"],[3,"viewDate","events","activeDayIsOpen"],[3,"viewDate","events"]],template:function(e,a){1&e&&(w.TgZ(0,"mwl-demo-utils-calendar-header",0),w.NdJ("viewChange",function(e){return a.view=e})("viewDateChange",function(e){return a.viewDate=e}),w._uU(1,"\n"),w.qZA(),w._uU(2,"\n\n"),w.TgZ(3,"div",1),w._uU(4,"\n  "),w.YNc(5,m,2,3,"mwl-calendar-month-view",2),w._uU(6,"\n  "),w.YNc(7,g,2,2,"mwl-calendar-week-view",3),w._uU(8,"\n  "),w.YNc(9,b,2,2,"mwl-calendar-day-view",3),w._uU(10,"\n"),w.qZA(),w._uU(11,"\n")),2&e&&(w.Q6J("view",a.view)("viewDate",a.viewDate),w.xp6(3),w.Q6J("ngSwitch",a.view),w.xp6(2),w.Q6J("ngSwitchCase","month"),w.xp6(2),w.Q6J("ngSwitchCase","week"),w.xp6(2),w.Q6J("ngSwitchCase","day"))},directives:[h.$,t.RF,t.n9,v.G,s.T,p.S],styles:['@charset "UTF-8";.cal-month-view .cal-header{text-align:center;font-weight:bolder}.cal-month-view .cal-header .cal-cell{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view .cal-days{border:1px solid;border-bottom:0}.cal-month-view .cal-cell-top{min-height:78px;flex:1}.cal-month-view .cal-cell-row{display:flex}.cal-month-view .cal-cell{float:left;flex:1;display:flex;flex-direction:column;align-items:stretch}.cal-month-view .cal-cell .cal-event{pointer-events:all!important}.cal-month-view .cal-day-cell{min-height:100px}@media all and (-ms-high-contrast: none){.cal-month-view .cal-day-cell{display:block}}.cal-month-view .cal-day-cell:not(:last-child){border-right:1px solid}[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child){border-right:0;border-right:initial;border-left:1px solid}.cal-month-view .cal-days .cal-cell-row{border-bottom:1px solid}.cal-month-view .cal-day-badge{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px}.cal-month-view .cal-day-number{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view .cal-events{flex:1;align-items:flex-end;margin:3px;line-height:10px;display:flex;flex-wrap:wrap}.cal-month-view .cal-event{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px}.cal-month-view .cal-day-cell.cal-in-month.cal-has-events{cursor:pointer}.cal-month-view .cal-day-cell.cal-out-month .cal-day-number{opacity:.1;cursor:default}.cal-month-view .cal-day-cell.cal-today .cal-day-number{font-size:1.9em}.cal-month-view .cal-open-day-events{padding:15px}.cal-month-view .cal-open-day-events .cal-event{position:relative;top:2px}.cal-month-view .cal-out-month .cal-day-badge,.cal-month-view .cal-out-month .cal-event{opacity:.3}.cal-month-view .cal-draggable{cursor:move}.cal-month-view .cal-drag-active *{pointer-events:none}.cal-month-view .cal-event-title{cursor:pointer}.cal-month-view .cal-event-title:hover{text-decoration:underline}.cal-month-view{background-color:#fff}.cal-month-view .cal-cell-row:hover{background-color:#fafafa}.cal-month-view .cal-cell-row .cal-cell:hover,.cal-month-view .cal-cell.cal-has-events.cal-open{background-color:#ededed}.cal-month-view .cal-days{border-color:#e1e1e1}.cal-month-view .cal-day-cell:not(:last-child){border-right-color:#e1e1e1}[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child){border-right-color:currentColor;border-right-color:initial;border-left-color:#e1e1e1}.cal-month-view .cal-days .cal-cell-row{border-bottom-color:#e1e1e1}.cal-month-view .cal-day-badge{background-color:#b94a48;color:#fff}.cal-month-view .cal-event{background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#8b0000}.cal-month-view .cal-day-cell.cal-today{background-color:#e8fde7}.cal-month-view .cal-day-cell.cal-drag-over{background-color:#e0e0e0!important}.cal-month-view .cal-open-day-events{color:#fff;background-color:#555;box-shadow:inset 0 0 15px rgba(0,0,0,.502)}.cal-week-view *{box-sizing:border-box}.cal-week-view .cal-day-headers{display:flex;padding-left:70px;border:1px solid}[dir=rtl] .cal-week-view .cal-day-headers{padding-left:initial;padding-right:70px}.cal-week-view .cal-day-headers .cal-header{flex:1;text-align:center;padding:5px}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:1px solid}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:0;border-right:initial;border-left:1px solid}.cal-week-view .cal-day-headers .cal-header:first-child{border-left:1px solid}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child{border-left:0;border-left:initial;border-right:1px solid}.cal-week-view .cal-day-headers span{font-weight:400;opacity:.5}.cal-week-view .cal-day-column{flex-grow:1;border-left:solid 1px}[dir=rtl] .cal-week-view .cal-day-column{border-left:0;border-left:initial;border-right:solid 1px}.cal-week-view .cal-event{font-size:12px;border:1px solid;direction:ltr}.cal-week-view .cal-time-label-column{width:70px;height:100%}.cal-week-view .cal-current-time-marker{position:absolute;width:100%;height:2px;z-index:2}.cal-week-view .cal-all-day-events{border:solid 1px;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view .cal-all-day-events .cal-day-columns{height:100%;width:100%;display:flex;position:absolute;top:0;z-index:0}.cal-week-view .cal-all-day-events .cal-events-row{position:relative;height:31px;margin-left:70px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-events-row{margin-left:initial;margin-right:70px}.cal-week-view .cal-all-day-events .cal-event-container{display:inline-block;position:absolute}.cal-week-view .cal-all-day-events .cal-event-container.resize-active{z-index:1;pointer-events:none}.cal-week-view .cal-all-day-events .cal-event{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:5px;border-bottom-left-radius:5px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:initial;border-bottom-left-radius:initial;border-top-right-radius:5px!important;border-bottom-right-radius:5px!important}.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-top-right-radius:5px;border-bottom-right-radius:5px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-radius:5px initial initial 5px}.cal-week-view .cal-all-day-events .cal-time-label-column{display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view .cal-all-day-events .cal-resize-handle{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:0}[dir=rtl] .cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:auto;right:initial;left:0}.cal-week-view .cal-event,.cal-week-view .cal-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view .cal-drag-active{pointer-events:none;z-index:1}.cal-week-view .cal-drag-active *{pointer-events:none}.cal-week-view .cal-time-events{position:relative;border:solid 1px;border-top:0;display:flex}.cal-week-view .cal-time-events .cal-day-columns{display:flex;flex-grow:1}.cal-week-view .cal-time-events .cal-day-column{position:relative}.cal-week-view .cal-time-events .cal-events-container{position:relative}.cal-week-view .cal-time-events .cal-event-container{position:absolute;z-index:1}.cal-week-view .cal-time-events .cal-event{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view .cal-time-events .cal-resize-handle{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end{bottom:0}.cal-week-view .cal-hour-segment{position:relative}.cal-week-view .cal-hour-segment:after{content:"\\a0"}.cal-week-view .cal-event-container:not(.cal-draggable){cursor:pointer}.cal-week-view .cal-draggable{cursor:move}.cal-week-view mwl-calendar-week-view-hour-segment,.cal-week-view .cal-hour-segment{display:block}.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment{border-bottom:thin dashed}.cal-week-view .cal-time{font-weight:bold;padding-top:5px;width:70px;text-align:center}.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time{display:none}.cal-week-view .cal-starts-within-day .cal-event{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view .cal-ends-within-day .cal-event{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view{background-color:#fff;border-top:solid 1px #e1e1e1}.cal-week-view .cal-day-headers{border-color:#e1e1e1;border-top:0}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:currentColor;border-right-color:initial;border-left:solid 1px #e1e1e1!important}.cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:currentColor;border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-header:hover,.cal-week-view .cal-day-headers .cal-drag-over{background-color:#ededed}.cal-week-view .cal-day-column{border-left-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-column{border-left-color:currentColor;border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view .cal-event{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view .cal-all-day-events{border-color:#e1e1e1}.cal-week-view .cal-header.cal-today{background-color:#e8fde7}.cal-week-view .cal-header.cal-weekend span{color:#8b0000}.cal-week-view .cal-time-events{border-color:#e1e1e1}.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover{background-color:#ededed}.cal-week-view .cal-hour-odd{background-color:#fafafa}.cal-week-view .cal-drag-over .cal-hour-segment{background-color:#ededed}.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment{border-bottom-color:#e1e1e1}.cal-week-view .cal-current-time-marker{background-color:#ea4334}.cal-day-view mwl-calendar-week-view-header{display:none}.cal-day-view .cal-events-container{margin-left:70px}[dir=rtl] .cal-day-view .cal-events-container{margin-left:initial;margin-right:70px}.cal-day-view .cal-day-column{border-left:0}.cal-day-view .cal-current-time-marker{margin-left:70px;width:calc(100% - 70px)}[dir=rtl] .cal-day-view .cal-current-time-marker{margin-left:initial;margin-right:70px}.cal-tooltip{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:normal;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left{padding:0 5px;margin-left:-3px}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px}.cal-tooltip-inner{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem}.cal-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{border-top-color:#000}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{border-left-color:#000}.cal-tooltip-inner{color:#fff;background-color:#000}.dark-theme{background-color:#1f262d;color:#d5d6d7}.dark-theme .cal-month-view{background-color:#1f262d}.dark-theme .cal-month-view .cal-cell-row:hover{background-color:#394046}.dark-theme .cal-month-view .cal-cell-row .cal-cell:hover,.dark-theme .cal-month-view .cal-cell.cal-has-events.cal-open{background-color:#2c343a}.dark-theme .cal-month-view .cal-days{border-color:rgba(0,0,0,.6)}.dark-theme .cal-month-view .cal-day-cell:not(:last-child){border-right-color:rgba(0,0,0,.6)}[dir=rtl] .dark-theme .cal-month-view .cal-day-cell:not(:last-child){border-right-color:currentColor;border-right-color:initial;border-left-color:rgba(0,0,0,.6)}.dark-theme .cal-month-view .cal-days .cal-cell-row{border-bottom-color:rgba(0,0,0,.6)}.dark-theme .cal-month-view .cal-day-badge{background-color:#b94a48;color:#fff}.dark-theme .cal-month-view .cal-event{background-color:#394046;border-color:#d1e8ff;color:#fff}.dark-theme .cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#cd5c5c}.dark-theme .cal-month-view .cal-day-cell.cal-today{background-color:#394046}.dark-theme .cal-month-view .cal-day-cell.cal-drag-over{background-color:#21272c!important}.dark-theme .cal-month-view .cal-open-day-events{color:#fff;background-color:#394046;box-shadow:inset 0 0 15px rgba(0,0,0,.502)}.dark-theme .cal-week-view{background-color:#1f262d;border-top:solid 1px rgba(0,0,0,.6)}.dark-theme .cal-week-view .cal-day-headers{border-color:rgba(0,0,0,.6);border-top:0}.dark-theme .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:rgba(0,0,0,.6)}[dir=rtl] .dark-theme .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:currentColor;border-right-color:initial;border-left:solid 1px rgba(0,0,0,.6)!important}.dark-theme .cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:rgba(0,0,0,.6)}[dir=rtl] .dark-theme .cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:currentColor;border-left-color:initial;border-right-color:rgba(0,0,0,.6)}.dark-theme .cal-week-view .cal-day-headers .cal-header:hover,.dark-theme .cal-week-view .cal-day-headers .cal-drag-over{background-color:#2c343a}.dark-theme .cal-week-view .cal-day-column{border-left-color:rgba(0,0,0,.6)}[dir=rtl] .dark-theme .cal-week-view .cal-day-column{border-left-color:currentColor;border-left-color:initial;border-right-color:rgba(0,0,0,.6)}.dark-theme .cal-week-view .cal-event{background-color:#d1e8ff;border-color:#394046;color:#394046}.dark-theme .cal-week-view .cal-all-day-events{border-color:rgba(0,0,0,.6)}.dark-theme .cal-week-view .cal-header.cal-today{background-color:#394046}.dark-theme .cal-week-view .cal-header.cal-weekend span{color:#cd5c5c}.dark-theme .cal-week-view .cal-time-events{border-color:rgba(0,0,0,.6)}.dark-theme .cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover{background-color:#2c343a}.dark-theme .cal-week-view .cal-hour-odd{background-color:#394046}.dark-theme .cal-week-view .cal-drag-over .cal-hour-segment{background-color:#2c343a}.dark-theme .cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,.dark-theme .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment{border-bottom-color:rgba(0,0,0,.6)}.dark-theme .cal-week-view .cal-current-time-marker{background-color:#ea4334}.dark-theme .cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{border-top-color:#000}.dark-theme .cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{border-right-color:#000}.dark-theme .cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{border-bottom-color:#000}.dark-theme .cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{border-left-color:#000}.dark-theme .cal-tooltip-inner{color:#fff;background-color:#000}.dark-theme .cal-month-view .cal-day-cell.cal-out-month .cal-day-number{opacity:.15}.dark-theme .card{border-color:rgba(0,0,0,.6)}.dark-theme .card-header{background-color:#394046}.dark-theme .card-body{background-color:#1f262d}.dark-theme .nav-tabs{border-bottom-color:rgba(0,0,0,.6)}.dark-theme .nav-tabs .nav-link.active{background-color:#1f262d;color:#d5d6d7;border-color:rgba(0,0,0,.6)}.dark-theme .nav-tabs .nav-link:hover,.dark-theme .nav-tabs .nav-link:focus{border-color:rgba(0,0,0,.6)}\n'],encapsulation:2,changeDetection:0});var k=l(53976);class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=w.oAB({type:f}),f.\u0275inj=w.cJS({imports:[[t.ez,r._8.forRoot({provide:i._,useFactory:k.x}),c.S,o.Bz.forChild([{path:"",component:u}])]]})},78767:function(e,a,l){l.d(a,{$:function(){return d}});var t=l(37716),o=l(4606),r=l(31726),i=l(22167),c=l(60897),n=l(12153);class d{constructor(){this.locale="en",this.viewChange=new t.vpe,this.viewDateChange=new t.vpe,this.CalendarView=o.w}}d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["mwl-demo-utils-calendar-header"]],inputs:{view:"view",viewDate:"viewDate",locale:"locale"},outputs:{viewChange:"viewChange",viewDateChange:"viewDateChange"},decls:43,vars:16,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"]],template:function(e,a){1&e&&(t._uU(0,"\n    "),t.TgZ(1,"div",0),t._uU(2,"\n      "),t.TgZ(3,"div",1),t._uU(4,"\n        "),t.TgZ(5,"div",2),t._uU(6,"\n          "),t.TgZ(7,"div",3),t.NdJ("viewDateChange",function(e){return a.viewDate=e})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),t._uU(8,"\n            Previous\n          "),t.qZA(),t._uU(9,"\n          "),t.TgZ(10,"div",4),t.NdJ("viewDateChange",function(e){return a.viewDate=e})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),t._uU(11,"\n            Today\n          "),t.qZA(),t._uU(12,"\n          "),t.TgZ(13,"div",5),t.NdJ("viewDateChange",function(e){return a.viewDate=e})("viewDateChange",function(){return a.viewDateChange.next(a.viewDate)}),t._uU(14,"\n            Next\n          "),t.qZA(),t._uU(15,"\n        "),t.qZA(),t._uU(16,"\n      "),t.qZA(),t._uU(17,"\n      "),t.TgZ(18,"div",1),t._uU(19,"\n        "),t.TgZ(20,"h3"),t._uU(21),t.ALo(22,"calendarDate"),t.qZA(),t._uU(23,"\n      "),t.qZA(),t._uU(24,"\n      "),t.TgZ(25,"div",1),t._uU(26,"\n        "),t.TgZ(27,"div",2),t._uU(28,"\n          "),t.TgZ(29,"div",6),t.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Month)}),t._uU(30,"\n            Month\n          "),t.qZA(),t._uU(31,"\n          "),t.TgZ(32,"div",6),t.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Week)}),t._uU(33,"\n            Week\n          "),t.qZA(),t._uU(34,"\n          "),t.TgZ(35,"div",6),t.NdJ("click",function(){return a.viewChange.emit(a.CalendarView.Day)}),t._uU(36,"\n            Day\n          "),t.qZA(),t._uU(37,"\n        "),t.qZA(),t._uU(38,"\n      "),t.qZA(),t._uU(39,"\n    "),t.qZA(),t._uU(40,"\n    "),t._UZ(41,"br"),t._uU(42,"\n  ")),2&e&&(t.xp6(7),t.Q6J("view",a.view)("viewDate",a.viewDate),t.xp6(3),t.Q6J("viewDate",a.viewDate),t.xp6(3),t.Q6J("view",a.view)("viewDate",a.viewDate),t.xp6(8),t.Oqu(t.Dn7(22,12,a.viewDate,a.view+"ViewTitle",a.locale)),t.xp6(8),t.ekj("active",a.view===a.CalendarView.Month),t.xp6(3),t.ekj("active",a.view===a.CalendarView.Week),t.xp6(3),t.ekj("active",a.view===a.CalendarView.Day))},directives:[r.O,i.i,c.T],pipes:[n.J],encapsulation:2})},57671:function(e,a,l){l.d(a,{S:function(){return c}});var t=l(38583),o=l(93092),r=l(95008),i=l(37716);class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=i.oAB({type:c}),c.\u0275inj=i.cJS({imports:[[t.ez,o.u5,r._8]]})}}]);