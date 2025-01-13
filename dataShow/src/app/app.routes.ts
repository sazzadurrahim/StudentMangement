import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { ReportComponent } from './report/report.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'table', component:TableComponent},
    {path:'register', component:RegisterComponent},
    {path:'update/:id', component:UpdateComponent},
    {path:'search', component:SearchComponent},
    {path:'details', component:DetailsComponent},
    {path:'success', component:SuccessComponent},
    {path:'fail', component:FailComponent},
    {path:'report',component:ReportComponent}
]
