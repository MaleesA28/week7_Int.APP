import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Storage } from '@ionic/storage-angular';
import {Observable,Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSubject=new Subject();
  public Users:User[] = [];
   private _storage:Storage | null = null;
   
 
  constructor(private storage:Storage) { 
    this.init(); 
  }
  async init(){ // create instance of the database
    const storage = await this.storage.create(); 
    this._storage = storage;
    this.get('userlist').then((val)=>{
      if (val != null){
        this.Users = val;
      }
    })
  }

  public async set(key:string,value:any){
    let result = await this._storage?.set(key,value);
  }
  public async get(key:string){
    let value = await this._storage?.get(key);
    return value;
  }
  public async remove(key:string){
    let value = await this.storage?.remove(key);
  }


  addUser(newuser:User){
    this.Users.push(newuser);
    
  }

  updateUser (user:User, mode:string, indexpos:number){
    this.userSubject.next({user:user, mode:mode, indexpos:indexpos});
  }
  getUser():Observable<any>{
    return this.userSubject.asObservable();
  }
    


}
