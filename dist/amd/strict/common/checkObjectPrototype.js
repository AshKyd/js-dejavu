/*jslint sloppy:true, forin:true*/
/*global define,console*/

define([
    './isObjectPrototypeSpoiled',
    'Utils/lang/isFunction'
], function (
    isObjectPrototypeSpoiled,
    isFunction
) {


    /**
     * Checks object prototype, throwing an error if it has enumerable properties.
     * Also seals it, to prevent any further modifications
     */
    function checkObjectPrototype() {

        if (isObjectPrototypeSpoiled()) {
            throw new Error('Classify will not work properly if Object.prototype has enumerable properties!');
        }

        if (isFunction(Object.seal)) {
            Object.seal(Object.prototype);
        }
    }

    return isObjectPrototypeSpoiled;
});
