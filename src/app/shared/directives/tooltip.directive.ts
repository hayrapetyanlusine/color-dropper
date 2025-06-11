import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
  host: {
    '[title]': 'tooltip()'
  }
})
export class TooltipDirective {
  tooltip = input.required<string>();
}
