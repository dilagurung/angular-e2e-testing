"use strict";
/**
 * Created by oa on 9/27/2018.
 */
var protractor_1 = require('protractor');
var PublicPage = (function () {
    function PublicPage() {
    }
    PublicPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/'); //route to default page
    };
    PublicPage.prototype.getPageTitleText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    PublicPage.prototype.logOut = function () {
        return protractor_1.element(protractor_1.by.css('a[href="/login"]')).click();
    };
    return PublicPage;
}());
exports.PublicPage = PublicPage;
//# sourceMappingURL=public.po.js.map