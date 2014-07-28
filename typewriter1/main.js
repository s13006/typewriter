enchant();

var stage, game;

gsettings = {
  width:320
    ,height: 320
    ,fps: 5 
}


labelSet = {
  height: 32
  ,color:"#000000"
  ,font:"bold 32px fantasy"
  ,message: "ワレワレハウチュウジンダ..."
}

var eLabel = Class.create(Label,{
  initialize:function(labelSet){
    Label.call(this);
    this.color = labelSet.color;
    this.font = labelSet.font;
    this.height = labelSet.height;
    this.y = (game.height - this.height) / 2;
    this.message = labelSet.message;
    this.counter = 0;
    stage.addChild(this);
  },
onenterframe:function(){
  this.text = this.message.charAt(
    this.counter % this.message.length
    );

  this.text = this.message.substring(
    0,this.counter % this.message.length
    );
  this.counter++;
}
});

window.onload = function(){
  game = new Game(gsettings.width,gsettings.height);
  stage = game.rootScene;         
  game.fps = gsettings.fps;

  game.onload = function(){
    new eLabel(labelSet);

  };  
  game.start();
};                              
