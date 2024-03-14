import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { drawImage } from "../../functions/drawImage";
import { NgClass, NgIf, NgStyle } from "@angular/common";
import { getColorAtPoint } from "../../functions/getColorAtPoint";
import { ColorData } from "../../../infrastructure/interface/colorData";

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent implements AfterViewInit, OnChanges {
  @ViewChild('imgCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Output() color: EventEmitter<string> = new EventEmitter<string>();
  @Input() imageData!: any;
  @Input() isActiveCursor!: boolean;

  initialRender: boolean = true;
  isMouseOver: boolean = false;
  cursorStyle: { [key: string]: any } = {};

  ngAfterViewInit(): void {
    if (this.imageData) {
      drawImage(this.imageData, this.canvas);
    }
    this.initialRender = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imageData'] && !this.initialRender) {
      drawImage(this.imageData, this.canvas);
    }
  }

  onMouseMove(evt: MouseEvent): void {
    this.isMouseOver = true;

    if(this.isActiveCursor) {
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
    const {red, green, blue}: ColorData = getColorAtPoint(evt, this.canvas);

    this.color.emit(`rgb(${red}, ${green}, ${blue})`);
  }
}
