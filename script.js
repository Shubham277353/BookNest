const myLibrary = [];

function Book(title, authorName, pages, isRead) {
  this.title = title;
  this.authorName = authorName;
  this.pages = pages;
  this.isRead = isRead ? "Read":"Not Read";

}

function addBookToLibrary(title, authorName, pages, isRead) {
  const book = new Book(title, authorName, pages, isRead);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "Tolkien", 295, false);

addBookToLibrary("Atomic Habits", "James Clear", 320, true);

myLibrary.forEach((book) => {
    let 
})

console.log(myLibrary);
