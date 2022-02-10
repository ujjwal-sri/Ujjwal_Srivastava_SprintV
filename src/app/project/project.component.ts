import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public showProjectTable = true;
  constructor() { }

  ngOnInit(): void {
  }
  newProject(){
    this.showProjectTable=false;
  }
}
