import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'face-snaps';
  mySnap! : FaceSnap;
  myOtherSnap! : FaceSnap;
  myLastSnap! : FaceSnap



  ngOnInit() {
  this.mySnap = {
    title : "Le Japon",
    description :"Un très beau pays",
    imageUrl : "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 0,
    location : "Tokyo"
  };
  this.myOtherSnap = {
    title : "Okinawa",
    description :"Une très belle plage",
    imageUrl : "https://images.pexels.com/photos/8582260/pexels-photo-8582260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 0,
    location : "Okinawa"
  };
  this.myLastSnap = {
    title : "Le Mont Fuji",
    description :"Une très belle montagne",
    imageUrl : "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdDate : new Date(),
    snaps : 0,
  }
  }
}
// this.title="LE JAPON";
// this.description="Un très beau pays";
// this.imageUrl="https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// this.createdDate= new Date();
// this.snaps= 0;