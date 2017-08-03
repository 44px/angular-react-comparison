import { ClientAngularPage } from './app.po';

describe('client-angular App', () => {
  let page: ClientAngularPage;

  beforeEach(() => {
    page = new ClientAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
