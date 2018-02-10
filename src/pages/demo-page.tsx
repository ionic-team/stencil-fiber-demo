import { Component, State } from '@stencil/core';


@Component({
  tag: 'demo-page'
})
export class DemoPage {

  @State() elapsed: number;

  componentDidLoad() {
    let start = Date.now();

    const update = () => {
      this.elapsed = Date.now() - start;
      requestAnimationFrame(update)
    }

    update();
  }

  render() {
    return (
      <div>
        <h1>Stencil Perf Demo</h1>

        <fiber-demo elapsed={this.elapsed}></fiber-demo>
      </div>
    );
  }
}
