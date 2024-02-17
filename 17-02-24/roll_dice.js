function roll_dice()
{
    for(i=0; ; i++){
        let no = Math.random();
        no = no.toFixed(1);
        no = no*10;
        //console.log("no=>",no);
        if(no==1 || no==2 || no==3 || no==4 || no==5 || no==6){
            console.log("no=>",no);
            break;
        }
        
    }
}

roll_dice();