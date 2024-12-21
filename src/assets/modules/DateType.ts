export default class DateType {
	private date: Date;
	private dayErrorEl=<HTMLElement>document.querySelector("[data-day-error]")
	private monthErrorEl=<HTMLElement>document.querySelector("[data-month-error]")
	private yearErrorEl=<HTMLElement>document.querySelector("[data-year-error]")
	
    private static isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
	public static Create(date: string): DateType {
		if (!DateType.isoDateRegex.test(date)) {
			throw new Error('Unexpected date value');  
		}

		return new DateType(date);
	}
 
   private ClearData(){
	this.dayErrorEl.textContent=this.monthErrorEl.textContent=this.yearErrorEl.textContent=""
   }
	public getFullDate() {
		return this.date;
	}

	private constructor(date: string) {
		this.date = new Date(date);
		this.ClearData()
	}
}
