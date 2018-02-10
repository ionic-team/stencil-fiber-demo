import { Component } from '@stencil/core';


@Component({
  tag: 'index-page'
})
export class IndexPage {

  render() {
    return (
      <stencil-router>
        <stencil-route
          url='/'
          component='landing-page'
          exact={true}
        />

        <stencil-route
          url='/demo'
          component='demo-page'
        />
      </stencil-router>
    );
  }
}
