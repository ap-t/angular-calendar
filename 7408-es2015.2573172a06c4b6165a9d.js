"use strict";(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[7408],{57408:function(n,e,a){a.r(e),a.d(e,{sources:function(){return s}});const s=[{filename:"component.ts",contents:{raw:a(75770),highlighted:a(44125)}},{filename:"template.html",contents:{raw:a(76774),highlighted:a(27221)}},{filename:"module.ts",contents:{raw:a(21485),highlighted:a(13827)}}]},44125:function(n,e,a){a.r(e),e.default='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CalendarEvent, CalendarMonthViewDay } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  events: CalendarEvent&lt;{ incrementsBadgeTotal: <span class="hljs-built_in">boolean</span> }&gt;[] = [\n    {\n      title: <span class="hljs-string">\'Increments badge total on the day cell\'</span>,\n      color: colors.yellow,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      meta: {\n        incrementsBadgeTotal: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      title: <span class="hljs-string">\'Does not increment the badge total on the day cell\'</span>,\n      color: colors.blue,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      meta: {\n        incrementsBadgeTotal: <span class="hljs-literal">false</span>,\n      },\n    },\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): <span class="hljs-built_in">void</span> {\n    body.forEach((day) =&gt; {\n      day.badgeTotal = day.events.filter(\n        (event) =&gt; event.meta.incrementsBadgeTotal\n      ).length;\n    });\n  }\n}\n'},13827:function(n,e,a){a.r(e),e.default='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule, DateAdapter } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/date-fns\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},27221:function(n,e,a){a.r(e),e.default='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n  [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n  [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n  [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"true"</span>\n  (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"beforeMonthViewRender($event)"</span>\n&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n'},75770:function(n,e,a){a.r(e),e.default="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: CalendarEvent<{ incrementsBadgeTotal: boolean }>[] = [\n    {\n      title: 'Increments badge total on the day cell',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: true,\n      },\n    },\n    {\n      title: 'Does not increment the badge total on the day cell',\n      color: colors.blue,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: false,\n      },\n    },\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {\n    body.forEach((day) => {\n      day.badgeTotal = day.events.filter(\n        (event) => event.meta.incrementsBadgeTotal\n      ).length;\n    });\n  }\n}\n"},21485:function(n,e,a){a.r(e),e.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n"},76774:function(n,e,a){a.r(e),e.default='<mwl-calendar-month-view\n  [viewDate]="viewDate"\n  [events]="events"\n  [activeDayIsOpen]="true"\n  (beforeViewRender)="beforeMonthViewRender($event)"\n>\n</mwl-calendar-month-view>\n'}}]);