/**
 * Convert a string to title case
 * @param {String} title 
 * @param {String} minorWords 
 */

module.exports.titleCase = (title, minorWords) => {
  const titleArr = title.split(" ");
  const minorWordsArr = minorWords ? minorWords.split(" ") : [];
  let parsedTitles = [];

  titleArr.forEach((word, fIndex) => {
    let parsedWord = "";
    let excluded = false;
    minorWordsArr.forEach((minorWord) => {
      if (word.toLowerCase() === minorWord.toLowerCase() && fIndex !== 0) {
        excluded = true;
       } 
    })
    
    if (!excluded) {
         word.split('').forEach((char, index) => {
          if (index === 0) {
            parsedWord += char.toUpperCase();
          } else {
            parsedWord += char.toLowerCase();
          }
        })
    } else {
        parsedWord += word.toLowerCase();
    }
    parsedTitles.push(parsedWord);
  }) 
  
  return parsedTitles.join(" ");
}