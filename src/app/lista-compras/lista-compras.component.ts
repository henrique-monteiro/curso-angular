import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ItemLista } from './itemlista'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent {
  item!: string;
  lista: ItemLista[] = [];

  adicionar(): void {
    console.log("entrou no método adicionar");
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;
    
    this.lista.push(itemLista);

    this.item = '';
  }

  itemRiscado(item: ItemLista) {
    item.comprado = !item.comprado;

  }

  limparLista() {
    this.lista = [];
  }
}
