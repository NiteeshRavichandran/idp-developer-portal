import { Component, Input, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';
import * as swgDef from '../../../assets/swagger_definition.json'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatIconModule, MatListModule, NgFor, RouterModule, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  currentYear = new Date().getFullYear();
  data = swgDef;
  shflag = false;
  shflag2 = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglefn(){
    this.shflag = !this.shflag;
  }
  togglefn2(){
    this.shflag2 = !this.shflag2;
  }

}
