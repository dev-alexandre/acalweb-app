import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filtro } from 'app/@core/table/filtro.model';
import { Table } from 'app/@core/table/table.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Modulo, Acao } from 'app/@library/enum';
import { Model } from './model';

@Injectable()

export abstract class Service<T extends Model> {
    private rota: String;

    public abstract getModulo(): string;

    constructor(public http: HttpClient) {
        this.rota = environment.apiUrl + '/' + this.getModulo().replace('[', '').replace(']', '') + '/';
    }

    public paginar(filtro: Filtro): Observable<Table<T>> {
        return this.http.post<Table<T>>(this.rota + Acao.PAGINAR.replace('[', '').replace(']', ''), filtro);
    }

    public listarTodos(): Observable<T[]> {
        return this.http.get<T[]>(this.rota + Acao.LISTAR.replace('[', '').replace(']', ''));
    }

    public deletar(t: T): Observable<T> {
      return this.http.delete<T>(this.rota + Acao.DELETAR.replace('[', '').replace(']', '') + '/' + t.id);
    }

    public salvar(t: T): Observable<T> {
      return this.http.post<T>(this.rota + Acao.SALVAR.replace('[', '').replace(']', ''), t);
    }

    public editar(t: T): Observable<T> {
      return this.http.put<T>(this.rota + Acao.EDITAR.replace('[', '').replace(']', ''), t);
    }

    public buscar(id: String): Observable<T> {
      return this.http.get<T>(this.rota + Acao.BUSCAR.replace('[', '').replace(']', '') + '/' + id);
    }



}
