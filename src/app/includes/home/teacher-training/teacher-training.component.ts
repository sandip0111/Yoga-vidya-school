import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teacher-training',
  standalone: true,
  imports:[CommonModule,RouterLink],
  templateUrl: './teacher-training.component.html',
  styleUrls: ['./teacher-training.component.css']
})
export class TeacherTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
