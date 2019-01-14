import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes =  [
  ]
  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
          }

  constructor() { }

  ngOnInit() {
  }

}
