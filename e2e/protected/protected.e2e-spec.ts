import { ProtectedPage } from './protected.po';
import { PublicPage } from '../public/public.po';
import { LoginPage } from '../login/login.po'
import {browser, protractor} from "protractor/built/index";

/**
 * Created by oa on 9/28/2018.
 */

describe('protected test',()=>{

  let page:ProtectedPage;
  let publicPage:PublicPage;
  let loginPage:LoginPage;



  beforeEach(()=>
  {
    page=new ProtectedPage();
    publicPage=new PublicPage();
    loginPage=new LoginPage();

/*
    var origFn = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function() {
      var args = arguments;

      // queue 100ms wait
      origFn.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(100);
      });

      return origFn.apply(browser.driver.controlFlow(), args);
    };
*/


  });


  it('when not authenticated, if user tried to access protected page , should be redirected to login',()=>
  {
    publicPage.navigateTo();
    publicPage.logOut();
    page.navigateTo();
    expect(loginPage.getPageTitleText()).toEqual('Login');


  }
  );


  it('when user tries to access protected page without login, redirect it to login, upon successful login , redirect user to protected page attempting to access previously ',()=>
  {
    publicPage.navigateTo();
    publicPage.logOut(); // must be logged out before trying access "protected" page
    page.navigateTo();
    loginPage.fillCredentials();
    expect(page.getPageTitle()).toEqual('Protected');

  });






});



