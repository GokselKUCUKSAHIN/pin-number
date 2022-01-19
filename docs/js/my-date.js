class MyDate {
  constructor(day = 1, month = 1, year = 0) {
    if (day < 1 || day > 31)
      throw Error("Day cannot be less than 1 or bigger than 31!");
    if (month < 1 || month > 12)
      throw Error("Month cannot be less than 1 or bigger than 12!");
    if (year < 0 || year > 2300)
      throw Error("Year cannot be less than 0 or bigger than 2300!");
    this.day = day;
    this.month = month;
    this.year = year;
  }
}