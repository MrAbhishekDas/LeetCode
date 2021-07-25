var reverse = function (x) {
    let rev1 = '', rev2 = '';
    if (x) {
        if (x > 0) {
            var str = x.toString();
            for (let index = str.length - 1, j = Math.floor(str.length / 2) - 1; index >= Math.ceil(str.length / 2) && j >= 0; index--, j--) {
                rev1 += str[index];
                rev2 += str[j];
            }
            if (str.length % 2 === 0) {
                if (Number(rev1 + rev2) > (2 ** 31) - 1) {
                    console.log(0);
                } else {
                    console.log(Number(rev1 + rev2));
                }
            } else {
                if (Number(rev1 + str[Math.floor(str.length / 2)] + rev2) > 2 ** 31) {
                    console.log(0);
                } else {
                    console.log(Number(rev1 + str[Math.floor(str.length / 2)] + rev2));
                }
            }
        } else {
            var str = Math.abs(x).toString();
            for (let index = str.length - 1, j = Math.floor(str.length / 2) - 1; index >= Math.ceil(str.length / 2) && j >= 0; index--, j--) {
                rev1 += str[index];
                rev2 += str[j];
            }
            if (str.length % 2 === 0) {
                if (-Number(rev1 + rev2) < -(2 ** 31)) {
                    console.log(0);
                } else {
                    console.log(-Number(rev1 + rev2));
                }
            } else {
                console.log(-Number(rev1 + str[Math.floor(str.length / 2)] + rev2));
            }
        }
    } else {
        console.log(0);
    }
};

reverse(2**31-2);