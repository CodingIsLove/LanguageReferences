

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
