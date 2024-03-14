import { Component } from '@angular/core';
import { CanvasComponent } from "../canvas/canvas.component";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { UploadFileComponent } from "../upload-file/upload-file.component";
import { NgIf } from "@angular/common";
import { File } from "../../../infrastructure/interface/file";

@Component({
  selector: 'app-dropper-wrapper',
  standalone: true,
  imports: [
    CanvasComponent,
    ToolbarComponent,
    UploadFileComponent,
    NgIf
  ],
  templateUrl: './dropper-wrapper.component.html',
  styleUrl: './dropper-wrapper.component.css'
})
export class DropperWrapperComponent {
  fileData: File | null = null;
  activeCursor: boolean = false;
  color: string = "rgb(0,0,0)";

  getFileData(data: File): void {
    this.fileData = data;
  }

  isActiveCursor(value: boolean): void {
    this.activeCursor = value;
  }

  chooseColor(color: string): void {
    this.color = color;
  }
}
