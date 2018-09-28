import {browser,by,element} from 'protractor';
export  class ProtectedPage
{
  navigateTo()
  {
    return browser.get('/protected');

  }

  getPageTitle()
  {
    return element(by.css('app-root h1')).getText();
  }




}



/**
 * Created by oa on 9/28/2018.
 */
