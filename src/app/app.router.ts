import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-404',
  template: ` Page not found :(`
})
export class App404Component { }



const routes: Routes = [
  {path: '**', component: App404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [App404Component],
  exports: [RouterModule]
})
export class AppRoutingModule { }



