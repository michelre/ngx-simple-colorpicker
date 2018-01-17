import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  @Input() currentColor: string = '#000';
  @Input() colors: Array<string> = [];
  @Output() selectColor = new EventEmitter();
  isTooltipVisible = false;

  @HostListener('document:click', ['$event'])
  clickedOutside() {
    this.isTooltipVisible = false;
  }

  selectColorAction($event: any, color: string): void {
    $event.stopPropagation();
    this.currentColor = color;
    this.isTooltipVisible = false;
    this.selectColor.emit(color);
  }

  onClickInputAction($event: any) {
    this.isTooltipVisible = !this.isTooltipVisible;
    $event.stopPropagation();
  }

  onClickTooltipContainerAction($event: any) {
    $event.stopPropagation();
  }
}
