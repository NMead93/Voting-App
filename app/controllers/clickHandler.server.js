'use strict';

function ClickHandler (db) {
	
	var clicks = db.collection('clicks');
	
	this.getClicks = function (req, res) {
		
		var clickProjection = { '_id': false };
		
		
	}
	
}

module.exports = ClickHandler;
