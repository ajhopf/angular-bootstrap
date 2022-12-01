import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  //O que está entre parenteses é o ID, o nome da variável é o que vem depois
  //neste caso id = 'texto' e variável=infoText
  @Input('texto') infoText: string = '';

}
