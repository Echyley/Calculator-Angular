import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result: string = "";

  constructor() { }

  public insert(num: string): void {
    this.result += num;
  }

  public clean(): void {
    this.result = '';
  }

  public back(): void {
    this.result = this.result.slice(0, -1);
  }

  public mathIt(): void {
    try {
      this.result = eval(this.result);
    } catch (e) {
      this.result = 'Erro';
    }
  }
}
