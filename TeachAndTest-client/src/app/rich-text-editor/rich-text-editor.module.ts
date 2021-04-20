import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor.component';
import { ToolCheckboxComponent } from './_components/tool-checkbox/tool-checkbox.component';
import { ToolComponent } from './_components/tool/tool.component';
import { SharedModule } from '@app/shared/shared.module';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HtmlEditorComponent } from './_components/html-editor/html-editor.component';

@NgModule({
  declarations: [
    RichTextEditorComponent,
    ToolCheckboxComponent,
    ToolComponent,
    HtmlEditorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RichTextEditorComponent],
})
export class RichTextEditorModule {}
