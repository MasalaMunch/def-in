"use strict";

const assert = require("assert");

module.exports = (targetObj, srcObj) => {

    assert(targetObj instanceof Object && srcObj instanceof Object);
    Object.keys(srcObj).forEach((key) => assert(targetObj[key] === undefined));

    Object.assign(targetObj, srcObj);

};