//>>includeStart('strict', pragmas.strict);
/*global define,console*/

define(['amd-utils/array/contains'], function (contains) {

    "use strict";

    var random = new Date().getTime() + '_' + Math.floor((Math.random() * 100000000 + 1)),
        nrAccesses = 0,
        allowed = ['ClassWrapper', 'InterfaceWrapper', 'AbstractClassWrapper', 'FinalClassWrapper', 'instanceOfWrapper'];

    function randomAccessor(caller) {

        if (nrAccesses > 5 || !contains(allowed, caller)) {
            throw new Error('Can\'t access random identifier.');
        }

        nrAccesses += 1;

        return random;
    }

    return randomAccessor;
});
//>>includeEnd('strict');