const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title}<br>${this.author}<br>${this.pages}<br>${this.read ? 'Read' : 'Not Read'}`;
    };
}

function addBooktoLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Pre-add book
addBooktoLibrary('1984', 'George Orwell', 328, true);
addBooktoLibrary('Animal Farm', 'George Orwell', 140, true);
addBooktoLibrary('Fahrenheit 451', 'Ray Bradbury', 250, true);

function displayBook() {
    const bookShelf = document.querySelector('.bookshelf');
    bookShelf.innerHTML = '';
    for (const book of myLibrary) {
        const div = document.createElement('div');
        div.innerHTML = book.info();
        div.classList.add('book');
        bookShelf.appendChild(div);
    }
}

displayBook();