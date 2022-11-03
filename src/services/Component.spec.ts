import Component from "./Component";
import {expect} from "chai";
import {beforeEach} from "mocha";

class ExampleComponent extends Component {
  constructor(props?) {
    super("div", props);
  }

  render() {
    return this.compile('', this.props);
  }
}

describe('Router', () => {
  let fixture;

  beforeEach(() => {
    fixture = new ExampleComponent();
  })

  it('Should set props', () => {
    fixture.setProps({test: true});
    expect(fixture.props.test).to.eq(true);
  })
})
