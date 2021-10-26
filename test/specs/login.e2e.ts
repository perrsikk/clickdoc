import LoginPage from  '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';
import Errors from '../errors';
import * as faker from 'faker';

const validEmail = 'oezkan.peksan@cgm.com',
    validPassword = 'recruitingTest1!';

let invalidEmail: string,
    invalidPassword: string;

beforeEach(async () => {
    await MainPage.open();
    await MainPage.acceptCookies();
    await MainPage.openProfile();
});

afterEach(async () => {
    await browser.reloadSession();
});

describe('Login tests', () => {
    it('should not login without credentials', async () => {
        await LoginPage.login('', '');
        await expect(LoginPage.emailAlert).toBeExisting();
        await expect(LoginPage.emailAlert).toHaveTextContaining(Errors.EmptyEmail);
        await expect(LoginPage.passwordAlert).toBeExisting();
        await expect(LoginPage.passwordAlert).toHaveTextContaining(Errors.EmptyPassword);
    });

    it('should not login with valid email and invalid password', async () => {
        invalidPassword = faker.random.word();

        await LoginPage.login(validEmail, invalidPassword);
        await expect(LoginPage.errorContainer).toBeDisplayed();
        await expect(LoginPage.errorContainer).toHaveTextContaining(Errors.InvalidCredentials);
    });

    it('should not login with invalid email and valid password', async () => {
        invalidEmail = faker.internet.email();

        await LoginPage.login(invalidEmail, validPassword);
        await expect(LoginPage.errorContainer).toBeDisplayed();
        await expect(LoginPage.errorContainer).toHaveTextContaining(Errors.InvalidCredentials);
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login(validEmail, validPassword);
        await MainPage.openUserMenu();
        await expect(MainPage.myProfileItem).toBeDisplayed();
        await expect(MainPage.logoutItem).toBeDisplayed();
    });

    it('should logout', async () => {
        await LoginPage.login(validEmail, validPassword);
        await MainPage.openUserMenu();
        await MainPage.logout();
        await expect(MainPage.profile).toBeDisplayed();
    });
});


