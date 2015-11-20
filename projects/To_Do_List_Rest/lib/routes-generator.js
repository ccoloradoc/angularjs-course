/*!
 * routes-generator
 * Copyright(c) 2015 Cristian Colorado
 * MIT Licensed
 */


/* Create REST routes for entity 
 * Method     	Path				Action
 *------------------------------------------------------
 * GET 			/api/entity    		List all entities
 * POST 		/api/entity    		Add new entity
 * GET 			/api/entity/:id		View entity :id
 * PUT 			/api/entity/:id		Edit entity :id
 * DELETE		/api/entity/:id		Delete entity :id
 */

var generate = function(router, entity, db) {
	router.route('/' + entity)

		.get(function(req, res) {
	    	res.json(db[entity].getAll());   
		})

		.post(function(req, res) {
		    db[entity].save(req.body);
		    db[entity].persist();
		    res.json({ message: 'Item created!' });
		});


	router.route('/' + entity + '/:id')

		.get(function(req, res) {
		    var entity  = db[entity].find(req.params.id);
		    res.json(entity);
		})

		.put(function(req, res) {
		    db[entity].save(req.body);
		    db[entity].persist();
		    res.json({ message: 'Item updated!' });
		})

		.delete(function(req, res) {
		    db[entity].delete(req.params.id);
		    db[entity].persist();
		    res.json(db[entity].getAll());   
		});
};

/*
 *  Create a REST route for each schema in database
 */

var generateRoutes = function(router, db) {
	
	db.iterate(function(name, schema) {
		generate(router, name, db);
	});

	return router;
};

module.exports = generateRoutes;