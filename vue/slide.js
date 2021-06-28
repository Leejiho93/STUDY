let videoIds = [ "V0TyHhXkjsE", "nUVRTWWb-8I", "6xz_dbmYc1g"];

Vue.component('video-carousel', {
	data: function() {
		return {
			currentVideo: 0, //refers to tertiary video on leftmost; main video with be currentVideo+2
			totalVideos: 8,
			videos: [],
			videoPositions: {
				0 : "tertiary tertiary-left",
				1 : "main",
				2 : "tertiary tertiary-right"
			}
		}
	},
	computed: {
		
	},
	methods: {
		changeVideo: function(direction, position) {
			if(direction == "left") {
				this.currentVideo--;
				if(this.currentVideo < 0) {
					this.currentVideo = 2;
				}
				
			} else if (direction == "right") {
				this.currentVideo++;
				if(this.currentVideo > 2) {
					this.currentVideo = 0;
				}
			} else {
				switch(position) {
					case 'secondary secondary-right':
						this.changeVideo('left');
						break;
					case 'secondary secondary-left':
						this.changeVideo('right');
						break;
					case 'tertiary tertiary-right':
						this.changeVideo('left');
						this.changeVideo('left');
						break;
					case 'tertiary tertiary-left':
						this.changeVideo('right');
						this.changeVideo('right');
						break;
				}
			}
			
			this.videos.forEach((video, i)=>{
				video.active = false;
				let newIndex = i+this.currentVideo;
				if(newIndex > 2) {
					newIndex %= 3;
				}
				video.position = this.videoPositions[newIndex];
			});
			
		}
	},
	mounted: function() {
		//Generate array of fake carousel videos
		for (i=0; i<3; i++) {
			let videoId = videoIds[i];
			let videoImage = "https://img.youtube.com/vi/" + videoId + "/maxresdefa1ult.jpg";
			let video = {
				thumbnail: videoImage,
				position: this.videoPositions[i],
				videoId: videoId,
				active: false,
				channelName: "New Game Plus",
				channelTitle: "Running through some sweet Ninty covers",
				channelViews: 2345
			}
			
			this.videos.push(video);
		}
	}
});

let app = new Vue({
	el: '#container',
});