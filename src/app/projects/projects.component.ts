import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title: string;
  po: string;
  kru: string;
  bot: string;
  music: string;
  poCollapsed: boolean = true;
  kruCollapsed: boolean = true;
  botCollapsed: boolean = true;
  musicCollapsed: boolean = true;
  poDetails: boolean = true;
  kruDetails: boolean = true;
  botDetails: boolean = true;
  musicDetails: boolean = true;

  constructor() {
    this.title = "Projects",
    this.music = "Music Player Extension: September 2018",
    this.bot = "Bot Jingleheimer: September 2018",
    this.kru = "Kois R Us: November 2017",
    this.po = "Protection Optimization Security: April 2017"
   }

   poCollapse()
   {
    this.poCollapsed = !this.poCollapsed;
    this.poDetails = !this.poDetails;
   }

   kruCollapse()
   {
    this.kruCollapsed = !this.kruCollapsed;
    this.kruDetails = !this.kruDetails; 
   }
   botCollapse()
   {
     this.botCollapsed = !this.botCollapsed;
     this.botDetails = !this.botDetails;
   }
   musicCollapse()
   {
     this.musicCollapsed = !this.musicCollapsed;
     this.musicDetails = !this.musicDetails;
   }

  ngOnInit() {
  }

}
