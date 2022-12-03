import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'face-snaps';
//  Ici on dit que la propriete face snap a pour type un tableau de face snap ( voir en dessous pour comprendre la suite)
  faceSnap! : FaceSnap[]

  //  Ici je déclare le projet on init et j'attribut les elements que contient la propriete faceSnap
  // Ici c'est un tableau contenant des objets 
  ngOnInit() {
  this.faceSnap= [
    {
    title : "Le Japon",
    description :"Un très beau pays",
    imageUrl : "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 50,
    location : "Tokyo"
  },
  {
    title : "Okinawa",
    description :"Une très belle plage",
    imageUrl : "https://images.pexels.com/photos/8582260/pexels-photo-8582260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 100,
    location : "Okinawa"
  },
  {
    title : "Le Mont Fuji",
    description :"Une très belle montagne",
    imageUrl : "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 150,
  },
  // J'en ai crée 3 de plus les memes pour comprendre l'exemple
  {
    title : "Le Japon",
    description :"Un très beau pays",
    imageUrl : "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 200,
    location : "Tokyo"
  },
  {
    title : "Okinawa",
    description :"Une très belle plage",
    imageUrl : "https://images.pexels.com/photos/8582260/pexels-photo-8582260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 250,
    location : "Okinawa"
  },
  {
    title : "Le Mont Fuji",
    description :"Une très belle montagne",
    imageUrl : "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 300,
  }
]

  }
}
// this.title="LE JAPON";
// this.description="Un très beau pays";
// this.imageUrl="https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// this.createdDate= new Date();
// this.snaps= 0;