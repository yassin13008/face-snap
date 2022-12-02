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



  ngOnInit() {
  this.mySnap = new FaceSnap (
    "Le Japon",
    "Un très beau pays",
    "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    new Date(),
    0,
    )
  }
}
// this.title="LE JAPON";
// this.description="Un très beau pays";
// this.imageUrl="https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// this.createdDate= new Date();
// this.snaps= 0;