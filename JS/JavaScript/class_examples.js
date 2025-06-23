class employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} is a ${this.position} earning $${this.salary} ${this.prince}`;
  }
  promote(newPosition, newSalary) {
    this.position = newPosition;
    this.salary = newSalary;
    return "Promted!!";
  }
  static compareSalaries(emp1, emp2) {
    return emp1.salary > emp2.salary ? emp1 : emp2;
  }
}
let emp1 = new employee("PC", "TL", 2000, 20);
