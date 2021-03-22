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
    if (choose == comp) {
        result = 'DRAW! 🤝🏻';
    } else if (choose == 'Stone') {
        result = (comp == 'Scissor') ? 'GOOD GAME 💫' : "YAH DON'T BE DISCOURAGED 😢";
    } else if (choose == 'Paper') {
        result = (comp == 'Scissor') ? 'NEVER GIVE UP! 💪🏻 ' : 'NICE, YOU WIN 🥳';
    } else if (choose == 'Scissor') {
        result = (comp == 'Stone') ? 'NO PROBLEM, KEEP PLAY AGAIN 😓' : "CONGRATS YOU'RE CHAMPION 🏆";
    } else {
        result = ' Your choice is wrong!! 🙅🏻‍♂️';
    }

    alert('You choose : ' + choose + ' and the computer chooses : ' + comp + '\nThen the result is : ' + result);

    asking = confirm('Try again?');
}
alert("Thanks, you was played and have a nice day 🤩");