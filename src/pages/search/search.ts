import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-list',
  templateUrl: 'search.html'
})

export class SearchPage {
  image: string;


  constructor(private camera: Camera, public navCtrl: NavController) { }

  async takePicture(): Promise<any>{
    try{
    this.image = await this.camera.getPicture(this.options);
    }
    catch(e){
      console.log(e);
    }
  }
}
