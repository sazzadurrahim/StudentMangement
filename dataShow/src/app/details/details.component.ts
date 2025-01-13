import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  student:any

  constructor(private router:Router){
    this.student=this.router.getCurrentNavigation()?.extras.state?.['response'];
  }

}
