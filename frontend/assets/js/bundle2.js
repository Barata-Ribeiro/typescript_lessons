/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************************************************!*\
  !*** ./src/L0035-video-exercise/L0035-video-exercise.ts ***!
  \**********************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    videoPlayer;
    playButton;
    stopButton;
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    initEvents() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.stop();
        });
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.textContent = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.textContent = 'Play';
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.textContent = 'Play';
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.initEvents();

})();

/******/ })()
;
//# sourceMappingURL=bundle2.js.map