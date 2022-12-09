import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap-models';
import { FaceSnapsServices } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText! : string;

  constructor(private faceSnapService: FaceSnapsServices,
              private route: ActivatedRoute){

  }

  ngOnInit() {

  // Variable pour recup l'id

  const faceSnapId = +this.route.snapshot.params['id'];
  
  this.faceSnap =this.faceSnapService.getFaceSnapById(faceSnapId)
  
  this.buttonText= "Snap!";

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

  


}
