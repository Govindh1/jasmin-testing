import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';
import { GenderChangeComponent } from '../gender-change/gender-change.component';

// declare var Tone: any;
 
//play a middle 'C' for the duration of an 8th note

@Component({
  selector: 'app-ag-grid-example',
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.scss']
})
export class AgGridExampleComponent implements OnInit {

  synth:any;
  notes:string[] = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  octives:number[] = [1,2,3,4,5,6];
 
  msdown:boolean = false;

  public columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price', filter: "agTextColumnFilter"},
    {headerName: 'Gender', field: 'gender', editable: true, cellEditor: 'genderChangeComponent' }
  ];

  public frameworkComponents = {
    genderChangeComponent: GenderChangeComponent
  }

  public rowData = [
    {make: 'Ferrari', model: 'Roma', price: 1800000},
    {make: 'Lamborghini', model: 'Veneno', price: 271841287},
    {make: 'mercedes benz', model: 'GLC-Class', price: 5800000, gender: 'male'}
  ];
  
  constructor() {
    // const loop = new Tone();
    // console.log(loop);
    this.synth = new Tone.PolySynth(1, Tone.Synth).toMaster();
  }
  
  ngOnInit() {
  }
  
}
