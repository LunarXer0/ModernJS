//Book constructo
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI constructor
function UI(){}

UI.prototype.addBookToList = function(book){
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

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(msg, className){
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
   }, 3000)

}

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
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error');
    }
    else{
        //* Add book to list
        ui.addBookToList(book);

        //* Show success
        ui.showAlert('Book Added!', 'success');
        //* Clear fields
        ui.clearFields();
    }

    

    e.preventDefault();
});

//* Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

    //* Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    //* Show Alert
    ui.showAlert('Book removed', 'success');

    
    e.preventDefault();
})