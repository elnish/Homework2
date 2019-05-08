//Task 1
var car = {
  brend: 'BMW',
  year: 2017,
  mileage: 1800,
  color: 'black',
  gas: 0,
  ignition: false,
  isFullTank: function() {
    if (this.gas > 0) {
      return this.ignition = true;
    } else {
      console.log('time to fill tank!');
    }
  },
  start: function() {
    if (this.ignition === false) {
      console.log('Turn on the ignition first');
    } else {
      console.log('Car brend ' + this.brend + ' color '  + this.color + ' start');
    }
  },
  stop: function() {
    if (this.ignition === true) {
     this.ignition = false;
     console.log('Car stop moving');
   } else {
     console.log('Ingition is already turn ON');
   }
  },
  refluing: function() {
    this.gas = 100;
  }
};

car.start();
car.isFullTank();
car.refluing();
car.isFullTank();
car.start();
car.stop();


//Task2
function Car(brend, year, mileage, color) {
  this.brend = brend;
  this.year = year;
  this.mileage = mileage;
  this.color = color;
}

var bmw = new Car("BMW", 2017, 1800, "black");
var bentley = new Car("Bentley", 2015, 1000, "red");
var ferrary = new Car("Ferrary", 2000, 1600, "green");

console.log(bmw.brend + ' ' + bmw.color);
console.log(bentley.brend + ' ' + bentley.color);
console.log(ferrary.brend + ' ' + ferrary.color);


// //Task 3
function Car1(brend, year, mileage, color, gas, ingition) {
  this.brend = brend;
  this.year = year;
  this.mileage = mileage;
  this.color = color;
  this.gas = gas;
  this.ignition = false;
}
Car1.prototype.isFullTank = function() {
  if (this.gas > 0) {
    return this.ignition = true;
  } else {
    console.log('time to fill tank!');
  }
};
Car1.prototype.start = function() {
  if (this.ignition === false) {
    console.log('Turn on the ignition first');
  } else {
    console.log('Car brend ' + this.brend + ' color '  + this.color + ' start')
  }
};
Car1.prototype.stop = function() {
  if (this.ignition === true) {
   this.ignition = false;
   console.log('Car stop moving');
 } else {
   console.log('Ingition is already turn ON');
 }
};
Car1.prototype.refluing = function() {
  this.gas = 100;
};

var bugatti = new Car1("Bugatti", 2017, 1800, "black", 100);

bugatti.start();
bugatti.isFullTank();
bugatti.start();
bugatti.stop();


//Task 4
function City(cityName, population, country) {
  this.cityName = cityName;
  this.population = population;
  this.country = country;
  this.getPopulation = function() {
    return this.population;
  };
  this.getCityName = function() {
    return this.cityName;
  };
  this.addCitizen = function() {
    return this.population += 1;
  };
}

var amsterdam = new City('Amsterdam', 1000000, 'Nederland');

console.log(amsterdam.getCityName());
console.log(amsterdam.country);
console.log(amsterdam.getPopulation());
amsterdam.addCitizen();
amsterdam.addCitizen();
console.log(amsterdam.getPopulation());



//Task 5
var transport = {
	stop: null
};
var car = {
	stop: true
};
car.__proto__ = transport;

console.log(car.stop); //true - у обєкта є властивість stop із значенням true, воно і виводиться в клнсоль
delete car.stop; //видаляємо властивіть stop у обєкта car
console.log(car.stop); // null - так, як інтерпретатор не знайшов властивості stop в обэкта car, то по __proto__ він шукає його у обєкта transport, знаходить і його значення null

delete transport.stop; //видаляємо властивіть stop у обєкта transport
console.log(car.stop); // undefined, властивість не знайдено ні в самому обєкті, ні в його прототипі
