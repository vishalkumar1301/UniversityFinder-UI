import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ISchool } from 'src/app/Interface/ISchool';
import { SchoolService } from '../school-service.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})

export class SchoolDetailsComponent implements OnInit {
  
  schoolId!: string;
  school!: ISchool;
  schoolForm!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private schoolService: SchoolService) { 
    this.route.paramMap.subscribe(params => {
      this.schoolId = params.get('id') ?? '';
    });
  }

  ngOnInit(): void {
    this.schoolService.getSchoolById(this.schoolId, (data: ISchool) => {
      this.school = data;
      console.log(this.school)
      this.schoolForm = this.schoolService.createSchoolForm(this.fb, this.school);
    });
  }

}
