import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // example of streams in familiar asynchronous operations you already know

    // this will continue to emot values everytime the event occurs.
    // multi-value stream
    // multi-value streams never complete
    document.addEventListener('click', evt => {
      console.log(evt.clientX);
    })

    let counter = 0;

    // set interval will continue to stream values
    // mutli-value stream
    // multi value streams never complete - leaving commented out so not continuously running

    // setInterval(() => {
    //   console.log(counter);
    //   counter++;
    // }, 1000);

    // set timout gives only one value and then completes but is still considered a stream
    setTimeout(() => {
      console.log("finished... ")
    }, 3000)
  }

}
