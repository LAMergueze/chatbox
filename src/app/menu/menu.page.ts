import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public messageToast: string;
  public colorToast: string;

  pages = [
    {
      title: 'Chat room',
      url: '/menu/main',
      icon: 'chatboxes'
    },
    {
      title: 'Listes des utilisateurs',
      url: '/menu/listUsers',
      icon: 'contact'
    }
  ];

  constructor(public router: Router, public toastController: ToastController) { }

  async toastlogout() {
      const toast = await this.toastController.create({
        message: this.messageToast,
        position: 'bottom',
        duration: 3000,
        color: this.colorToast
      });
      toast.present();
    }

    public logout(){
      sessionStorage.removeItem('token');
      this.colorToast='warning';
      this.messageToast='Vous n\'êtes plus connecté';
      this.toastlogout();
      this.router.navigate(['/']);
    }

  ngOnInit() {
    if(sessionStorage.getItem('token') == null  || sessionStorage.getItem('token') == '' ){
    this.colorToast='danger';
    this.messageToast='Vous devez vous connecter';
    this.toastlogout();
    this.router.navigate(['/']);
  }
}

}
