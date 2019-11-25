import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AGeneralRequestsComponent } from './a-general-requests/a-general-requests.component';
import { GeneralOriginalComponent } from './general-original/general-original.component';
import { GeneralEditableComponent } from './general-editable/general-editable.component';
import { GeneralSplitComponent } from './general-split/general-split.component';
import { GeneralDocumentsComponent } from './general-documents/general-documents.component';
import { GeneralCommentsComponent } from './general-comments/general-comments.component';
import { GeneralAssignComponent } from './general-assign/general-assign.component';


// const parentModuleRoutes: Routes = [
//   {
//       path: 'parent-component',            //<---- parent component declared here
//       component: AppComponent,
//       children: [                          //<---- child components declared here
//           { path:'child-original', component: GeneralOriginalComponent },
//           { path:'child-editable', component: GeneralEditableComponent },
//           { path:'child-split', component: GeneralSplitComponent },
//           { path:'child-documents',component: GeneralDocumentsComponent },
//           { path:'comments', component: GeneralCommentsComponent},
//           { path:'assign', component: GeneralAssignComponent}
//       ]
//   }
// ];

const routes: Routes = [
  {
    path: "general", component: AGeneralRequestsComponent
  }
  // {
  //   path: "general", component: AGeneralRequestsComponent, children: [
  //   { path: "original", component: GeneralOriginalComponent },
  //   { path: "editable", component: GeneralEditableComponent },
  //   { path: "split", component: GeneralSplitComponent },
  //   { path: "documents", component: GeneralDocumentsComponent },
  //   { path: "comments", component: GeneralCommentsComponent },
  //   { path: "assign", component: GeneralAssignComponent }
  //   ]
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [ AGeneralRequestsComponent, GeneralOriginalComponent, GeneralEditableComponent, GeneralSplitComponent, GeneralDocumentsComponent, GeneralCommentsComponent, GeneralAssignComponent ]