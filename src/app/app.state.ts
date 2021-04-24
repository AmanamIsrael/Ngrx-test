import { Tutorial } from './models/tutorial.model';

export interface Appstate {
  readonly tutorial: Tutorial[];
}
