import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  channels: Observable<any>;
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.channels = this.httpClient.get('http://localhost:8080/channel');
    this.channels
    .subscribe(data => {
      console.log('my data: ', data);
    });
  }
}
