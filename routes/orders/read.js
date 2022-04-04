'use strict'
const { readAll } = require('../../model')

module.exports = async function (fastify, opts) {
<<<<<<< HEAD
    fastify.get('/orders', async function (request, reply) {
        const result = await readall(this.mongo);
=======
    fastify.get('/', async function (request, reply) {
        const result = await readAll(this.mongo);
>>>>>>> 48fc11e7f3e1c324691edab1e0068d91451b697b
        
        if(result){
            reply
                .code(200)
                .header('Content-Type','application/json')
                .send(result)
              
        }reply.code(404).header('Content-Type','application/json')
    })
}
