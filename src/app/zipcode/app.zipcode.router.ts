import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipCodeComponent } from './app.zipcode.component';
import { ZipCodesComponent } from './app.zipcodes.component';


const routes: Routes = [
    { path: 'zipcodes', component: ZipCodesComponent, },
    { path: 'zipcodes/:code', component: ZipCodeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZipCodeRouter { }
