const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const but = document.getElementById('bookbtn');

const myLibrary =[ 
    new Book('Book1','author1',100),
    new Book('Book2','author2',200),
    new Book('Book3','author3',300)
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks(){
    const newBook = document.getElementById('newbook');
    newBook.innerHTML = '';

    myLibrary.forEach((book,index) =>{
        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card');

        bookCard.innerHTML=`
        <h3>Title: ${book.title}</h3><br>
        <p>Author :${book.author}</p><br>
        <p>Pages: ${book.pages}</p>
        <br>
        <button id="btn" onclick= "removeBook(${index})">Remove Book</button>
        `;
        newBook.appendChild(bookCard)
    });
}

document.getElementById('addbook').addEventListener("submit", (e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const newBook = new Book(title, author, pages);
    addBookToLibrary(newBook);  
});

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

displayBooks();