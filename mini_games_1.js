let asking = true;
while (asking) {
    let choose = prompt('Your choice is : Stone, Paper, Scissor');
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'Stone';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Scissor';
    } else {
        comp = 'Paper';
    }
    console.log(comp);

    let result = '';
    let reslutTwo = '';
    if (choose == comp) {
        result = 'DRAW! 🤝🏻';
    } else if (choose == 'Stone') {
        result = (comp == 'Scissor') ? 'GOOD GAME 💫' : "YAH DON'T BE DISCOURAGED 😢";
        alert('You choose : ' + choose + ' and the computer chooses : ' + comp + '\nThen the result is : ' + result);
    } else if (choose == 'Paper') {
        result = (comp == 'Scissor') ? 'NEVER GIVE UP! 💪🏻 ' : 'NICE, YOU WIN 🥳';
        alert('You choose : ' + choose + ' and the computer chooses : ' + comp + '\nThen the result is : ' + result);
    } else if (choose == 'Scissor') {
        result = (comp == 'Stone') ? 'NO PROBLEM, KEEP PLAY AGAIN 😓' : "CONGRATS YOU'RE CHAMPION 🏆";
        alert('You choose : ' + choose + ' and the computer chooses : ' + comp + '\nThen the result is : ' + result);
    } else {
        resultTwo = ' Your choice is wrong!! 🙅🏻‍♂️';
        alert(resultTwo);
    }
    asking = confirm('Try again?');
}
alert("Thanks, you was played and have a nice day 🤩");
