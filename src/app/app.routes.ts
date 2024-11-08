import { Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ApiDetailsComponent } from './components/api-details/api-details.component';

export const routes: Routes = [
  {path: 'api-details', component: ApiDetailsComponent},
  {path: '**', component: ErrorPageComponent}
];
