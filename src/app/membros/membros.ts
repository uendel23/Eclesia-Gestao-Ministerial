import { Component ,OnInit} from '@angular/core';
import { Home } from "../home/home";
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {RouterOutlet, RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';


export interface membros{
  Id:number;
  nome: string;
  telefone: number;
  congregacao: string;
  cargo?: string;
}

const ELEMENT_DATA: membros[] = [
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
  imports: [Home,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    Footer,
  ],
  templateUrl: './membros.html',
  styleUrl: './membros.scss'
})
export class Membros implements OnInit{
   filtro: string = '';
  displayedColumns: string[] = ['Id', 'nome', 'telefone', 'congregacao' ,'cargo',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    this.dataSource.filterPredicate = (data: membros, filter: string) => {
      const texto = (
        data.nome +' ' +
        data.telefone +' ' +
        data.congregacao +' ' +
        data.cargo

      ).toLowerCase();
      return texto.includes(filter);
    };
  }


  applyFilter(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();

  };

  openAddMemberDialog(){}
  openEditMemberDialog(){}

  excluirMembro(membro: any) {
  if (confirm(`Tem certeza que deseja excluir o membro "${membro.nome}"?`)) {
    //TUDO OK, pode excluir
    const dados = this.dataSource.data;
    this.dataSource.data = dados.filter(m => m.Id !== membro.Id);
    // ou chama um serviço:
    // this.membroService.excluir(membro.Id).subscribe(...)
  }
  }

}



