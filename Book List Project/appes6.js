class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

class Validations{
    isValid(input){
        if(input == null || input == ''){
            return false;
        }
        else{
            return true;
        }
    }
}

class Storage {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks(){
        const books = Storage.getBooks();
        books.forEach(function(book){
            const ui = new UI;
            ui.addBookToList(book);
        });
    }
    static addBook(book){
        const books = Storage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Storage.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

class UI extends Validations{
    addBookToList(book){
        const list = document.getElementById('book-list');

        //* Create tr element
        const row = document.createElement('tr');
        //* Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(msg, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));
        //* Get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        //* Time out after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//* DOM Load Event
document.addEventListener('DOMContentLoaded', Storage.displayBooks());


//* Event Listener for Add Book
document.getElementById('book-form').addEventListener('submit', function(e){
    //* Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    //* Instantiate new book
    const book = new Book(title, author, isbn);

    //* Instantiate UI
    const ui = new UI();

    //* Validate
    if(!ui.isValid(title) || !ui.isValid(author) || !ui.isValid(isbn)){
        ui.showAlert('Please fill in all fields', 'error');
    }
    else{
        //* Add book to list
        ui.addBookToList(book);
        Storage.addBook(book);

        //* Show success
        ui.showAlert('Book Added!', 'success');
        //* Clear fields
        ui.clearFields();
    }
    e.preventDefault();
});

//* Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    let isbn = e.target.parentElement.previousElementSibling.textContent;
    
    //* Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);
    Storage.removeBook(isbn);

    //* Show Alert
    ui.showAlert('Book removed', 'success'); 
    e.preventDefault();
})