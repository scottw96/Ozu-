var Songs =
{
	// declare variables here if needed
	song1 : null,
	song2 : null,
	song3 : null,
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
		
		game.load.image("menu","assets/selectBackground.png");
		game.load.image("back", "assets/back.png");
		game.load.image("KappaMikey", "assets/kappa-mikey.jpg");
		game.load.image("CowboyBebop", "assets/cowboy-bebop.jpg");
		game.load.image("Gangsta", "assets/gangsta.png");
		game.load.image("mikeyButton", "assets/mikeyButton.png");
		game.load.image("bebopButton", "assets/bebopButton.png");
		game.load.image("gangstaButton", "assets/gangstaButton.png");

		
		game.load.audio("test", "assets/select.ogg");
		game.load.audio("back", "assets/back-sound.ogg");
		game.load.audio("music", "assets/menu-music.ogg");
		
		game.load.audio("mikey", "assets/kappaMikey.ogg");
		game.load.audio("bebop", "assets/cowboyBebop.ogg");
		game.load.audio("renegade", "assets/gangsta.ogg");
		
        
    },

    create: function() 
	{
		// no reference necessary, no not saved to a variable
		
		background = game.add.sprite(0,0,"menu");
		
		
		backButton = game.add.button(25, 25, 'back', this.backPressed, 2, 1, 0);
		
		song1 = game.add.button(25, 100, 'mikeyButton', this.mikeyPressed, 2, 1, 0);
		song2 = game.add.button(25, 150, 'bebopButton', this.bebopPressed, 2, 1, 0);
		song3 = game.add.button(25, 200, 'gangstaButton', this.gangstaPressed, 2, 1, 0);
		
		music = game.add.audio("music");
		
		backSound = game.add.audio("back");
		selectSound  = game.add.audio("test");
		
		kappa = game.add.audio("mikey");
		cowboy = game.add.audio("bebop");
		gangsta = game.add.audio("renegade");
		
		
		game.input.touch.preventDefault = true;
		
		
		//click control functions
		backButton.onInputOver.add(this.over);
		backButton.onInputOut.add(this.out);
		backButton.onInputUp.add(this.up);
		
		song1.onInputOver.add(this.mikeyOver);
		song1.onInputOut.add(this.out);
		song1.onInputUp.add(this.up);
		
		song2.onInputOver.add(this.bebopOver);
		song2.onInputOut.add(this.out);
		song2.onInputUp.add(this.up);
		
		song3.onInputOver.add(this.gangstaOver);
		song3.onInputOut.add(this.out);
		song3.onInputUp.add(this.up);
		
		//touch control functions
		
		
	},
	
	
	
	update: function()
	{
		backButton.visible = true;

	},
	

	
	up: function() {
    console.log('button up', arguments);
	},
	
	over : function(){
		music.stop();
		console.log('button over');
	},
	
	out: function() {
		
    console.log('button out');

	kappa.stop();
	cowboy.stop();
	gangsta.stop();
	music.play();
	
	background.loadTexture('menu');
	
	},
	
	
	
	

	mikeyOver: function(song1, pointer) {
		
    console.log('His name is Kappa Mikey!');
	music.stop();
	kappa.play();
	
	background.loadTexture('KappaMikey');
	
	},
	
	mikeyPressed: function(song1, pointer) {
		
    console.log('Kappa Mikey Coming Soon!');
	
	},
	
	
	
	
	
	bebopOver: function(song2, pointer) {
	
	music.stop();
	cowboy.play();
	background.loadTexture('CowboyBebop');
	
	},
	
	bebopPressed : function(song2, pointer) {

	console.log('Cowboy Bebop Coming Soon!');

	},
	
	
	
	gangstaOver: function(song3, pointer) {
	
	music.stop();
	gangsta.play();
	background.loadTexture('Gangsta');
	
	},
	
	gangstaPressed : function(song3, pointer) {

	console.log('Gangsta Coming Soon!');

	},
	
	

	backPressed : function(backButton, pointer) {

	backSound.play();

	},
	
	
	

}

var game = new Phaser.Game(850, 850, Phaser.AUTO, "gameArea", Songs);