"use strict";
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    get bookTitle() {
        return this.title;
    }
}
class LibraryBook extends Book {
    checkout() {
        console.log(`Книга "${this.bookTitle}" выдана на руки.`);
    }
}
class DigitalBook extends Book {
    checkout() {
        console.log(`Книга "${this.bookTitle}" загружена на устройство.`);
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    checkoutBook(bookTitle) {
        const book = this.books.find(b => b.bookTitle === bookTitle);
        if (book) {
            book.checkout(); // вызов метода checkout() у найденной книги
        }
        else {
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
