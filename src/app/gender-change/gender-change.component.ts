import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-change',
  templateUrl: './gender-change.component.html',
  styleUrls: ['./gender-change.component.scss']
})
export class GenderChangeComponent implements OnInit {
  params: any;
  public gender = 'male';
  constructor() { }
  
  ngOnInit() {
  }
  
  agInit(params: any): void {
    this.params = params;
  }

  getValue() {
    return this.gender;
  }

  getGender(value) {
    this.gender = value;
  }
}
