import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FeltoltComponent } from './feltolt/feltolt.component';

export const routes: Routes = [
    {path:'', component: ListaComponent},
    {path:'feltolt', component: FeltoltComponent}
];
