import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-action',
  templateUrl: './admin-action.component.html',
  styleUrls: ['./admin-action.component.css']
})
export class AdminActionComponent implements OnInit {

  @Input() addButtonName: string = '';
  @Input() viewButtonName: string = '';
  @Input() addLink: string = '';
  @Input() viewLink: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.addLink);
  }

}
