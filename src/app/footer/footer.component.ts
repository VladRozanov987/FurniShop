import { IFooterSocItems } from "../../ts/interface/global.interface";
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footerSocial: IFooterSocItems[] = [
    {img: './../assets/icons/footer__icons/insta.png'},
    {img: './../assets/icons/footer__icons/facebook.png'},
    {img: './../assets/icons/footer__icons/twitter.png'},
    {img: './../assets/icons/footer__icons/git.png'},
  ]

}
