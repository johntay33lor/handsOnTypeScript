//Define an interface Book with the following properties:
interface Book {
	id: number;
	title: string;
	author: string;
	published: Date;
	available: boolean;
}

//Create an array books with the type Book[] and add a few sample books to the array.
const books: Book[] = [
	{
		id: 1,
		title: "Green Eggs and Ham",
		author: "Dr. Seuss",
		published: new Date(1960, 8, 12),
		available: true,
	},
	{
		id: 2,
		title: "Where the Wild Things Are",
		author: "Maurice Sendak",
		published: new Date(1963, 4, 9),
		available: true,
	},
	{
		id: 3,
		title: "No, David",
		author: "David Shannon",
		published: new Date(1998, 9, 1),
		available: false,
	},
];

//Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
function addBook(book: Book): void {
	books.push(book);
}

//Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the 
//book with the given id or undefined if the book is not found.
function findBookById(id: number): Book | undefined {
	for (const book of books) {
		if (book.id === id) {
			return book;
		}
	}
	return undefined;
}

//   Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in the 
//   books array, and updates its properties. The function should return true if the book was updated successfully or false if the book was not found.
function updateBook(book: Book): boolean {
	const index = books.findIndex((i) => i.id === book.id);
	if (index !== -1) {
	  books[index] = book;
	  return true;
	} else {
	  return false;
	}
  }

 // Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array.
 //The function should return true if the book was removed successfully or false if the book was not found.
  function removeBook(id: number): boolean {
	const bookIndex = books.findIndex((book) => book.id === id);
	if (bookIndex !== -1) {
		books.splice(bookIndex, 1);
		return true;
	}
	return false;
  }

  // Test the functions
  console.log(books);

  addBook({
	id:4,
	title: "The Very Hungry Caterpillar",
	author: "Eric Carle",
	published: new Date(1969, 6, 3),
	available: false,
  });
  console.log(books);

  console.log(findBookById(3));

  console.log(updateBook({id: 1, title: "Green Eggs & Ham", author: "Dr. Seuss", published: new Date(2023, 6, 2), available: false,}))
  console.log(books);

  console.log(removeBook(5));
  console.log(removeBook(2));
  console.log(books);
  


	

