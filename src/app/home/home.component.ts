import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isToggled: boolean =false;
  constructor() { }

  ngOnInit(): void {

  }

  musicChange(ref: HTMLAudioElement) {
    this.isToggled = !this.isToggled;
    if (this.isToggled){
      ref.play();
    }
    else {
      ref.pause();
    }
  }

}
