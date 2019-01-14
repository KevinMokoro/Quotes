import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
  ]
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)

  }

   upvoteQuote(value:0,):number{
     let upVote:any= this.upvoteQuote(0);
     var total=(value+upVote)
       if (total >=1){
         return total;
           //this.goals(index,1);
         }else{
           return 0;
         }
           }
  constructor() { }

  ngOnInit() {
  }

}
