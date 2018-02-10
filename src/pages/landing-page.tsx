import { Component } from '@stencil/core';


@Component({
  tag: 'landing-page'
})
export class LandingPage {

  render() {
    return (
      <div>
        <h1>Stencil Perf Demo</h1>

        <p>
          The goal of this demo is to show smooth animations while at the same time updating 729 text nodes every second. Only one
          property is updated at the root node, which is then passed down through over 1,700 nodes every second. Additionally,
          user interactions, such as mouseenter and mouseleave, take precedence, yet should not interfer with animations and node
          updates. This demo was adopted from the
          <a href="https://claudiopro.github.io/react-fiber-vs-stack-demo/">React Fiber demo</a>.
        </p>

        <stencil-route-link url="/demo">Show Demo</stencil-route-link>
      </div>
    );
  }
}
