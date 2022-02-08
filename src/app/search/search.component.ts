import { Component, OnInit } from "@angular/core";
import { QuotesService } from "../services/quotes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  inputTag: String;
  tagSearch: String;

  constructor(private quoteService: QuotesService) {}

  searchTagQuote(tag: String): void {
    // this.tagSearch = tag;
    // this.quoteService.getQuoteByTag(tag).subscribe(quotes => {
    //   // console.log(quotes);
    //   this.tagSearch = tag;
    // });

    this.tagSearch = tag;
  }
}
