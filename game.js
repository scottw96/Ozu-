var Ozu =
{
	// declare variables here if needed
	startButton : null,
	instructButton : null,
	creditButton : null,
	quitButton : null,
	backButton : null,
	keyboard : null,
	mouse : null,
	touchpad : null,
	background : null,
	music : null,
	selectSound : null,
	backSound : null,
	
	// load assets here
    preload: function() 
	{
		// asset ID/Key, path to asset
		
		game.load.image("menu","assets/background.png");
		game.load.image("title","assets/title-text.png");
		
		
		game.load.image("start", "assets/start.png");
		game.load.image("instructions", "assets/instructions.png");
		game.load.image("back", "assets/back.png");
		game.load.image("credits", "assets/credits.png");
		game.load.image("quit", "assets/quit.png");
		
		game.load.audio("test", "assets/select.ogg");
		game.load.audio("back", "assets/back-sound.ogg");
		game.load.audio("music", "assets/menu-music.ogg");
        
    },

    create: function() 
	{
		// no reference necessary, no not saved to a variable
		
		background = game.add.sprite(0,0,"menu");
		
		game.add.sprite(285, 75, "title");
		
		backButton = game.add.sprite(25, 600, "back");
		
		music = game.add.audio("music");
		
		backSound = game.add.audio("back");
		selectSound  = game.add.audio("test");
		
		music.play();
		
		startButton = game.add.button(205, 175, 'start', this.pressed, 2, 1, 0);
		instructButton = game.add.button(485, 175, 'instructions',this.pressed, 2, 1, 0);
		creditButton = game.add.button(205, 375, 'credits',this.pressed, 2, 1, 0);
		quitButton = game.add.button(485, 375, 'quit', this.quitClick, 2, 1, 0);
		
		
		//click control functions
		startButton.onInputOver.add(this.over);
		startButton.onInputOut.add(this.out);
		startButton.onInputUp.add(this.up);
		
		instructButton.onInputOver.add(this.over);
		instructButton.onInputOut.add(this.out);
		instructButton.onInputUp.add(this.up);
		
		creditButton.onInputOver.add(this.over);
		creditButton.onInputOut.add(this.out);
		creditButton.onInputUp.add(this.up);
		
		quitButton.onInputOver.add(this.over);
		quitButton.onInputOut.add(this.out);
		quitButton.onInputUp.add(this.up);
		
		//touch control functions
		
		startButton.events.onInputOver.add(this.startTouched);
		instructButton.events.onInputOver.add(this.instructTouched);
		creditButton.events.onInputOver.add(this.creditTouched);
		quitButton.events.onInputOver.add(this.quitTouched);

		
		
	},
	
	
	
	update: function()
	{
		backButton.visible = false;
	},
	

	
	up: function() {
    console.log('button up', arguments);
	},

	over: function() {
    console.log('button over');
	},

	out: function() {
    console.log('button out');
	},
	

	quitClick : function() {

    background.visible =! background.visible; //temporary function in place for exiting application
	backSound.play();

	},
	
	pressed : function() {
		
		selectSound.play(); //temporary function in place for switching between game screens
		
	},
	
	startTouched : function (startButton, pointer) {
		
	selectSound.play(); //temporary function in place for switching between game screens
	
	},
	
	instructTouched : function (instructButton, pointer) {
		
	selectSound.play(); //temporary function in place for switching between game screens
	
	},
	
	creditTouched : function (creditButton, pointer) {
		
	selectSound.play(); //temporary function in place for switching between game screens
	
	},
	
	quitTouched : function (quitButton, pointer) {
		
	background.visible =! background.visible;
	backSound.play(); //temporary function in place for exiting application
	
	}

}

var game = new Phaser.Game(850, 850, Phaser.AUTO, "gameArea", Ozu);