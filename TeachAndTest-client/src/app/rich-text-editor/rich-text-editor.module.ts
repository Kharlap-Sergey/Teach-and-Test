import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor.component';
import { ToolCheckboxComponent } from './_components/tool-checkbox/tool-checkbox.component';
import { ToolComponent } from './_components/tool/tool.component';



@NgModule({
  declarations: [RichTextEditorComponent, ToolCheckboxComponent, ToolComponent],
  imports: [
    CommonModule
  ],
  exports: [RichTextEditorComponent]
})
export class RichTextEditorModule { }
