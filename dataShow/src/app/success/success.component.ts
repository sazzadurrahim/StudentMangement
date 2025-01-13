import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  student:any
  constructor(private router:Router){
    this.student=this.router.getCurrentNavigation()?.extras.state?.['response'];
    }

}
