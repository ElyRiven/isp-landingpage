import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular';

import { IconsService } from '@front/services/lucide-icons';

@Component({
  selector: 'home-page',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './home.html',
})
export class HomePage {
  protected readonly icons = inject(IconsService).icons;
}
