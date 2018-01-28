import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-empathy',
  templateUrl: './empathy.component.html',
  styleUrls: ['./empathy.component.scss']
})
export class EmpathyComponent implements OnInit {
  @Input() emotion: string;
  test = "assets/pic1";
 // src = this.emotion + ".jpg";
 src = this.test + ".png";
  constructor() { }

  ngOnInit() {
    if(this.emotion == null || this.emotion == undefined){
      this.emotion == "neutral";
    }
  }

}
