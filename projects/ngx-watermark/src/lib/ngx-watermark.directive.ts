import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { WatermarkOptions } from './interface';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[watermark]'
})
export class NgxWatermarkDirective {
  defaultOptions: WatermarkOptions = {
    text: '@twp0217/ngx-watermark',
    width: 200,
    height: 80,
    fontSize: '14px',
    color: '#333333',
    alpha: 0.7,
    degree: 15
  };

  @Input()
  set watermarkOptions(watermarkOptions: WatermarkOptions) {
    this.loadWatermark(watermarkOptions);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  loadWatermark(watermarkOptions: WatermarkOptions): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      `url(${this.canvasToDataURL(watermarkOptions)})`
    );
  }

  canvasToDataURL(watermarkOptions: WatermarkOptions): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const options: WatermarkOptions = Object.assign({}, this.defaultOptions, watermarkOptions);
    const width = options.width;
    const height = options.height;

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0;

    ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

    ctx.font = `${options.fontSize} Arial`;
    ctx.fillStyle = options.color;
    ctx.globalAlpha = options.alpha;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.translate(0 + 0.5 * width, 0 + 0.5 * height);
    ctx.rotate((options.degree * Math.PI) / 180);

    ctx.fillText(options.text, 0, 0);

    return canvas.toDataURL();
  }
}
