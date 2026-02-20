import { Component } from '@angular/core';
import { NgOptimizedImage, ViewportScroller } from "@angular/common";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-footer-component',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
  logoPath: string = 'assets/img/logo.png';
  instaIcon: string = 'assets/img/icon/instagram.png';
  fbIcon: string = 'assets/img/icon/facebook.png';
  emailIcon: string = 'assets/img/icon/mail.png';
  telIcon: string = 'assets/img/icon/telephone.png';


  constructor(private viewportScroller: ViewportScroller) { }

  scrollTo(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
