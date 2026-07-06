import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { catchError, map, of, startWith, Subject, switchMap } from 'rxjs';
import { WeatherForecast, WeatherService } from '../../services/weather.service';

type WeatherViewState =
  | { status: 'loading'; forecasts: WeatherForecast[]; message: string }
  | { status: 'error'; forecasts: WeatherForecast[]; message: string }
  | { status: 'ready'; forecasts: WeatherForecast[]; message: string };

@Component({
  selector: 'app-weather',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Weather {
  private readonly weatherService = inject(WeatherService);
  private readonly refreshTrigger = new Subject<void>();

  readonly state$ = this.refreshTrigger.pipe(
    startWith(void 0),
    switchMap(() =>
      this.weatherService.getForecasts().pipe(
        map((forecasts) => ({
          status: 'ready',
          forecasts,
          message: '',
        }) as WeatherViewState),
        catchError(() =>
          of({
            status: 'error',
            forecasts: [],
            message:
              'Unable to load weather data right now. Please check your API availability and try again.',
          } as WeatherViewState),
        ),
        startWith({
          status: 'loading',
          forecasts: [],
          message: '',
        } as WeatherViewState),
      ),
    ),
  );

  refresh(): void {
    this.refreshTrigger.next();
  }

  trackByDate(_: number, forecast: WeatherForecast): string {
    return forecast.date;
  }
}
