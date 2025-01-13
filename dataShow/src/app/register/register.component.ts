import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Students } from '../students';
import {Router, RouterLink } from '@angular/router';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  id:any;
  name:any;
  email:any;
  round:any;

  student:any;
constructor(private tableService:TableService, private router:Router){}

  saveSt(){
    this.student=new Students(this.id,this.name,this.email,this.round);

    this.tableService.saveStudent(this.student).subscribe((sazzad)=>{
      alert("Data saved successfully.");
      this.id=''
      this.name=''
      this.email=''
      this.round=''
      this.router.navigate(['../table'])
      console.log(sazzad)
    });
   
  }

}
