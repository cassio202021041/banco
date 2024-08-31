import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransacaoService } from '../../service/transacao.service';


@Component({
  selector: 'app-transacao-form',
  templateUrl: './transacao-form.component.html',
  styleUrls: ['./transacao-form.component.css']
})
export class TransacaoFormComponent implements OnInit {
  transacaoForm: FormGroup;
  isEdit = false;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private transacaoService: TransacaoService,
    private route: ActivatedRoute,
    private router: Router // Verifique se Router está importado e injetado corretamente
  ) {
    this.transacaoForm = this.fb.group({
      descricao: ['', Validators.required],
      tipo: ['receita', Validators.required],
      valor: ['', [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (this.id) {
        this.isEdit = true;
        this.transacaoService.getTransacao(this.id).subscribe(
          data => this.transacaoForm.setValue({
            descricao: data.descricao,
            tipo: data.tipo,
            valor: data.valor,
            categoria: data.categoria
          }),
          error => console.error(error)
        );
      }
    });
  }

  onSubmit(): void {
    if (this.isEdit && this.id) {
      this.transacaoService.updateTransacao(this.id, this.transacaoForm.value).subscribe(
        () => this.router.navigate(['/']), // Verifique o uso do método navigate
        error => console.error(error)
      );
    } else {
      this.transacaoService.addTransacao(this.transacaoForm.value).subscribe(
        () => this.router.navigate(['/']), // Verifique o uso do método navigate
        error => console.error(error)
      );
    }
  }
}
