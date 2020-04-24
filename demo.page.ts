import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})

export class DemoPage implements OnInit {
@ViewChild('focusInput', { static: false }) myInput;
constructor(private nativeKeyboard: Keyboard){}

ngOnInit() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.nativeKeyboard.show();
      this.myInput.setFocus();
    }, 1300);
  }
}
