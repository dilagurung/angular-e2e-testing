/**
 * Created by oa on 9/27/2018.
 */
import {browser, by , element} from 'protractor';

export  class PublicPage {

  navigateTo()
  {
    return browser.get('/'); //route to default page


  }

  getPageTitleText()
  {

    return element(by.css('app-root h1')).getText();

  }

  logOut()
  {
    return element(by.css('a[href="/login"]')).click();

  }



}
