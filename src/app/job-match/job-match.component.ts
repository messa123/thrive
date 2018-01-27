import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-match',
  templateUrl: './job-match.component.html',
  styleUrls: ['./job-match.component.scss']
})
export class JobMatchComponent {
  userAnswer: string;
  result: string;

  constructor(private http: HttpClient) {
  }

  onFormSubmit(): void {
    this.http.post("http://localhost:3030/api/skills", this.userAnswer, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      data => {
        console.log("Job Match Result " + data);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
} 