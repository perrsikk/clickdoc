/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    get profile () { return $('a[angularticsaction="Open login iframe"] span.bold-menu-text') }
    get userIcon () { return $('.fullOpacity  app-avatar.extra-small') }
    get myProfileItem () { return $('div.dropdown-container a[routerlink="my-profile"]') }
    get logoutItem () { return $('div.dropdown-container a[angularticsaction="Open log-out iframe"]') }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     open (path: string) {
        return browser.url(`https://demo.clickdoc.de/${path}`)
    }

    async openProfile () {
        await this.profile.click();
    }    

    async openUserMenu () {
        await this.userIcon.click();
    }

    async logout () {
        await this.logoutItem.click();
    }

}
