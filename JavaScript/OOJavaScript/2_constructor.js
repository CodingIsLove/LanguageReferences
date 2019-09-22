

// Constructor
function Book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = ()=>{return `${this.title} was written by ${this.author} in ${this.year}`}

}

// Instatiate an Object
const book1 = new Book("Book ONe",'John Doe','2013');
const book2 = new Book("Book 2", 'Jsdfsdfsdf','2003');


console.log(book1.getSummary());
console.log(book2);
