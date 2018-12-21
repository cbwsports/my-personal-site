import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
            { path: 'bio', component: BioComponent},
            { path: 'skills', component: SkillsComponent},
            { path: 'experience', component: ExperienceComponent },
            { path: 'testimonials', component: TestimonialsComponent},
            { path: 'contact', component: ContactComponent},
            //{ path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
            ContentComponent,
            BioComponent,
            SkillsComponent,
            ExperienceComponent,
            TestimonialsComponent,
            ContactComponent,
            HomeComponent
  				],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  exports: [
    ContentComponent
  ],
  providers: [],
})
export class ContentModule { }