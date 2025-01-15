const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    };
}

function addBooktoLibrary(title, author, pages, read) {
    const title = new Book(title, author, pages, read);
    myLibrary.push(title);
}

function displayBook() {
    
}