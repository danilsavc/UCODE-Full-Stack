const { LLData } = require("./LLData");

exports.LList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    add(value) {
        let node = new LLData(value);

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.head) {
            this.head = node;
        }

        this.tail = node;
    }

    addFromArray(arrayOfData) {
        arrayOfData.forEach(arrayOfData => this.add(arrayOfData));
    }

    remove(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.data === value) {
            this.head = this.head.next;
        }

        let curent = this.head;

        while (curent.next) {
            if (curent.next.data === value) {
                curent.next = curent.next.next;
            }
            else {
                curent = curent.next;
            }
        }

        if (this.tail.data === value) {
            this.tail = curent;
        }
    }

    removeAll(value) {
        let curent = this.head;
        if (curent !== null) {
            if (this.head.data === value) {
                this.head = this.head.next;
            }
            while (curent.next) {
                if (curent.next.data === value) {
                    curent.next = curent.next.next;
                }
                else {
                    curent = curent.next;
                }
            }
        }
        if (this.tail.data === value) {
            this.tail = curent;
        }
    }

    contains(value) {
        let curent = this.head;
        while (curent) {
            if (curent.data === value) {
                return true;
            }
            curent = curent.next;
        }
        return false;
    }

    clear() {
        this.head = null;
    }

    count () {
        let curent = this.head;
        let count = 0;
        
        if (!curent.head) {
            return null;
        }

        while (curent) {
            curent = curent.next;
            count++;
        }
        return count;
    }

    toString() {
        let arr = [];
        let curent = this.head;

        while (curent) {
            arr.push(curent.data);
            curent = curent.next;
        }
        return arr.join(', ');
    }

    getIterator() {
        return this[Symbol.iterator]();
    }

    filter = function(callback) {
        const res = new LList();
      
        for (let node of this) {
          if (callback(node)) {
            res.add(node);
          }    
        }
        return res;
      };
    
      [Symbol.iterator]() {
        let node = this.head;
        return {
            next() {
                let value, done = true;
                if (node !== null) {
                  value = node.data;
                  done = false;
                  node = node.next;
                }
                return { value: value, done: done }
            }
        }
    }
}

function makeIterator(array){
    var nextIndex = 0;
  
    return {
       next: function(){
           return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {done: true};
       }
    }
}

const {LList} = require("./LList");
const list = new LList();

list.addFromArray([100, 1, 2, 3, 100, 4, 5, 100]);

list.add(10);
const onlySmallList = list.filter((data) => {
  return data < 18;
});

let sumOfAll = 0;
for (const data of list) {
  console.log(data);
  sumOfAll += data;
}
console.log('Count: ' + list.count());
console.log('Contains: ' + list.contains(11));

console.log([...list]);
console.log([...onlySmallList]);
console.log(sumOfAll);
console.log(list.contains(10)); 
console.log(list.contains(22)); 

list.clear();

console.log([...list]);