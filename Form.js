class Form {
    constructor() 
    {
  
        this.input=createInput('email Id');
       
      
        this.button=createButton('SUBMIT');
        this.button.position(680,200);
      
    }
  
    
  
    display(){
      
        this.input.position(500,200);
        this.button.position(680,200);
  
      this.button.mousePressed(()=>{
  
         player.Name(this.input.value);
         player.index=VoterCount;
        
       VoterCount+=1;
        player.update();
        player.updateCount(VoterCount);
       
      });
  
    }
  }
  