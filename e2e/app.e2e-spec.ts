import { DonateTMPage } from './app.po';

describe('donate-tm App', () => {
  let page: DonateTMPage;

  beforeEach(() => {
    page = new DonateTMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
