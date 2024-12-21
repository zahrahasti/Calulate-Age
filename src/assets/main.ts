import { addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears  } from 'date-fns';
import MonthRule from './modules/monthRules';
import { DayRules } from './modules/dayRules';
import DateType from './modules/DateType';
import { YearRules } from './modules/yearRules';
const validForm=<HTMLFormElement>document.querySelector(".form");
const yearDisplay = <HTMLElement>document.querySelector('.text-year');
const dayDisplay = <HTMLElement> document.querySelector('.text-day');
const monthDisplay = <HTMLElement> document.querySelector('.text-month');


const yearInput=<HTMLInputElement>document.querySelector("[data-year-value]")
const monthInput=<HTMLInputElement>document.querySelector("[data-month-value]")
const dayInput=<HTMLInputElement>document.querySelector("[data-day-value]")


 class DateDifference {
	private start: Date;
	private end: Date;
	public static Create(startDate:string){
		return new DateDifference(startDate)
	}
	public getDifference() {
		const years = differenceInYears(this.end, this.start);
		const tempDate = addYears(this.start, years);
		const months = differenceInMonths(this.end, tempDate);
		const tempDate2 = addMonths(tempDate, months);
		const days = differenceInDays(this.end, tempDate2);
        
		return {years,months,days};
	}

	constructor(startDate: string) {		
		this.start = DateType.Create(startDate).getFullDate();
		this.end =new Date()
		this.setValues()
	}

	private setValues(){
		yearDisplay.textContent=this.getDifference().years.toString();
	    monthDisplay.textContent=this.getDifference().months.toString();
	    dayDisplay.textContent=this.getDifference().days.toString();
	}
}
validForm.addEventListener("submit",(event:Event)=>{
	event.preventDefault()
	yearDisplay.textContent=monthDisplay.textContent=dayDisplay.textContent="--"
	const yearValue=YearRules.Create(Number(yearInput.value)).getYear()
	const monthValue=MonthRule.Create(Number(monthInput.value)).getMonth();
	const dayValue=DayRules.Create(Number(dayInput.value)).getDay(yearValue,Number(monthInput.value));
	const string=`${yearValue}-${monthValue}-${dayValue}`;
	DateDifference.Create(string).getDifference();
	 
})



