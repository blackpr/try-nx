import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@tim/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class UiToolbarModule {}
