import { Component, OnInit, } from '@angular/core';

import { FaceSnap } from '../models/face-snap-models';
import { FaceSnapsServices } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snaps-list',
  templateUrl: './face-snaps-list.component.html',
  styleUrls: ['./face-snaps-list.component.scss']
})
export class FaceSnapsListComponent implements OnInit{

  faceSnap! : FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsServices) {}

  ngOnInit(): void {
    this.faceSnap= this.faceSnapsService.getAllFaceSnap()
  };
}
