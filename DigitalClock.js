showtime()

function showtime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();


    let session ="AM";


    if(h==0){
        h = 12;
    }
    if(h > 12){
        h= h-12;
        session ="PM";
    }
   
   //Using Ternery Opearator 
   h=(h <10) ? "0"+h : h;
   m=(m <10) ? "0"+m : m;
   s=(s <10) ? "0"+s: s;

    let time = h +" : "+ m +" : "+ s +" : "+ ms +" "+session;
    setTimeout(showtime, 1000)
    console.log(time);

}