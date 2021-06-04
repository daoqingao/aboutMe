var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var duration = 1000;
// some defaults
var padding = 20;
var tweetColors = {
    'reply': [248,148,6], // orange
    'retweet': [92,145,59], // green
    'tweet': [0,136,204] // blue
};
var fisheye = d3.fisheye.circular()
    .radius(60)
    .distortion(2)
    .focus([10000, 10000]);

var Canvas = React.createClass({
    getInitialState() {
        return {
            prevTweets: [],
            tweets: [],
            animate: false,
        }
    },

    componentDidMount() {
        this.canvas =  ReactDOM.findDOMNode(this.refs.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.hiddenCtx =  ReactDOM.findDOMNode(this.refs.hiddenCanvas).getContext('2d');

        d3.select(this.canvas)
            .on('mousemove', this.mouseMove)
            .on('mouseleave', this.mouseLeave)
            .on('touchmove', this.mouseMove)
            .on('touchend', this.mouseLeave);
    },

    componentWillReceiveProps(nextProps) {
        this.scaleFactor = Math.floor(500 / nextProps.imageWidth);
        this.size = nextProps.imageWidth * this.scaleFactor + 2 * padding;

        if (nextProps.updatePositions) {
            // calculate tweet positions and interpolaters
            var tweetIndex = 0;
            _.each(nextProps.image, (pixel, i) => {
                if (!pixel) {
                    // if pixel is filled, then assign a tweet to it
                    var tweet = nextProps.tweets[tweetIndex];
                    if (!tweet) return;
                    tweetIndex += 1;

                    tweet.px = tweet.x;
                    tweet.py = tweet.y;
                    tweet.x =  (i % nextProps.imageWidth) * this.scaleFactor + this.scaleFactor / 2 + padding;
                    tweet.y =  Math.floor(i / nextProps.imageWidth) * this.scaleFactor + this.scaleFactor / 2 + padding;

                    tweet.interpolateX = d3.interpolateNumber(tweet.px || tweet.x, tweet.x);
                    tweet.interpolateY = d3.interpolateNumber(tweet.py || tweet.y, tweet.y);
                }
            });

            this.setState({tweets: nextProps.tweets});
        }
    },

    componentDidUpdate() {
        if (this.props.updatePositions) {
            // animate the pixels to their new position
            d3.timer((elapsed) => {
                this.drawCanvas(this.state.tweets, elapsed);
                return elapsed >= duration;
            });
        } else {
            this.drawCanvas(this.state.tweets);
        }
    },

    drawCanvas(tweets, elapsed) {
        //first clear canvas
        this.ctx.fillStyle = "#fff";
        this.ctx.rect(0, 0, this.size, this.size);
        this.ctx.fill();
        this.hiddenCtx.fillStyle = "#fff";
        this.hiddenCtx.rect(0, 0, this.size, this.size);
        this.hiddenCtx.fill();

        _.some(tweets, (tweet, i) => {
            var t = elapsed / duration;
            t = (t > 1 ? 1 : t);
            var fe = fisheye(tweet);
            var x = elapsed ? tweet.interpolateX(t) : fe.x;
            var y = elapsed ? tweet.interpolateY(t) : fe.y;
            var radius = (this.scaleFactor * 2 / 3) * tweet.opacity * Math.min(2, fe.z);

            // first fill the visible canvas
            if (tweet.clicked || !tweet.grayed) {
                this.ctx.fillStyle = 'rgba(' + tweetColors[tweet.type].join(',') + ',.65)';
            } else {
                this.ctx.fillStyle = 'rgba(200, 200, 200, .25)';
            }
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
            this.ctx.fill();
            if (tweet.hovered) {
                // if it's hovered, give it a stroke
                this.ctx.strokeStyle = 'rgb(255,216,85)';
                this.ctx.lineWidth = 3;
                this.ctx.stroke();
            }

            // then the hidden canvas
            this.hiddenCtx.fillStyle = tweet.uniqColor;
            this.hiddenCtx.beginPath();
            this.hiddenCtx.arc(x, y, Math.max(radius, this.scaleFactor), 0, 2 * Math.PI, true);
            this.hiddenCtx.fill();
        });
    },

    mouseMove() {
        d3.event.preventDefault();
        var [offsetX, offsetY] = d3.mouse(this.canvas) || d3.touches(this.canvas);
        // fisheye focus
        fisheye.focus([offsetX, offsetY]);

        var col = this.hiddenCtx.getImageData(offsetX, offsetY, 1, 1).data;
        var color = 'rgb(' + col[0] + "," + col[1] + ","+ col[2] + ")";

        this.props.onMouseMove(color);
    },

    mouseLeave() {
        fisheye.focus([this.size * 2, this.size * 2]);
        this.props.onMouseMove(null);
    },

    onClick(e) {
        this.props.onClick();
    },

    render() {
        return (
            <div className='canvas'>
                <canvas ref='canvas' width={this.size} height={this.size} onClick={this.onClick} />
                <canvas ref='hiddenCanvas' width={this.size} height={this.size}
                        style={{display: 'none'}} />
            </div>
        );
    }
});

module.exports = Canvas;