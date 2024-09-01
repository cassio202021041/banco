import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  id!:number;
  conta!:Conta;

  constructor(public contaService:ContaService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['contaId'];
    this.contaService.find(this.id).subscribe((data:Conta)=>{
      this.conta = data;
    })
  }
}
