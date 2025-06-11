import { Component, inject, signal } from '@angular/core';
import { TooltipDirective } from "../../directives/tooltip.directive";
import { File } from "../../../interface/file";
import { FileInputDirective } from "../../directives/file-input.directive";
import { DataService } from "../../../services/data.service";

@Component({
    selector: 'app-toolbar',
    imports: [TooltipDirective, FileInputDirective],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  public readonly dataService = inject(DataService);
  public isCopied = signal(false);

  copyColorToClipboard(): void {
    navigator.clipboard.writeText(this.dataService.color())
      .then(() => {
        this.isCopied.set(true);
        setTimeout(() => this.isCopied.set(false), 2000);
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
