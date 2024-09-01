import { Component } from '@angular/core';
import { ContaService } from '../conta.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!:FormGroup;

  constructor( public contaService:ContaService, private router:Router /*private fb: FormBuilder*/){

  }

  ngOnInit():void{
      this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body:new FormControl('',Validators.required),

    })

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.contaService.create(this.form.value).subscribe((res:any)=>{
      console.log("conta created successfully !");
      this.router.navigateByUrl('conta/index');
    })
  }
}
