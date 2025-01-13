
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  id: any;
  name: any;
  student: any;
  constructor(private router: Router, private tableService: TableService) {}

  stLOgin() {
    this.tableService.doLoginSt(this.id, this.name).subscribe((data) => {
      this.student = data;
      if (this.student != null) {
        this.router.navigate(['/success'], {
          state: {
            response: this.student,
          },
        });
      }
    });
  }
}
