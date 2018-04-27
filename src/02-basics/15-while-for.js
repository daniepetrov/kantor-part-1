let l = 0;
while (l < 3) {
    console.log( i );
    l++;
}

let m = 3;
while (m) { // Ð¿ÑÐ¸ i, ÑÐ°Ð²Ð½Ð¾Ð¼ 0, Ð·Ð½Ð°ÑÐµÐ½Ð¸Ðµ Ð² ÑÐºÐ¾Ð±ÐºÐ°Ñ Ð±ÑÐ´ÐµÑ false Ð¸ ÑÐ¸ÐºÐ» Ð¾ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÑÑ
    console.log( m );
    m--;
}

for (var i = 0; i < 3; i++) {
    console.log(i);
}

let n = 0;

for (; n < 3;) {
    console.log(n);
    n++;
    // ÑÐ¸ÐºÐ» Ð¿ÑÐµÐ²ÑÐ°ÑÐ¸Ð»ÑÑ Ð² Ð°Ð½Ð°Ð»Ð¾Ð³ while (i<3)
}

for (var j = 0; j < 20; j++) {

    if (j % 2 == 0) continue;

    console.log(j);
}


for (let i = 2; i <=10; i++) {
    if(i % 2 ) continue;
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log( "Ð½Ð¾Ð¼ÐµÑ " + i + "!" );
}

var b = 0;

while(b < 3) {
    console.log( "Ð½Ð¾Ð¼ÐµÑ " + b + "!" );
    b++;
}

for (var z = 0; z < 3; z++) {
    console.log( "Ð½Ð¾Ð¼ÐµÑ " + z + "!" );
}

label:
for(let i = 2; i <= 10; i++) {
    for(let j = 2; j < i; j++) {
        if(i % j === 0)  continue label;
    }

    console.log(i);
}
