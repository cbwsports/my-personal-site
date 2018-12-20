import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContentComponent } from './content.component';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
            ContentComponent,
            BioComponent,
            SkillsComponent,
            ExperienceComponent,
            TestimonialsComponent,
            ContactComponent
  				],
  imports: [
    BrowserModule
  ],
  exports: [
    ContentComponent
  ],
  providers: [],
})
export class ContentModule { }