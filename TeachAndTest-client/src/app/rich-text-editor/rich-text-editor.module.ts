import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor.component';
import { ToolCheckboxComponent } from './_components/tool-checkbox/tool-checkbox.component';



@NgModule({
  declarations: [RichTextEditorComponent, ToolCheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [RichTextEditorComponent]
})
export class RichTextEditorModule { }
