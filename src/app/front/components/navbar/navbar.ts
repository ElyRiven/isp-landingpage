import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { filter } from 'rxjs/operators';

import { LucideAngularModule } from 'lucide-angular';

import { IconsService } from '@front/services/lucide-icons';

@Component({
  selector: 'front-navbar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly icons = inject(IconsService).icons;
  protected readonly isMenuOpen = signal(false);
  private readonly router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.isMenuOpen.set(false));
  }

  toggleMobileMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }
}
