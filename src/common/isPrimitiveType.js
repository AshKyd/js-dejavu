//>>includeStart('strict', pragmas.strict);
/*jslint eqeq:true*/
//>>includeEnd('strict');
//>>excludeStart('strict', pragmas.strict);
/*jslint sloppy:true, eqeq:true*/
//>>excludeEnd('strict');
/*global define,console*/

define([
    'amd-utils/lang/isNumber',
    'amd-utils/lang/isRegExp',
    'amd-utils/lang/isString',
    'amd-utils/lang/isBoolean'
], function (
    isNumber,
    isRegExp,
    isString,
    isBoolean
) {

//>>includeStart('strict', pragmas.strict);
    "use strict";

//>>includeEnd('strict');
    /**
     * Checks if a value is a primitive type.
     *
     * @param {Mixed} value The value
     *
     * @return {Boolean} True if it is, false otherwise
     */
    function isPrimitiveType(value) {
        return isNumber(value) || isString(value) || isBoolean(value) || isRegExp(value) || value == null;
    }

    return isPrimitiveType;
});