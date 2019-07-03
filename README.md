# ngx-watermark

A watermark component for Angular (基于Angular的水印组件)

## 安装

```
npm install @twp0217/ngx-watermark --save
```

## 使用
- 安装依赖包：`@twp0217/ngx-watermark`

```
npm install @twp0217/ngx-watermark --save
```

- 在module导入`NgxWatermarkModule`

```
import { NgxWatermarkModule } from '@twp0217/ngx-watermark';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWatermarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 在模板页面使用

```
<div watermark [watermarkOptions]="watermarkOptions"></div>
```

## API

名称 | 说明 | 类型 | 默认值
---|---|---|---
`[watermarkOptions]`| 配置信息 | WatermarkOptions | - 
`[showWatermark]`| 是否显示水印 | boolean | true 

## 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
