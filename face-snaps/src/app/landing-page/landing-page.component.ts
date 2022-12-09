import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  // Deuxieme technique pour voyager avec router link

  constructor (private router : Router) {}
  
  ngOnInit(): void {
   
  }


  toFaceSnap() : void {
    this.router.navigateByUrl('facesnaps')
  }


}