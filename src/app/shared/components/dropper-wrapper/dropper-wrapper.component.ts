import {Component} from '@angular/core';
import {CanvasComponent} from "../canvas/canvas.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {UploadFileComponent} from "../upload-file/upload-file.component";
import {NgIf} from "@angular/common";
import {File} from "../../../infrastructure/interface/file";

@Component({
  selector: 'app-dropper-wrapper',
  standalone: true,
  imports: [
    CanvasComponent,
    ToolbarComponent,
    UploadFileComponent,
    NgIf
  ],
  template: `
    <app-toolbar *ngIf="fileData"></app-toolbar>
    <app-canvas *ngIf="fileData"></app-canvas>

    <app-upload-file *ngIf="!fileData" (fileSelected)="getFileData($event)" ></app-upload-file>
  `,
  styleUrl: './dropper-wrapper.component.css'
})
export class DropperWrapperComponent {
  fileData: File | null = null;

  getFileData(data: File): void {
    this.fileData = data;

    // console.log(this.fileData);
  }

}
