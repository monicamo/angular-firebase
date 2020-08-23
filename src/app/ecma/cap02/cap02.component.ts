import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap02',
  templateUrl: './cap02.component.html',
  styleUrls: ['./cap02.component.css']
})
export class Cap02Component implements OnInit {
  /*
      Iteradores e Iteraveis

      ITERADOR (define como o iteravel sera percorrido)

          ITERADOR é um objeto que  sabe como acessar os itens de um iteravel

          METODO:

          next() : retorna um objeto com :
            done: boolean
            value: valor extraido

      ITERAVEL define explicitamente seu comporttamento de iteracao

        Precisa IMPLEMENTAR um ITERADOR na propriedade chave --> Symbol.iterator

        Iteraveis por padrao:

        a. Arrays
        b. Strings
        c. Maps
        d. Sets

  */

  constructor() { }

  ngOnInit(): void {
    this.runBruxos();
  }


  runBruxos() {
    const bruxos = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];
    const iterador = bruxos[Symbol.iterator]();
    const done = false;
    let proximo = iterador.next();

    do {
      const bruxo = proximo.value;
     // chapeuSeletor.fazerSelecaoDaCasa(bruxo);
     console.log(bruxo);
      proximo = iterador.next();
    } while (!proximo.done);

  }

}
