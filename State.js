class state {
    constructor(){}
    
    getState(){
      var StateRef  = database.ref('State');
      StateRef.on("value",function(data){
         State = data.val();
      })
     
    }
  
    
    start(){
      if(State === 0){
        player = new Voters();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
}
