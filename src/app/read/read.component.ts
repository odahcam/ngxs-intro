import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'

import { Store, Select } from '@ngxs/store';

import { Tutorial } from './../models/tutorial.model'
import { TutorialState } from './../state/tutorial.state' // We will use this shortly
import { RemoveTutorial } from './../actions/tutorial.actions'

@Component({
  selector: 'app-read',
  templateUrl: 'read.component.html',
  styleUrls: ['read.component.css']
}) // Removed for brevity
export class ReadComponent implements OnInit {

  //tutorials$: Observable<Tutorial>
  @Select(TutorialState.getTutorials)
  tutorials$: Observable<Tutorial>

  constructor(private store: Store) {
      //this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name))
  }

  ngOnInit() { }

}
