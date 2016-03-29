/**
 * Created by yuan on 2016/3/28.
 */
'use strict';
var List = Backbone.Model.extend({
    url: '/',
    defaults: {
        lists: [
            {
                createDate: Common.getDate("today"),
                title: 'backboneѧϰ����',
                tags: [
                    {
                        value: 'backbone',
                        "class": "label label-primary"
                    },
                    {
                        value: 'Handlebar',
                        "class": "label label-success"
                    }
                ],
                content: '����ѧϰbackbone+handlebars������վ����ȡ��������һ����վ����'
            },
            {
                createDate: new Date(),
                title: 'handlebarsѧϰ����',
                tags: [
                    {
                        value: 'backbone',
                        "class": "label label-primary"
                    },
                    {
                        value: 'Handlebar',
                        "class": "label label-success"
                    }
                ],
                content: '����ѧϰbackbone+handlebars������վ����ȡ��������һ����վ����'
            }
        ]
    }
});