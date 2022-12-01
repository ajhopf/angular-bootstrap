import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() accordionId: string = '';
  @Input() buttonClass: string = '';
  @Input() buttonType: string = '';
  @Input() buttonText: string = '';

  enviar(event: any) {
    console.log(event);
  }
}
