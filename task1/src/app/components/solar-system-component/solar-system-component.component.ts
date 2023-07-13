import { Component, OnInit } from '@angular/core';

interface Item {
  title: string;
  description: string;
  descriptionVisible: boolean;
}

@Component({
  selector: 'app-solar-system',
  template: `
    <button class="btn-show-all" (click)="handleShowAll()">ShowAll</button>
    <button class="btn-hide-all" (click)="handleHideAll()">HideAll</button>

    <ul>
      <li *ngFor="let item of data">
        <header class="title">
          {{item.title}}
        </header>
        <article class="description" *ngIf="item.descriptionVisible">
          {{item.description}}
        </article>
        <button class="btn-toggle-description" (click)="handleToggleItemDescription(item)">ToggleDescription</button>
      </li>
    </ul>
  `,
})
export class SolarSystemComponent implements OnInit {
  data: Item[] = [
    {
      title: 'Mercury',
      description: 'The first planet in the Solar System',
      descriptionVisible: false
    },
    {
      title: 'Venus',
      description: 'The second planet in the Solar System',
      descriptionVisible: false
    },
    {
      title: 'Earth',
      description: 'The third planet in the Solar System',
      descriptionVisible: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  handleShowAll(): void {
    for (let item of this.data) {
      item.descriptionVisible = true;
    }
  }

  handleHideAll(): void {
    for (let item of this.data) {
      item.descriptionVisible = false;
    }
  }

  handleToggleItemDescription(item: Item): void {

    if (item.descriptionVisible) {
      const visiblePlanets = this.data.filter(planet => planet.descriptionVisible);
      const amountOfVisiblePlanets = visiblePlanets.length;
      if (amountOfVisiblePlanets > 1) {
        this.handleHideAll();
        item.descriptionVisible = true;
      } else {
        item.descriptionVisible = !item.descriptionVisible;
      }
    } else {
      this.handleHideAll()
      item.descriptionVisible = !item.descriptionVisible;
    }
  }

}
