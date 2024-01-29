import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { HomepageComponent } from './COMPONENTS/homepage/homepage.component';
import { AboutComponent } from './COMPONENTS/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SpringBootTesting';
}
