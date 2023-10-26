import Router from "./Router";
import {expect} from "chai";
import {beforeEach} from "mocha";

describe('Router', () => {
  let fixture;

  beforeEach(() => {
    fixture = new Router('app');
  })

  it('Should change history length', () => {
    fixture.go('/example-1');
    fixture.go('/example-2');
    expect(fixture.history.length).to.eq(3);
  });
});
