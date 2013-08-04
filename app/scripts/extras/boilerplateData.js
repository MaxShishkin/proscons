/*global define*/

define([
], function () {
    'use strict';

    return [
        {
            title: 'To Be',
            items: [
                {
                    title: 'Can travel',
                    type: 1
                },
                {
                    title: 'Can date girls',
                    type: 1
                },
                {
                    title: 'Need to work',
                    type: 2
                }
            ],
            newItem: {
                title: '',
                type: 1
            }
        },
        {
            title: 'Not To Be',
            items: [
                {
                    title: 'No need to work',
                    type: 1
                },
                {
                    title: 'Can fly on wings (probably)',
                    type: 1
                }
            ],
            newItem: {
                title: '',
                type: 1
            }
        }
    ];
});
