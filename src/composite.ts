//https://www.tutorialspoint.com/design_pattern/composite_pattern.htm

class Employee {
    private name: string;
    private dept: string;
    private salary: number;

    private subordinates: Set<Employee>;

    constructor(name: string, dept: string, sal: number) {
        this.name = name;
        this.dept = dept;
        this.salary = sal;
        this.subordinates = new Set();
    }

    add(e: Employee) : void {
        this.subordinates.add(e);
    }

    remove(e: Employee) : void {
        this.subordinates.delete(e);
    }

    getSubordinates() : Set<Employee> {
        return this.subordinates;
    }

    toString() : string {
        return ("Employee :[ Name : " + this.name + ", dept : " + this.dept + ", salary :" + this.salary+" ]");
    }
}

export function CompositePatternDemo() {
    let CEO = new Employee('John', 'CEO', 30000);
    let headSales = new Employee('Robert', 'Head sales', 20000);
    let headMarketing = new Employee('Michel', 'Head marketing', 20000);

    let clerk1 = new Employee('Laura', 'Marketing', 10000);
    let clerk2 = new Employee('Bob', 'Marketing', 10000);

    let salesExecutive1 = new Employee('Richard', 'Sales', 10000);
    let salesExecutive2 = new Employee('Rob', 'Sales', 10000);

    CEO.add(headSales);
    CEO.add(headMarketing);

    headSales.add(salesExecutive1);
    headSales.add(salesExecutive2);

    headMarketing.add(clerk1);
    headMarketing.add(clerk2);

    CEO.getSubordinates().forEach((val : Employee) => {
        console.log(val.toString());

        val.getSubordinates().forEach((val2 : Employee) => {
            console.log(val2.toString());
        });
    });
}