class Bank{


    roi() {
        return 0;
    }
}

class AXIS extends Bank {

    roi(){
        return 10.5;
    }
}

class SBI extends Bank {

   roi(){
        return 12.5;
    }

}

sbiObj = new SBI();
console.log(sbiObj.roi()); //12.5 

axisObj = new AXIS();
console.log(axisObj.roi()) //10.5