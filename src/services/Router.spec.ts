import Router from "./Router";
import {expect} from "chai";
import * as jsdom from 'mocha-jsdom';

describe('Router', () => {
    let fixture;

    jsdom({ url: 'http://localhost' });

    beforeEach(() => {
        fixture = new Router('app');
    })

    it('Should change history length', () => {
        fixture.go('/example-1');
        fixture.go('/example-2');
        expect(fixture.history.length).to.eq(3);
    });
});
