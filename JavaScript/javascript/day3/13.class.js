// ES6 > class
class Car {
    constructor(car){
        this.name = car.name;
        this.price = car.price;
        this.year = car.year;
        this.dist = car.dist
    };
    info(){
        console.log(`
name : ${this.name},
price : ${this.price},
year : ${this.year},
dist : ${this.dist}
`)
    }
    drive(d=1){
        this.dist+=d;
        console.log(`총 주행거리 : ${this.dist}`);
    }
};

const bmw = new Car({
    name: 'X6',
    price: 10,
    year: 2019,
    dist: 0
})
bmw.info();
bmw.drive(3);

// React
// class App extends React.Component {
// }

// extends는 class를 상속하는 개념
class SuperCar extends Car {
    constructor(option){
        super(option);
        console.log('Awesome!');
    }
    scream(){
        console.log('howwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
    }
}

const myNewCar = new SuperCar({
    name: 'S1',
    price: 100,
    year: 2019,
    dist: 0
})
myNewCar.info();
myNewCar.drive(67);
myNewCar.scream();

class Monster {
    constructor(option){
        this.name = option.name;
        this.health = 100;
    };
    info(){
        console.log(`name : ${this.name}, health : ${this.health}`);
    }
};

// Monster를 사용해서 pikachu 인스턴스를 생성
const pikachu = new Monster({
    name: 'pikachu'
})

// Monster를 상속 받아서 Dinosaur 클래스를 선언
// Dinosaur 클래스 > chargeattack() 메소드는 health 10 깎음
class Dinosaur extends Monster{
    constructor(option){
        super(option);
    }
    chargeattack(target){
        target.health -= 10;
        console.log('몸통 박치기!');
        console.log(target.name,'의 체력 :',target.health);
    }
}

// Dinosaur의 인스턴스인 tirano를 만들고 pikachu의 체력을 10 깎아주세요
const tirano = new Dinosaur({
    name: 'tirano'
})
tirano.chargeattack(pikachu);
pikachu.info();
tirano.info();