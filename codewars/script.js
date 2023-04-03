function checkSpam(str) {
    let newStr = str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx')
  }
  console.log(checkSpam("buy ViAgA now")); 