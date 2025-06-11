import { Injectable, signal } from '@angular/core';
import { File } from "../interface/file";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fileData = signal<File | null>(null);
  activeCursor = signal(false);
  color = signal("rgb(0,0,0)");

  updateFileData(data: File | null): void {
    this.fileData.set(data);
  }

  updateColor(color: string): void {
    this.color.set(color);
  }

  isActiveCursor(): void {
    this.activeCursor.set(!this.activeCursor());
  }
}
