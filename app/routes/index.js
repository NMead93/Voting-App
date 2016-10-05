'use strict';

module.exports = function (app) {
	app.route('/')
        .get(function (req, res) {
            res.sendFile('/home/ubuntu/workspace/public/index.html');
        });
};
