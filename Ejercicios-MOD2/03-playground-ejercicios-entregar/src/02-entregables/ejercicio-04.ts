console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
  ];


function isBookRead(books, titleToSearch) {
  const book = books.find(book => book.title === titleToSearch);
  return book ? book.isRead : false;
}

console.log(isBookRead(books, "Canción de hielo y fuego"));