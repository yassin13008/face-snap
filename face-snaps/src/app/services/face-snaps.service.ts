import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap-models";

// Cela explique à Angular que ce service doit être enregistrer à la racine de root

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsServices {

//  Pour les services, il n'est pas nécessaire d'utiliser ngOnInit, cela ne marche que pour les components

    faceSnaps: FaceSnap[]= [
        {
        id : 1,
        title : "Le Japon",
        description :"Un très beau pays",
        imageUrl : "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate : new Date(),
        snaps : 50,
        location : "Tokyo"
      },
      {
        id : 2,
        title : "Okinawa",
        description :"Une très belle plage",
        imageUrl : "https://images.pexels.com/photos/8582260/pexels-photo-8582260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate : new Date(),
        snaps : 100,
        location : "Okinawa"
      },
      {
        id : 3,
        title : "Le Mont Fuji",
        description :"Une très belle montagne",
        imageUrl : "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate : new Date(),
        snaps : 150,
      },
      // J'en ai crée 3 de plus les memes pour comprendre l'exemple
      {
        id : 4,
        title : "Le Japon",
        description :"Un très beau pays",
        imageUrl : "https://images.pexels.com/photos/581299/pexels-photo-581299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate : new Date(),
        snaps : 200,
        location : "Tokyo"
      },
      {
        id : 5,
        title : "Okinawa",
        description :"Une très belle plage",
        imageUrl : "https://images.pexels.com/photos/8582260/pexels-photo-8582260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate : new Date(),
        snaps : 250,
        location : "Okinawa"
      },
      {
        id : 6,
        title : "Le Mont Fuji",
        description :"Une très belle montagne",
        imageUrl : "https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdDate : new Date(),
        snaps : 300,
      }
    ];

getAllFaceSnap(): FaceSnap[] {
  return this.faceSnaps;
}

getFaceSnapById(faceSnapId: number): FaceSnap {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (!faceSnap) {
      throw new Error('FaceSnap not found!');
  } else {
      return faceSnap;
  }
}

snapFaceSnapById(faceSnapId:number, snapType: 'Snap!' | 'UnSnap?'): void {
 const faceSnap = this.getFaceSnapById(faceSnapId);
 snapType === 'Snap!' ? faceSnap.snaps++ : faceSnap.snaps--;


}

}