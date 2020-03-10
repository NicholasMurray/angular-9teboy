import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Modal Dialog Autofocus';

  people = [
    { 
      name: 'Damon Albarn',
      smallPicture: 'https://picsum.photos/id/1/100/150?blur',
      largePicture: 'https://picsum.photos/id/1/400/600?blur',
    }, 
    { 
      name: 'Graham Coxon',
      smallPicture: 'https://picsum.photos/id/2/100/150?blur',
      largePicture: 'https://picsum.photos/id/2/400/600?blur',
    }, 
    { 
      name: 'Alex James',
      smallPicture: 'https://picsum.photos/id/3/100/150?blur',
      largePicture: 'https://picsum.photos/id/3/400/600?blur',
    }, 
    { 
      name: 'Dave Rowntree',
      smallPicture: 'https://picsum.photos/id/4/100/150?blur',
      largePicture: 'https://picsum.photos/id/4/400/600?blur',
    }
    ];
}
