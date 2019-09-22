

// Object Literal
const book1 = {
    title: 'Book one',
    author: 'John Doe',
    year:'2012',
    getSummary: ()=>{return `${this.title} was written by ${this.author} in ${this.year}`}
};

const book2 = {
    title: 'Book one',
    author: 'John Doe',
    year:'2012',
    getSummary: ()=>{return `${this.title} was written by ${this.author} in ${this.year}`}
};


console.log(book1.title);
console.log(Object.values(book1));
console.log(Object.keys(book2));





