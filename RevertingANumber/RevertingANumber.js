//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
function descendingOrder(n){
    if(n >= 0)
  {  
    //console.log(typeof(n))
    let main_value = n.toString()
    let arr = []
    for (let i = 0; i < main_value.length; i++){
      arr.push(main_value[i])
    }
    console.log(parseInt(arr.sort().reverse().join().replace(/,/g, '')))
    return (parseInt(arr.sort().reverse().join().replace(/,/g, '')))
  }
  }
  descendingOrder(123456789)
  descendingOrder(1425735)


