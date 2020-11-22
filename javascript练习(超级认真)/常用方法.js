/**
 * 表驱动，减少多个if else 的使用，每次直接从数组对象中拿就可以了
 * @param str
 * @returns {string|string}
 */
function reduceIf(str) {
    var arr = [{name: "白云", desc: "我是白云"}, {name: "白卷", desc: "我是白卷"}, {name: "白菜", desc: "我是白菜"}];
    for (var a = 0;a<arr.length; a++){
        if (arr[a].name === str) {
            return arr[a].desc
        }
    }
    return "空的"
}

// console.log(reduceIf("白菜1"))

/**
 * 深拷贝递归实现 数组和对象都可实现
 * @param obj
 * @returns {[]|{}}
 */
function deepclone(obj) {
    var objclone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj == "object") {
        for(var key in obj) {
            if (obj[key] && typeof obj[key] == "object") {
                objclone[key] = deepclone(obj[key])
            }else {
                objclone[key] = obj[key]
            }
        }
    }
    return objclone;
}

// console.log(deepclone({name:'白云', age: 27, de: function () {
//     name:'白云你是最棒胡 '
//     }}));
//
// console.log(JSON.parse(JSON.stringify({name:'白云', age: 27, de: function () {
//         name:'白云你是最棒胡 '
//     }})));
/**
 * Object.assign 当对象是一维的时候是深拷贝，多级时是浅拷贝
 * @type {{name: string, lineL: {name: string}}}
 */
var obj1 = {
    name: '白云',
    lineL: {
        name: '你好'
    }
};
var obj2 = Object.assign({}, obj1);
obj2.lineL.name = "三年内"

var arr = [1,2,3,[4]];

var arr1 =arr.concat(); // concat是一维是浅拷贝，
arr1[1] = "ds"
arr1[3][0] = "dsd"


var arr3 = arr.slice(); // slice也是一维浅拷贝
// console.log(arr3);

// 多维数组还是采用递归深拷贝
var a1 = [1,23,4,5,[3,45]];
var a2 = deepclone(a1);
a2[4][0] = "曹尼玛";
console.log(a2)
console.log(a1)
