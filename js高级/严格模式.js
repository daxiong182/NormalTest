//严格模式：1.为脚本开启  2.为函数开启

'use strict'

function fn() {
    console.log(this);
}

fn()