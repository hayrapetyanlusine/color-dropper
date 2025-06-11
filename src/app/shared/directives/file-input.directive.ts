import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { File } from "../../interface/file";

@Directive({
  selector: '[appFileInput]',
  standalone: true
})
export class FileInputDirective {
  @Output() fileSelected = new EventEmitter<File>();

  constructor(private fileInput: ElementRef) {}

  @HostListener('change')
  onFileChange(): void {
    const [file] = this.fileInput.nativeElement.files;

    file && file.type.includes('image')
      ? this.fileSelected.emit(file)
      : alert('Only image files are allowed');
  }
}
