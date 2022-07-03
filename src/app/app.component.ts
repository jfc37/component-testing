import { Component } from '@angular/core';
import { DetailsModel } from './update-details/update-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  public details: DetailsModel = {
    email: 'tom.brady@nfl.com',
    firstName: 'Tom',
    lastName: 'Brady',
  };

  public save(updatedDetails: DetailsModel): void {
    alert('Save: ' + JSON.stringify(updatedDetails));
  }
}
