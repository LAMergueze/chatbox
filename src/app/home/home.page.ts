import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

      public username: string;
      public password: string;
      public messageToast: string;
      public colorToast: string;

    constructor(public LoginService: LoginService, public router: Router, public toastController: ToastController){}

    async toastSignin() {
        const toast = await this.toastController.create({
          message: this.messageToast,
          position: 'bottom',
          duration: 3000,
          color: this.colorToast
        });
        toast.present();
      }

    public login(){
    this.LoginService.doLogin(this.username, this.password)
    .subscribe(res => {
      sessionStorage.setItem('token', res.json().token);
      this.messageToast= 'Bienvenue '+this.username+'!';
      this.colorToast='primary';
      this.toastSignin();
      this.router.navigate(['/menu/main']);
    }, (err) => {
      this.messageToast= 'Problème lors de la connection';
      this.colorToast='danger';
      this.toastSignin();
      return false;
    })
    }
}
