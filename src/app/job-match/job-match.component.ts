import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-match',
  templateUrl: './job-match.component.html',
  styleUrls: ['./job-match.component.scss']
})
export class JobMatchComponent {
  previousQuestion = '';
  previousAnswer = '';
  currentQuestion = "What do you want to change in your life?";
  currentAnswer: string;
  result: string;
  conversationStarted = false;

  constructor(private http: HttpClient) {
  }

  onFormSubmit(): void {
    let answ: JSON;
    let obj: any =  {
      "q":this.currentAnswer
    };
    answ = <JSON>obj;
    this.http.post("http://localhost:3030/api/question", answ, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      data => {
        console.log(data);
        this.conversationStarted = true;
        this.previousQuestion = this.currentQuestion;
        this.previousAnswer = this.currentAnswer;
        this.currentAnswer = '';
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
} 