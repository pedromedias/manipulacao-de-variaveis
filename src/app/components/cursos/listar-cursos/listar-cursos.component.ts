import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  nome: string = 'Curso de como fazer um curso'
  descricao: string = 'Aprenda como enganar alguem com um curso no Hotmart'
  preco: number = 500
  foto: string = 'assets/img/hotmart.png'
  promocao: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
  clicar(){
    alert('clicou')
  }
}
