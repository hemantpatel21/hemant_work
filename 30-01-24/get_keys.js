

let obj = {
                name:"Hemant",
                surname:"Patel",
                mobileno:9974614059,
                city:"Navsari",
                get_keys: function ()
                        {
                            console.log(Object.keys(obj));
                        },
};



obj.get_keys();


console.log(obj.name);