class Person {
    constructor(name, city, pin, mobile_no) {
      this.name = name;
      this.city = city;
      this.pin = pin;
      this.mobile_no = mobile_no;
    }
  
    print(name, city, pin, mobile_no) {
      console.log("TCL: print -> name=", name);
      console.log("TCL: print -> city=", city);
      console.log("TCL: print -> pin=", pin);
      console.log("TCL: print -> mobile_no=", mobile_no);
      
    }
}

class employee extends Person{
    constructor(name, city, pin, mobile_no,designation,department,salary) {
        super(name, city, pin, mobile_no);
        console.log("-----constructor----employee");
        this.designation = designation;
        this.department = department;
        this.salary = salary;
    }

    print_emp() {

        console.log("TCL: print -> name=", this.name);
        console.log("TCL: print -> city=", this.city);
        console.log("TCL: print -> pin=", this.pin);
        console.log("TCL: print -> mobile_no=", this.mobile_no);
        console.log("TCL: print -> designation=", this.designation);
        console.log("TCL: print -> department=", this.department);
        console.log("TCL: print -> salary=", this.salary);

      }
}

class customer extends Person{
    constructor(name, city, pin, mobile_no,type,bill_amount,discount) {
        super(name, city, pin, mobile_no);
        console.log("-----constructor----customer");
        this.type = type;
        this.bill_amount = bill_amount;
        this.discount = discount;
    }

    print_cust() {

        console.log("TCL: print -> name=", this.name);
        console.log("TCL: print -> city=", this.city);
        console.log("TCL: print -> pin=", this.pin);
        console.log("TCL: print -> mobile_no=", this.mobile_no);
        console.log("TCL: print -> type=", this.type);
        console.log("TCL: print -> bill_amount=", this.bill_amount);
        console.log("TCL: print -> discount=", this.discount);
        
      }
}

console.log("----------Employee Details-------------")
const emp1 = new employee("hemant","navsari",396445,9974614059,"manager","sales",20000);
emp1.print_emp();


console.log("----------Customer Details-------------")
const cust1 = new customer("jay","surat",396210,1234567890,"regular",10000,500);
cust1.print_cust();
