var a = 'outer';

let obj = {
    a: 'inner',
    foo: () => {
        console.log(this.a);
    }
}

obj.foo()