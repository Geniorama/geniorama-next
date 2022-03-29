const limitChar = (string, limit) => {
    let newString=""
    if(string.length > limit){
        newString = string.substring(0,limit)
    } else {
        newString = string
    }

    return {__html: newString + "..."} 
}

export default limitChar