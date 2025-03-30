import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HarvestToolComponent } from './harvest-tool/harvest-tool.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HarvestToolComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harvestingTool';
}
