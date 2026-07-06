import { Component } from '@angular/core';
import { Weathercomponent } from './component/weathercomponent/weathercomponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Weathercomponent],
  template: `
    <main class="app-shell">
      <section class="hero">
        <p class="eyebrow">Live weather snapshot</p>
        <h1>Weather Forecast</h1>
        <p class="hero-copy">
          A compact 5-day view pulled from the API and presented in a clean,
          responsive dashboard.
        </p>
      </section>

      <app-weathercomponent />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {}
