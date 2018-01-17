
# Ngx Simple Colorpicker

## Description
This is a really simple colorpicker library

![](https://imgur.com/0HfRMyS.png)

## Installation

```
npm i ngx-simple-colorpicker
```

## Usage
### Load the library
```
import { ColorPickerModule } from 'ngx-simple-colorpicker';
@NgModule({
  ...
  imports: [
    ...
    ColorPickerModule
  ]
})
```

### Use it in your HTML

```
<color-picker
   [colors]="['#c62828', '#6a1b9a', '#283593', '#0277bd', '#00695c', '#558b2f', '#ef6c00', '#6d4c41', '#546e7a']"
   (selectColor)="changeColorAction($event)"></color-picker>
```

## API

### Inputs
|  @Input()  | Type   | Default   | Details |
|---|---|---|---|---|
| currentColor  | string  | '' |  The selected color |
| colors | Array<string>  | []  |  Sample colors |

### Outputs

|  @Output()  | Value | Details |
|---|---|---|---|---|
| selectColor| string | Emit when the user select a new color in the tooltip. The selected color is emitted |

## Development
### Building the library
```
npm i
npm start
```

### Library development
```
npm run packagr
```
