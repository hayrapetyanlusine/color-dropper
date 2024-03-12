import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { drawImage } from "../../functions/drawImage";

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  template:  `
    <canvas #imgCanvas width="860px" height="420px"></canvas>
  `,
  styleUrl: './canvas.component.css'
})
export class CanvasComponent implements AfterViewInit, OnChanges {
  @ViewChild('imgCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  @Input() imageData!: any;

  initialRender: boolean = true;

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
}
