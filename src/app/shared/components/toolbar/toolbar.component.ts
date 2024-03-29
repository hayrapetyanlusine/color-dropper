import { Component, inject } from '@angular/core';
import { TooltipDirective } from "../../directives/tooltip.directive";
import { File } from "../../../infrastructure/interface/file";
import { FileInputDirective } from "../../directives/file-input.directive";
import { DataService } from "../../../services/data.service";

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
  dataService: DataService = inject(DataService);
  isCopied: boolean = false;

  copyColorToClipboard(): void {
    navigator.clipboard.writeText(this.dataService.color())
      .then(() => {
        this.isCopied = true;
        setTimeout(() => this.isCopied = false, 2000);
      })
      .catch((err) => console.log(err));
  }

  onFileChange(newFile: File): void {
    this.dataService.updateFileData(newFile);
  }

  addCursor(): void {
    this.dataService.isActiveCursor();
  }
}
