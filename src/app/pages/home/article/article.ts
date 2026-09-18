import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-article',
  imports: [MatButtonModule],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article implements OnInit {
  @Output() hello;
  public inc: number = 0;
  public items: string[] = ["CR7", "Messi", "Halaand"];


  constructor() {
    this.hello = new EventEmitter<string>();
  }

  ngOnInit(): void { }

    helloDad(): void { // ESte es el hijo
      //this.inc = this.inc + 1;
      this.hello.emit(String(this.inc++));
      //this.hello.emit("Hola Tato, te pones bien hot con chelas");
    }
}
