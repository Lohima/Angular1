import { Injectable } from '@angular/core';  
import { Http } from '@angular/common/https';
import { Observable } from 'rxjs';

@Injectable()  
export class locationService {  
    
    endpoint:string;
    constructor (private http: Http) { 
          this.endpoint='https://jsonplaceholder.typicode.com/todos/';
        }  

   /* search(term) {
       // var listOfLoc = this.httpService.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+term+'&key=AIzaSyBqYuRpbMyjsROYwaDAAoUv8lhP7s7YJN0')
        .pipe(
            debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
            map(
                (data: any) => {
                    return (
                        data.length != 0 ? data as any[] : [{"LocationName": "No Record Found"} as any]
                        //for(i=0;i<data.length;i++){
                       // console.log(data[i]);}
                        
                    );
                }
        ));
        console.log("debug 4--------------app.component.ts");
        
        return listOfLoc;  */
        
        
        search(term:string):Observable<any[]>{
          // var LocationList=this.http.get(this.endpoint+'?term='+term).
             var LocationList=this.httpService.get(this.endpoint).
                             map((r:Response)=>{return (r.json().length !=0? 
                             r.json():[{"userId": 0,"id": 0,"title": "error message","completed": false"}]) as any[]});
                             return LocationList;
    }  
}