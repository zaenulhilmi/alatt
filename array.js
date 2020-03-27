class Access {
    constructor(keyString, object){
        this.keyString = keyString
        this.object = object
    }

    _getKeys() {
        return this.keyString.split('.')
    }

    _isAnArray(key) {
        let isAnArray = false;
        if(key.indexOf('[') !== -1){
           isAnArray = true; 
        }
        return isAnArray;
    }

    get() {
        let tempObject = this.object; 
        let keys = this._getKeys();
        for(let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if(this._isAnArray(key)) {
              let openBracketPosition  = key.indexOf('[') 
              let closeBracketPosition = key.indexOf(']') 
              let newKey = key.substring(0, openBracketPosition)
              let arrayPosition = key.substring(openBracketPosition+1, closeBracketPosition)
              tempObject = tempObject[newKey][arrayPosition]
            } else {
                tempObject = tempObject[key]
            }
        }
        return tempObject
    } 
}

const get  = (keyString, object) => {
    let access = new Access(keyString, object)
    return access.get();
}

exports.get = get;



