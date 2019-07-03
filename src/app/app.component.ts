import { Component } from '@angular/core';
import { WatermarkOptions } from '@twp0217/ngx-watermark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showWatermark: boolean = true;

  watermarkOptions: WatermarkOptions = {
    text: '@twp0217/ngx-watermark',
    width: 200,
    height: 80,
    fontSize: '14px',
    color: '#f00',
    alpha: 0.7,
    degree: 15
  };
}
