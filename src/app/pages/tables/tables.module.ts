import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { FsIconComponent, TreeGridComponent } from './tree-grid/tree-grid.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    TablesComponent,
    SmartTableComponent,
    TreeGridComponent,
    FsIconComponent,
  ],
})
export class TablesModule { }
