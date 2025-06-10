import { ElementRef } from '@angular/core';
import { canvasMaxHeight, canvasMaxWidth } from "../constants";

export function drawImage(file: any, canvas: ElementRef<HTMLCanvasElement>): void {
  const reader = new FileReader();
  const img = new Image();
  const ctx = canvas.nativeElement.getContext('2d')!;

  reader.readAsDataURL(file);
  reader.onload = (event: ProgressEvent<FileReader>): void => {
    if (event.target?.result) {
      img.src = event.target.result as string;
    }
  };

  img.onload = (): void => {
    const scaleX = canvasMaxWidth / img.width;
    const scaleY = canvasMaxHeight / img.height;
    const scale = Math.min(scaleX, scaleY);

    const imgWidth = img.width * scale;
    const imgHeight = img.height * scale;

    canvas.nativeElement.width = imgWidth;
    canvas.nativeElement.height = imgHeight;

    ctx.clearRect(0, 0, canvas.nativeElement.width, canvas.nativeElement.height);
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
  };
}
