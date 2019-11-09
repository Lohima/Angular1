import { Injectable } from '@angular/core';  
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()  
export class locationService {  
    
    endpoint:string;
    constructor (private http: Http) { 
          this.endpoint='https://jsonplaceholder.typicode.com/todos/';
        }  

     search(term:string):Observable<any>{
          // var LocationList=this.http.get(this.endpoint+'?term='+term).
             var LocationList=this.http.get(this.endpoint).pipe(
                             map((r:Response)=>{r.json() as any}));
             
             return LocationList;
    }  
}