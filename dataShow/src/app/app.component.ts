import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TableComponent } from "./table/table.component";
import { Students } from './students';
import { CommonModule } from '@angular/common';
import { TableService } from './services/table.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataShow';

constructor(private tableService:TableService){}


}
