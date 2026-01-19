import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Component, inject } from '@angular/core';
import { filter } from 'rxjs/operators';

import { LucideAngularModule } from 'lucide-angular';

import { Footer } from '@front/components/footer/footer';
import { Navbar } from '@front/components/navbar/navbar';
import { IconsService } from '@front/services/lucide-icons';

@Component({
  selector: 'front-layout',
  imports: [RouterOutlet, LucideAngularModule, Navbar, Footer],
  templateUrl: './front-layout.html',
})
export class FrontLayout {
  protected readonly icons = inject(IconsService).icons;
  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0 });
    });
  }
}
