function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching books');
    })
    .then(data => renderBooks(data))
    .catch(error => console.log(error))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    if (main) {
      main.appendChild(h2);
    }

  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
