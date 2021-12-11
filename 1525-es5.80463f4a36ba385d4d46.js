!function(){"use strict";(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[1525],{21525:function(n,e,a){a.r(e),a.d(e,{sources:function(){return s}});var s=[{filename:"component.ts",contents:{raw:a(99257),highlighted:a(42177)}},{filename:"template.html",contents:{raw:a(68856),highlighted:a(52210)}},{filename:"module.ts",contents:{raw:a(91159),highlighted:a(38370)}}]},42177:function(n,e,a){a.r(e),e.default='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { setMinutes, setHours } from <span class="hljs-string">\'date-fns\'</span>;\n<span class="hljs-keyword">import</span> { Subject } from <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent,\n  CalendarView,\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      start: setHours(setMinutes(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(), <span class="hljs-number">20</span>), <span class="hljs-number">15</span>),\n      end: setHours(setMinutes(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(), <span class="hljs-number">40</span>), <span class="hljs-number">17</span>),\n      title: <span class="hljs-string">\'An event\'</span>,\n      resizable: {\n        afterEnd: <span class="hljs-literal">true</span>,\n      },\n      draggable: <span class="hljs-literal">true</span>,\n    },\n  ];\n\n  refresh = <span class="hljs-keyword">new</span> Subject&lt;<span class="hljs-built_in">void</span>&gt;();\n\n  eventTimesChanged({\n    event,\n    newStart,\n    newEnd,\n  }: CalendarEventTimesChangedEvent): <span class="hljs-built_in">void</span> {\n    event.start = newStart;\n    event.end = newEnd;\n    <span class="hljs-keyword">this</span>.refresh.next();\n  }\n}\n'},38370:function(n,e,a){a.r(e),e.default='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarModule,\n  DateAdapter,\n  CalendarNativeDateFormatter,\n  CalendarDateFormatter,\n  DateFormatterParams,\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(\n      {\n        provide: DateAdapter,\n        useFactory: adapterFactory,\n      },\n      {\n        dateFormatter: {\n          provide: CalendarDateFormatter,\n          useClass: DemoModule,\n        },\n      }\n    ),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule extends CalendarNativeDateFormatter {\n  <span class="hljs-keyword">public</span> weekViewHour({ date, locale }: DateFormatterParams): <span class="hljs-built_in">string</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Intl</span>.DateTimeFormat(<span class="hljs-string">\'pt-BR\'</span>, {\n      hour: <span class="hljs-string">\'numeric\'</span>,\n      minute: <span class="hljs-string">\'numeric\'</span>,\n    }).format(date);\n  }\n}\n'},52210:function(n,e,a){a.r(e),e.default='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n  [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n  [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  [<span class="hljs-attribute">hourDuration</span>]=<span class="hljs-value">"40"</span>\n  [<span class="hljs-attribute">hourSegments</span>]=<span class="hljs-value">"2"</span>\n  [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n  (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventTimesChanged($event)"</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n'},99257:function(n,e,a){a.r(e),e.default="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { setMinutes, setHours } from 'date-fns';\nimport { Subject } from 'rxjs';\nimport {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent,\n  CalendarView,\n} from 'angular-calendar';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Week;\n\n  viewDate = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      start: setHours(setMinutes(new Date(), 20), 15),\n      end: setHours(setMinutes(new Date(), 40), 17),\n      title: 'An event',\n      resizable: {\n        afterEnd: true,\n      },\n      draggable: true,\n    },\n  ];\n\n  refresh = new Subject<void>();\n\n  eventTimesChanged({\n    event,\n    newStart,\n    newEnd,\n  }: CalendarEventTimesChangedEvent): void {\n    event.start = newStart;\n    event.end = newEnd;\n    this.refresh.next();\n  }\n}\n"},91159:function(n,e,a){a.r(e),e.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport {\n  CalendarModule,\n  DateAdapter,\n  CalendarNativeDateFormatter,\n  CalendarDateFormatter,\n  DateFormatterParams,\n} from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(\n      {\n        provide: DateAdapter,\n        useFactory: adapterFactory,\n      },\n      {\n        dateFormatter: {\n          provide: CalendarDateFormatter,\n          useClass: DemoModule,\n        },\n      }\n    ),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule extends CalendarNativeDateFormatter {\n  public weekViewHour({ date, locale }: DateFormatterParams): string {\n    return new Intl.DateTimeFormat('pt-BR', {\n      hour: 'numeric',\n      minute: 'numeric',\n    }).format(date);\n  }\n}\n"},68856:function(n,e,a){a.r(e),e.default='<mwl-calendar-week-view\n  [viewDate]="viewDate"\n  [events]="events"\n  [hourDuration]="40"\n  [hourSegments]="2"\n  [refresh]="refresh"\n  (eventTimesChanged)="eventTimesChanged($event)"\n>\n</mwl-calendar-week-view>\n'}}])}();