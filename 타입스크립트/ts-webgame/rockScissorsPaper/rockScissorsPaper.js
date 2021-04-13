"use strict";
let imgCoords = '0';
const rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px',
};
const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1,
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find((k) => rsp[k] === imgCoords);
}
let interval;
let point = 0;
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
        clearInterval(interval);
        setTimeout(intervalMaker, 2000);
        console.log('this: ', this);
        const myChoice = this.textContent;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)];
        const diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다.');
        }
        else if ([-1, 2].includes(diff)) {
            console.log('이겼습니다.');
            point += 1;
        }
        else {
            console.log('졌습니다.');
            point -= 1;
        }
        document.querySelector('#point').textContent = point.toString();
    });
});
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        if (document.querySelector('#computer')) {
            document.querySelector('#computer').style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`;
        }
    }, 100);
}
intervalMaker();
