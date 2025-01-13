import { Component, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TableModel } from '../services/table.model';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent implements OnInit {
  
  id = input.required<number>();

  student: TableModel = {
    id:0,
    name: '',
    email: '',
    round: '',
  }

  constructor(private tableService: TableService, private router:Router) {}
  ngOnInit(): void {
    console.log('here')
    this.showStDataById();
  }
  showStDataById() {
    this.tableService.showDataById(this.id()).subscribe((res) => {
      console.log(res);
      this.student = res;
    });
  }

  updateData(){
    this.tableService.updateStData(this.id(),this.student).subscribe((data)=>{
      this.student=data;
      alert("Data Updated");
      this.router.navigate(['../table'])
    })
  }
}
