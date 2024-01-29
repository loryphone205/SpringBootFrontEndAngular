import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  //costruttore per rotte
  constructor(private rotte: Router) {}

  //metodo per cambiare rotta in homepage
  changeHomepage() {
    this.rotte.navigate(['/homepage']);
  }

  //metodo per camboare rotta in form
  changeAbout() {
    this.rotte.navigate(['/about']);
  }
}
