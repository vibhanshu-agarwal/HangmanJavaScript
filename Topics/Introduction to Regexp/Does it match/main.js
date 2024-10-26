function doesItMatch(string) {
    let regex = /.at/
    return regex.test(string);
}

// if (doesItMatch('cat')) {
//     console.log('It matches!');
// }