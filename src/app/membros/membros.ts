import { Component } from '@angular/core';
import { Home } from "../home/home";
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement{
  Id:number;
  nome: string;
  telefone: number;
  congregacao: string;
  cargo?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Id: 1, nome: 'Gilderson', telefone: 99999999, congregacao: 'cede',cargo: 'Presidente'},
  {Id: 2, nome: 'Gean', telefone:88888888, congregacao: 'paraiso',cargo: 'Tvice presidente'},
  {Id: 3, nome: 'Jamilo', telefone: 7777777, congregacao: 'Lagoa do Tió', cargo:"pastor"},
  {Id: 4, nome: 'Beryllium', telefone: 9.0122, congregacao: 'Be',cargo: 'Diácono'},
  {Id: 5, nome: 'Boron', telefone: 10.811, congregacao: 'B',cargo: 'Ancião'},
  {Id: 6, nome: 'Carbon', telefone: 12.0107, congregacao: 'C',cargo: 'Ministro'},
  {Id: 7, nome: 'Nitrogen', telefone: 14.0067, congregacao: 'N',cargo: 'Coordenador'},
  {Id: 8, nome: 'Oxygen', telefone: 15.9994, congregacao: 'O',cargo: 'Líder de Louvor'},
  {Id: 9, nome: 'Fluorine', telefone: 18.9984, congregacao: 'F',cargo: 'Membro'},
  {Id: 10, nome: 'Neon', telefone: 20.1797, congregacao: 'Ne',cargo: 'Visitante'},
];

@Component({
  selector: 'app-membros',
  imports: [Home, MatTableModule],
  templateUrl: './membros.html',
  styleUrl: './membros.scss'
})
export class Membros {
  displayedColumns: string[] = ['Id', 'nome', 'telefone', 'congregacao' ,'cargo'];
  dataSource = ELEMENT_DATA;
}
