function fetchBooks() {
 
  // Fetching the books data from the API
fetch("https://anapioficeandfire.com/api/books")
.then((resp) => resp.json())
.then((books) => {
  
  // Finding the 5th book in the series
  const fifthBook = books[4];
  console.log("The 5th book in the series is:", fifthBook.name);
  
  // Fetching the characters data from the API
  fetch("https://anapioficeandfire.com/api/characters")
    .then((resp) => resp.json())
    .then((characters) => {
      
      // Finding the 1031st character in the series
      const character1031 = characters[1030];
      console.log("The 1031st character in the series is:", character1031.name);
      
      // Finding the total number of pages of all the books
      const totalPages = books.reduce((total, book) => total + book.numberOfPages, 0);
      console.log("The total number of pages of all the books is:", totalPages);
    });
});
 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
