import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContentModule } from './content/content.module'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent} from './navigation/navigation.component';
//import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
            AppComponent,
            HeaderComponent,
            NavigationComponent,
            //ContentComponent,
            FooterComponent
  				],
  imports: [
    BrowserModule,
    ContentModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
