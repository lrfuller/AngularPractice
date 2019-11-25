//this is modelled from your app.module.ts and the components and 
//services are just arbitrary examples, your module might be different
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

// import { AComponent }    from './a.component';
// import { BComponent }  from './b.component';

// import { AService } from './a.service';
import { ParentRoutingModule } from './secondary-routing-module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    // AComponent,
    // BComponent
  ],
//   providers: [ AService ]
})
export class SecondaryModule {}