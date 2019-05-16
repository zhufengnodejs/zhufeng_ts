export default class Todos{
  private todos:string[]=[]
  private store:any
  constructor(store:any){
    this.store=store;
  }  
  add(todo:string){
    this.todos.push(todo);
  }
  print(){
    console.log(this.todos);
  }
  save(){
    this.store.save(this.todos);
  }
}