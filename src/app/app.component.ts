import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {


  constructor(
    @Inject(DOCUMENT) private _document,
    @Inject(NgZone) private zone: NgZone,
    private renderer2: Renderer2,
    private router: Router,
    private analytics: AnalyticsService,
    private seoService: SeoService) {

  }


  ngOnInit(): void {

    this.seoService.trackCanonicalChanges();
    this.trackNavigationEvents();
  }

  private trackNavigationEvents() {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.analytics.trackPageViews(event);
      });
  }

}
