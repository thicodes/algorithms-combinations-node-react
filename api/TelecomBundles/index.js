const _ = require('lodash')
const nodes = require('./nodes')
const connections = require('./connections')

var combinations = function(set) {
    return (function acc(xs, set) {
        var x = xs[0];
        if(typeof x === "undefined")
            return set;
        for(var i = 0, l = set.length; i < l; ++i)
            set.push(set[i].concat(x));
            return acc(xs.slice(1), set);
    })(set, [[]]).slice(1);
}


function processBundles(nodes, type) {
    const getIds = nodes.map( node => node.id)
    const combinationsId = combinations(getIds)
    const arrayWithoutAddonsAtStart = createArrayWihoutAddonsAtStart(nodes, combinationsId);
    const arrayWithoutDuplicateBB = removeDuplicatePlan('bb', arrayWithoutAddonsAtStart, nodes)
    const arrayWithoutDuplicateTV = removeDuplicatePlan('tv', arrayWithoutDuplicateBB, nodes)
    const arrayWithoutDuplicateLL = removeDuplicatePlan('ll', arrayWithoutDuplicateTV, nodes)
    const arrayWithNodes = joinArrayWithNodes(arrayWithoutDuplicateLL, connections, nodes)
    const filteredArray = createFilterByType(arrayWithNodes, type)
    const bundles = createBundles(filteredArray, connections, nodes)
    return bundles
}

function removeDuplicatePlan(type, array, nodes) {
    let copyArray = array.slice(0)
    let count

    for(let i=copyArray.length-1 ; i>=0; i--) {
        count = 0
        for(k in copyArray[i]) {
            let obj = nodes.find(node => node.id === copyArray[i][k])
            if ( obj.type === type ) {
                ++count
            }
        }
        if (count > 1) {
            copyArray.splice(i, 1)
        }
    }
    return copyArray
}

function createArrayWihoutAddonsAtStart(nodes, combinationsId) {
    const addonsId = nodes.filter(x => x.type === 'addon' )
                            .map(x => x.id)
    for (i in combinationsId) {
        l = combinationsId[i]
        addonsId.indexOf( l[0] )
    }

    const result = combinationsId.filter( x => addonsId.indexOf( x[0] ) <= -1 )
    return result
}


function createBundles(array, connections, nodes) {
    const result = []
    let bundles
    let price
    let total

    for(i in array) {
        bundles = []
        price = []
        total = 0
        for(let k = 0; k < array[i].length; k += 2 ) {
            if (array[i][k+1] && array[i][k+1].name) {
                connectionValue = isConnectionValue(connections, array[i][k], array[i][k+1])
                bundles[k] = array[i][k].name
                bundles[k+1] = array[i][k+1].name
                price.push(array[i][k].price)
                if(connectionValue) {
                    price.push(connectionValue.value)
                }
                price.push(array[i][k+1].price)

            } else if (array[i][k] && array[i][k].name) {
                bundles[k] = array[i][k].name
                price.push(array[i][k].price)
            }
            total = price.reduce((a, b) => a + b);
        }

        result[i] = { bundles, price, total }
    }

    return _.orderBy(result, ['total'], ['asc']);
}

function isConnectionValue(connections, currentArray, nextArray) {
    return connections.find(
        node => node.nodeIdA === currentArray.id &&
        node.nodeIdB === nextArray.id
    )
}

function createFilterByType(array, type) {
    const copyArray = array.slice(0)
    let found
    
    for(let i=copyArray.length-1 ; i>=0; i--) {
        found = false
        for(k in copyArray[i]) {
            if(copyArray[i][k] && copyArray[i][k].type === type) {
                found = true
            }
        }
        if(!found) {
            copyArray.splice(i, 1)
        }
    }
    return copyArray
}

function joinArrayWithNodes(array, connections, nodes) {
    let result = []

    for(i in array) {
        result[i] = []
        for (k in array[i]) {
            let obj = nodes.find(obj => obj.id === array[i][k])

            result[i][k] = {
                id: obj.id,
                name: obj.name,
                type: obj.type,
                price: obj.price
            }
        }
    }

    return result
}

module.exports = (type) => processBundles(nodes, type)