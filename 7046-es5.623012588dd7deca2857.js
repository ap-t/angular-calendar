!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[7046],{7046:function(t,a,l){l.r(a),l.d(a,{DemoModule:function(){return ie}});var d=l(38583),u=l(89328),g=l(95008),v=l(90008),p=l(53976),m=l(57671),f=l(55155),h=l(64465),w=l(43257),y=l(37716),D=l(31726),T=l(22167),b=l(60897),k=l(27579),E=l(59687),C=l(33878),x=(l(90104),l(24453)),A=l(61862),_=l(20923),U=l(6513),S=l(19793),z=l(81567);function O(e,t){if(1&e&&(y.TgZ(0,"div",9),y._uU(1,"\n      "),y.TgZ(2,"b"),y._uU(3),y.qZA(),y._uU(4,"\n    "),y.qZA()),2&e){var n=t.$implicit;y.xp6(3),y.Oqu(n.name)}}function Z(e,t){if(1&e){var n=y.EpF();y.TgZ(0,"div",15),y.NdJ("drop",function(e){var t=y.CHM(n).$implicit;return y.oxw(2).eventDropped(e,t.date,!0)})("dragEnter",function(){var e=y.CHM(n).$implicit;return y.oxw(2).dateDragEnter(e.date)}),y.qZA()}}var B=function(e,t){return{event:e,calendarId:t}},F=function(e,t){return{x:e,y:t}},H=function(e){return{x:e}},J=function(){return{}};function M(e,t){if(1&e){var n=y.EpF();y.TgZ(0,"div",19,20),y.NdJ("dragStart",function(){var e=y.CHM(n).$implicit,t=y.MAs(1);y.oxw();var a=y.MAs(1);return y.oxw(2).dragStarted(a,t,e,!1)})("dragging",function(){return y.CHM(n),y.oxw(3).allDayEventDragMove()})("dragEnd",function(e){var t=y.CHM(n).$implicit,a=y.oxw(3);return a.dragEnded(t,e,a.dayColumnWidth)}),y._uU(2,"\n        "),y.TgZ(3,"mwl-calendar-week-view-event",21),y.NdJ("eventClicked",function(e){var t=y.CHM(n).$implicit;return y.oxw(3).eventClicked.emit({event:t.event,sourceEvent:e.sourceEvent})}),y._uU(4,"\n        "),y.qZA(),y._uU(5,"\n      "),y.qZA()}if(2&e){var a=t.$implicit,r=y.oxw(3);y.Udp("width",100/r.users.length*a.span,"%")("margin-left",100/r.users.length*a.offset,"%"),y.ekj("cal-draggable",a.event.draggable&&0===r.allDayEventResizes.size)("cal-starts-within-week",!a.startsBeforeWeek)("cal-ends-within-week",!a.endsAfterWeek),y.Q6J("ngClass",null==a.event?null:a.event.cssClass)("dropData",y.WLB(25,B,a.event,r.calendarId))("dragAxis",y.WLB(28,F,a.event.draggable&&0===r.allDayEventResizes.size,!r.snapDraggedEvents&&a.event.draggable&&0===r.allDayEventResizes.size))("dragSnapGrid",r.snapDraggedEvents?y.VKq(31,H,r.dayColumnWidth):y.DdM(33,J))("validateDrag",r.validateDrag),y.xp6(3),y.Q6J("locale",r.locale)("weekEvent",a)("tooltipPlacement",r.tooltipPlacement)("tooltipTemplate",r.tooltipTemplate)("tooltipAppendToBody",r.tooltipAppendToBody)("tooltipDelay",r.tooltipDelay)("customTemplate",r.eventTemplate)("eventTitleTemplate",r.eventTitleTemplate)("eventActionsTemplate",r.eventActionsTemplate)("daysInWeek",r.daysInWeek)}}function R(e,t){if(1&e&&(y.TgZ(0,"div",16,17),y._uU(2,"\n      "),y.YNc(3,M,6,34,"div",18),y._uU(4,"\n    "),y.qZA()),2&e){var n=t.$implicit,a=y.oxw(2);y.xp6(3),y.Q6J("ngForOf",n.row)("ngForTrackBy",a.trackByWeekAllDayEvent)}}function j(e,t){if(1&e){var n=y.EpF();y.TgZ(0,"div",10,11),y.NdJ("dragEnter",function(){return y.CHM(n),y.oxw().dragEnter("allDay")})("dragLeave",function(){return y.CHM(n),y.oxw().dragLeave("allDay")}),y._uU(2,"\n    "),y.TgZ(3,"div",6),y._uU(4,"\n      "),y._UZ(5,"div",12),y._uU(6,"\n      "),y.YNc(7,Z,1,0,"div",13),y._uU(8,"\n    "),y.qZA(),y._uU(9,"\n    "),y.YNc(10,R,5,2,"div",14),y._uU(11,"\n  "),y.qZA()}if(2&e){var a=y.oxw();y.xp6(5),y.Q6J("ngTemplateOutlet",a.allDayEventsLabelTemplate),y.xp6(2),y.Q6J("ngForOf",a.days)("ngForTrackBy",a.trackByWeekDayHeaderDate),y.xp6(3),y.Q6J("ngForOf",a.view.allDayEventRows)("ngForTrackBy",a.trackById)}}function q(e,t){if(1&e&&(y.TgZ(0,"mwl-calendar-week-view-hour-segment",26),y._uU(1,"\n        "),y.qZA()),2&e){var n=t.$implicit,a=y.oxw(3);y.Udp("height",a.hourSegmentHeight,"px"),y.Q6J("segment",n)("segmentHeight",a.hourSegmentHeight)("locale",a.locale)("customTemplate",a.hourSegmentTemplate)("isTimeLabel",!0)}}function N(e,t){if(1&e&&(y.TgZ(0,"div",24),y._uU(1,"\n        "),y.YNc(2,q,2,7,"mwl-calendar-week-view-hour-segment",25),y._uU(3,"\n      "),y.qZA()),2&e){var n=t.$implicit,a=t.odd,r=y.oxw(2);y.ekj("cal-hour-odd",a),y.xp6(2),y.Q6J("ngForOf",n.segments)("ngForTrackBy",r.trackByHourSegment)}}function W(e,t){if(1&e&&(y.TgZ(0,"div",22),y._uU(1,"\n      "),y.YNc(2,N,4,4,"div",23),y._uU(3,"\n    "),y.qZA()),2&e){var n=y.oxw();y.xp6(2),y.Q6J("ngForOf",n.view.hourColumns[0].hours)("ngForTrackBy",n.trackByHour)}}var Q=function(){return{left:!0,top:!0}};function $(e,t){1&e&&y._UZ(0,"div",34),2&e&&y.Q6J("resizeEdges",y.DdM(1,Q))}var I=function(){return{right:!0,bottom:!0}};function L(e,t){1&e&&y._UZ(0,"div",35),2&e&&y.Q6J("resizeEdges",y.DdM(1,I))}var Y=function(e,t,n,a){return{left:e,right:t,top:n,bottom:a}};function P(e,t){if(1&e){var n=y.EpF();y.TgZ(0,"div",30,20),y.NdJ("resizeStart",function(e){var t=y.CHM(n).$implicit,a=y.oxw(2),r=y.MAs(14);return a.timeEventResizeStarted(r,t,e)})("resizing",function(e){var t=y.CHM(n).$implicit;return y.oxw(2).timeEventResizing(t,e)})("resizeEnd",function(){var e=y.CHM(n).$implicit;return y.oxw(2).timeEventResizeEnded(e)})("dragStart",function(){var e=y.CHM(n).$implicit,t=y.MAs(1),a=y.oxw(2),r=y.MAs(14);return a.dragStarted(r,t,e,!0)})("dragging",function(e){var t=y.CHM(n).$implicit;return y.oxw(2).dragMove(t,e)})("dragEnd",function(e){var t=y.CHM(n).$implicit,a=y.oxw(2);return a.dragEnded(t,e,a.dayColumnWidth,!0)}),y._uU(2,"\n          "),y.YNc(3,$,1,2,"div",31),y._uU(4,"\n          "),y.TgZ(5,"mwl-calendar-week-view-event",32),y.NdJ("eventClicked",function(e){var t=y.CHM(n).$implicit;return y.oxw(2).eventClicked.emit({event:t.event,sourceEvent:e.sourceEvent})}),y._uU(6,"\n          "),y.qZA(),y._uU(7,"\n          "),y.YNc(8,L,1,2,"div",33),y._uU(9,"\n        "),y.qZA()}if(2&e){var a=t.$implicit,r=y.oxw().$implicit,i=y.oxw();y.Udp("top",a.top,"px")("height",a.height,"px")("left",a.left,"%")("width",a.width,"%"),y.ekj("cal-draggable",a.event.draggable&&0===i.timeEventResizes.size)("cal-starts-within-day",!a.startsBeforeDay)("cal-ends-within-day",!a.endsAfterDay),y.Q6J("ngClass",a.event.cssClass)("hidden",0===a.height&&0===a.width)("resizeSnapGrid",y.l5B(37,Y,i.dayColumnWidth,i.dayColumnWidth,i.eventSnapSize||i.hourSegmentHeight,i.eventSnapSize||i.hourSegmentHeight))("validateResize",i.validateResize)("allowNegativeResizes",!0)("dropData",y.WLB(42,B,a.event,i.calendarId))("dragAxis",y.WLB(45,F,a.event.draggable&&0===i.timeEventResizes.size,a.event.draggable&&0===i.timeEventResizes.size))("dragSnapGrid",i.snapDraggedEvents?y.WLB(48,F,i.dayColumnWidth,i.eventSnapSize||i.hourSegmentHeight):y.DdM(51,J))("ghostDragEnabled",!i.snapDraggedEvents)("validateDrag",i.validateDrag),y.xp6(3),y.Q6J("ngIf",(null==a.event||null==a.event.resizable?null:a.event.resizable.beforeStart)&&!a.startsBeforeDay),y.xp6(2),y.Q6J("locale",i.locale)("weekEvent",a)("tooltipPlacement",i.tooltipPlacement)("tooltipTemplate",i.tooltipTemplate)("tooltipAppendToBody",i.tooltipAppendToBody)("tooltipDisabled",i.dragActive||i.timeEventResizes.size>0)("tooltipDelay",i.tooltipDelay)("customTemplate",i.eventTemplate)("eventTitleTemplate",i.eventTitleTemplate)("eventActionsTemplate",i.eventActionsTemplate)("column",r),y.xp6(3),y.Q6J("ngIf",(null==a.event||null==a.event.resizable?null:a.event.resizable.afterEnd)&&!a.endsAfterDay)}}function G(e,t){if(1&e){var n=y.EpF();y.TgZ(0,"mwl-calendar-week-view-hour-segment",37),y.NdJ("mwlClick",function(e){var t=y.CHM(n).$implicit;return y.oxw(3).hourSegmentClicked.emit({date:t.date,sourceEvent:e})})("drop",function(e){var t=y.CHM(n).$implicit;return y.oxw(3).eventDropped(e,t.date,!1)}),y._uU(1,"\n          "),y.qZA()}if(2&e){var a=t.$implicit,r=y.oxw(3);y.Udp("height",r.hourSegmentHeight,"px"),y.Q6J("segment",a)("segmentHeight",r.hourSegmentHeight)("locale",r.locale)("customTemplate",r.hourSegmentTemplate)("clickListenerDisabled",0===r.hourSegmentClicked.observers.length)("dragOverClass",r.dragActive&&r.snapDraggedEvents?null:"cal-drag-over")}}function V(e,t){if(1&e&&(y.TgZ(0,"div",24),y._uU(1,"\n          "),y.YNc(2,G,2,8,"mwl-calendar-week-view-hour-segment",36),y._uU(3,"\n        "),y.qZA()),2&e){var n=t.$implicit,a=t.odd,r=y.oxw(2);y.ekj("cal-hour-odd",a),y.xp6(2),y.Q6J("ngForOf",n.segments)("ngForTrackBy",r.trackByHourSegment)}}function K(e,t){if(1&e&&(y.TgZ(0,"div",27),y._uU(1,"\n        "),y._UZ(2,"mwl-calendar-week-view-current-time-marker",28),y._uU(3,"\n        "),y.YNc(4,P,10,52,"div",29),y._uU(5,"\n\n        "),y.YNc(6,V,4,4,"div",23),y._uU(7,"\n      "),y.qZA()),2&e){var n=t.$implicit,a=y.oxw();y.xp6(2),y.Q6J("columnDate",n.date)("dayStartHour",a.dayStartHour)("dayStartMinute",a.dayStartMinute)("dayEndHour",a.dayEndHour)("dayEndMinute",a.dayEndMinute)("hourSegments",a.hourSegments)("hourSegmentHeight",a.hourSegmentHeight)("customTemplate",a.currentTimeMarkerTemplate),y.xp6(2),y.Q6J("ngForOf",n.events)("ngForTrackBy",a.trackByWeekTimeEvent),y.xp6(2),y.Q6J("ngForOf",n.hours)("ngForTrackBy",a.trackByHour)}}var X,ee=function(t){o(l,t);var a=s(l);function l(){return n(this,l),a.apply(this,arguments)}return r(l,[{key:"getWeekView",value:function(t){var n=this,a={period:i(c(l.prototype),"getWeekView",this).call(this,t).period,allDayEventRows:[],hourColumns:[],users:e(t.users)};return a.users.forEach(function(e,r){var o=t.events.filter(function(t){return t.meta.user.id===e.id}),s=i(c(l.prototype),"getWeekView",n).call(n,Object.assign(Object.assign({},t),{events:o}));a.hourColumns.push(s.hourColumns[0]),s.allDayEventRows.forEach(function(e,t){var n=e.row;a.allDayEventRows[t]=a.allDayEventRows[t]||{row:[]},a.allDayEventRows[t].row.push(Object.assign(Object.assign({},n[0]),{offset:r,span:1}))})}),a}}]),l}(k.y);ee.\u0275fac=function(e){return(X||(X=y.n5z(ee)))(e||ee)},ee.\u0275prov=y.Yz7({token:ee,factory:ee.\u0275fac});var te=function(e){o(a,e);var t=s(a);function a(e,r,i,o,l){var s;return n(this,a),(s=t.call(this,e,r,i,o,l)).cdr=e,s.utils=r,s.dateAdapter=o,s.element=l,s.users=[],s.userChanged=new y.vpe,s.daysInWeek=1,s.trackByUserId=function(e,t){return t.id},s}return r(a,[{key:"ngOnChanges",value:function(e){i(c(a.prototype),"ngOnChanges",this).call(this,e),e.users&&(this.refreshBody(),this.emitBeforeViewRender())}},{key:"getDayColumnWidth",value:function(e){return Math.floor(e.offsetWidth/this.users.length)}},{key:"dragMove",value:function(e,t){if(this.snapDraggedEvents){var n=this.getDraggedUserColumn(e,t.x),a=this.getDragMovedEventTimes(e,Object.assign(Object.assign({},t),{x:0}),this.dayColumnWidth,!0),r=e.event,i=Object.assign(Object.assign(Object.assign({},r),a),{meta:Object.assign(Object.assign({},r.meta),{user:n})}),o=this.events.map(function(e){return e===r?i:e});this.restoreOriginalEvents(o,new Map([[i,r]]))}this.dragAlreadyMoved=!0}},{key:"dragEnded",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];i(c(a.prototype),"dragEnded",this).call(this,e,Object.assign(Object.assign({},t),{x:0}),n,r);var o=this.getDraggedUserColumn(e,t.x);o&&o!==e.event.meta.user&&this.userChanged.emit({event:e.event,newUser:o})}},{key:"getWeekView",value:function(e){return this.utils.getWeekView(Object.assign({events:e,users:this.users,viewDate:this.viewDate,weekStartsOn:this.weekStartsOn,excluded:this.excludeDays,precision:this.precision,absolutePositionedEvents:!0,hourSegments:this.hourSegments,dayStart:{hour:this.dayStartHour,minute:this.dayStartMinute},dayEnd:{hour:this.dayEndHour,minute:this.dayEndMinute},segmentHeight:this.hourSegmentHeight,weekendDays:this.weekendDays},(0,C.rK)(this.dateAdapter,this.viewDate,this.weekStartsOn,this.excludeDays,this.daysInWeek)))}},{key:"getDraggedUserColumn",value:function(e,t){var n=Math.round(t/this.dayColumnWidth),a=this.view.users.findIndex(function(t){return t===e.event.meta.user})+n;return this.view.users[a]}}]),a}(E.T);te.\u0275fac=function(e){return new(e||te)(y.Y36(y.sBO),y.Y36(ee),y.Y36(y.soG),y.Y36(v._),y.Y36(y.SBq))},te.\u0275cmp=y.Xpm({type:te,selectors:[["mwl-day-view-scheduler"]],inputs:{users:"users"},outputs:{userChanged:"userChanged"},features:[y._Bn([ee]),y.qOj,y.TTD],decls:21,vars:8,consts:[["role","grid",1,"cal-week-view"],["role","row",1,"cal-day-headers"],["class","cal-header","tabindex","0","role","columnheader",4,"ngFor","ngForOf","ngForTrackBy"],["class","cal-all-day-events","mwlDroppable","",3,"dragEnter","dragLeave",4,"ngIf"],["mwlDroppable","",1,"cal-time-events",3,"dragEnter","dragLeave"],["class","cal-time-label-column",4,"ngIf"],[1,"cal-day-columns"],["dayColumns",""],["class","cal-day-column",4,"ngFor","ngForOf","ngForTrackBy"],["tabindex","0","role","columnheader",1,"cal-header"],["mwlDroppable","",1,"cal-all-day-events",3,"dragEnter","dragLeave"],["allDayEventsContainer",""],[1,"cal-time-label-column",3,"ngTemplateOutlet"],["class","cal-day-column","mwlDroppable","","dragOverClass","cal-drag-over",3,"drop","dragEnter",4,"ngFor","ngForOf","ngForTrackBy"],["class","cal-events-row",4,"ngFor","ngForOf","ngForTrackBy"],["mwlDroppable","","dragOverClass","cal-drag-over",1,"cal-day-column",3,"drop","dragEnter"],[1,"cal-events-row"],["eventRowContainer",""],["class","cal-event-container","mwlDraggable","","dragActiveClass","cal-drag-active",3,"cal-draggable","cal-starts-within-week","cal-ends-within-week","ngClass","width","marginLeft","dropData","dragAxis","dragSnapGrid","validateDrag","dragStart","dragging","dragEnd",4,"ngFor","ngForOf","ngForTrackBy"],["mwlDraggable","","dragActiveClass","cal-drag-active",1,"cal-event-container",3,"ngClass","dropData","dragAxis","dragSnapGrid","validateDrag","dragStart","dragging","dragEnd"],["event",""],[3,"locale","weekEvent","tooltipPlacement","tooltipTemplate","tooltipAppendToBody","tooltipDelay","customTemplate","eventTitleTemplate","eventActionsTemplate","daysInWeek","eventClicked"],[1,"cal-time-label-column"],["class","cal-hour",3,"cal-hour-odd",4,"ngFor","ngForOf","ngForTrackBy"],[1,"cal-hour"],[3,"height","segment","segmentHeight","locale","customTemplate","isTimeLabel",4,"ngFor","ngForOf","ngForTrackBy"],[3,"segment","segmentHeight","locale","customTemplate","isTimeLabel"],[1,"cal-day-column"],[3,"columnDate","dayStartHour","dayStartMinute","dayEndHour","dayEndMinute","hourSegments","hourSegmentHeight","customTemplate"],["class","cal-event-container","mwlResizable","","mwlDraggable","","dragActiveClass","cal-drag-active",3,"cal-draggable","cal-starts-within-day","cal-ends-within-day","ngClass","hidden","top","height","left","width","resizeSnapGrid","validateResize","allowNegativeResizes","dropData","dragAxis","dragSnapGrid","ghostDragEnabled","validateDrag","resizeStart","resizing","resizeEnd","dragStart","dragging","dragEnd",4,"ngFor","ngForOf","ngForTrackBy"],["mwlResizable","","mwlDraggable","","dragActiveClass","cal-drag-active",1,"cal-event-container",3,"ngClass","hidden","resizeSnapGrid","validateResize","allowNegativeResizes","dropData","dragAxis","dragSnapGrid","ghostDragEnabled","validateDrag","resizeStart","resizing","resizeEnd","dragStart","dragging","dragEnd"],["class","cal-resize-handle cal-resize-handle-before-start","mwlResizeHandle","",3,"resizeEdges",4,"ngIf"],[3,"locale","weekEvent","tooltipPlacement","tooltipTemplate","tooltipAppendToBody","tooltipDisabled","tooltipDelay","customTemplate","eventTitleTemplate","eventActionsTemplate","column","eventClicked"],["class","cal-resize-handle cal-resize-handle-after-end","mwlResizeHandle","",3,"resizeEdges",4,"ngIf"],["mwlResizeHandle","",1,"cal-resize-handle","cal-resize-handle-before-start",3,"resizeEdges"],["mwlResizeHandle","",1,"cal-resize-handle","cal-resize-handle-after-end",3,"resizeEdges"],["mwlDroppable","","dragActiveClass","cal-drag-active",3,"height","segment","segmentHeight","locale","customTemplate","clickListenerDisabled","dragOverClass","mwlClick","drop",4,"ngFor","ngForOf","ngForTrackBy"],["mwlDroppable","","dragActiveClass","cal-drag-active",3,"segment","segmentHeight","locale","customTemplate","clickListenerDisabled","dragOverClass","mwlClick","drop"]],template:function(e,t){1&e&&(y.TgZ(0,"div",0),y._uU(1,"\n  "),y.TgZ(2,"div",1),y._uU(3,"\n    "),y.YNc(4,O,5,1,"div",2),y._uU(5,"\n  "),y.qZA(),y._uU(6,"\n  "),y.YNc(7,j,12,5,"div",3),y._uU(8,"\n  "),y.TgZ(9,"div",4),y.NdJ("dragEnter",function(){return t.dragEnter("time")})("dragLeave",function(){return t.dragLeave("time")}),y._uU(10,"\n    "),y.YNc(11,W,4,2,"div",5),y._uU(12,"\n    "),y.TgZ(13,"div",6,7),y._uU(15,"\n      "),y.YNc(16,K,8,12,"div",8),y._uU(17,"\n    "),y.qZA(),y._uU(18,"\n  "),y.qZA(),y._uU(19,"\n"),y.qZA(),y._uU(20,"\n")),2&e&&(y.xp6(4),y.Q6J("ngForOf",t.users)("ngForTrackBy",t.trackByUserId),y.xp6(3),y.Q6J("ngIf",t.view.allDayEventRows.length>0),y.xp6(4),y.Q6J("ngIf",t.view.hourColumns.length>0),y.xp6(2),y.ekj("cal-resize-active",t.timeEventResizes.size>0),y.xp6(3),y.Q6J("ngForOf",t.view.hourColumns)("ngForTrackBy",t.trackByHourColumn))},directives:[d.sg,d.O5,x.D5,d.tP,x.pD,d.mk,A.C,_.N,U.e,S.E$,S.mC,z.P],encapsulation:2});var ne=l(12153),ae=[{id:0,name:"John smith",color:f.O.yellow},{id:1,name:"Jane Doe",color:f.O.blue}],re=function(){function t(){n(this,t),this.viewDate=new Date,this.users=ae,this.events=[{title:"An event",color:ae[0].color,start:(0,h.Z)((0,w.Z)(new Date),5),meta:{user:ae[0]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"Another event",color:ae[1].color,start:(0,h.Z)((0,w.Z)(new Date),2),meta:{user:ae[1]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"A 3rd event",color:ae[0].color,start:(0,h.Z)((0,w.Z)(new Date),7),meta:{user:ae[0]},resizable:{beforeStart:!0,afterEnd:!0},draggable:!0},{title:"An all day event",color:ae[0].color,start:new Date,meta:{user:ae[0]},draggable:!0,allDay:!0},{title:"Another all day event",color:ae[1].color,start:new Date,meta:{user:ae[1]},draggable:!0,allDay:!0},{title:"A 3rd all day event",color:ae[0].color,start:new Date,meta:{user:ae[0]},draggable:!0,allDay:!0}]}return r(t,[{key:"eventTimesChanged",value:function(t){var n=t.event,a=t.newStart,r=t.newEnd;n.start=a,n.end=r,this.events=e(this.events)}},{key:"userChanged",value:function(t){var n=t.event,a=t.newUser;n.color=a.color,n.meta.user=a,this.events=e(this.events)}}]),t}();re.\u0275fac=function(e){return new(e||re)},re.\u0275cmp=y.Xpm({type:re,selectors:[["mwl-demo-component"]],decls:30,vars:12,consts:[[1,"row"],[1,"col-md-6"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"col-md-6","text-right"],[3,"viewDate","events","users","eventTimesChanged","userChanged"]],template:function(e,t){1&e&&(y.TgZ(0,"div",0),y._uU(1,"\n  "),y.TgZ(2,"div",1),y._uU(3,"\n    "),y.TgZ(4,"div",2),y._uU(5,"\n      "),y.TgZ(6,"div",3),y.NdJ("viewDateChange",function(e){return t.viewDate=e}),y._uU(7,"\n        Previous\n      "),y.qZA(),y._uU(8,"\n      "),y.TgZ(9,"div",4),y.NdJ("viewDateChange",function(e){return t.viewDate=e}),y._uU(10,"\n        Today\n      "),y.qZA(),y._uU(11,"\n      "),y.TgZ(12,"div",5),y.NdJ("viewDateChange",function(e){return t.viewDate=e}),y._uU(13,"\n        Next\n      "),y.qZA(),y._uU(14,"\n    "),y.qZA(),y._uU(15,"\n  "),y.qZA(),y._uU(16,"\n  "),y.TgZ(17,"div",6),y._uU(18,"\n    "),y.TgZ(19,"h3"),y._uU(20),y.ALo(21,"calendarDate"),y.qZA(),y._uU(22,"\n  "),y.qZA(),y._uU(23,"\n"),y.qZA(),y._uU(24,"\n"),y._UZ(25,"br"),y._uU(26,"\n\n"),y.TgZ(27,"mwl-day-view-scheduler",7),y.NdJ("eventTimesChanged",function(e){return t.eventTimesChanged(e)})("userChanged",function(e){return t.userChanged(e)}),y._uU(28,"\n"),y.qZA(),y._uU(29,"\n")),2&e&&(y.xp6(6),y.Q6J("view","day")("viewDate",t.viewDate),y.xp6(3),y.Q6J("viewDate",t.viewDate),y.xp6(3),y.Q6J("view","day")("viewDate",t.viewDate),y.xp6(8),y.Oqu(y.xi3(21,9,t.viewDate,"dayViewTitle")),y.xp6(7),y.Q6J("viewDate",t.viewDate)("events",t.events)("users",t.users))},directives:[D.O,T.i,b.T,te],pipes:[ne.J],encapsulation:2,changeDetection:0});var ie=function e(){n(this,e)};ie.\u0275fac=function(e){return new(e||ie)},ie.\u0275mod=y.oAB({type:ie}),ie.\u0275inj=y.cJS({imports:[[d.ez,g._8.forRoot({provide:v._,useFactory:p.x}),m.S,u.Bz.forChild([{path:"",component:re}])]]})},57671:function(e,t,a){a.d(t,{S:function(){return s}});var r=a(38583),i=a(93092),o=a(95008),l=a(37716),s=function e(){n(this,e)};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[[r.ez,i.u5,o._8]]})}}])}();