
function commonCharacterCount (text1, text2) {
     let counter=0
     while (text1.length && text2.length) {
     if (text2.includes(text1.charAt(0))) {
          counter++
          text2=text2.replace (text1.charAt(0),"")
          text1=text1.slice(1)
     }
     else 
     {
         text1=text1.slice(1)
     }
}
     return counter 
}


