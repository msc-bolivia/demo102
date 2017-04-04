import { Component, Input } from '@angular/core';

@Component({
  selector: 'msc-rockband',
  templateUrl: 'rockband.html'
})
export class RockbandComponent {

  @Input('rockband') rockband: any = {};

  constructor() {
    
  }

  showText(){
    alert(this.rockband.text);
  }

}
