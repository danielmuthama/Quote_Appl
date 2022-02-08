import { Component } from '@angular/core';
import { Quote } from './quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(
      Quote.generateId(),
      "John Keats",
      "I was never afraid of failure; for I would sooner fail than not be among the greatest.",
      "James Bond",
      0,
      0,
      new Date('2022,02,08')


    ),
    new Quote(
      Quote.generateId(),
      "Harper Lee",
      "You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.",
      "Dan curson",
      0,
      0,
      new Date('2022,02,08')

    ),
    new Quote(
      Quote.generateId(),
      "Ernest Hemingway",
      "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
      "Shaddy",
      0,
      0,
      new Date('2022,02,08')

    ),
  





  ]

  newQuote(newQuote: Quote){
    this.quotes.push(newQuote);
  }

}