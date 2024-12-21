import type { GlobalRules } from './globalRules';
import { lastDayOfMonth } from 'date-fns';

export class DayRules implements GlobalRules {
	private day: number;
	private dayErrorEl = <HTMLElement>document.querySelector('[data-day-error]');
	public static Create(day: number) {
		return new DayRules(day);
	}

	ClearData(): void {
		this.dayErrorEl.textContent = '';
	}

	constructor(day: number) {
		this.day = day;
		this.ClearData();
	}

    getDay(year: number, month: number){
       this.isDayExist(year,month)
       return this.day.toString().padStart(2,"0");
    }


private	isDayExist(year: number, month: number){
		const date = new Date(year, month - 1, 1); // Create a date for the first day of the month
		const lastDay = lastDayOfMonth(date);
        const upperLimit=lastDay.getDate()
        if (upperLimit < 1 || Number(this.day) > upperLimit) {
			this.dayErrorEl.textContent = 'Enter a valid date';
            this.day=Number.NaN
		}
	}
}
