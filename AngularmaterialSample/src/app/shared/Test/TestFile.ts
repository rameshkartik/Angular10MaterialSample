//https://beta-angular-material-io.firebaseapp.com/components/list/overview

// <mat-nav-list>
//         <a mat-list-item href="..." *ngFor="let link of links"> {{ link }} </a>
// </mat-nav-list>

//links:any 

//this.links = ["Portal","Admin","Blog"];

//----------------------
// <mat-nav-list>
//   <mat-list-item *ngFor="let link of links">
//      <a matLine href="...">{{ link }}</a>
//      <button mat-icon-button (click)="showInfo(link)">
//         <mat-icon>info</mat-icon>
//      </button>
//   </mat-list-item>
// </mat-nav-list>

//-----------------


// <mat-action-list>
//   <button mat-list-item (click)="save()"> Save </button>
//   <button mat-list-item (click)="undo()"> Undo </button>
// </mat-action-list>

// save() {
//     alert("save clicked");
//   }

//   undo() {
//     alert("undo clicked");
//   }



//------------------------

// <mat-list dense>
//         <mat-list-item> Pepper </mat-list-item>
//         <mat-list-item> Salt </mat-list-item>
//         <mat-list-item> Paprika </mat-list-item>
//        </mat-list>