

// Object Of Protos
const bookProtos = {
    getSummary: ()=>{
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: ()=>{
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${this.year} old.`
    }
};


// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book ONe';
book1.author = 'John Doe';
book1.year = '2013';

// Other option to create the object
const book2 = Object.create(bookProtos,{
    title:{value: 'Book ONe'},
    author:{value: 'Chris Germann'},
    year:{value: '2019'},
});

console.log(book1);
console.log(book2);
