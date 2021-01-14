// en model hago las peticiones
const db = require('./../db');

const list = (params = {}) => db(process.env.T_HEROES).where(params).andWhere({id: 4}).select('id','name');


const create = (obj) => db(process.env.T_HEROES).insert(obj); 	
const update = (params,obj) => db(process.env.T_HEROES).where(params).update(obj); 
module.exports = { list, create, update };
