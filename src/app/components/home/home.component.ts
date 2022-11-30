import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = {
    userName: 'André Hopf',
    city: 'Florianópolis',
    age: 30
  };

  display = 0;

  getAge() {
    return this.user.age;
  }
}
