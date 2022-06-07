import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-action',
  templateUrl: './admin-action.component.html',
  styleUrls: ['./admin-action.component.css']
})
export class AdminActionComponent implements OnInit {

  @Input() buttonName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
