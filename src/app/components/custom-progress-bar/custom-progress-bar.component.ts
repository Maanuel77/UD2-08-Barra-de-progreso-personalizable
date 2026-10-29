import { Component, computed, input } from '@angular/core';

const BOOTSTRAP_COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

@Component({
  selector: 'app-custom-progress-bar',
  imports: [],
  templateUrl: './custom-progress-bar.component.html',
  styleUrl: './custom-progress-bar.component.css'
})
export class CustomProgressBarComponent {
  value = input(0, { transform: (v: number) => Math.min(100, Math.max(0, Number(v) || 0)) });
  color = input('primary');

  isBootstrapColor = computed(() => BOOTSTRAP_COLORS.includes(this.color()));
}
