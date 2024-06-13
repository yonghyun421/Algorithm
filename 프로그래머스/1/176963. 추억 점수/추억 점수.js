function solution(name, yearning, photo) {
    var answer = [];
    let new_list = {};
    for(let i = 0; i < name.length; i++) {
        new_list[name[i]] = yearning[i]
    }
    for(let j = 0; j < photo.length; j++) {
        let point = 0;
        for(let k = 0; k < photo[j].length; k++){
          if(new_list[photo[j][k]] !== undefined){
            point = point + new_list[photo[j][k]]*1
          }
        }
      
        answer.push(point)
    }
    return answer;
}
