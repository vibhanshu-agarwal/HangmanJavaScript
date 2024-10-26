function matchTheWord(word) {
    let regex = /tion/
    return regex.test(word);
}

// console.log(matchTheWord('predic'));