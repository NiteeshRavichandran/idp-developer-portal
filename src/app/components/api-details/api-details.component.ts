import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-api-details',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, MatTabsModule],
  templateUrl: './api-details.component.html',
  styleUrl: './api-details.component.css'
})
export class ApiDetailsComponent {

}
