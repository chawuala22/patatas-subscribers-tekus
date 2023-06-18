import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatatasSubscribersService {

  
  constructor() { }

  deleteSubscriptor(id:number){
    console.log('hola', id);
    
  }

}
