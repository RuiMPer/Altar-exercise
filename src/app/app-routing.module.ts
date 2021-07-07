import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorComponent } from "../app/components/generator/generator.component"
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "generator", component: GeneratorComponent },
  {path: "payments", component: PaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
