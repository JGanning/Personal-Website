import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  name: string;
  resume: string;
  edCollapsed: boolean = true;
  exCollapsed: boolean = true;
  constructor() { 
    this.name = "Joseph Ganning",
    this.resume = "Download Resume"
  }

  toggleEdCollapsed()
  {
    this.edCollapsed = !this.edCollapsed;
  }

  toggleExCollapsed()
  {
    this.exCollapsed = !this.exCollapsed;
  }

  ngOnInit() {
  }

}
