export default (width, height, props) => {
    return function (p5) {
        let value = props.value;
        p5.setup = () => {
            p5.strokeWeight(50);
        }

        p5.draw = () => {
            console.log(p5.frameCount)
            p5.fill(value, 16);
            p5.noStroke();
            p5.rect(0, 0, width, height);
            p5.stroke((value + 128) % 256);
            p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
        };

        p5.receiveProps = (nextProps) => {
            console.log(nextProps.value)
            value = nextProps.value;
        };

        p5.unmount = () => {
            console.log('The sketch was unmounted. Width was ' + width + ', height was ' + height);
        }
    }
};