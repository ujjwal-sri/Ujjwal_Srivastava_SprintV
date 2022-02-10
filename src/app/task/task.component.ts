import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public showTaskTable = true;
  constructor() { }

  ngOnInit(): void {
  }
  newTask(){
    this.showTaskTable = false;
  }
}
