const {MarkovMachine} = require('./markov')

describe('Markov machine make chains function', ()=>{

    test('Set markov chains: {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]}', ()=>{
        let test = new MarkovMachine('the cat in the hat')
        let expected = new Map([["the", ["cat", "hat"]],
                                ["cat", ["in"]],
                                ["in", ["the"]],
                                ["hat", [null]]])
        expect(test.chains).toEqual(expected)
    })
})