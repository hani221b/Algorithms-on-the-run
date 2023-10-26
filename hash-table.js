class HashTable {
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key){
        let index = this._hash(key);
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++ ){
                if(this.table[index][i][0] === key){
                    return this.table[index][i][1];
                }
            }
        }
        return "Not found!";
    }
    
    remove(key){
        let index = this._hash(key);
        if(this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                if(this.table[index][i][0]){
                    this.table[index][i].splice(i, 1);
                    return true;
                }
            }
        }
        return "Not found!";
    }
}

let hash = new HashTable(1000);
hash.set("Hani", "Developer");
console.log(hash.get("Hani"));
hash.remove("Hani");
