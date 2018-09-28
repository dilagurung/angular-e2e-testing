import {LoginPage} from './login.po';
import {PublicPage} from '../public/public.po';
import {browser, protractor} from "protractor/built/index";

describe('test-login',()=>
{
  let page:LoginPage;
  let publicPage:PublicPage;

  const wrongCreds={
    username:'wrong',
    password:'wrong'
  }

  beforeEach(()=>{
    page=new LoginPage();
    publicPage=new PublicPage();
    var origFn = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function() {
      var args = arguments;

      // queue 100ms wait
      origFn.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(100);
      });

      return origFn.apply(browser.driver.controlFlow(), args);
    };





  });

  it('when user try to login with wrong credentials,stay on login page and see error notification',()=>{
    page.navigateTo();
    page.fillCredentials(wrongCreds);
    expect(page.getPageTitleText()).toEqual('Login');
    expect(page.getErrorMessage()).toEqual('Username or password is incorrect');
  });

  it('when login is successful, redirect to default public page',()=>{
    page.navigateTo();
    page.fillCredentials(); //if not fill in  default right password is used
    page.navigateToPublic();
    expect(publicPage.getPageTitleText()).toEqual('Public');
  });



});

