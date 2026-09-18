import { Component, OnDestroy } from '@angular/core';
import { Article } from "./article/article";
import { Aside } from "./aside/aside";

@Component({
  selector: 'app-home',
  imports: [Article, Aside],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnDestroy {
  public readonly title = "Bienvenidos a Angular XD"
  public childMessage: string;

  constructor(){
    this.childMessage = "xxx";
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  setChildMessage(data: any): void{
    this.childMessage = data;
  }
}
