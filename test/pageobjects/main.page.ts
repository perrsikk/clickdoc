import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get acceptCookieButton() { return $('button.agree-consent--all') }

    async acceptCookies() {
        await this.acceptCookieButton.click();
    }

    open() {
        return super.open('cd-de');
    }
}

export default new MainPage();
