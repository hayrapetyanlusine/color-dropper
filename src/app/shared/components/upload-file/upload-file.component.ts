import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { File } from "../../../infrastructure/interface/file";

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [],
  template: `
    <div id="upload-image" (drop)="onDrop($event)" (dragover)="onDragOver($event)">
      <div id="upload-image-input">
        Drag files here or press Upload
        <label>
          Upload
          <input #fileInput type="file" (change)="onFileSelected()">
        </label>
      </div>
    </div>
  `,
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  @ViewChild('fileInput') fileInput: any;
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();

  onFileSelected(): void {
    const [firstFile] = this.fileInput.nativeElement.files;

    this.emitFile(firstFile);
  }

  onDrop(evt: DragEvent): void {
    evt.preventDefault();
    const droppedFile = evt.dataTransfer?.files[0]!;

    this.emitFile(droppedFile);
  }

  onDragOver(evt: DragEvent): void {
    evt.preventDefault();
  }

  private emitFile(file: File): void {
    file.type.includes("image")
      ? this.fileSelected.emit(file)
      : alert("Only image files are allowed");
  }
}
