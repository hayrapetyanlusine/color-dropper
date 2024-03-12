import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
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
export class CanvasComponent implements AfterViewInit{
  @Input() imageData!: any;
  @ViewChild('imgCanvas') canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    this.imageData && drawImage(this.imageData, this.canvas);
  }
}
