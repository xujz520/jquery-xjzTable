$(function () {
    var config = {
        data: tableData,    //本地数据源
        columns: [
            {
                title: '<input type="checkbox" />',
                sort: false,
                width: '20',
                render: function () {
                    return $('<input type="checkbox" />');
                }
            },
            {
                title: '学号',
                field: 'id',
                className: 'success'
            },
            { title: '姓名', field: 'name' },
            {
                title: '年龄',
                field: 'age',
                sort: 'asc',
            },
            {
                title: '学分',
                field: 'grade',
                defaultContent: '<span style="color:red;">--</span>'
            },
            {
                title: '电子邮箱',
                field: 'email',
                defaultContent: $("#add")
            }
        ],
        defaultSize: 10 //页面大小
    };

    $("#test2").xjzTable(config);


    $("#test3").xjzTable({
        data: tableData,
        columns: [
            { title: '学号', field: 'id' },
            { title: '姓名', field: 'name' },
            { title: '年龄', field: 'age' }
        ],
        defaultSize: 5,
        paging: {
            visiblePages: 3,
            pagingClass: 'paging-transition'
        },
        dom: "<'pull-left'L>T<'pull-left'I><'pull-right'P>",
        xjzTableWrapClass: 'xjzTable-container clearfix border'
    });


    $("#test4").xjzTable({
        data: tableData,
        columns: [
            { title: '学号', field: 'id' },
            { title: '姓名', field: 'name' },
            { title: '年龄', field: 'age' }
        ],
        defaultSize: 5,
        paging: {
            visiblePages: 3,
            pagingClass: 'paging-transition'
        },
        dom: "<'pull-right'P>T<'pull-left'I><'pull-right'L>",
        xjzTableWrapClass: 'xjzTable-container clearfix border'
    });

    $("#test5").xjzTable({
        data: tableData1,
        columns: [
            { title: '学号', field: 'id', width: '10%' },
            { title: '姓名', field: 'name' },
            { title: '年龄', field: 'age', width: '10%' }
        ],
        defaultSize: 5,
        paging: {
            visiblePages: 3,
            pagingClass: 'paging-transition'
        },
        dom: "<'table-responsive clearfloat'T><'pull-left'I><'pull-left'L><'pull-right'P>"
    });

    $("#test6").xjzTable({
        data: tableData2,
        defColumns: {
            tooltip: true   //启用所有列的tooltip
        },
        columns: [{
            title: '<input type="checkbox" />',
            sort: false,
            width: '20',
            render: function () {
                return $('<input type="checkbox" />');
            }
        }, {
            title: '编号',
            field: 'id',
            width: 30,
            tooltip:false   //在该列关闭tooltip
        }, {
            title: '文件名',
            field: 'fileName',
            width: 100,
            render: function (rowData) {
                this.data("title", '<img src="assets/img/' + rowData.fileName + '" />');    //设置该列tooltip
                return '<span style="color:blue;">'+rowData.fileName+'</span>';
            }
        }, {
            title: '文件大小',
            field: 'size',
            width: 100
        }, {
            title: '创建时间',
            field: 'time'
        }, {
            title: '说明',
            field: 'content'
        }]
    });
});