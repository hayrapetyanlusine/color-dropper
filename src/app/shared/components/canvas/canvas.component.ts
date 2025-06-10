import {
  AfterViewInit,
  Component,
  ElementRef,
  inject, input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { drawImage } from "../../functions/drawImage";
import { NgClass, NgStyle } from "@angular/common";
import { getColorAtPoint } from "../../functions/getColorAtPoint";
import { ColorData } from "../../../infrastructure/interface/colorData";
import { DataService } from "../../../services/data.service";

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent implements AfterViewInit, OnChanges {
  dataService = inject(DataService);

  @ViewChild('imgCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  imageData = input();

  cursorStyle: { [key: string]: any } = {};
  initialRender = true;
  isMouseOver = false;

  ngAfterViewInit(): void {
    drawImage(this.dataService.fileData(), this.canvas);

    this.initialRender = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageData'] && !this.initialRender) {
      drawImage(this.imageData(), this.canvas);
    }
  }

  onMouseMove(evt: MouseEvent): void {
    this.isMouseOver = true;

    if (this.dataService.activeCursor()) {
      const {red, green, blue}: ColorData = getColorAtPoint(evt, this.canvas);

      const translateX: number = evt.clientX - 40 / 2;
      const translateY: number = evt.clientY - 40 / 2;

      this.cursorStyle = {
        boxShadow: `0 0 0 8px rgb(${red}, ${green}, ${blue})`,
        transform: `translate(${translateX}px, ${translateY}px)`
      };
    }
  }

  onMouseLeave(): void {
    this.isMouseOver = false;
  }

  onClick(evt: MouseEvent): void {
    if (this.dataService.activeCursor()) {
      const {red, green, blue}: ColorData = getColorAtPoint(evt, this.canvas);

      this.dataService.updateColor(`rgb(${red}, ${green}, ${blue})`);
    }
  }
}
