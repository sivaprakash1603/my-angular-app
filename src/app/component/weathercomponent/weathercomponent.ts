import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Weatherservice } from '../../services/weatherservice';

@Component({
  selector: 'app-weathercomponent',
  imports: [AsyncPipe, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './weathercomponent.html',
  styleUrl: './weathercomponent.css',
})
export class Weathercomponent {
  private readonly weatherService = inject(Weatherservice);

  readonly forecasts$ = this.weatherService.getForecasts();
}
