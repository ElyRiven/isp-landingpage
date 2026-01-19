import { Injectable } from '@angular/core';

import {
  Wifi,
  User,
  Menu,
  ArrowRight,
  Zap,
  Headphones,
  ShieldCheck,
  Check,
  Award,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  CheckCircle,
  Lock,
  CreditCard,
  KeyRound,
} from 'lucide-angular';

@Injectable({ providedIn: 'root' })
export class IconsService {
  readonly icons = {
    wifi: Wifi,
    user: User,
    menu: Menu,
    arrowRight: ArrowRight,
    zap: Zap,
    headphones: Headphones,
    shieldCheck: ShieldCheck,
    check: Check,
    award: Award,
    mapPin: MapPin,
    phone: Phone,
    mail: Mail,
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    messageCircle: MessageCircle,
    checkCircle: CheckCircle,
    lock: Lock,
    creditCard: CreditCard,
    keyRound: KeyRound,
  };
}
