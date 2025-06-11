import { Directive, ElementRef, inject, output } from '@angular/core';
import { File } from "../../interface/file";

@Directive({
  selector: '[appFileInput]',
  standalone: true,
  host: {
    '(change)': 'onFileChange()'
  }
})
export class FileInputDirective {
  private readonly fileInput = inject(ElementRef);
  public fileSelected = output<File>();

  onFileChange(): void {
    const [file] = this.fileInput.nativeElement.files;

    file && file.type.includes('image')
      ? this.fileSelected.emit(file)
      : alert('Only image files are allowed');
  }
}
