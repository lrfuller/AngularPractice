import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicForm2Component} from './basic-form2/basic-form2.component';
import { TestingFrontEndComponent } from './testing-front-end/testing-front-end.component';
import { ValidationComponent } from './validation/validation.component';
import { Validation2Component } from './validation2/validation2.component';
import { Validation3Component } from './validation3/validation3.component';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';
import { UserInputTutorialComponent } from './user-input-tutorial/user-input-tutorial.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

const routes: Routes = [
  { path: 'basicForm', component: BasicFormComponent },
  { path: 'basicForm2', component: BasicForm2Component },
  { path: 'testingFrontEnd', component: TestingFrontEndComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'validation2', component: Validation2Component },
  { path: 'validation3', component: Validation3Component },
  { path: 'displayingData', component: DisplayingDataComponent },
  { path: 'userInput', component: UserInputTutorialComponent },
  { path: 'lifeCycleHooks', component: LifecycleHooksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BasicFormComponent, BasicForm2Component, TestingFrontEndComponent, 
  ValidationComponent, Validation2Component, Validation3Component, UserInputTutorialComponent, DisplayingDataComponent, LifecycleHooksComponent]
