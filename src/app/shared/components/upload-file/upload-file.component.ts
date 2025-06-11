import { Component, inject } from '@angular/core';
import { File } from "../../../interface/file";
import { FileInputDirective } from "../../directives/file-input.directive";
import { DataService } from "../../../services/data.service";

@Component({
    selector: 'app-upload-file',
    imports: [FileInputDirective],
    template: `
      <div id="upload-image" (drop)="onDrop($event)" (dragover)="onDragOver($event)">
        <div id="upload-image-input">
          Drag files here or press Upload
          <label>
            Upload
            <input
              type="file"
              appFileInput
              (fileSelected)="onFileSelected($event)"
            >
          </label>
        </div>
      </div>
    `,
    styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  public readonly dataService = inject(DataService);

  onFileSelected(file: File): void {
    this.dataService.updateFileData(file);
  }

  onDrop(evt: DragEvent): void {
    evt.preventDefault();
    const droppedFile = evt.dataTransfer?.files[0]!;

    if (!droppedFile.type.includes("image")) {
      alert("Only image files are allowed");
    } else {
      this.dataService.updateFileData(droppedFile);
    }
  }

  onDragOver(evt: DragEvent): void {
    evt.preventDefault();
  }
}
