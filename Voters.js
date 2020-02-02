class Voters {
  constructor() {
    this.index = null;
    this.email = null
    this.input = null;
    
}

Name(name)
{
  this.email=name;
}

updateCount(count) {
    database.ref('/').update({
        VoterCounts: count
    });
}

update() {
    var playerIndex = "voters/player" + this.index;
    database.ref(playerIndex).set({
        email: this.email,
        Answer: [],
        Input :this.input
    });
}
}