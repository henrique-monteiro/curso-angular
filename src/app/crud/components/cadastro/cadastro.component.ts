import { Component, inject, OnInit } from '@angular/core';
import { Cliente } from './Cliente';
import { ClienteService } from '../../service/cliente.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { BrasilapiService } from '../../service/brasilapi.service';
import { IUf } from '../../interfaces/IUf';
import { IMunicipio } from '../../interfaces/IMunicipio';
@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
    MatSelectModule,
    CommonModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = Cliente.newCliente();
  atualizando = false;
  ufs: IUf[] = [];
  municipios: IMunicipio[] = [];

  private service = inject(ClienteService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private brasilApiService = inject(BrasilapiService);
  private snack: MatSnackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query: ParamMap) => {
      const id = query.get('id');
      if (id) {
        const clienteEncontrado = this.service.buscarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
          if (this.cliente.uf) {
            const event = { value: this.cliente.uf };
            this.carregarMunicipios(event as MatSelectChange);
          }
        }
      }
    });

    this.carregarUFs();
  }

  carregarUFs() {
    // observable  subscriber
    this.brasilApiService.listarUFs().subscribe({
      next: (listaEstados) => (this.ufs = listaEstados),
      error: (erro) => console.log('ocorreu um erro: ', erro),
    });
  }

  carregarMunicipios(event: MatSelectChange) {
    const ufSelecionada = event.value;
    this.brasilApiService.listarMunicipios(ufSelecionada).subscribe({
      next: (listaMunicipios) => (this.municipios = listaMunicipios),
      error: (erro) => console.log('ocorreu um erro: ', erro),
    });
  }

  salvar() {
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem('Salvo com sucesso!');
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta']);
      this.mostrarMensagem('Atualizado com sucesso!');
    }
  }

  mostrarMensagem(mensagem: string) {
    this.snack.open(mensagem, 'Ok');
  }
}
