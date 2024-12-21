import type { GlobalRules } from "./globalRules";
import { getYear } from "date-fns";
export class YearRules implements GlobalRules{
    private yearErrorEl=<HTMLElement>document.querySelector("[data-year-error]");
    private userYearBirthday:number;
    private year = getYear(new Date());
    private yearRegex = /^[1-9]\d{3}$/;
    ClearData(): void {
        this.yearErrorEl.textContent=""
    }
    public static Create(userYearBirthday:number){
         return new YearRules(userYearBirthday)
    }
    getYear(){
     this.isYearExist();
     return this.userYearBirthday
    }
    
    private isYearExist(){
         if(this.userYearBirthday>this.year||!this.yearRegex.test(this.userYearBirthday.toString())){
            this.userYearBirthday=Number.NaN;
            this.yearErrorEl.textContent="Enter a valid year"
        }
    }

    constructor(userYearBirthday:number){
        this.userYearBirthday=userYearBirthday;
        this.ClearData()
    }
}