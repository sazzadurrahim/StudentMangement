import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TableModel } from './table.model';
import { Students } from '../students';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient:HttpClient) { }

  doLoginSt(id:any, name:any):Observable<TableModel>{
    return this.httpClient.get<TableModel>("http://localhost:8080/login/"+id+"/"+name);
  }

  showAllData():Observable<TableModel[]>{
    //getAllStUrl="http://localhost:8080/show"
   return this.httpClient.get<TableModel[]>("http://localhost:8080/show");
  }

  showDataById(id:number):Observable<TableModel>{
    //gettingDataByID(url)="http://localhost:8080/show"
    return this.httpClient.get<TableModel>("http://localhost:8080/show"+'/'+id);
  }

  saveStudent(data:any){
    //postUrl="http://localhost:8080/save"
    return this.httpClient.post("http://localhost:8080/save", data,{responseType:'text'});
  }


  updateStData(id:any, data:any):Observable<TableModel>{
    //updateUrl="http://localhost:8080/update/"+id
    return this.httpClient.put<TableModel>("http://localhost:8080/update/"+id,data)
  }
  
  deleteStData(id:number):Observable<TableModel>{
    //deleteUrl="http://localhost:8080/delete/1"
    return this.httpClient.delete<TableModel>("http://localhost:8080/delete"+'/'+id);
  }
  //--------------report calling-------------------
  getStudentReport(format:any):Observable<any>{
    //reportUrl="http://localhost:8080/reports"+'/'+ format
    return this.httpClient.get<any>("http://localhost:8080/reports"+'/'+ format);

  }


 
}
