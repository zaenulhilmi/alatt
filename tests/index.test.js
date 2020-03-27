let { array } = require('../index')
let { get } = array

describe('Testing index file', () => {

    test('basic test', () => {
        expect(true).toBe(true)
    })


    test('test returning undefined if it has no key', () => {
        let greet = get('notThere', {greet: 'hello'})
        expect(greet).toBe(undefined)
    })


    test('testing get method can access key of object', () => {
        let greet = get('greet', {greet: 'hello'})
        expect(greet).toBe('hello')
    })

    test('testing get method can access element of element of object', () => {
        let personName  = get('person.name', {person: {name: 'John Doe'}})
        expect(personName).toBe('John Doe')
    })


    test('testing get method can access element of element of element of an object', () => {
        let firstName  = get('person.name.first', {person: {name: {first: 'John', last: 'Doe'}}})
        expect(firstName).toBe('John')
    })

    test('test getting element of an array', () => {
        let aliasFirstIndex = get('alias[0]', {name : 'John Doe', alias: ['Budi', 'Joko', 'Anto']})
        expect(aliasFirstIndex).toBe('Budi')

        let aliasSecondIndex = get('alias[1]', {name : 'John Doe', alias: ['Budi', 'Joko', 'Anto']})
        expect(aliasSecondIndex).toBe('Joko')

        let aliasThirdIndex = get('alias[2]', {name : 'John Doe', alias: ['Budi', 'Joko', 'Anto']})
        expect(aliasThirdIndex).toBe('Anto')
    })


    test('testing get method can access ', () => {
        let secondAliasFirstName  = get('person.alias[1].first', {
            person: {
                name: {
                    first: 'john', 
                    last: 'doe'
                }, 
                alias: [
                    {first: 'Budi', last: 'Darmawan'}, 
                    {first: 'Foo', last: 'Bar'}
                ]
            }
        })

        expect(secondAliasFirstName).toBe('Foo')
    })

})
