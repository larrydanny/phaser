var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('screen', demo.screen);
game.state.start('screen');