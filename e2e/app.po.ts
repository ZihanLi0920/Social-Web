import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/landing');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
