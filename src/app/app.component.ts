import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HOST';
  countries = ['America', 'China', 'India'];
  
  ngOnInit() {
    console.log(this.countries);
  }
  onOptionsSelected(value) {
    console.log(value);
  }
}
