import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconsService } from '../../services/lucide-icons';

@Component({
  selector: 'front-footer',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly icons = inject(IconsService).icons;
}
