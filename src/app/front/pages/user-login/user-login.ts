import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconsService } from '@front/services/lucide-icons';

@Component({
  selector: 'user-login-page',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './user-login.html',
})
export class UserLoginPage {
  protected readonly icons = inject(IconsService).icons;
}
