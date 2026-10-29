import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomProgressBarComponent } from './components/custom-progress-bar/custom-progress-bar.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CustomProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  value = 50;
  color = 'primary';
  striped = false;
  animated = false;
  showLabel = true;
  height = 20;

  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', '#8e44ad'];
}
