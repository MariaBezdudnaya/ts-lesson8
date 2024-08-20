interface IBook { // Интерфейс IBook
    bookTitle: string;
    checkout(): void;
  }

abstract class Book implements IBook { // Абстрактный класс Book
    constructor(protected title: string, protected author: string, protected year: number) {
    }
    abstract checkout(): void;

    get bookTitle(): string {
        return this.title
    }
}

class LibraryBook extends Book { // Класс для библиотечных книг
    checkout(): void {
        console.log(`Книга "${this.bookTitle}" выдана на руки.`);
    }
}

class DigitalBook extends Book { // Класс для цифровых книг
    checkout(): void {
        console.log(`Книга "${this.bookTitle}" загружена на устройство.`);
    }
}

class Library { // Класс для библиотеки
    private books: IBook[] = [];
    addBook(book: IBook): void { // добавляет книгу в библиотеку
        this.books.push(book);
    }
    checkoutBook(bookTitle: string): void { //осуществляет выдачу книги по названию
        const book = this.books.find(b => b.bookTitle === bookTitle);
        if (book) {
            book.checkout(); // вызов метода checkout() у найденной книги
        } else {
            console.log(`Книга с названием "${bookTitle}" не найдена.`);
        }
    }
}

const library = new Library();
const libraryBook = new LibraryBook("Макбет", "Уильям Шекспир", 1564);
const digitalBook = new DigitalBook("451 градус по Фаренгейту", "Рэй Брэдбери", 1953);

library.addBook(libraryBook);
library.addBook(digitalBook);

library.checkoutBook("Макбет");
library.checkoutBook("451 градус по Фаренгейту");
library.checkoutBook("Война и мир");

