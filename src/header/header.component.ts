import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AppComponent {
  title = 'Developer';
  name = 'Christopher Wright';
  personal_image = 'assets/images/luffy_wanted_pic.jpg';
}
