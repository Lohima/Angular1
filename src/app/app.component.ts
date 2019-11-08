import { Component,OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Observable,Subject} from 'rxjs';
import { locationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  public locations:Observable<any[]>;
  private searchTerms=new Subject<String>();
  public LocationName='';
  public flag:boolean=true;
  
  constructor(private locService:locationService){}
  
  ngOnInit():void{
     this.locations=this.searchTerms.debounceTime(300).distinctUntilChanged().
                    switchMap(term=>term?this.locService.search(term):Observable.of<any[]>([])).
                    catch(error=>{
                    console.log(error);
                    return Observable.of<any[]>([]);
                    });  
                 }
                 
 searchLocation(term:string):void{
      this.flag=true;
      this.searchTerms.next(term);
 }
 
 onselectLocation(LocObj){
     if(LocObj.LocId!=0){
       this.LocationName=LocObj.LocationName;
       this.flag=false;
       }
     else{
       return false;
       }
   }      
    
 }
                 
  