define(function(require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('utils/Extend');
    var ${Extends} = require('${path}${Extends}');

    /**
     * YUIDoc_comment
     *
     * @class ${NAME}
     * @extends ${Extends}
     * @constructor
     **/
    var ${NAME} = (function () {

        var _super = Extend(${NAME}, ${Extends});

        function ${NAME}(\$element) {
            // Put any properties above super.
            _super.call(this, \$element);
            // Put any method calls below super.
        }

        /**
         * @overridden ${Extends}.createChildren
         */
        ${NAME}.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);

            // Create and add your child objects to this parent class.

            return this;
        };

        /**
         * @overridden ${Extends}.setupHandlers
         */
        ${NAME}.prototype.setupHandlers = function() {
            _super.prototype.setupHandlers.call(this);

            // Setup your class event handlers.

            return this;
        };

        /**
         * @overridden ${Extends}.layoutChildren
         */
        ${NAME}.prototype.layoutChildren = function () {
            // Layout or update any child objects if needed.

            return this;
        };

        /**
         * @overridden ${Extends}.enable
         */
        ${NAME}.prototype.enable = function () {
            if (this.isEnabled === true) {
                return this;
            }

            // Enable any child objects and add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden ${Extends}.disable
         */
        ${NAME}.prototype.disable = function () {
              if (this.isEnabled === false) {
                      return this;
                  }
      
                  // Disable any child objects and remove any event listeners.

                  return _super.prototype.disable.call(this);
              };

        /**
         * @overridden ${Extends}.destroy
         */
        ${NAME}.prototype.destroy = function () {
            // Call destroy on any child objects that is need.
            // This super method will also null out all properties automatically to prevent memory leaks.

            _super.prototype.destroy.call(this);
        };

        return ${NAME};
    })();

    module.exports = ${NAME};

});