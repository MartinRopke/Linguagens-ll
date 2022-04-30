import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string;

  alterarNome(event){
    console.log(event.target.value)
    this.nome = event.target.value
  }

  adicionar() : void {
    console.log("Adicionando...")
  }

  lancarDado() : Number {
    return Math.floor(Math.random()*6) +1
  }
}
