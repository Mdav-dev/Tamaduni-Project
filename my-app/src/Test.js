function getImageDimensions(imageSrc, callback) {
	var img = new Image();
    
	img.onload = function() {
	    var dimensions = {
		width: img.width,
		height: img.height
	    };
	    callback(null, dimensions);
	};
    
	img.onerror = function() {
	    callback("Error loading image");
	};
    
	img.src = imageSrc;
    }
    
    // Example usage
    var imageUrl = "Images/Editted/45.jpg";
    
    getImageDimensions(imageUrl, function(error, dimensions) {
	if (error) {
	    console.error(error);
	} else {
	    console.log("Image dimensions:", dimensions);
	}
    });
    