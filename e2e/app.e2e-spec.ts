import { PullGeneratorPage } from './app.po';

describe('pull-generator App', function() {
  let page: PullGeneratorPage;

  beforeEach(() => {
    page = new PullGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
