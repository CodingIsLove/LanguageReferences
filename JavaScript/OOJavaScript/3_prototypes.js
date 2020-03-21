
/*
Why Prototypes?
If you add the functions via prototypes, then you will not see them in the Object itself! It is much cleaner.
It is stored in the proto properties
 */

// Constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

// Constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

// getSummary
Book.prototype.getSummary = ()=>{return `${this.title} was written by ${this.author} in ${this.year}`};


// Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this,title,author,year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);


// Instatiate Magazine Object
const mag1 = new Magazine('Mag ONe', 'John Doe','2108','Jan');

// Use Maazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);

// get age
Book.prototype.getAge = ()=>{
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${this.year} old.`
};


// Revise / Change Year
Book.prototype.revise = (newYear)=>{
    this.year = newYear;
    this.revised = true;
};

// Instatiate an Object
const book1 = new Book("Book ONe",'John Doe','2013');
const book2 = new Book("Book 2", 'Jsdfsdfsdf','2003');


console.log(book1.getSummary());
console.log(book2);
book2.revise('2019');
console.log(book2);
