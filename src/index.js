 /**
Cloudinary GIF2Video Player
Author: Dan Zeitman - Cloudinary
Cloudinary GIF2Video Player is a 2k script that swizzles all of your heavy animated gif image tags and replaces them with html5 video tags using Cloudinary's fetch and transcode feature to convert the gifs to mp4.  

This script allows you to dramatically reduce file size and memory and power consumption by using a more friendly mp4 delivery method. 

 **/
 

 (function () {

 	var scripts = document.scripts;
	var cloud,gifs;

		Array.from(document.scripts).forEach(script => {
				if (script.attributes && script.attributes.cloudname){
						cloud = script.attributes.cloudname.value;
						console.log(cloud);
				}
		});

        const observer = new MutationObserver(mutations => {
        
            mutations.forEach(mutation => {

                Array.from(mutation.addedNodes)
                    .filter(node => node.tagName === 'IMG')
                    .forEach(img => {
                    	console.log(img);
                        img.dataset.src = img.src;
                        img.src = '';
                        
                        var arr = img.dataset.src.split(".");
			 			var ext = arr[arr.length -1].toLowerCase();
			 			if (ext === "gif") {
							let srcURL = img.dataset.src; //dataset.src;
							let src =  `https://res.cloudinary.com/${cloud}/image/fetch/f_mp4/${srcURL}`;
							let poster = `https://res.cloudinary.com/${cloud}/image/fetch/f_jpg/${srcURL}`;
				 			let width = img.width;
				 			let height = img.height;
				 			
				 			var newEl = document.createElement('video');
				 			newEl.src = src;
				 			if (width) newEl.width = width; 
				 			if (height) newEl.height = height;
				 			newEl.autoplay = true;
				 			newEl.loop = true;
				 			newEl.playsinline = true;
				 			newEl.muted = true;
				 			newEl.autobuffer = true;
				 			newEl.poster = poster;
				 			img.parentNode.replaceChild(newEl, img);
			 			}

                    });
            });    
        });
        
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        }); 
}());



 	