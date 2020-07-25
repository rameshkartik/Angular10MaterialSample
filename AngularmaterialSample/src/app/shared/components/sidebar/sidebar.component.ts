import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

 links:any 
  
  ngOnInit(): void {
    
   this.links = ["Portal","Admin","Blog"];
  }


  save() {
    alert("save clicked");
  }

  undo() {
    alert("undo clicked");
  }



 

}
