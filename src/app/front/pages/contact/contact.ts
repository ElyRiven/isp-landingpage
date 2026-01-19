import { Component, inject } from '@angular/core';
import { IconsService } from '@front/services/lucide-icons';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'contact-page',
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
})
export class ContactPage {
  protected readonly icons = inject(IconsService).icons;
}
