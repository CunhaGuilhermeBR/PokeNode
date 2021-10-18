const axios = require('axios')

var functions = {
    searchPoke: async function(req, res) {
        if (!req.body.poke)
            res.render('page')
        else {
            const api = await returnJson(req.body.poke)
            const ability1 = api.data.abilities[0].ability.name
            const ability2 = api.data.abilities[1].ability.name
            await res.render('page', { search: true, poke: req.body.poke, imgPoke: api.data.sprites.front_default })
        }
    }
}


async function returnJson(poke) {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + poke)
    return response
}

module.exports = functions