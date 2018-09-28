import {PublicPage} from './public.po';

describe('protractor-tut -public page',()=>
{
  let page:PublicPage;

  beforeEach(()=>{
    page=new PublicPage();

  });

  it(' when user open our web page the default "public screen " should be displayed',()=>{

    page.navigateTo();
    expect(page.getPageTitleText()).toEqual('Public');
  });


}

);
