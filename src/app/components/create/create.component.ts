import * as tutorialActions from './../../actions/tutorial.actions';
import { Appstate } from './../../app.state';
import { Tutorial } from './../../models/tutorial.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<Appstate>) {}

  addTutorial(name, url) {
    this.store.dispatch(
      new tutorialActions.addTutorial({ name: name, url: url })
    );
  }
  ngOnInit(): void {}
}
