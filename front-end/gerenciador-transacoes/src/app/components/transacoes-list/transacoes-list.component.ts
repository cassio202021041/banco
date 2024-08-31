import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../service/transacao.service';

@Component({
  selector: 'app-transacoes-list',
  templateUrl: './transacoes-list.component.html',
  styleUrl: './transacoes-list.component.css'
})
export class TransacoesListComponent implements OnInit {
  transacoes: any[] = [];

  constructor(private transacaoService: TransacaoService) { }

  ngOnInit(): void {
    this.loadTransacoes();
  }

  loadTransacoes(): void {
    this.transacaoService.getTransacoes().subscribe(
      (data) => this.transacoes = data,
      (error) => console.error(error)
    );
  }

  deleteTransacao(id: number): void {
    this.transacaoService.deleteTransacao(id).subscribe(
      () => this.loadTransacoes(),
      (error) => console.error(error)
    );
  }
}
