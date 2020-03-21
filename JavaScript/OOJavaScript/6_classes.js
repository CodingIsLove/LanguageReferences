class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }


    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${this.year} old.`
    }

    revise(){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes & Nooble';
    }
}



// Instatiate Object
const book1 = new Book("Book ONe", "Christopher Germann", 2013);

console.log(book1);

