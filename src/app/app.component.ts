import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NguyenHongHa';
 
  ngOnInit(): void {
    console.log(1);
    
  }
  sendContact(){
    alert("Success");
    console.log("123");
  }

  
}
