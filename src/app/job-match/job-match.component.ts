import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-match',
  templateUrl: './job-match.component.html',
  styleUrls: ['./job-match.component.scss']
})
export class JobMatchComponent {
  userForm = new FormGroup({
    q1: new FormControl(),
    q2: new FormControl(),
    q3: new FormControl()
  });
  result: string;

  constructor(private http: HttpClient) {
  }

  onFormSubmit(): void {
    let data = {q1: this.userForm.controls['q1'], q2: this.userForm.controls['q2'], q3: this.userForm.controls['q3']};
    this.http.post("http://localhost:3030/skills", this.userForm, { headers: { 'Content-Type': 'application/json' } }).subscribe(
      data => {
        console.log("Job Match Result " + data);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
} 