const checker = () => (next) => (action) => {
    const actionType = action.type.toLowerCase().split('_')
    const detectBitcoin = actionType[0] === 'add' && action[actionType[1]].name.toLowerCase().includes('bitcoin')

    return detectBitcoin ? alert('This ia a bad idea') : next(action)
}

export default checker 