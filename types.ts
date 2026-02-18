import { LucideIcon } from 'lucide-react';

export enum PageView {
  HOME = 'HOME',
  SERVICE_CHARGE = 'SERVICE_CHARGE',
  DESCO = 'DESCO',
  CONTACT = 'CONTACT',
  MENU = 'MENU',
  TO_LET = 'TO_LET',
  NOTICE = 'NOTICE'
}

export interface MenuItem {
  id: string;
  title: string;
  icon: LucideIcon;
  view: PageView;
  color: string;
  description?: string;
}

export interface Notice {
  id: number;
  text: string;
  date: string;
  isUrgent: boolean;
}