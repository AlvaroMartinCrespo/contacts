import { Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  id: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // Get the id from the url
    this.id = this.route.snapshot.params['id'];
  }
}
