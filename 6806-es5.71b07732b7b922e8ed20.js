!function(){"use strict";(self.webpackChunkangular_calendar=self.webpackChunkangular_calendar||[]).push([[6806],{76806:function(n,e,a){a.r(e),a.d(e,{sources:function(){return s}});var s=[{filename:"component.ts",contents:{raw:a(90447),highlighted:a(58907)}},{filename:"template.html",contents:{raw:a(88152),highlighted:a(18045)}},{filename:"module.ts",contents:{raw:a(30167),highlighted:a(17191)}}]},58907:function(n,e,a){a.r(e),e.default='<span class="hljs-keyword">import</span> {\n  Component,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n} from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-comment">// As an alternative to rrule there is also rSchedule</span>\n<span class="hljs-comment">// See https://github.com/mattlewis92/angular-calendar/issues/711#issuecomment-418537158 for more info</span>\n<span class="hljs-keyword">import</span> RRule from <span class="hljs-string">\'rrule\'</span>;\n<span class="hljs-keyword">import</span> moment from <span class="hljs-string">\'moment-timezone\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarDayViewBeforeRenderEvent,\n  CalendarEvent,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarView,\n  CalendarWeekViewBeforeRenderEvent,\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n<span class="hljs-keyword">import</span> { ViewPeriod } from <span class="hljs-string">\'calendar-utils\'</span>;\n\n<span class="hljs-interface"><span class="hljs-keyword">interface</span> RecurringEvent </span>{\n  title: <span class="hljs-built_in">string</span>;\n  color: <span class="hljs-built_in">any</span>;\n  rrule?: {\n    freq: <span class="hljs-built_in">any</span>;\n    bymonth?: <span class="hljs-built_in">number</span>;\n    bymonthday?: <span class="hljs-built_in">number</span>;\n    byweekday?: <span class="hljs-built_in">any</span>;\n  };\n}\n\n<span class="hljs-comment">// we set the timezone to UTC to avoid issues with DST changes</span>\n<span class="hljs-comment">// see https://github.com/mattlewis92/angular-calendar/issues/717 for more info</span>\nmoment.tz.setDefault(<span class="hljs-string">\'Utc\'</span>);\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate = moment().toDate();\n\n  recurringEvents: RecurringEvent[] = [\n    {\n      title: <span class="hljs-string">\'Recurs on the 5th of each month\'</span>,\n      color: colors.yellow,\n      rrule: {\n        freq: RRule.MONTHLY,\n        bymonthday: <span class="hljs-number">5</span>,\n      },\n    },\n    {\n      title: <span class="hljs-string">\'Recurs yearly on the 10th of the current month\'</span>,\n      color: colors.blue,\n      rrule: {\n        freq: RRule.YEARLY,\n        bymonth: moment().month() + <span class="hljs-number">1</span>,\n        bymonthday: <span class="hljs-number">10</span>,\n      },\n    },\n    {\n      title: <span class="hljs-string">\'Recurs weekly on mondays\'</span>,\n      color: colors.red,\n      rrule: {\n        freq: RRule.WEEKLY,\n        byweekday: [RRule.MO],\n      },\n    },\n  ];\n\n  calendarEvents: CalendarEvent[] = [];\n\n  viewPeriod: ViewPeriod;\n\n  <span class="hljs-constructor"><span class="hljs-keyword">constructor</span>(private cdr: ChangeDetectorRef) </span>{}\n\n  updateCalendarEvents(\n    viewRender:\n      | CalendarMonthViewBeforeRenderEvent\n      | CalendarWeekViewBeforeRenderEvent\n      | CalendarDayViewBeforeRenderEvent\n  ): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">if</span> (\n      !<span class="hljs-keyword">this</span>.viewPeriod ||\n      !moment(<span class="hljs-keyword">this</span>.viewPeriod.start).isSame(viewRender.period.start) ||\n      !moment(<span class="hljs-keyword">this</span>.viewPeriod.end).isSame(viewRender.period.end)\n    ) {\n      <span class="hljs-keyword">this</span>.viewPeriod = viewRender.period;\n      <span class="hljs-keyword">this</span>.calendarEvents = [];\n\n      <span class="hljs-keyword">this</span>.recurringEvents.forEach((event) =&gt; {\n        <span class="hljs-keyword">const</span> rule: RRule = <span class="hljs-keyword">new</span> RRule({\n          ...event.rrule,\n          dtstart: moment(viewRender.period.start).startOf(<span class="hljs-string">\'day\'</span>).toDate(),\n          until: moment(viewRender.period.end).endOf(<span class="hljs-string">\'day\'</span>).toDate(),\n        });\n        <span class="hljs-keyword">const</span> { title, color } = event;\n\n        rule.all().forEach((date) =&gt; {\n          <span class="hljs-keyword">this</span>.calendarEvents.push({\n            title,\n            color,\n            start: moment(date).toDate(),\n          });\n        });\n      });\n      <span class="hljs-keyword">this</span>.cdr.detectChanges();\n    }\n  }\n}\n'},17191:function(n,e,a){a.r(e),e.default='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarDateFormatter,\n  CalendarModule,\n  CalendarMomentDateFormatter,\n  DateAdapter,\n  MOMENT,\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> moment from <span class="hljs-string">\'moment-timezone\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n<span class="hljs-keyword">import</span> { adapterFactory } from <span class="hljs-string">\'angular-calendar/date-adapters/moment\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">momentAdapterFactory</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-keyword">return</span> adapterFactory(moment);\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(\n      {\n        provide: DateAdapter,\n        useFactory: momentAdapterFactory,\n      },\n      {\n        dateFormatter: {\n          provide: CalendarDateFormatter,\n          useClass: CalendarMomentDateFormatter,\n        },\n      }\n    ),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n  providers: [\n    {\n      provide: MOMENT,\n      useValue: moment,\n    },\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'},18045:function(n,e,a){a.r(e),e.default='<span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span> [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span> [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"calendarEvents"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"updateCalendarEvents($event)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"calendarEvents"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"updateCalendarEvents($event)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n    *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n    [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n    [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"calendarEvents"</span>\n    (<span class="hljs-attribute">beforeViewRender</span>)=<span class="hljs-value">"updateCalendarEvents($event)"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n'},90447:function(n,e,a){a.r(e),e.default="import {\n  Component,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef,\n} from '@angular/core';\n// As an alternative to rrule there is also rSchedule\n// See https://github.com/mattlewis92/angular-calendar/issues/711#issuecomment-418537158 for more info\nimport RRule from 'rrule';\nimport moment from 'moment-timezone';\nimport {\n  CalendarDayViewBeforeRenderEvent,\n  CalendarEvent,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarView,\n  CalendarWeekViewBeforeRenderEvent,\n} from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\nimport { ViewPeriod } from 'calendar-utils';\n\ninterface RecurringEvent {\n  title: string;\n  color: any;\n  rrule?: {\n    freq: any;\n    bymonth?: number;\n    bymonthday?: number;\n    byweekday?: any;\n  };\n}\n\n// we set the timezone to UTC to avoid issues with DST changes\n// see https://github.com/mattlewis92/angular-calendar/issues/717 for more info\nmoment.tz.setDefault('Utc');\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n})\nexport class DemoComponent {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate = moment().toDate();\n\n  recurringEvents: RecurringEvent[] = [\n    {\n      title: 'Recurs on the 5th of each month',\n      color: colors.yellow,\n      rrule: {\n        freq: RRule.MONTHLY,\n        bymonthday: 5,\n      },\n    },\n    {\n      title: 'Recurs yearly on the 10th of the current month',\n      color: colors.blue,\n      rrule: {\n        freq: RRule.YEARLY,\n        bymonth: moment().month() + 1,\n        bymonthday: 10,\n      },\n    },\n    {\n      title: 'Recurs weekly on mondays',\n      color: colors.red,\n      rrule: {\n        freq: RRule.WEEKLY,\n        byweekday: [RRule.MO],\n      },\n    },\n  ];\n\n  calendarEvents: CalendarEvent[] = [];\n\n  viewPeriod: ViewPeriod;\n\n  constructor(private cdr: ChangeDetectorRef) {}\n\n  updateCalendarEvents(\n    viewRender:\n      | CalendarMonthViewBeforeRenderEvent\n      | CalendarWeekViewBeforeRenderEvent\n      | CalendarDayViewBeforeRenderEvent\n  ): void {\n    if (\n      !this.viewPeriod ||\n      !moment(this.viewPeriod.start).isSame(viewRender.period.start) ||\n      !moment(this.viewPeriod.end).isSame(viewRender.period.end)\n    ) {\n      this.viewPeriod = viewRender.period;\n      this.calendarEvents = [];\n\n      this.recurringEvents.forEach((event) => {\n        const rule: RRule = new RRule({\n          ...event.rrule,\n          dtstart: moment(viewRender.period.start).startOf('day').toDate(),\n          until: moment(viewRender.period.end).endOf('day').toDate(),\n        });\n        const { title, color } = event;\n\n        rule.all().forEach((date) => {\n          this.calendarEvents.push({\n            title,\n            color,\n            start: moment(date).toDate(),\n          });\n        });\n      });\n      this.cdr.detectChanges();\n    }\n  }\n}\n"},30167:function(n,e,a){a.r(e),e.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport {\n  CalendarDateFormatter,\n  CalendarModule,\n  CalendarMomentDateFormatter,\n  DateAdapter,\n  MOMENT,\n} from 'angular-calendar';\nimport moment from 'moment-timezone';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/moment';\n\nexport function momentAdapterFactory() {\n  return adapterFactory(moment);\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(\n      {\n        provide: DateAdapter,\n        useFactory: momentAdapterFactory,\n      },\n      {\n        dateFormatter: {\n          provide: CalendarDateFormatter,\n          useClass: CalendarMomentDateFormatter,\n        },\n      }\n    ),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n  providers: [\n    {\n      provide: MOMENT,\n      useValue: moment,\n    },\n  ],\n})\nexport class DemoModule {}\n"},88152:function(n,e,a){a.r(e),e.default='<mwl-demo-utils-calendar-header [(view)]="view" [(viewDate)]="viewDate">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]="view">\n  <mwl-calendar-month-view\n    *ngSwitchCase="\'month\'"\n    [viewDate]="viewDate"\n    [events]="calendarEvents"\n    (beforeViewRender)="updateCalendarEvents($event)"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase="\'week\'"\n    [viewDate]="viewDate"\n    [events]="calendarEvents"\n    (beforeViewRender)="updateCalendarEvents($event)"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase="\'day\'"\n    [viewDate]="viewDate"\n    [events]="calendarEvents"\n    (beforeViewRender)="updateCalendarEvents($event)"\n  >\n  </mwl-calendar-day-view>\n</div>\n'}}])}();