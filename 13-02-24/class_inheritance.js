class Person {
      
    print(id, name, city, pin, mobile_no) {
      console.log("TCL: print -> name=", name);
      console.log("TCL: print -> city=", city);
      console.log("TCL: print -> pin=", pin);
      console.log("TCL: print -> mobile_no=", mobile_no);
      
    }
}

class employee extends Person{
    
    print_emp(designation,department,salary) {

        console.log("TCL: print -> designation=", designation);
        console.log("TCL: print -> department=", department);
        console.log("TCL: print -> salary=", salary);

      }
}

class customer extends Person{
    
    print_cust(type,bill_amount,discoun) {

        console.log("TCL: print -> type=", type);
        console.log("TCL: print -> bill_amount=", bill_amount);
        console.log("TCL: print -> discoun=", discoun);
        
      }
}



console.log()
console.log("----------Employee Details-------------")
console.log()
const emp1 = new employee();
emp1.print(101,"hemant","navsari",396445,9974614059)
emp1.print_emp("manager","sales",20000);
console.log()
console.log()
console.log("----------Customer Details-------------")
console.log()
const cust1 = new customer();
cust1.print(101,"jay","surat",396210,1234567890)
cust1.print_cust("regular",10000,500);
