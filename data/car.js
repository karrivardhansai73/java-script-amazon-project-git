class Car{
    brand;
    model;
    speed;
    constructor(brand,model,speed){
        this.brand=brand;
        this.model=model;
        this.speed=speed;
    }
    displayInfo(){
        console.log(this.brand);
        console.log(this.model);

    };
    go(){
        this.speed+=5;
        console.log(this.speed);
    }
    break(){
        this.speed-=5;
        console.log(this.speed);
    }

}
const ob1=new Car('toyota','corolla',180);
const ob2=new Car('tesla','model 3',240);
console.log(ob1,ob2);
ob1.displayInfo();
ob2.displayInfo();
ob1.go();
ob2.break();




export default Car;