const express = require('express');
// creando la instancia de express
const router = express.Router();
const service = require('./../models/heroes');


const list = (req,res) => 
	service.list()
	.then( response =>res.json(response))
	.catch(error => res.json({ error }));
	

const single = (req,res) => 
	service
	.list({id: req.params.id})
	.then( response =>res.json(response))
	.catch(error => res.json({ error }));



const create = (req,res) => {
  const heroe = ({id, name } = req.body);
  return service.create(heroe).then(res => res.json(res)).catch(e => res.json(e));
};

const update = (req,res) => {
  const heroe = ({id, name } = req.body);
  return service.update(req.params.id,heroe).then(res => res.json(res)).catch(e => res.json(e));
};


router.get('/:id',single);
router.get('/all', list);
router.post('/',create);
router.put('/:id',update);

module.exports = router;
