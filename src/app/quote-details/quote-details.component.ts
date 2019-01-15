import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  //@Output() isUpvote= new EventEmitter<boolean>();
//  @Output() isDownvote= new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
upVote=0;
upVotes(){
  this.upVote=this.upVote+1;
}

downVote=0;
downVotes(){
  this.downVote=this.downVote+1;
}
  //quoteDownvote(downvote:boolean){
    //this.isDownvote.emit(downvote)
  //}
  constructor() { }

  ngOnInit() {
  }

}
