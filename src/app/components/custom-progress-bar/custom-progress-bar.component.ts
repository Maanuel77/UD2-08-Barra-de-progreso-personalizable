import { Component, booleanAttribute, computed, input, numberAttribute } from '@angular/core';

const BOOTSTRAP_COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

@Component({
  selector: 'app-custom-progress-bar',
  imports: [],
  templateUrl: './custom-progress-bar.component.html',
  styleUrl: './custom-progress-bar.component.css'
})
export class CustomProgressBarComponent {
  value = input(0, { transform: (v: unknown) => Math.min(100, Math.max(0, numberAttribute(v, 0))) });
  color = input('primary');

  // Ampliación
  striped = input(false, { transform: booleanAttribute });
  animated = input(false, { transform: booleanAttribute });
  showLabel = input(false, { transform: booleanAttribute });
  height = input(20, { transform: numberAttribute });

  isBootstrapColor = computed(() => BOOTSTRAP_COLORS.includes(this.color()));

  barClasses = computed(() => {
    const classes = ['progress-bar'];
    if (this.isBootstrapColor()) classes.push('bg-' + this.color());
    if (this.striped() || this.animated()) classes.push('progress-bar-striped');
    if (this.animated()) classes.push('progress-bar-animated');
    return classes.join(' ');
  });
}
