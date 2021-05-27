import {Component} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  step = -1;

  setStep(value: number): void {
    this.step = value;
  }

}
