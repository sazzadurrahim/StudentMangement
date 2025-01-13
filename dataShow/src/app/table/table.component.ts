
import { Component, input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TableService } from '../services/table.service';
import { TableModel } from '../services/table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink,FormsModule, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  constructor( private router:Router, private tableService:TableService){}
  ngOnInit(): void {
    this.getAllStData();
  }
  
studentData:TableModel[]=[];

getAllStData(){
  this.tableService.showAllData().subscribe((res)=>{
    this.studentData=res;
  });
}


deleteStData(id: number){
  this.tableService.deleteStData(id).subscribe((data)=>{});
  alert("data deleted successfully");
  this.getAllStData();
}

}
