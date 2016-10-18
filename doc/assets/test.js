$(function () {
    var config = {
        data: data,
        //ajax: {
        //    url: 'assets/test.json'
        //},
        defColumns: {
            textAlign: 'center'
        },
        columns: [
            {
                title: '<input type="checkbox">',
                width: '20',
                render: function () {
                    return $('<input type="checkbox">');
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
                sort: 'asc'
            },
            {
                title: '学分',
                field: 'grade',
                defaultContent: '<span style="color:red;">--</span>'
            },
            {
                title: '电子邮箱',
                field: 'email',
                defaultContent: $("#add"),
                textAlign: 'left'
            }
        ],
        defaultSize: 10
    };

    $("#test1").xjzTable(config);
});

//本地数据源
var data = [{
    "id": 1,
    "name": "Stacey Klein",
    "age": 19,
    "grade": "",
    "email": "ben@monroe.vu"
},
{
    "id": 2,
    "name": "Frances Watts",
    "age": 20,
    "grade": null,
    "email": "catherine@beach.ba"
},
{
    "id": 3,
    "name": "Calvin Jenkins",
    "age": 21
},
{
    "id": 4,
    "name": "Lucy Lutz",
    "age": 22,
    "grade": 11,
    "email": "jennifer@davies.ky"
},
{
    "id": 5,
    "name": "Sandy Sims",
    "age": 23,
    "grade": 18,
    "email": "herbert@weiner.it"
},
{
    "id": 6,
    "name": "Sandra Park",
    "age": 24,
    "grade": 9,
    "email": "geoffrey@mayer.rw"
},
{
    "id": 7,
    "name": "Jerome Levine",
    "age": 25,
    "grade": 17,
    "email": "ronald@gunter.om"
},
{
    "id": 8,
    "name": "Ken Branch",
    "age": 26,
    "grade": 1,
    "email": "jennifer@richmond.gq"
},
{
    "id": 9,
    "name": "Betty Vaughn",
    "age": 27,
    "grade": 17,
    "email": "todd@gross.fm"
},
{
    "id": 10,
    "name": "Marianne Branch",
    "age": 28,
    "grade": 19,
    "email": "denise@gold.um"
},
{
    "id": 11,
    "name": "Craig Sutton",
    "age": 29,
    "grade": 30,
    "email": "faye@jordan.cy"
},
{
    "id": 12,
    "name": "Melinda Drake",
    "age": 30,
    "grade": 18,
    "email": "vickie@singleton.sj"
},
{
    "id": 13,
    "name": "Norman Steele",
    "age": 31,
    "grade": 42,
    "email": "bernard@weiner.wf"
},
{
    "id": 14,
    "name": "Natalie Cooke",
    "age": 32,
    "grade": 48,
    "email": "dianne@heath.ax"
},
{
    "id": 15,
    "name": "Lois Webb",
    "age": 33,
    "grade": 47,
    "email": "molly@hardison.re"
},
{
    "id": 16,
    "name": "Chris Finch",
    "age": 34,
    "grade": 13,
    "email": "wendy@stevenson.gf"
},
{
    "id": 17,
    "name": "Caroline Lyons",
    "age": 35,
    "grade": 43,
    "email": "kim@adkins.la"
},
{
    "id": 18,
    "name": "Shannon Bowling",
    "age": 36,
    "grade": 35,
    "email": "marsha@solomon.us"
},
{
    "id": 19,
    "name": "Marcus Graves",
    "age": 37,
    "grade": 41,
    "email": "stephanie@scott.py"
},
{
    "id": 20,
    "name": "Maria Lindsay",
    "age": 38,
    "grade": 49,
    "email": "dawn@beck.gg"
},
{
    "id": 21,
    "name": "Annie Chandler",
    "age": 39,
    "grade": 31,
    "email": "carol@burnette.ir"
},
{
    "id": 22,
    "name": "Betsy Cannon",
    "age": 40,
    "grade": 38,
    "email": "natalie@dalton.gov"
},
{
    "id": 23,
    "name": "Karl Godfrey",
    "age": 41,
    "grade": 25,
    "email": "doris@harrell.dm"
},
{
    "id": 24,
    "name": "Billy Boswell",
    "age": 42,
    "grade": 17,
    "email": "todd@singh.ua"
},
{
    "id": 25,
    "name": "Claire McMahon",
    "age": 43,
    "grade": 3,
    "email": "joann@chambers.cr"
},
{
    "id": 26,
    "name": "Jenny Bowles",
    "age": 44,
    "grade": 41,
    "email": "lynn@jensen.bo"
},
{
    "id": 27,
    "name": "Kristina May",
    "age": 45,
    "grade": 2,
    "email": "bill@nguyen.com"
},
{
    "id": 28,
    "name": "Audrey Bailey",
    "age": 46,
    "grade": 0,
    "email": "jerome@mclaughlin.mf"
},
{
    "id": 29,
    "name": "Jamie Steele",
    "age": 47,
    "grade": 46,
    "email": "jim@boyd.tk"
},
{
    "id": 30,
    "name": "Kent Gallagher",
    "age": 48,
    "grade": 40,
    "email": "michele@norman.ye"
}];