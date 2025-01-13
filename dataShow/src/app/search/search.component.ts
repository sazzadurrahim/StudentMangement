import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  id:any
  student:any

  constructor(private tableService:TableService, private router:Router){}

  searchStById(){
    this.tableService.showDataById(this.id).subscribe((data)=>{
      this.student=data;
      this.router.navigate(['/details'],{
        state:{
          response:this.student,
        },
      });
    });
  }

}
