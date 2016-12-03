import { Angularfire2TourOfHeroesPage } from './app.po';

describe('angularfire2-tour-of-heroes App', function() {
  let page: Angularfire2TourOfHeroesPage;

  beforeEach(() => {
    page = new Angularfire2TourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
