import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  OnChanges,
  signal,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import { drawImage } from "../../functions/drawImage";
import { getColorAtPoint } from "../../functions/getColorAtPoint";
import { ColorData } from "../../../interface/colorData";
import { DataService } from "../../../services/data.service";

@Component({
    selector: 'app-canvas',
    imports: [],
    templateUrl: './canvas.component.html',
    styleUrl: './canvas.component.css'
})
export class CanvasComponent implements AfterViewInit, OnChanges {
  public readonly dataService = inject(DataService);
  private readonly canvas = viewChild.required<ElementRef>('imgCanvas');
  public imageData = input();

  public cursorStyle = signal<{ [key: string]: any }>({});
  private initialRender = signal(true);
  public isMouseOver = signal(false);

  ngAfterViewInit(): void {
    drawImage(this.dataService.fileData(), this.canvas());
    this.initialRender.set(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageData'] && !this.initialRender()) {
      drawImage(this.imageData(), this.canvas());
    }
  }

  onMouseMove(evt: MouseEvent): void {
    this.isMouseOver.set(true);

    if (this.dataService.activeCursor()) {
      const {red, green, blue}: ColorData = getColorAtPoint(evt, this.canvas());

      const translateX: number = evt.clientX - 40 / 2;
      const translateY: number = evt.clientY - 40 / 2;

      this.cursorStyle.set({
        boxShadow: `0 0 0 8px rgb(${red}, ${green}, ${blue})`,
        transform: `translate(${translateX}px, ${translateY}px)`
      });
    }
  }

  onMouseLeave(): void {
    this.isMouseOver.set(false);
  }

  onClick(evt: MouseEvent): void {
    if (this.dataService.activeCursor()) {
      const {red, green, blue}: ColorData = getColorAtPoint(evt, this.canvas());

      this.dataService.updateColor(`rgb(${red}, ${green}, ${blue})`);
    }
  }
}
