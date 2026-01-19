import { Component, inject } from '@angular/core';
import { IconsService } from '@front/services/lucide-icons';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'coverage-page',
  imports: [LucideAngularModule],
  templateUrl: './coverage.html',
})
export class CoveragePage {
  protected readonly icons = inject(IconsService).icons;
}
