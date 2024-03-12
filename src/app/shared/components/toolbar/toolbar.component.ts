import { Component, EventEmitter, Output } from '@angular/core';
import { TooltipDirective } from "../../directives/tooltip.directive";
import { File } from "../../../infrastructure/interface/file";
import { FileInputDirective } from "../../directives/file-input.directive";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    TooltipDirective,
    FileInputDirective
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Output() changeFile = new EventEmitter<File>();

  onFileChange(newFile: File): void {
    this.changeFile.emit(newFile);
  }
}
