import { Cliente } from './../../interfaces/user-options';
import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  cliente: Cliente;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData
  ) { }

  ngAfterViewInit() {
    this.getCliente();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    // const alert = await this.alertCtrl.create({
    //   header: 'Change Username',
    //   buttons: [
    //     'Cancel',
    //     {
    //       text: 'Ok',
    //       handler: (data: any) => {
    //         this.userData.setUsername(data.username);
    //         this.getUsername();
    //       }
    //     }
    //   ],
    //   inputs: [
    //     {
    //       type: 'text',
    //       name: 'username',
    //       value: this.username,
    //       placeholder: 'username'
    //     }
    //   ]
    // });
    // await alert.present();
  }

  getCliente() {
    this.userData.getCliente().then((Cliente) => {
      this.cliente = Cliente;      
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/app/tabs/schedule');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
