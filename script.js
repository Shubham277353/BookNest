let myLibrary = [];

function Book(title, authorName, pages, isRead, imgUrl) {
  this.title = title;
  this.authorName = authorName;
  this.pages = pages;
  this.isRead = isRead || "Not Read";
  this.imgUrl = imgUrl;
}

Book.prototype.toggleRead = function () {
  this.isRead = this.isRead == "Read" ? "Not Read" : "Read";
};

function addBookToLibrary(title, authorName, pages, isRead, imgUrl) {
  const book = new Book(title, authorName, pages, isRead, imgUrl);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
  displayLibrary();
}

addBookToLibrary(
  "The Hobbit",
  "Tolkien",
  303,
  "Not Read",
  "https://img1.od-cdn.com/ImageType-400/0293-1/%7BC9B54C84-0369-49C5-A0B3-98E3353A2129%7DIMG400.JPG"
);

addBookToLibrary(
  "Atomic Habits",
  "James Clear",
  372,
  "Not Read",
  "https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
);

addBookToLibrary(
  "Hunger Games",
  "Suzanne collins",
  310,
  "Read",
  "https://cdn.kobo.com/book-images/d7b259d7-270f-40f4-9fa4-4cf24f912687/1200/1200/False/the-hunger-games-trilogy.jpg"
);
addBookToLibrary(
  "Kite Runner",
  "Khaled Hosseini",
  275,
  "Read",
  "https://m.media-amazon.com/images/I/81IzbD2IiIL.jpg"
);

function displayLibrary(books = myLibrary) {
  let libraryContainer = document.querySelector(".library-container");
  libraryContainer.innerHTML = "";

  books.forEach((book) => {
    let bookContainer = document.createElement("div");
    let heading2 = document.createElement("h2");
    let pTag1 = document.createElement("p");
    let pTag2 = document.createElement("p");
    let image = document.createElement("img");
    let buttonContainer = document.createElement("div");
    let readButton = document.createElement("button");
    let removeButton = document.createElement("button");

    bookContainer.classList.add("book-card");
    bookContainer.setAttribute("data-id", book.id);
    buttonContainer.classList.add("btn-container");
    readButton.id = `readBtn`;
    removeButton.id = `remove-Btn`;
    heading2.textContent = `${book.title}`;
    removeButton.textContent = `Remove`;

    image.src = book.imgUrl;
    pTag1.textContent = `Author: ${book.authorName}`;
    pTag2.textContent = `Pages: ${book.pages}`;

    readButton.textContent = book.isRead;

    readButton.style.backgroundColor = book.isRead === "Read" ? "green" : "red";

    readButton.addEventListener("click", () => {
      book.toggleRead();
      readButton.textContent = book.isRead;
      readButton.style.backgroundColor =
        book.isRead === "Read" ? "green" : "red";
      console.log(myLibrary);
    });

    removeButton.addEventListener("click", () => {
      removeBook(book.id);
    });

    bookContainer.append(image);
    bookContainer.append(heading2);
    bookContainer.append(pTag1);
    bookContainer.append(pTag2);
    bookContainer.append(buttonContainer);

    buttonContainer.append(readButton);
    buttonContainer.append(removeButton);

    libraryContainer.append(bookContainer);
  });
}

const searchBar = document.querySelector("#search-bar")
searchBar.addEventListener("input",(e)=>{
  const query = e.target.value.toLowerCase();

  const filteredBooks = myLibrary.filter(books => 
    books.title.toLowerCase().includes(query)||
    books.authorName.toLowerCase().includes(query)
  );

  displayLibrary(filteredBooks);
  
});

function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }

  const bookCard = document.querySelector(`[data-id = '${id}']`);
  bookCard.remove();
}

const showButton = document.querySelector("#newBtn");
const dialog = document.querySelector("#formDialog");
const closeButton = document.querySelector("#closeBtn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

const form = document.querySelector("#dialogForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleinput = document.querySelector("#title");
  const authorinput = document.querySelector("#author-name");
  const pagesinput = document.querySelector("#pages");
  const isReadinput = document.querySelector("#isRead");
  const imageinput = document.querySelector("#img-url");

  addBookToLibrary(
    titleinput.value,
    authorinput.value,
    pagesinput.value,
    isReadinput.value,
    imageinput.value
  );

  dialog.close();
  form.reset();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

function search(){

}

displayLibrary();

console.log(myLibrary);
