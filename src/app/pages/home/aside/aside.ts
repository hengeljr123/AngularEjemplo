import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.scss',
})
export class Aside implements OnInit {
  @Input() inc: String = "";

  constructor() { }

  ngOnInit(): void { }
}
