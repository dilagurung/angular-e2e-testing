/**
 * Created by oa on 9/28/2018.
 */
import {browser,by,element} from 'protractor';

export  class LoginPage
{
  private credentials=
    {
      username:'test',
      password:'test'
    };

  navigateTo()
  {
    return browser.get('/login')
  }

  navigateToPublic()
  {
    return browser.get('/public')
  }
  fillCredentials(credentials:any=this.credentials)
  {
    element(by.css('[name="username"]')).sendKeys(credentials.username);
    element(by.css('[name="password"]')).sendKeys(credentials.password);
    element(by.css(".btn-primary")).click();

  }

  getPageTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }


}
