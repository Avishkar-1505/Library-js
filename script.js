const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.toggleRead = function (){
        this.read = !this.read;
    }
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    pushToLib(newBook, myLibrary.length - 1);
}

let container = document.querySelector(".books");

let modal = document.querySelector(".modal");

let dialog = document.querySelector("dialog");

let addBook = document.querySelector(".add");

let closeModal = document.querySelector(".close-modal");

let form = document.querySelector("form");


function pushToLib(book, index){

    let del = document.createElement("div");
    del.innerHTML = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#f7f9fc" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
    </svg>`
    del.className = "delete";

    let yes = document.createElement("div");
    yes.innerHTML = `
        <svg class="icon toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="#f4f5f5" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
    </svg>
    `

    let no = document.createElement("div");
    no.innerHTML = `
    <svg class="icon toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path fill="#f7f7f8" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
    </svg>
    `

    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("div");
    title.innerHTML = `Title : ${book.title}`;
    card.appendChild(title);

    let auth = document.createElement("div");
    card.appendChild(auth);
    auth.innerHTML = `Author : ${book.author}`;

    let pages = document.createElement("div");
    card.appendChild(pages);
    pages.innerHTML = `Pages : ${book.pages}`;

    let read = document.createElement("div");
    read.className = "status"

    card.appendChild(read);

    read.innerHTML = `<div>Book Read</div>`;

    if(book.read){
        read.appendChild(yes);
    }
    else{
        read.appendChild(no);
    }

    read.appendChild(del)

    yes.addEventListener("click", ()=>{
        book.toggleRead();
        read.innerHTML = `<div>Book Read</div>`
        read.appendChild(no);
        read.appendChild(del);

    })

    no.addEventListener("click", ()=>{
        book.toggleRead();
        read.innerHTML = `<div>Book Read</div>`
        read.appendChild(yes);
        read.appendChild(del);
    })
        
    container.appendChild(card)

    del.addEventListener("click", ()=>{
        console.log(index)
        myLibrary.splice(index, 1);
        card.remove();
        console.log(myLibrary);
    });
}



addBookToLibrary("Why Machines Learn", "Anil Anathaswamy", 500, false);
addBookToLibrary("The 48 Laws of Power", "Robert Greene", 713, true);
addBookToLibrary("Red Rising", "Pierce Brown", 416, false);
addBookToLibrary("Solo Leveling", "Chugong", 322, true);



addBook.addEventListener("click", ()=>{

    dialog.showModal();  
})

closeModal.addEventListener("click", ()=>{
    dialog.close()
})

document.onclick = function(event) {
    if (event.target == dialog) {
        dialog.close()
     }
}

form.addEventListener("submit", (event)=>{
    // console.log("Submit")
    event.preventDefault()

    const formData = new FormData(form);

    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const read = formData.get("read");
    let status = read=="on" ? true : false;

    addBookToLibrary(title, author, pages, status);
    // console.log(myLibrary);
    dialog.close();

})
