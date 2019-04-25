import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    public erreur: string;
    public messages: [];
    public message: string;
    public messageToast: string;
    public colorToast: string;

  constructor(public MessagesService: MessagesService, public router: Router, public toastController: ToastController){}

  async toastlogout() {
      const toast = await this.toastController.create({
        message: this.messageToast,
        position: 'bottom',
        duration: 3000,
        color: this.colorToast
      });
      toast.present();
    }
    
  public getMessages(){
  this.MessagesService.doGetMessages()
    .subscribe(res => {
      this.messages = res.json();
      this.messages.reverse();
      this.getMessages();
    }, (err) => {
      this.erreur = "Erreur : " + err.status;
    });
}
  public sendMessage(){
    this.MessagesService.doSendMessages(this.message)
      .subscribe(res => {
        console.log('ok');
        this.getMessages();
        this.message="";
      }, (err) => {
        console.log("Erreur : " + err.status);
      });
}
ngOnInit() {
  if(sessionStorage.getItem('token') == null  || sessionStorage.getItem('token') == '' ){
  this.colorToast='danger';
  this.messageToast='Vous devez vous connecter';
  this.toastlogout();
  this.router.navigate(['/']);
}else{
  this.getMessages();
  }
}
}
