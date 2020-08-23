import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap01',
  templateUrl: './cap01.component.html',
  styleUrls: ['./cap01.component.css']
})
export class Cap01Component implements OnInit {
  frutas: [];

  constructor() { }

  ngOnInit(): void {
    this.iterarUmArray();
    this.testForeach();
    this.testForeachDois();
    this.testForeachCanais();
    this.testMap();
    this.testFilter();
    this.testFind();
    this.testEvery();
    this.testSome();
    this.testReduce();
    this.testReduceDois();
  }

  testReduceDois() {
    const alunos = [
      {nome: 'joão', idade: 15},
      {nome: 'josé', idade: 18},
      {nome: 'Pedro', idade: 22},
      {nome: 'maria', idade: 20}
    ];
    const nomes = alunos.reduce(function(arrayNomes, aluno) {
      arrayNomes.push(aluno.nome);
      return(arrayNomes);
    }, []);
    console.log(nomes);
  }

  testReduce() {
    const numeros = [1, 2, 3, 4, 5, 100];
    var soma = 0;
    soma = numeros.reduce(function(soma, numero) {
      return soma + numero;
    });
    console.log(soma);
  }

  testSome() {
    const pesoMalas = [12, 32, 21, 29];
    const temMalasAcimaDoPeso = pesoMalas.some(function(pesoMala) {
      return pesoMala > 30;
    });
    console.log(temMalasAcimaDoPeso);
  }

  testEvery() {
    const alunos = [
      {nome: 'joão', idade: 15},
      {nome: 'josé', idade: 18},
      {nome: 'Pedro', idade: 22},
      {nome: 'maria', idade: 20}
    ];

    const todosAlunosDeMaior = alunos.every(function(aluno) {
      return aluno.idade >= 18;
    });
    console.log(todosAlunosDeMaior);
  }

  testFind() {
    const alunos = [
      {nome: 'joão', idade: 15},
      {nome: 'josé', idade: 18},
      {nome: 'maria', idade: 20}
    ];
    const aluno = alunos.find(function(aluno) {
      return aluno.nome === 'josé';
    });

    console.log(aluno);
  }

  iterarUmArray() {
    const frutas = ['abacaxi', 'maçã', 'uva'];
    for (let index = 0; index < frutas.length; index++) {
      const element = frutas[index];
      console.log(element);
    }
  }

  testForeach() {
    const nomes = ['maria', 'josé', 'joâo'];

    /**
     * funcao anonima de retorno, chamamos de
     * funcao de callback
     * Executada para cada elemento dentro da listaa
     * cada iteracao, valor da lista vai para a variavel
     * passafa como parametro no callback
     */
    nomes.forEach(function(nome) {
      console.log(nome);
    });
  }

  testForeachDois() {
    const nomes = ['maria', 'josé', 'joâo'];
    nomes.forEach(this.imprimeNome);
  }

  imprimeNome(nome) {
    console.log(nome);
  }

  testForeachCanais() {
    const canais = ['Globo', 'SBT', 'Record'];
    canais.forEach(function(canal) {
      canais.push("Rede TV");
      console.log(canal);
    });
    console.log(canais);
  }

  testMap() {
    const mapas = [1,2,3];
    const mapasDois = mapas.map(function(num) {
      return num * 2;
    });
    console.log(mapasDois);
  }

  testFilter() {
    const alunos = [
      {nome: 'joão', idade: 15},
      {nome: 'josé', idade: 18},
      {nome: 'maria', idade: 20}
    ];
    var alunoDeMaior = alunos.filter(function(aluno) {
      return aluno.idade >= 18;
    });
    console.log(alunoDeMaior);
  }


}
