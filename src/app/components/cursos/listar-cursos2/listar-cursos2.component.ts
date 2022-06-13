import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos2',
  templateUrl: './listar-cursos2.component.html',
  styleUrls: ['./listar-cursos2.component.css']
})
export class ListarCursos2Component implements OnInit {

  cursos: any = [
    {nome:'Curso Angular', promocao: true, id:1,preco:300, foto:'assets/img/angular.png'},
    {nome:'Curso Mentira', promocao: false, id:1,preco:150, foto:'assets/img/mentira.png'},
    {nome:'Curso de como cursar', promocao: true, id:1,preco:600, foto:'assets/img/download.png'},
    {nome:'Curso Falar merda', promocao: false, id:1,preco:1000, foto:'assets/img/falar.png'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
