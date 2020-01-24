import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './internal/internal.component';
import { ExternalComponent } from './external/external.component';
import { ExternalV2Component } from './external-v2/external-v2.component';
import { UnderProcessingComponent } from './under-processing/under-processing.component';


const routes: Routes = [
  { path: 'internal', component: InternalComponent },
  { path: 'external', component: ExternalComponent },
  { path: 'externalv2', component: ExternalV2Component },
  { path: 'processing', component: UnderProcessingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
