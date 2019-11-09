import { Component,OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Observable,Subject} from 'rxjs';
import { locationService } from './location.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  public locations:any[];
  public flag:boolean=true;
  myPredictions = <any>[];
  public LocationName:number;
  private term:string;
  
  constructor(private locService:locationService){}
  
  ngOnInit():void{
            this.locService.search(this.term).subscribe(
            data => {
              this.locations = data;
                    })
                       
  }        
               
 onselectLocation(LocObj){
     if(LocObj.userId!=0){
       this.LocationName=LocObj.userId;
       this.flag=false;
       }
     else{
       return false;
       }
   }      
    
 }
                 
  