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
import { StorageComponent } from './storage/storage.component';
import { StickyComponent } from './sticky/sticky.component';
import { BarchartComponent } from './barchart/barchart.component';
import { Tutorial3Component } from './tutorial3/tutorial3.component';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { SplitviewComponent } from './splitview/splitview.component';


const routes: Routes = [
  { path: 'basicForm', component: BasicFormComponent },
  { path: 'basicForm2', component: BasicForm2Component },
  { path: 'testingFrontEnd', component: TestingFrontEndComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'validation2', component: Validation2Component },
  { path: 'validation3', component: Validation3Component },
  { path: 'displayingData', component: DisplayingDataComponent },
  { path: 'userInput', component: UserInputTutorialComponent },
  { path: 'storage', component: StorageComponent},
  { path: 'sticky', component: StickyComponent},
  { path: 'barchart', component: BarchartComponent },
  { path: 'tutorial3', component: Tutorial3Component },
  { path: 'popupform', component: PopupFormComponent},
  { path: 'splitview', component: SplitviewComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BasicFormComponent, BasicForm2Component, TestingFrontEndComponent, 
  ValidationComponent, Validation2Component, Validation3Component, UserInputTutorialComponent, DisplayingDataComponent,
  StorageComponent, StickyComponent, BarchartComponent, Tutorial3Component, PopupFormComponent, SplitviewComponent]
