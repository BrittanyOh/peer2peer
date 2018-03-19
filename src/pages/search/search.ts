import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native';


@Component({
  selector: 'page-list',
  templateUrl: 'search.html'
})

export class SearchPage {
  public base64Image: string;


  constructor() { }

 takePicture(){
   Camera.getPicture({
     destinationType: Camera.DestinationType.DATA_URL,
     targetWidth: 1000,
     targetHeight: 1000,
   }).then(imageData) => {
     //image data is either base64 encoded string or a file URI
     //if base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
   }, (err)=>{
     console.log(err);
    });
  }
}
