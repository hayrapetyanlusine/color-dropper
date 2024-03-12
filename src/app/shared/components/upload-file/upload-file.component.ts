import { Component, EventEmitter, Output } from '@angular/core';
import { File } from "../../../infrastructure/interface/file";
import { FileInputDirective } from "../../directives/file-input.directive";

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [
    FileInputDirective
  ],
  template: `
    <div id="upload-image" (drop)="onDrop($event)" (dragover)="onDragOver($event)">
      <div id="upload-image-input">
        Drag files here or press Upload
        <label>
          Upload
          <input type="file" appFileInput (fileSelected)="onFileSelected($event)">
        </label>
      </div>
    </div>
  `,
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();

  onFileSelected(file: File): void {
    this.fileSelected.emit(file);
  }

  onDrop(evt: DragEvent): void {
    evt.preventDefault();
    const droppedFile = evt.dataTransfer?.files[0]!;

    if (!droppedFile.type.includes("image")) {
      alert("Only image files are allowed");
    } else {
      this.fileSelected.emit(droppedFile);
    }
  }

  onDragOver(evt: DragEvent): void {
    evt.preventDefault();
  }
}
