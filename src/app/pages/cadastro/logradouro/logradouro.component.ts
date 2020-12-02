import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ngx-logradouro',
  template: '<router-outlet></router-outlet>',
})

export class LogradouroComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

}
