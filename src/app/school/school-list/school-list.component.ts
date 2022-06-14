import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school-service.service';
import { ISchoolListItem } from '../../Interface/ReceivedDataInterface/ISchoolListItemReceived';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schoolList!: ISchoolListItem[];

  constructor(private schoolService: SchoolService) {
    this.schoolService.getSchoolList((schoolList) => {
        this.schoolList = schoolList ? schoolList : [];
    });
  }

  ngOnInit(): void {
    console.log(this.schoolList)
  }

}
