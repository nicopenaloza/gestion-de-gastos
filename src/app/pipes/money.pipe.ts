import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
  standalone: true,
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const formatter = Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'ARS',
      useGrouping: true,
    });

    return formatter.format(value);
  }
}
