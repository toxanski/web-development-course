var MusicPlayer = {
  trackList: [
    'song1.mp3',
    'song2.mp3',
    'song3.mp3',
  ],
	
	count: 0,
	currentTrack: function() {
		return this.trackList[this.count];
	},

  status: 'pause',

  display: function() {
		return 'Track: ' + this.currentTrack() + ', ' + ' Status: ' + this.status  + ', '  + ' Time: ' + this.currentTime;
  },

  play: function() {
    this.status = 'play';
		this.startTime();
		return 'play track';
  },

  pause: function() {
    this.status = 'pause';
		this.stopTime();
		return 'stop track';
  },

  next: function() {
		this.count++;
		if (this.count === this.trackList.length) {
			this.count = 0;
		}
		this.currentTrack(this.count);
		this.restartTime();
		return 'next track ...'
	},

  prev: function() {
		this.count--;
		if (this.count === -1) {
			this.count = this.trackList.length - 1;
		}
		this.currentTrack(this.count);
		this.restartTime();
		return '... previous track';
  },

  showTracks: function() {
		var t = this;
		this.trackList.forEach(function (item, i) {
			if (item === t.currentTrack()) {
				console.log(`${i + 1}. ${item} - играет сейчас, Time: ${t.currentTime}`); 
			} else {
				console.log(`${i + 1}. ${item}`);
			}
		});
  },

	seconds: 0,
	minute: 0,
	currentTime: 0,
	interval: 0,

	startTime: function() {

		interval = setInterval(() => {
			if (this.minute === 0 ) {
				this.minute = '0' + this.minute
			}

			this.seconds++;

			if (this.seconds === 60 ) {
				this.minute++;
				this.seconds = 0;

				(this.minute < 10) ? this.minute = '0' + this.minute: this.minute;
			}
			(this.seconds < 10) ? this.seconds = '0' + this.seconds: this.seconds; 
			this.currentTime = `${this.minute}:${this.seconds}`;
		}, 1000);
	},

	stopTime: function() {
		setTimeout(function() {
			clearInterval(this.interval);
		});
	},

	restartTime: function() {
		this.seconds = 0;
		this.minute = 0;
	}
};
// MusicPlayer.display(); // "Track: song1.mp3, Status: pause"
// MusicPlayer.play();
// MusicPlayer.display(); // "Track: song1.mp3, Status: play"
 
// MusicPlayer.display(); // "Track: song2.mp3, Status: play"
// // MusicPlayer.check();
// // document.body.innerHTML = MusicPlayer.time();
// MusicPlayer.showTracks(); // вывести в консоль список доступных треков