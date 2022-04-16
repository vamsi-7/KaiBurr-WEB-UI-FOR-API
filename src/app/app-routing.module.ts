import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOperationComponentComponent } from './get-operation-component/get-operation-component.component';
import { PostOperationComponentComponent } from './post-operation-component/post-operation-component.component';
import { UpdateOperationComponentComponent } from './update-operation-component/update-operation-component.component';


const routes: Routes = [
  { path: '', redirectTo: '/words', pathMatch: 'full' },
  { path: 'words', component: GetOperationComponentComponent },
  { path: 'create-word', component: PostOperationComponentComponent },
  { path: 'update-word/:id', component: UpdateOperationComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
