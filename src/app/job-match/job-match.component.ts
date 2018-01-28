import { Component, Input, Output, OnInit } from '@angular/core';
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
  currentQuestion = "Hello! Welcome to your personal coaching session. Tell me about a challenge you are facing.";
  currentAnswer: string;
  result: string;
  count = 1; //use lenght of history instead
  emotion = "neutral";

  constructor(private http: HttpClient) {
  }
  evaluateEmotion(score: any): void {
    if (score >= 0.2) {
      this.emotion = "happy";
    }
    else if (-0.7 <= score && score < -0.2) {
      this.emotion = "sad";
    }
    else if (score < -0.7) {
      this.emotion = "frustrated";
    }
    else if (score < 0.2 && score >= -0.2) {
      this.emotion = "neutral";
    }
    else {
      this.emotion = "neutral";
    }
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
        let qAndA = { q: this.currentQuestion, a: this.currentAnswer };
        this.history.push(qAndA);
        if (data["question"] != null) {
          this.currentQuestion = data["question"];
        }
        else {
          this.currentQuestion = "You should reflect on what we have discussed.";
        }
        this.currentAnswer = '';
        this.count = this.count + 1;
        this.evaluateEmotion(data["sentimentScore"]);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
} 