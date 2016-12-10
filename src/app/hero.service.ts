import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Promise } from 'firebase';

import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  heroes: FirebaseListObservable<Hero[]>;

  constructor(private af: AngularFire){
    this.heroes = this.af.database.list('/heroes');
  }

  getHeroes(): FirebaseListObservable<Hero[]> {
    return this.heroes;
  }

  getHero(key: string): FirebaseObjectObservable<Hero> {
    return this.af.database.object(`/heroes/${key}`);
  }

  updateHero(hero: Hero): Promise<void> {
    return this.heroes.update(hero.$key, { name: hero.name });
  }

  addHero(newHero: string): Promise<void> {
    return this.heroes.push({
      id: 100, name: newHero
    });
  }

  removeHero(hero: Hero): Promise<void> {
    return this.heroes.remove(hero.$key);
  }
}
