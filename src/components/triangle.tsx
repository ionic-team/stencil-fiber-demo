import { Component, Prop } from '@stencil/core';


const targetSize = 25;

@Component({
  tag: 'fiber-triangle',
  shadow: true
})
export class FiberTriangle {

  @Prop() x: number;
  @Prop() y: number;
  @Prop() s: number;
  @Prop() seconds: number;

  render() {
    let s = this.s;
    if (s <= targetSize) {
      return (
        <fiber-dot
          x={this.x - (targetSize / 2)}
          y={this.y - (targetSize / 2)}
          size={targetSize}
          text={this.seconds.toString()}/>
      );
    }
    s = s / 2;

    const ahhhhh = performance.now() + 1;
    while (performance.now() < ahhhhh) {
      // BRAIN FREEZE!!!!!
      // Artificially long execution time.
      // Artificially long execution time.
      // Artificially long execution time.
      // Artificially long execution time.
      // Artificially long execution time.
      // Artificially long execution time.
    }

    return [
      <fiber-triangle
        x={this.x}
        y={this.y - (s / 2)}
        s={s}
        seconds={this.seconds}/>,
      <fiber-triangle
        x={this.x - s}
        y={this.y + (s / 2)}
        s={s}
        seconds={this.seconds}/>,
      <fiber-triangle
        x={ this.x + s}
        y={this.y + (s / 2)}
        s={s}
        seconds={this.seconds}/>
    ];
  }
}
