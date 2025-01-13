import { Component } from '@angular/core';

import { report } from 'process';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  constructor(private tableService:TableService){}

  path:any
  getStudentReporthtml(){
    this.tableService.getStudentReport("html").subscribe((data1)=>{
      this.path=data1
      window.open("reports/"+this.path.key1)
    })
  }


  getStudentReportpdf(){
    this.tableService.getStudentReport("pdf").subscribe((data1)=>{
      this.path=data1
      window.open("reports/"+this.path.key1)
    })
  }

}
