import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import * as swgDef from '../../../assets/swagger_definition.json'


@Component({
  selector: 'app-api-details',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, MatTabsModule, NgFor, NgIf, CommonModule],
  templateUrl: './api-details.component.html',
  styleUrl: './api-details.component.css'
})
export class ApiDetailsComponent {

  data = swgDef;
}
