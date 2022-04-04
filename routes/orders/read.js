'use strict'
const { readall } = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.get('/orders', async function (request, reply) {
        const result = await readall(this.mongo);
        
        if(result){
            reply
                .code(200)
                .header('Content-Type','application/json')
                .send(result)
              
        }reply.code(404).header('Content-Type','application/json')
    })
}
