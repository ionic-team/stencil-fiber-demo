import { Component, Prop } from '@stencil/core';

var targetSize = 25;

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
    var s = this.s;
    if (s <= targetSize) {
      return (
        <fiber-dot
          x={this.x - (targetSize / 2)}
          y={this.y - (targetSize / 2)}
          size={targetSize}
          text={this.seconds.toString()}
        ></fiber-dot>
      );
    }
    s = s / 2;

    var slowDown = true;
    if (slowDown) {
      var e = performance.now() + 0.8;
      while (performance.now() < e) {
        // Artificially long execution time.
      }
    }

    return [
      <fiber-triangle
        x={this.x}
        y={this.y - (s / 2)}
        s={s}
        seconds={this.seconds}
      ></fiber-triangle>,
      <fiber-triangle
        x={this.x - s}
        y={this.y + (s / 2)}
        s={s}
        seconds={this.seconds}
      ></fiber-triangle>,
      <fiber-triangle
        x={ this.x + s}
        y={this.y + (s / 2)}
        s={s}
        seconds={this.seconds}
      ></fiber-triangle>
    ];
  }
}
