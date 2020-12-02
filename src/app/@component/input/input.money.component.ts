import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-input-money',
  templateUrl: './input.money.component.html',
})

export class InputMoneyComponent implements OnInit {

  public value: string = '';

  constructor() {

  }

  ngOnInit(): void {
  }


}
