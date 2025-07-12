import { Component } from '@angular/core';
import { BarchartComponent } from './barchart/barchart.component';

@Component({
  selector: 'app-root',
  imports: [BarchartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'ng-chart-demo-2';
}
