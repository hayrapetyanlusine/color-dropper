import { ElementRef } from '@angular/core';
import { ColorData } from "../../infrastructure/interface/colorData";

export function getColorAtPoint(evt: MouseEvent, canvas: ElementRef<HTMLCanvasElement>): ColorData {
  const ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d')!;

  const rect = canvas.nativeElement.getBoundingClientRect();
  const x: number = evt.clientX - rect.left;
  const y: number = evt.clientY - rect.top;

  const imageData = ctx.getImageData(x, y, 1, 1)?.data ?? [];
  const [red = 0, green = 0, blue = 0] = imageData;

  return { red, green, blue };
}
