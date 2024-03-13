import { ElementRef } from '@angular/core';
import { canvasMaxHeight, canvasMaxWidth } from "../constants";

export function drawImage(file: File, canvas: ElementRef<HTMLCanvasElement>): void {
  const reader: FileReader = new FileReader();
  const img: HTMLImageElement = new Image();
  const ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d')!;

  reader.readAsDataURL(file);
  reader.onload = (event: ProgressEvent<FileReader>): void => {
    if (event.target?.result) {
      img.src = event.target.result as string;
    }
  };

  img.onload = (): void => {
    const scaleX: number = canvasMaxWidth / img.width;
    const scaleY: number = canvasMaxHeight / img.height;
    const scale: number = Math.min(scaleX, scaleY);

    const imgWidth: number = img.width * scale;
    const imgHeight: number = img.height * scale;

    canvas.nativeElement.width = imgWidth;
    canvas.nativeElement.height = imgHeight;

    ctx.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
  };
}
