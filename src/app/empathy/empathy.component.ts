import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empathy',
  templateUrl: './empathy.component.html',
  styleUrls: ['./empathy.component.scss']
})
export class EmpathyComponent implements OnInit {
  @Input() emotion: string;
  src = "assets/emotion/" + this.emotion + ".png";
  constructor() { }

  ngOnInit() {
    if (this.emotion == null || this.emotion == undefined) {
      this.emotion == "neutral";
    }
    this.src = "assets/emotion/" + this.emotion + ".png";
  }

  ngOnChanges(changes) {
    console.log(changes);
    this.src = "assets/emotion/" + changes.emotion.currentValue + ".png";
}

}
