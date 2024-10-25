import { SearchComponent } from './views/search/search.component';
import { FormComponent } from './views/form/form.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'search', component: SearchComponent }
];
