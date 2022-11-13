import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicationPage',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {
	classicalColor= "#cccccc";
	supervisedColor= "#ffffff";
	deepColor= "#ffffff";
	blurb = "Classical Models are used for ..."
  options = ["block","none","none"];
  constructor() { }

  ngOnInit(): void {
  }

  selectClassical(): void{
    this.classicalColor= "#cccccc";
    this.supervisedColor= "#ffffff";
    this.deepColor= "#ffffff";
    this.blurb = "Classical Models are used for ..."
    this.options = ["block","none","none"];
  }
  selectSupervised(): void{
    this.classicalColor= "#ffffff";
    this.supervisedColor= "#cccccc";
    this.deepColor= "#ffffff";
    this.blurb = "Supervised Models are used for ..."
    this.options = ["none","block","none"];
  }
  selectDeep(): void{
    this.classicalColor= "#ffffff";
    this.supervisedColor= "#ffffff";
    this.deepColor= "#cccccc";
    this.blurb = "Deep Learning Models are used for ..."
    this.options = ["none","none","block"];
  }

}
