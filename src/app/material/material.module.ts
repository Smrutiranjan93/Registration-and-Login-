import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
// import { MatHintModule } from '@angular/material/';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatCarouselModule } from 'ng-mat-carousel';
import {MatSelectModule} from '@angular/material/select';
const material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  MatGridListModule,
  MatTreeModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatCarouselModule.forRoot()

];
@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
