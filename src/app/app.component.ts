import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scrunk';

  showVideo(): void {
    document.getElementById('catvideo')?.removeAttribute('hidden');
    document.getElementById('catvideo')?.setAttribute('autoplay', 'true');
  }
}
