const myLibrary = [];

function Book(title, authorName, pages, imgUrl) {
  this.title = title;
  this.authorName = authorName;
  this.pages = pages;
  this.imgUrl = imgUrl;
}

function addBookToLibrary(title, authorName, pages, imgUrl) {
  const book = new Book(title, authorName, pages, imgUrl);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
}

addBookToLibrary(
  "The Hobbit",
  "Tolkien",
  295,
  "https://img1.od-cdn.com/ImageType-400/0293-1/%7BC9B54C84-0369-49C5-A0B3-98E3353A2129%7DIMG400.JPG"
);

addBookToLibrary(
  "Atomic Habits",
  "James Clear",
  320,
  "https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
);

myLibrary.forEach((book) => {
  let libraryContainer = document.querySelector(".library-container");
  let bookContainer = document.createElement("div");
  let heading2 = document.createElement("h2");
  let pTag1 = document.createElement("p");
  let pTag2 = document.createElement("p");
  let image = document.createElement("img");
  let readButton = document.createElement("btn");

  bookContainer.classList.add("book-card");
  readButton.id = `readBtn`;
  heading2.textContent = `${book.title}`;

  image.src = book.imgUrl;
  pTag1.textContent = `Author: ${book.authorName}`;
  pTag2.textContent = `Pages: ${book.pages}`;
  readButton.textContent = `Not Read`;

  book.isRead = readButton.textContent;

  readButton.addEventListener("click", () => {
    readButton.textContent =
      readButton.textContent === "Not Read" ? "Read" : "Not Read";
    readButton.style.backgroundColor =
      readButton.textContent === "Read" ? "Green" : "Red";
    book.isRead = readButton.textContent;
    console.log(myLibrary);
  });

  bookContainer.append(image);
  bookContainer.append(heading2);
  bookContainer.append(pTag1);
  bookContainer.append(pTag2);
  bookContainer.append(readButton);
  libraryContainer.append(bookContainer);
});

const showButton = document.querySelector("#newBtn");
const dialog = document.querySelector("#formDialog");
const closeButton = document.querySelector("#closeBtn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

const title = document.querySelector("#title");
const authorName = document.querySelector("#author-name");
const pages = document.querySelector("#pages");
const image = document.querySelector("#img-url");

// readButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     // if(readButton.textContent == "Read")

// })

closeButton.addEventListener("click", () => {
  dialog.close();
});

console.log(myLibrary);
