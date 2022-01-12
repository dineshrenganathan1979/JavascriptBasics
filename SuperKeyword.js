class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ' and the Model is : ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");

  console.log(mycar.show());