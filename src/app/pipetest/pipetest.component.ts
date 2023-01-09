import { Component } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent {
// UPPERCASE Y LOWERCASE
  valor!:string
  
//CAMBIO DE MONEDA CURRENCY
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

//ARRAY DE OBJETOS LISTADO CON PIPE PERSONALIZADO
 paises= ['Perù', 'Argentina', 'Colombia', 'Francia']
 
 //Funcion añadir 
 textList1!:string
 agregar(){
   this.paises.push(this.textList1)
 }
 //BUSCADOR CON PIPE
 criterio!:string


 //JSON PIPE OBJETO JSON
 productos=[
  {id:1 , name:"Jabon"},
  {id:2 , name:"Toalla"},
  {id:3 , name:"Cepillo"}
 ]
 
}
