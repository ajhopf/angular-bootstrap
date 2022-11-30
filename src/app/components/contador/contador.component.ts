import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador = 0;

  atualizaContador(operacao: string) {
    if (operacao === '+') {
      this.contador++;
    } else {
      this.contador--;
    }
  }
}
