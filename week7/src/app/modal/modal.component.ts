import { Component, OnInit, Input } from '@angular/core';
import {NavParams } from '@ionic/angular';
import { FormsModule} from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonButton,IonBackButton,IonList,IonInput,IonItem, IonFooter,IonLabel, } from '@ionic/angular/standalone';
import { User } from '../model/user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone:true,
  imports:[IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonButton,IonBackButton,IonList,IonInput,IonItem,IonFooter,IonLabel,FormsModule ],
})
export class ModalComponent  {

  @Input() user:User = new User("","","");
  @Input() mode:string ="";
  @Input () indexpos:number = -1;

  constructor(private navParams:NavParams,private modalController:ModalController) { }


  closemodal(){
    let newuser = new User(this.user.firstname,this.user.lastname,this.user.email)
    this.us.updateUser(newuser,this.mode, this.indexpos);
    this.modalController.dismiss();
  }
}
