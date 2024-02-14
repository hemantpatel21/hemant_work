class Person {
    // constructor(id, name, city, pin, mobile_no) {
      
    //   this.id = id;
    //   this.name = name;
    //   this.city = city;
    //   this.pin = pin;
    //   this.mobile_no = mobile_no;
    // }
  
    print(id, name, city, pin, mobile_no) {
      console.log("TCL: print -> name=", name);
      console.log("TCL: print -> city=", city);
      console.log("TCL: print -> pin=", pin);
      console.log("TCL: print -> mobile_no=", mobile_no);
      
    }
}

class employee extends Person{
    // constructor(designation,department,salary) {
    //     console.log("-----constructore----emp");
    //     this.designation = designation;
    //     this.department = department;
    //     this.salary = salary;
    // }

    print_emp(designation,department,salary) {

        console.log("TCL: print -> designation=", designation);
        console.log("TCL: print -> department=", department);
        console.log("TCL: print -> salary=", salary);

      }
}

class customer extends Person{
    // constructor(type,bill_amount,discount) {
    //     console.log("-----constructore----cust");
    //     this.type = type;
    //     this.bill_amount = bill_amount;
    //     this.discount = discount;
    // }

    print_cust(type,bill_amount,discoun) {

        console.log("TCL: print -> type=", type);
        console.log("TCL: print -> bill_amount=", bill_amount);
        console.log("TCL: print -> discoun=", discoun);
        
      }
}




console.log("----------Employee Details-------------")
const emp1 = new employee();
emp1.print(101,"hemant","navsari",396445,9974614059)
emp1.print_emp("manager","sales",20000);


console.log("----------Customer Details-------------")
const cust1 = new customer();
cust1.print(101,"jay","surat",396210,1234567890)
cust1.print_cust("regular",10000,500);
