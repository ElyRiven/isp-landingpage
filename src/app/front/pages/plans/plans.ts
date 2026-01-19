import { Component, inject } from '@angular/core';
import { IconsService } from '@front/services/lucide-icons';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'plans-page',
  imports: [LucideAngularModule],
  templateUrl: './plans.html',
})
export class PlansPage {
  protected readonly icons = inject(IconsService).icons;
}
