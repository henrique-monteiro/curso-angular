import { Routes } from '@angular/router';
import { ConsultaComponent } from './crud/components/consulta/consulta.component';
import { CadastroComponent } from './crud/components/cadastro/cadastro.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    {
        path: 'crud',
        component: CrudComponent,
    },
    {
        path: 'cadastro',
        component: CadastroComponent,
    },
    {
        path: 'consulta',
        component: ConsultaComponent,
    }
];
