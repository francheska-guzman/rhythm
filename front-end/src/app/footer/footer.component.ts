import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  // This is an inline template. Is an excellent option when is a short code.
  template: `
  <p class='footer'>
  Handmade my <a class='url' target='_blank' href='https://github.com/francheska-guzman'>Francheska Guzman</a>.
  </p>`,
  styleUrls: ['../app.component.css', './footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// console.log('FooterComponent is working.');
