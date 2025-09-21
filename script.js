let myLibrary = [];

class Book {
  constructor(title, authorName, pages, isRead, imgUrl) {
    this.title = title;
    this.authorName = authorName;
    this.pages = pages;
    this.isRead = isRead || "Not Read";
    this.imgUrl = imgUrl;
  }

  toggleRead = function () {
    this.isRead = this.isRead == "Read" ? "Not Read" : "Read";
  }
}


class Library{
  constructor(){
    this.books = [];
  }
}
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
addBookToLibrary(
  "1984",
  "George Orwell",
  328,
  "Read",
  "https://covers.openlibrary.org/b/id/7222246-L.jpg"
);

function displayLibrary(books = myLibrary) {
  const libraryContainer = document.querySelector(".library-container");
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

    image.src =
      book.imgUrl || "https://via.placeholder.com/150x220?text=No+Cover";
    image.alt = book.title;
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

const searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  const filteredBooks = myLibrary.filter(
    (books) =>
      books.title.toLowerCase().includes(query) ||
      books.authorName.toLowerCase().includes(query)
  );

  displayLibrary(filteredBooks);
});

const sortBy = document.querySelector("#sort-by");

sortBy.addEventListener("change", function () {
  const value = this.value;

  const sortedBooks = myLibrary.filter((books) => books.isRead.includes(value));

  displayLibrary(sortedBooks);
});

const toggleBtn = document.querySelector(".toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = `<svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
  } else {
    toggleBtn.innerHTML = `<svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-moon-star-icon lucide-moon-star">
                    <path d="M18 5h4" />
                    <path d="M20 3v4" />
                    <path
                        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>`;
  }
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

function search() {}

displayLibrary();

console.log(myLibrary);
