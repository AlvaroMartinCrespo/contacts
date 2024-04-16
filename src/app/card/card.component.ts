import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MenuModule, ToastModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  items: MenuItem[] | undefined;

  menuVisible: boolean = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() tlf: string = '';
  @Input() email: string = '';

  ngOnInit() {
    this.items = [
      { label: 'Edit', url: '/edit' },
      { label: 'Delete', url: '/delete' },
    ];
  }
}
