import { Injectable, signal, WritableSignal } from '@angular/core';
import { File } from "../infrastructure/interface/file";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fileData: WritableSignal<File | null> = signal<File | null>(null);
  activeCursor: WritableSignal<boolean> = signal(false);
  color: WritableSignal<string> = signal("rgb(0,0,0)");

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
