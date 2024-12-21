import type { GlobalRules } from "./globalRules";

export default class MonthRule implements GlobalRules {
    private userMonthBirthday: number;
	private monthErrorEl=<HTMLElement>document.querySelector("[data-month-error]")
    private   fullYearMonths=12;
	public static Create(month:number){
		 return new MonthRule(month)
	}
	public  getMonth(){
        this.isMonthExist()
        return this.userMonthBirthday.toString().padStart(2,"0");
	}
    ClearData(): void {
        this.monthErrorEl.textContent='' 
    }
 
    private constructor(userMonthBirthday: number) {
        this.userMonthBirthday =userMonthBirthday
        this.ClearData()
    }
 
 private isMonthExist(){
    if(this.userMonthBirthday<1||this.userMonthBirthday>this.fullYearMonths){
        this.monthErrorEl.textContent="Must be a valid Month"
        this.userMonthBirthday=Number.NaN;
        return false
      } 
      return true
  }
}