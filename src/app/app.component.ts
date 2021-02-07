import { DOCUMENT } from '@angular/common';
import { Component, Inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';


@Component({
  selector: 'ngx-app',
  styleUrls: ['./app.component.scss'],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    @Inject(NgZone) private zone: NgZone,
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
        this.analytics.trackPageViews();
      });
  }

}
