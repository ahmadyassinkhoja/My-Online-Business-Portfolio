import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/re-useable/section/section.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { EducationCardComponent } from './components/re-useable/cards/education-card/education-card.component';
import { SkillCardComponent } from './components/re-useable/cards/skill-card/skill-card.component';
import { ProjectCardComponent } from './components/re-useable/cards/project-card/project-card.component';
import { ExperienceCardComponent } from './components/re-useable/cards/experience-card/experience-card.component';
import { ContactCardComponent } from './components/re-useable/cards/contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    ToolbarComponent,
    IntroComponent,
    EducationCardComponent,
    SkillCardComponent,
    ProjectCardComponent,
    ExperienceCardComponent,
    ContactCardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
