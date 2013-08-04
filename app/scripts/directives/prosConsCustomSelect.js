/*global define*/

define([
    'app',
    'jquery'
], function (app, $) {
    'use strict';

    function createCustomSelect($select, activeValue) {
        var $customSelect,
            $option;

        $customSelect = $('<div>').addClass('ProsConsSelect');

        $select.children().each(function (index, item) {
            $option = $('<div>').addClass('ProsConsSelect-Item').data('value', item.value);
            $option.append('<span>').addClass('glyphicon glyphicon-' + $(item).data('glyphicon'));

            if (item.value === activeValue) {
                $customSelect.prepend($option);
            } else {
                $customSelect.append($option);
            }
        });

        return $customSelect;
    }

    app.directive('prosConsCustomSelect',
        function () {

            return {
                restrict: 'A',

                link: function (scope, elem, attrs) {
                    var model,
                        $select,
                        $customSelect,
                        $optionOld,
                        $optionNew,
                        val;

                    model = scope.$eval(attrs.prosConsCustomSelect);

                    $select = $(elem);
                    $customSelect = createCustomSelect($select, model.type.toString());
                    $select.after($customSelect);


                    $customSelect.on('click', function () {
                        $optionOld = $(this).children(':first-child');
                        $optionNew = $optionOld.next();

                        $customSelect.append($optionOld);

                        val = $optionNew.data('value');
                        model.type = parseInt(val, 10);

                        scope.$apply(model);
                    });

                    $select.hide();
                }
            };
        }
    );
});
