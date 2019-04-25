import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  public username: string;
  public password: string;
  public messageToast: string;
  public messageToastHeader: string;
  public colorToast: string;

  constructor(public RegisterService: RegisterService, public router: Router, public toastController: ToastController){}

  async toastSignup() {
      const toast = await this.toastController.create({
        header: this.messageToastHeader,
        message: this.messageToast,
        position: 'bottom',
        duration: 3000,
        color: this.colorToast
      });
      toast.present();
    }

  public register(){
    this.RegisterService.doRegister(this.username, this.password)
  .subscribe(res => {
    this.messageToast= 'Bien joué '+this.username+'!';
    this.messageToastHeader='Inscription réussie';
    this.colorToast='success';
    this.toastSignup();
    this.router.navigate(['/']);
  }, (err) => {
    this.messageToast='Concentre toi stp';
    this.messageToastHeader='Inscription invalide';
    this.colorToast='danger';
    this.toastSignup();
    return false;
  })
  }
}
