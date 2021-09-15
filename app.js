/**
 *
 * @param {number} W
 * @param {Number[]} wt
 * @param vi
 * @param n
 * @return {Object}
 */
function kNapSack(W, wt, vi, n) {
    if (n === 0 || W === 0) {
        return { value: 0, wt: [wt[n]], values: [] };
    }

    if (wt[n - 1] > W) {
        return kNapSack(W, wt, vi, n - 1);
    } else {
        const second = kNapSack(W, wt, vi, n - 1);
        const first = kNapSack(W - wt[n - 1], wt, vi, n - 1);
        first.value = vi[n - 1] + first.value;
        first.values.push(vi[n - 1])
        !first.wt.includes(wt[ n - 1]) && first.wt.push(wt[n - 1]);
        !second.wt.includes(wt[ n - 1]) && second.wt.push(wt[n - 1])

        if (vi[n - 1] + first.value) {
            return first;
        }
        else {
            return second;
        }
    }
}

const vi = [ 40, 100, 50, 60 ];
const wt = [ 20, 10, 40, 30 ];
const W = 60;

let kNap = kNapSack(W, wt, vi, wt.length);
console.group('Input:')
console.log('vi[]', '=', vi);
console.log('wt[]', '=', wt);
console.log('W', '=', W);
console.groupEnd()

console.group('Output:')
console.log(kNap.value)
console.log(kNap.wt.join(' '));
console.groupEnd()