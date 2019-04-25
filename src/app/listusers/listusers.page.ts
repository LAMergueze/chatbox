import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {

  public users: [];
  public messageToast: string;
  public colorToast: string;

constructor(public UsersService: UsersService, public router: Router, public toastController: ToastController){}

async toastlogout() {
    const toast = await this.toastController.create({
      message: this.messageToast,
      position: 'bottom',
      duration: 3000,
      color: this.colorToast
    });
    toast.present();
  }

  public getUsers(){
  this.UsersService.doGetUsers()
    .subscribe(res => {
      this.users = res.json();
      this.users.reverse();
    }, (err) => {
    });
}
  ngOnInit() {
    if(sessionStorage.getItem('token') == null  || sessionStorage.getItem('token') == '' ){
    this.colorToast='danger';
    this.messageToast='Vous devez vous connecter';
    this.toastlogout();
    this.router.navigate(['/']);
  }else{
    this.getUsers();
    }
  }
}
