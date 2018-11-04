import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, timer} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnInit(): void {
    // const interval$ = interval(1000);
    // interval$.subscribe(val => console.log('stream 1 => ' + val));
    // interval$.subscribe(val => console.log('stream 2 => ' + val));

    // const interval$ = timer(3000, 1000);
    // interval$.subscribe(val => console.log('stream 1 => ' + val));
    //
    // const event$ = fromEvent(document, 'click');
    // event$.subscribe(evt => console.log(evt));

  // }

  // ngOnInit() {
  //
  //   document.addEventListener('click', evt => {
  //     console.log(evt);
  //   });
  //
  //   let counter = 0;
  //   setInterval( () => {
  //     console.log(counter);
  //     counter++;
  //   }, 1000);
  //
  //   setTimeout( () => {
  //     console.log('finished...');
  //   }, 3000);
  // }

}
