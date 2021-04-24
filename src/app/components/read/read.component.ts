import { Appstate } from './../../app.state';
import { Tutorial } from './../../models/tutorial.model';
import * as tutorialActions from './../../actions/tutorial.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  //section 1
  tutorials: Observable<Tutorial[]>;

  //section 2
  constructor(private store: Store<Appstate>) {
    this.tutorials = store.select('tutorial');
  }

  deleteTutorial(index) {
    this.store.dispatch(new tutorialActions.removeTutorial(index));
  }

  ngOnInit(): void {}
}
