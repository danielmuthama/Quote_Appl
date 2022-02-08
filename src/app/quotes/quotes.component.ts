import { Component, OnInit, Input } from "@angular/core";
import { QuotesService } from "../services/quotes.service";
import { Quotes } from "../model/quotes";
import { Quote } from "../model/quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  @Input() tagName: String;

  QuoteDay: String;
  quotes: Quotes;
  quote: Quote[] = new Array();
  quotePresent: Quote;
  count: number = 0;
  iconFav: String = "gray";

  constructor(private quoteService: QuotesService) {}

  ngOnInit() {
    this.getQuoteOfDay();
    this.getQuotes();
  }

  getQuoteOfDay() {
    this.quoteService.getQuoteofDay().subscribe(data => {
      this.QuoteDay = data.quote.body;
    });
  }

  getQuotes() {
    this.quoteService.getQuotes().subscribe((data: Quotes) => {
      this.quotes = { ...data };
      this.quote.push(...this.quotes.quotes);
      this.quotePresent = this.quote[this.count];
      console.log(this.quotePresent);
    });
  }

  showQuoteOfDay() {
    return !this.tagName ? true : false;
  }

  nextQuote() {
    if (this.count < this.quote.length - 1) {
      this.count = this.count + 1;
      this.quotePresent = this.quote[this.count];
      console.log("contador: ", this.count);
    } else {
      this.getQuotes();
      console.log(this.quote.length);
    }
  }

  likeQuote() {
    if (this.iconFav == "gray") {
      this.iconFav = "red";
    } else {
      this.iconFav = "gray";
    }
  }

  prevQuote() {
    if (this.count > 0) {
      this.count = this.count - 1;
      this.quotePresent = this.quote[this.count];
    }
  }
}
