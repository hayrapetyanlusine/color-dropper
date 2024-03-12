import { Component } from '@angular/core';
import { TooltipDirective } from "../../directives/tooltip.directive";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    TooltipDirective
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
