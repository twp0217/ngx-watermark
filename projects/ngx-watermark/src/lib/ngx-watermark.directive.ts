import { Directive, Input, Renderer2, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { WatermarkOptions } from './interface';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[watermark]'
})
export class NgxWatermarkDirective implements OnChanges {
  @Input() watermarkOptions: WatermarkOptions;
  @Input() showWatermark: boolean = true;

  readonly DEFAULT_OPTIONS: WatermarkOptions = {
    text: '@twp0217/ngx-watermark',
    width: 200,
    height: 80,
    fontSize: '14px',
    color: '#333333',
    alpha: 0.7,
    degree: 15
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.watermarkOptions && changes.showWatermark) {
      if (this.showWatermark) {
        this.loadWatermark();
      }
    } else {
      if (changes.watermarkOptions) {
        this.loadWatermark();
      }
      if (changes.showWatermark) {
        if (this.showWatermark) {
          this.loadWatermark();
        } else {
          this.removeWatermark();
        }
      }
    }
  }

  loadWatermark(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      `url(${this.canvasToDataURL(this.watermarkOptions)})`
    );
  }

  removeWatermark(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'background-image');
  }

  private canvasToDataURL(watermarkOptions: WatermarkOptions): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const options: WatermarkOptions = Object.assign({}, this.DEFAULT_OPTIONS, watermarkOptions);
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
