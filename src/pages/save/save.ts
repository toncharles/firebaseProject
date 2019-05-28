import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';



@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  course = {
    'title': '',
    'price': '',
    'description': ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }

  save(course){
    //console.log(course);
    this.dbService.save(course);
  }

}
