import { Component, inject } from '@angular/core';
import { CanvasComponent } from "./canvas/canvas.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { UploadFileComponent } from "./upload-file/upload-file.component";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'app-dropper-layout',
    imports: [CanvasComponent, ToolbarComponent, UploadFileComponent],
    template: `
      @if (dataService.fileData()) {
        <app-toolbar />
        <app-canvas [imageData]="dataService.fileData()" />
      } @else {
        <app-upload-file />
      }
  `,
    styles: ``
})
export class DropperLayoutComponent {
  dataService = inject(DataService);
}
