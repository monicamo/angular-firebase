import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap05',
  templateUrl: './cap05.component.html',
  styleUrls: ['./cap05.component.css']
})
export class Cap05Component implements OnInit {

  constructor() { }

  /*
    for (variavel of iteravel) {

    }
  */


  ngOnInit(): void {
    //this.runForOf();
    //this.runForOfError();
    //this.runForIn();
    //this.runForInDois();
    //this.runForInBreak();
    this.runForInContinue();
    this.runBruxos();
  }

  

  runBruxos() {
    const bruxos = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];
    for (const bruxo of bruxos) {
      console.log(bruxo);
    }
  }

  runForInContinue() {
    const numeros = [1, 2, 3, 4, 5];
    for(const dado of numeros) {
      if(dado === 2) {
        continue;
      }
      console.log(dado);
    }
  }

  runForInBreak() {
    const numeros = [1, 2, 3, 4, 5];
    for(const dado of numeros) {
      if(dado > 3) {
        break;
      }
      console.log(dado);
    }
  }

  runForInDois() {
    const numeros = [1, 2, 3, 4, 5];
    for(const dado of numeros) {
      console.log(dado);
    }
  }

  runForIn() {
    const perfilDoFacebook = {
      nome: 'Carlos',
      idade: 22
    };

    for (const propriedade in perfilDoFacebook) {
      const info = perfilDoFacebook[propriedade];
      console.log(info);
    }

  }

  runForOfError() {
    const perfilDoFacebook = {
      nome: 'Carlos',
      idade: 22
    };

    for (var dado of perfilDoFacebook) {
      console.log(dado);
    }

  }

  runForOf() {
    const numeros = [1, 2, 3, 4, 5];
    for (const numero of numeros) {
      console.log(numero);
    }
  }
}
