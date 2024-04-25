import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { MONTHS } from 'src/app/constants/months.constants';
import { IOutcome } from 'src/app/interfaces/outcome.interface';
import { OutcomeService } from 'src/app/services/outcomes/outcome.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, AfterViewInit {
  private chart: Chart | undefined;
  @ViewChild('chartContext') chartContext:
    | ElementRef<HTMLCanvasElement>
    | undefined;

  public loading: boolean = false;
  public inputsVisibility: boolean = false;
  public newOutcomeForm: FormGroup = new FormGroup({
    amount: new FormControl(0, Validators.required),
    category_id: new FormControl(null),
    date: new FormControl(new Date(), Validators.required),
  });

  private months: string[] = MONTHS;
  public outcomes: IOutcome[] = [];

  constructor(private outcomeService: OutcomeService) {}

  async ngOnInit(): Promise<void> {
    await this.retrieveData();
  }

  async ngAfterViewInit(): Promise<void> {
    await this.retrieveData();

    if (this.chartContext) {
      const config: ChartConfiguration = {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'My First Dataset',
              data: this.outcomes.map((value) => value.amount),
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
              ],
            },
          ],
        },
        options: {
          locale: 'es-ES',
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      };

      this.chart = new Chart(
        { canvas: this.chartContext.nativeElement },
        config
      );
    }
  }

  async retrieveData() {
    this.loading = true;
    this.outcomes = await this.outcomeService.retrieveOutcomes();
    this.loading = false;
  }

  async confirm() {
    if (this.newOutcomeForm.valid) {
      await this.outcomeService.registerNewOutcome(this.newOutcomeForm.value);
      this.retrieveData();
      this.clearForm();
    }
  }

  cancel() {
    this.clearForm();
  }

  clearForm() {
    this.newOutcomeForm.reset();
    this.inputsVisibility = false;
  }

  public get total(): number {
    return this.outcomes.reduce((acc, outcome) => {
      return acc + outcome.amount;
    }, 0);
  }

  public get currentMonth(): string {
    const monthId = new Date().getMonth();
    return this.months[monthId];
  }
}
