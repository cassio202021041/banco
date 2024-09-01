import { Component } from '@angular/core';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  contas:Conta[]=[];

  constructor(public contaService:ContaService){}

  ngOnInit():void{
    this.contaService.getAll().subscribe((data:Conta[])=>{
      this.contas = data;
      console.log(this.contas);
    })
  }

  deleteConta(id:number){
    this.contaService.delete(id).subscribe(res =>{
      this.contas = this.contas.filter(item=>item.id !==id);
      console.log("conta Deleted Successsfully !")
    })
  }
}

