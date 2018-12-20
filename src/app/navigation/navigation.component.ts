import { Component } from '@angular/core';

@Component({
  selector: 'navi',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
	navBar: Array<string>;

	constructor(){
		this.navBar = ['Bio', 'Talents', 'Expereince', 'Testimonials', 'Contact'];
	}
}
