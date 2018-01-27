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
  qAndA = {q:null, a: null};
  previousQuestion = '';
  previousAnswer = '';
  currentQuestion = "What do you want to change in your life?";
  currentAnswer: string;
  result: string;
  conversationStarted = false;
  count = 1;

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
        this.conversationStarted = true;
        this.previousQuestion = this.currentQuestion;
        this.previousAnswer = this.currentAnswer;
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