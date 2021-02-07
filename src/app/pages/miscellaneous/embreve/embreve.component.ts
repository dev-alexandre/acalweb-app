import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-embreve',
  styleUrls: ['./embreve.component.scss'],
  templateUrl: './embreve.component.html',
})
export class EmbreveComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }

}
