export class Quote {
  public showDescription:boolean;
  constructor(public id:number,public name:string, public status:string, public description:string, public postDate:Date){
    this.showDescription=false
  }
}
