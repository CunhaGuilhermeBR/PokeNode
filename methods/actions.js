const axios = require('axios')
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var functions = {
    searchPoke: async function(req, res) {
        if (!req.body.poke)
            res.render('page')
        else {
            try {

                P.getPokemonByName(req.body.poke.toLowerCase())
                    .then(function(poke) {
                        type1 = null, type2 = null, type1Url = null, type2Url = null
                        if (poke.types.length > 1) {
                            type1 = poke.types[0].type.name
                            type2 = poke.types[1].type.name
                            type1Url = returnUrlType(type1)
                            type2Url = returnUrlType(type2)
                        } else {
                            type1 = poke.types[0].type.name
                            type1Url = returnUrlType(type1)
                        }

                        res.render('page', {
                            poke: req.body.poke.charAt(0).toUpperCase() + req.body.poke.substr(1),
                            imgPoke: poke.sprites.front_default,
                            type1: type1,
                            type1Url: type1Url,
                            type2: type2,
                            type2Url: type2Url,
                            id: poke.id,
                        })
                    })
                    .catch(function(error) {
                        console.log('Erro: ' + error)
                    });

            } catch (error) {
                console.log('Erro: ' + error)
                res.render('page')
            }
        }
    }
}


function returnUrlType(type) {
    switch (type) {
        case 'ghost':
            return 'https://www.serebii.net/games/type/ghost.gif';
        case 'poison':
            return 'https://www.serebii.net/games/type/poison.gif';
        case 'electric':
            return 'https://www.serebii.net/games/type/electric.gif';
        case 'water':
            return 'https://www.serebii.net/games/type/water.gif';
        case 'fire':
            return 'https://www.serebii.net/games/type/fire.gif';
        case 'normal':
            return 'https://www.serebii.net/games/type/normal.gif';
        case 'flying':
            return 'https://www.serebii.net/games/type/flying.gif';
        case 'grass':
            return 'https://www.serebii.net/games/type/grass.gif';
        case 'ice':
            return 'https://www.serebii.net/games/type/ice.gif';
        case 'figth':
            return 'https://www.serebii.net/games/type/figth.gif';
        case 'ground':
            return 'https://www.serebii.net/games/type/ground.gif';
        case 'bug':
            return 'https://www.serebii.net/games/type/bug.gif';
        case 'rock':
            return 'https://www.serebii.net/games/type/rock.gif';
        case 'dragon':
            return 'https://www.serebii.net/games/type/dragon.gif';
        case 'dark':
            return 'https://www.serebii.net/games/type/dark.gif';
        case 'steel':
            return 'https://www.serebii.net/games/type/steel.gif';
        case 'fairy':
            return 'https://www.serebii.net/games/type/fairy.gif';
        case 'psychic':
            return 'https://www.serebii.net/games/type/psychic.gif';
    }
}


module.exports = functions