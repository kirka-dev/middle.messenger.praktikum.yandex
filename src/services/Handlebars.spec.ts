import * as handlebars from "handlebars";
import {beforeEach} from "mocha";
import {expect} from "chai";

describe('HTTPTransport', () => {
  let fixture;

  beforeEach(() => {
    fixture = handlebars;
  })

  it('Should compile', () => {
    const html = fixture.compile('<div></div>')
    expect(html()).to.eq('<div></div>');
  })
})
