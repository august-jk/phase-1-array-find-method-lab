const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
]



function superbowlWin(record) {
    let newArr = {}
    newArr = record.find(function(record){
        return record.result === 'W'
    }, undefined)
   return newArr.year
}
  superbowlWin(record)