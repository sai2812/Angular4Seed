import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Arr = [100, 200, 420, 158, 1025, 100, 85, 600, 45500, 5252, 254];

  clicked(){
    alert('Hi');
  };
}
