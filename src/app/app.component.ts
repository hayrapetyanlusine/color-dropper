import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropperLayoutComponent } from "./shared/components/dropper-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropperLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'color-dropper';
}
