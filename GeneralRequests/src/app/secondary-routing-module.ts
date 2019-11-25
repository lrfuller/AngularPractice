import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralOriginalComponent } from './general-original/general-original.component';
import { GeneralEditableComponent } from './general-editable/general-editable.component';
import { GeneralSplitComponent } from './general-split/general-split.component';
import { GeneralDocumentsComponent } from './general-documents/general-documents.component';
import { GeneralCommentsComponent } from './general-comments/general-comments.component';
import { GeneralAssignComponent } from './general-assign/general-assign.component';


const parentModuleRoutes: Routes = [
    {
        path: 'parent-component',            //<---- parent component declared here
        component: AppComponent,
        children: [                          //<---- child components declared here
            { path:'child-original', component: GeneralOriginalComponent },
            { path:'child-editable', component: GeneralEditableComponent },
            { path:'child-split', component: GeneralSplitComponent },
            { path:'child-documents',component: GeneralDocumentsComponent },
            { path:'comments', component: GeneralCommentsComponent},
            { path:'assign', component: GeneralAssignComponent}
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(parentModuleRoutes)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class ParentRoutingModule { }