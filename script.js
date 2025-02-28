const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

let container = document.querySelector(".books");

function displayBooks(){

    console.log(myLibrary)

    myLibrary.forEach((book) => {
        console.log(book)
        let card = document.createElement("div");
        card.className = "card";
        let title = document.createElement("div");
        title.innerHTML = `Book Name: ${book.title}`;
        card.appendChild(title);
        let auth = document.createElement("div");
        card.appendChild(auth);
        auth.innerHTML = `Author: ${book.author}`;
        let pages = document.createElement("div");
        card.appendChild(pages);
        pages.innerHTML = `Pages: ${book.pages}`;
        let read = document.createElement("div");
        card.appendChild(read);
        read.innerHTML = book.read ? "Book Read: YES" : "Book Read: NO";

        container.appendChild(card)
    })
        
    
}

addBookToLibrary("book1", "me", 200, false);
addBookToLibrary("book2", "myself", 300, false);
addBookToLibrary("book3", "I", 400, false);
addBookToLibrary("book1", "me", 200, false);
addBookToLibrary("book2", "myself", 300, false);
addBookToLibrary("book3", "I", 400, false);
addBookToLibrary("book1", "me", 200, false);
addBookToLibrary("book2", "myself", 300, false);
addBookToLibrary("book3", "I", 400, false);

displayBooks()

