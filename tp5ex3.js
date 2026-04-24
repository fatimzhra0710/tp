function lancerQuiz(){
    let Questions=[["quelle est la capitale de la france?","paris"],
    ["3+5=?","4"]];
    let score=0;
    for (let i=0;i<Questions.length;i++){
        let questoin=Questions[i][0];
        let correct=Questions[i][1];
        let reponse=prompt(questoin);
        if(reponse.toLowerCase()===correct.toLowerCase){
             alert("reponse juste");
             score++;
        } if(reponse.toLowerCase()!==correct){
            alert("reponse fausse"); }  
    } 
alert("resulta:"+score+"/Questions.length +");   
}
