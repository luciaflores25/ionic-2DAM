import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  temp: number;
  min: number;
  max: number;
  value: number;

  constructor() { }

  ngOnInit() {
    this.temp = 0;
    this.min = 0;
    this.max = 0;
    this.value = 0;
  }

  maxMin() {
    if (this.value == this.max) {
      this.temp = 2;
      this.value = this.min;
    } else {
      this.temp = 1;
      this.value = this.max;
    }
  }

  generate() {
    this.value = +this.min + Math.floor(Math.random() * (this.max - this.min + 1));
    this.temp = 0;
  }

}
