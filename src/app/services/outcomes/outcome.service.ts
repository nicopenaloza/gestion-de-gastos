import { Injectable } from '@angular/core';
import { IOutcome } from 'src/app/interfaces/outcome.interface';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class OutcomeService {
  private outcomes: IOutcome[] = [];

  constructor(private storage: StorageService) {}

  async registerNewOutcome(outcome: IOutcome): Promise<void> {
    this.outcomes = await this.retrieveOutcomes();
    if (!this.outcomes) this.outcomes = [];
    this.outcomes.push(outcome);
    this.storage.set('outcomes', this.outcomes);
  }

  async retrieveOutcomes(): Promise<IOutcome[]> {
    this.outcomes = await this.storage.get('outcomes');
    console.log(this.outcomes);
    return this.outcomes;
  }
}
