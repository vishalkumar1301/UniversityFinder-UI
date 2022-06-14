import { Component, Input, OnInit } from '@angular/core';
import { ISchoolListItem } from 'src/app/Interface/ReceivedDataInterface/ISchoolListItemReceived';

@Component({
  selector: 'app-school-list-item',
  templateUrl: './school-list-item.component.html',
  styleUrls: ['./school-list-item.component.css']
})
export class SchoolListItemComponent implements OnInit {

  @Input() schoolListItem!: ISchoolListItem;

  constructor() { }

  ngOnInit(): void {
  }

}
