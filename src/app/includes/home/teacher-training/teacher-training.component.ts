import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { s3Bucket } from '../../../enum/s3Bucket';

@Component({
  selector: 'app-teacher-training',
  standalone: true,
  imports:[CommonModule,RouterLink],
  templateUrl: './teacher-training.component.html',
  styleUrls: ['./teacher-training.component.css']
})
export class TeacherTrainingComponent implements OnInit {
  s3Bucket = s3Bucket;
  constructor() { }

  ngOnInit() {
  }

}
