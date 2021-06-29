class CrewCandidate {
  constructor(name,mass,scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(newScore) {
    this.scores.push(newScore);
  }
  
  average(){
    let averageTotal = 0;
    
    for (let i = 0; i < this.scores.length; i++){
      averageTotal = averageTotal + this.scores[i];
    }
    return Math.round((averageTotal / this.scores.length)*10)/10;
  }

  status(){
    if(this.average() >= 90) {
      return "Accecpted";
    } else if (this.average() >= 80 && this.average() <= 89){
      return "Reserve";
    } else if (this.average() >= 70 && this.average() <= 79){
      return "Probationary";
    } else if (this.average() < 70){
      return "Rejected"
    }
  }
}

module.exports = CrewCandidate;