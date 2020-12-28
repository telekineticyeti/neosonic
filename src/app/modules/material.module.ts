import {NgModule} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';

const materialModules = [
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule,
  DragDropModule,
];

@NgModule({
  imports: [...materialModules],
  exports: materialModules,
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'heart_empty',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/heart-empty.svg'),
    );
    iconRegistry.addSvgIcon(
      'heart_full',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/heart-full.svg'),
    );
    iconRegistry.addSvgIcon(
      'playlist',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/playlist.svg'),
    );
    iconRegistry.addSvgIcon(
      'headphones',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/headphones.svg'),
    );
    iconRegistry.addSvgIcon(
      'remove',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/remove.svg'),
    );
  }
}
