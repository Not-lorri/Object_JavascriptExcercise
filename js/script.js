//Creates new car 
class Car{
    constructor(img,model,color,year,price ) {
       this.img = img;
       this.model = model;
       this.color = color;
       this.year = year;
       this.price = price;
    } 
    // Generates the Car Card 
    generateHTML = () => {
        return `<div class="car-card"> 
        <img src="${this.img}" alt="${this.model}">
        <h2 class="bruv"> <br> Model: ${this.model} <br> Color: ${this.color} <br> Year: ${this.year} <br> Price: USD ${this.price} </h2>
        </div>`;
    }
}

// Car list
const cars_List = [ 
    new Car("./img/fiat.png","Fiat", "Blue", "2015", "45000"),
    new Car("./img/ford.webp","Ford", "Black", "2001", "55000"),
    new Car("./img/dodge.jpeg","Dodge", "Red", "2010", "100000"),
    new Car("./img/bmw.png","BMW", "Yellow", "2022", "65000"),
    new Car("./img/audi.png","Audi", "Blue", "2022", "89000"),
    new Car("./img/toyota.webp","Toyota", "Green", "2018", "78000"),
    new Car("./img/lexus.webp","Lexus", "Silvergray", "2015", "200000"),
    new Car("./img/suzuki.jpeg","Suzuki", "Lightblue", "2009", "45500"),
    new Car("./img/lambo.webp","Lambogini", "Red", "2005", "150000"),
    new Car("./img/cetrone.webp","Citroen", "Orange", "2023", "90000"),
]
// Adds the cars into HTML 
const addCar = () => {

    let carContainer = document.getElementById("container")
    for(let i = 0; i < cars_List.length; i++) {
        carContainer.innerHTML += cars_List[i].generateHTML();
    }
};


// Calls the function
addCar();
