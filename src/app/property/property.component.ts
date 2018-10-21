import { Component, OnInit } from '@angular/core';
import { PropertyService } from './../property/services/property.service';
import { Property } from 'src/app/property/interfaces/property';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AppConfig } from '../../app.config';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [ PropertyService ]
})
export class PropertyComponent implements OnInit {

  properties: Property[] = [];
  totalItems = null;
  nextPage = null;
  noRecord = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private propertyService: PropertyService,) { }

  ngOnInit() {
    this.getMyPropertiesList();
  }

  getMyPropertiesList() {
    // const isSearchVal = this.searchForm.valid && this.searchForm.controls.employee.value;
    // const status = this.leavesFilterForm.valid && this.leavesFilterForm.controls.status.value;
    this.propertyService.getProperties()
      .subscribe((properties:Property[])=>{
        this.properties=properties;
      },
      error => {
          console.log("Error in api " + error)
        }
      );
  }

}
