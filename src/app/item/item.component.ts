import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})

// @Component({
//   selector: 'app-item',
//   templateUrl: './item.component.html',
//   styleUrls: ['./item.component.css'],
// })

export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}

