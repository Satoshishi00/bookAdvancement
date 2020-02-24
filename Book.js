export class Book {
    constructor(title, author, description, pages, currentPage, read){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }

    readBook(page){
        if(page < 1 || page > this.pages){
            return 0;
        } else {
            this.currentPage = page;
            if ( page === this.pages ){
                this.read = true;
            }
            return 1;
        }
        
    }
}

let toto = new Book("l'histoire de toto", "Y.R", "une belle histoire", 47, 47, false);
let titi = new Book("l'histoire de titi", "Y.R", "une belle histoire", 23, 23, true);
let tata = new Book("l'histoire de tata", "Y.R", "une belle histoire", 34, 34, false);

export const books = [toto, titi, tata];
