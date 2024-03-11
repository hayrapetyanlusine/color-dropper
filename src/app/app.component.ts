import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UploadFileComponent} from "./shared/components/upload-file/upload-file.component";
import {ToolbarComponent} from "./shared/components/toolbar/toolbar.component";
import {CanvasComponent} from "./shared/components/canvas/canvas.component";
import {DropperWrapperComponent} from "./shared/components/dropper-wrapper/dropper-wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadFileComponent, ToolbarComponent, CanvasComponent, DropperWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'color-dropper';
}
