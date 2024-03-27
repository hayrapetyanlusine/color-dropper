import { Component, inject } from '@angular/core';
import { CanvasComponent } from "./canvas/canvas.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { UploadFileComponent } from "./upload-file/upload-file.component";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-dropper-layout',
  standalone: true,
  imports: [
    CanvasComponent,
    ToolbarComponent,
    UploadFileComponent
  ],
  template: `
    @if (dataService.fileData()) {

      <app-toolbar></app-toolbar>
      <app-canvas [imageData]="dataService.fileData()"></app-canvas>

    } @else {
      <app-upload-file></app-upload-file>
    }
  `,
    styles: ``
})
export class DropperLayoutComponent {
  dataService = inject(DataService);
}
