
function loop(x) {
    
    if (x > 0) {
        if (x % 3 === 0) {
            console.log("------->", x);
        }
        loop(x-1);  
    }
  }
  loop(15);