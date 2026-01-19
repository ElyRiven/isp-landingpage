import { Component, inject } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular';

import { IconsService } from '@front/services/lucide-icons';

@Component({
  selector: 'about-page',
  imports: [LucideAngularModule],
  templateUrl: './about.html',
})
export class AboutPage {
  protected readonly icons = inject(IconsService).icons;
}
