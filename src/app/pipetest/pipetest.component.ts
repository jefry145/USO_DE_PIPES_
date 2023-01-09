import { Component } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent {
  valor!:string
  cifra!:string

  show = true

  cambioDeMoneda!:string

  verificarCambio(){
    switch (this.cambioDeMoneda) {
      case "euro":
            this.show = true
        break;
    
      case "dolar":
            this.show = false
        break;
    }
  }
}
