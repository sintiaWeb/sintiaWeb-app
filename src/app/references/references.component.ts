import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  //create private objects
  brews: Object;

  //dependency injection through the constructior
  constructor(private _http: HttpService) { }

  //lifecycle hook, whatever runs when component is loaded
  ngOnInit() {
    this._http.myMethod();
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    })
  }

}
