import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {
  
  constructor( private oneSignal: OneSignal,
                public platform: Platform ) {

  }

  init_notifications(){

    if (this.platform.is('cordova')){

      this.oneSignal.startInit('40f5abd8-b3fb-45c3-b6cb-8173ff33da5b', '831892322633');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
  
      this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      });
  
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });
  
      this.oneSignal.endInit();
    
    }else{
      console.log('one signal no funciona en navegador');
    }


  }

}
