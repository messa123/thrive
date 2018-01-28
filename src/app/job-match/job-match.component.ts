import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-match',
  templateUrl: './job-match.component.html',
  styleUrls: ['./job-match.component.scss']
})
export class JobMatchComponent {
  history = [];
  previousQuestion = '';
  previousAnswer = '';
  currentQuestion = "What do you want to change in your life?";
  currentAnswer: string;
  result: string;
  count = 1; //use lenght of history instead
  emotion = "neutral";

  constructor(private http: HttpClient) {
  }

  onFormSubmit(): void {
    let answ: JSON;
    let obj: any = {
      "q": this.currentAnswer
    };
    answ = <JSON>obj;
    this.http.post("http://localhost:3030/api/question/" + this.count, answ, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      data => {
        console.log(data);
        let qAndA = {q:this.currentQuestion, a: this.currentAnswer};
        this.history.push(qAndA);
        if (data["question"] != null) {
          this.currentQuestion = data["question"];
        }
        else if (data["feedback"]) {
          this.currentQuestion = data["feedback"];
        }
        this.currentAnswer = '';
        this.count = this.count + 1;
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
} 