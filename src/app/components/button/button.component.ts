import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() class: string = '';
  @Input() type: string = '';
  @Input() text: string = '';

  @Output() actionOutput: EventEmitter<any> = new EventEmitter();

  enviaInfos() {
    this.actionOutput.emit(`O texto do botão é ${this.text}, a classe dele é ${this.class}, e o seu tipo  é ${this.type}, `);
  }

}
