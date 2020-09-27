import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutcareerComponent } from './aboutcareer/aboutcareer.component';
import { TechstackComponent } from './techstack/techstack.component';
import { SampleappsComponent } from './sampleapps/sampleapps.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'aboutcareer', component: AboutcareerComponent },
  { path: 'techstack', component: TechstackComponent },
  { path: 'sampleapps', component: SampleappsComponent },
  { path: 'references', component: ReferencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
