import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'face-snaps';
//  Ici on dit que la propriete face snap a pour type un tableau de face snap ( voir en dessous pour comprendre la suite)


  //  Ici je déclare le projet on init et j'attribut les elements que contient la propriete faceSnap
  // Ici c'est un tableau contenant des objets 
  ngOnInit() {
  }
}
// this.title="LE JAPON";
// this.description="Un très beau pays";
// this.imageUrl="https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// this.createdDate= new Date();
// this.snaps= 0;