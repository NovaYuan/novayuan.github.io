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
                title: 'backbone学习经验',
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
                content: '今天学习backbone+handlebars构建网站，争取今年做出一个网站出来'
            },
            {
                createDate: new Date(),
                title: 'handlebars学习经验',
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
                content: '今天学习backbone+handlebars构建网站，争取今年做出一个网站出来'
            }
        ]
    }
});