import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guided-lessons',
  templateUrl: './guided-lessons.component.html',
  styleUrls: ['./guided-lessons.component.scss']
})
export class GuidedLessonsComponent implements OnInit {
	lessonOne = "block"
	lessonTwo = "none"
	lessonThree = "none"
	lessonFour = "none"
	lessonFive = "none"
  constructor() { }

  ngOnInit(): void {
  }

  openLessonOne(){
  	this.lessonOne = "block"
	this.lessonTwo = "none"
	this.lessonThree = "none"
	this.lessonFour = "none"
	this.lessonFive = "none"
  }
  openLessonTwo(){
  	this.lessonOne = "none"
	this.lessonTwo = "block"
	this.lessonThree = "none"
	this.lessonFour = "none"
	this.lessonFive = "none"
  }
  openLessonThree(){
  	this.lessonOne = "none"
	this.lessonTwo = "none"
	this.lessonThree = "block"
	this.lessonFour = "none"
	this.lessonFive = "none"
  }
  openLessonFour(){
  	this.lessonOne = "none"
	this.lessonTwo = "none"
	this.lessonThree = "none"
	this.lessonFour = "block"
	this.lessonFive = "none"
  }
  openLessonFive(){
  	this.lessonOne = "none"
	this.lessonTwo = "none"
	this.lessonThree = "none"
	this.lessonFour = "none"
	this.lessonFive = "block"
  }

}
