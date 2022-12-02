import { Component,OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input()
  faceSnap!: FaceSnap;

  title! : string;
  description! : string;
  createdDate! : Date;
  imageUrl! : string;
  snaps! : number;
  buttonText! : string;

  ngOnInit() {

  this.title = "LE JAPON ";
  this.description = " Un très beau pays"
  this.createdDate = new Date();
  this.imageUrl = "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  this.buttonText= "Oh Snap!"
  this.snaps= 0
  }

  onSnap() {
    if (this.buttonText === "Oh Snap!") {
      this.faceSnap.snaps++;
      this.buttonText = "UnSnap ?"
    }
    else if (this.buttonText === "UnSnap ?"){
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!"
    }
  }

}


