/*! Built with http://stenciljs.com */
const { h } = window.App;

class FiberDemo {
    constructor() {
        this.elapsed = 0;
        this.seconds = 0;
    }
    componentDidLoad() {
        var tick = this.tick.bind(this);
        this.intervalID = setInterval(tick, 1000);
    }
    tick() {
        this.seconds = (this.seconds % 10) + 1;
    }
    hostData() {
        const elapsed = this.elapsed;
        const t = (elapsed / 1000) % 10;
        const scale = 1 + (t > 5 ? 10 - t : t) / 10;
        var containerStyle = {
            position: 'absolute',
            transformOrigin: '0 0',
            left: '50%',
            top: '50%',
            width: '10px',
            height: '10px',
            background: '#eee',
            transform: 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)'
        };
        return {
            style: containerStyle
        };
    }
    render() {
        return (h("div", null,
            h("fiber-triangle", { x: 0, y: 0, s: 1000, seconds: this.seconds })));
    }
    static get is() { return "fiber-demo"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "elapsed": { "type": Number, "attr": "elapsed" } }; }
}

class FiberDot {
    constructor() {
        this.hover = false;
    }
    enter() {
        this.hover = true;
    }
    leave() {
        this.hover = false;
    }
    hostData() {
        const s = this.size * 1.3;
        const style = {
            position: 'absolute',
            font: 'normal 15px sans-serif',
            textAlign: 'center',
            cursor: 'pointer',
            width: s + 'px',
            height: s + 'px',
            left: (this.x) + 'px',
            top: (this.y) + 'px',
            borderRadius: (s / 2) + 'px',
            lineHeight: (s) + 'px',
            background: this.hover ? '#ff0' : '#61dafb'
        };
        return {
            style: style,
            onmouseenter: this.enter.bind(this),
            onmouseleave: this.leave.bind(this)
        };
    }
    render() {
        return (this.hover ? '**' + this.text + '**' : this.text);
    }
    static get is() { return "fiber-dot"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "hover": { "state": true }, "size": { "type": Number, "attr": "size" }, "text": { "type": String, "attr": "text" }, "x": { "type": Number, "attr": "x" }, "y": { "type": Number, "attr": "y" } }; }
}

var targetSize = 25;
class FiberTriangle {
    render() {
        var s = this.s;
        if (s <= targetSize) {
            return (h("fiber-dot", { x: this.x - (targetSize / 2), y: this.y - (targetSize / 2), size: targetSize, text: this.seconds.toString() }));
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
            h("fiber-triangle", { x: this.x, y: this.y - (s / 2), s: s, seconds: this.seconds }),
            h("fiber-triangle", { x: this.x - s, y: this.y + (s / 2), s: s, seconds: this.seconds }),
            h("fiber-triangle", { x: this.x + s, y: this.y + (s / 2), s: s, seconds: this.seconds })
        ];
    }
    static get is() { return "fiber-triangle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "s": { "type": Number, "attr": "s" }, "seconds": { "type": Number, "attr": "seconds" }, "x": { "type": Number, "attr": "x" }, "y": { "type": Number, "attr": "y" } }; }
}

export { FiberDemo, FiberDot, FiberTriangle };
