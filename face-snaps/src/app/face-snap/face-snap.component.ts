import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap-models';
import { FaceSnapsServices } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input()
  faceSnap!: FaceSnap;

  id! : number;
  title! : string;
  description! : string;
  createdDate! : Date;
  imageUrl! : string;
  snaps! : number;
  buttonText! : string;

  constructor(private faceSnapService: FaceSnapsServices,
              private router : Router){

  }

  ngOnInit() {
  this.id = 1;
  this.title = "LE JAPON ";
  this.description = " Un très beau pays"
  this.createdDate = new Date();
  this.imageUrl = "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  this.buttonText= "Snap!"
  this.snaps= 0
  }




  onSnap() {
    if (this.buttonText === "Snap!") {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'Snap!');
      this.buttonText = "UnSnap?"
    }
    else if (this.buttonText === "UnSnap?"){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'UnSnap?');
      this.buttonText = "Snap!"
    }
  }

  onViewFaceSnap() {
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
  

}


