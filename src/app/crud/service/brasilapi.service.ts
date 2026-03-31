import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUf } from '../interfaces/IUf';
import { IMunicipio } from '../interfaces/IMunicipio';

@Injectable({
  providedIn: 'root',
})
export class BrasilapiService {
  baseURL = 'https://brasilapi.com.br/api';
  private http = inject(HttpClient);

  listarUFs(): Observable<IUf[]> {
    const path = '/ibge/uf/v1';
    return this.http.get<IUf[]>(this.baseURL + path);
  }

  listarMunicipios(uf: string): Observable<IMunicipio[]> {
    const path = '/ibge/municipios/v1/' + uf;
    return this.http.get<IMunicipio[]>(this.baseURL + path);
  }
}
