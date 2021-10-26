import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginIframe () { return $('iframe#iframeDialog') } 
    get inputUsername () { return $('input[data-web-test="login_email"]') }
    get inputPassword () { return $('input[data-web-test="login_password"]') }
    get btnSubmit () { return $('button[data-web-test="login_primary_btn"]') }
    get emailAlert () { return $('#mat-error-0') }
    get passwordAlert () { return $('#mat-error-1') }
    get errorContainer () { return $('app-error-message[data-web-test="login_failed"] p') }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async waitForLoginFrame () {
        await this.loginIframe.waitForDisplayed();
    }

    async switchToLoginFrame () {
        const loginIframe = await browser.$('iframe#iframeDialog');
        await browser.switchToFrame(loginIframe);
    }

    async login (username: string, password: string) {
        await this.waitForLoginFrame();
        await this.switchToLoginFrame();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
