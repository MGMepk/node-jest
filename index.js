class SortedList {
    items = []
    length = 0
    add(item) {
        this.items.push(item);
        this.items.sort(function (a, b) {
            return a - b;
        });
        this.length++;
    }
    get(pos) {
        if (this.length < pos) {
            throw new Error('OutOfBounds Error');
        } else {
            return this.items[pos - 1];
        }
    }
    max() {
        if (this.length == 0) {
            throw new Error('EmptyList Error');
        } else {
            return this.items[this.length - 1];
        }
    }
    min() {
        if (this.length == 0) {
            throw new Error('EmptyList Error');
        } else {
            return this.items[0];
        }
    }
    average() {
        if (this.length == 0) {
            throw new Error('EmptyList Error');
        } else {
            let average = 0;
            this.items.forEach(element => {
                average += element;
            });

            return average / this.length
        }
    }
    sum() {
        if (this.length == 0) {
            throw new Error('EmptyList Error');
        } else {
            let suma = 0;
            this.items.forEach(element => {
                suma += element;
            });
            return suma;
        }
    }

    even(pos){
        if (this.length == 0) {
            throw new Error('EmptyList Error');
        } else if(this.get(pos)%2 == 0){
            return this.get(pos);
        } else {
            throw new Error('no es par');
        }
    }
}

export default SortedList;
