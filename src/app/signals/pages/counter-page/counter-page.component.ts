import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  counter = signal(10);

  squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number):void {
    this.counter.update(currentValue => currentValue + value);
  }

  decreaseBy(value: number):void {
    this.counter.update(currentValue => currentValue - value);
  }
}
