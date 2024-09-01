import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Conta } from '../conta';
import { ContaService } from '../conta.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!:number;
  conta!:Conta;
  form!:FormGroup;

  constructor(public contaService:ContaService, private router:Router, private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.id = this.route.snapshot.params['contaId'];
    this.contaService.find(this.id).subscribe((data:Conta)=>{
      this.conta = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value)
    this.contaService.update(this.id,this.form.value).subscribe((res:any)=>{
      console.log("data updated successfully !");
      this.router.navigateByUrl('conta/index')
    })
  }

}
