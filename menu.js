var menuScreen = 
{
	preload : function()
	{
		game.load.image("background", "assets/landscape.jpg");
		game.load.image("instructions", "assets/instructions.png");
		game.load.image("hand", "assets/hand.png");
		game.load.image("hit", "assets/hit-element-1-edit.png");
		game.load.image("back", "assets/back.png");
	},
	
	create : function()
	{
		// no reference necessary, not saved to a variable
		game.add.sprite(0,0,"background");
		game.add.sprite(80,0,"instructions");
		game.add.sprite(50,280,"hand");
		game.add.sprite(340,260,"hit");
		game.add.sprite(50,500,"back");
		
		var songText = game.add.text(180,160,"Select a song from the song list.", { font: "45px Helvetica", fill: "#ff1ab3", align: "left" });
		
		var text = game.add.text(280,320,"Tap on", { font: "45px Helvetica", fill: "#ff1ab3", align: "left" });
		
		var text2 = game.add.text(630,320,"to score points!", { font: "45px Helvetica", fill: "#ff1ab3", align: "left" });
		
		text.anchor.set(0.5);
		text2.anchor.set(0.5);
	},
	
}

var game = new Phaser.Game(1000,850, Phaser.AUTO, "gameArea", menuScreen);