let data = [{
    title: '射箭',
    picture: './Data/archery.png',
    describe: '射箭有悠久的历史，最初用于打猎和战争。最初的射手就是猎人，他们用弓箭捕杀动物维持生存。后来弓箭变成了战争中可怕的武器。公元前5000年古埃及人就掌握了如何使用弓箭。古代文明中，弓箭是使用非常普及的武器。许多神话人物，如阿波罗和奥德修斯，都佩戴着弓箭。'
}, {
    title: '羽毛球',
    picture: './Data/badminton.png',
    describe: '羽毛球（Badminton）是一项隔着球网，使用长柄网状球拍击打用羽毛和软木制作而成的一种小型球类的室内运动项目。'
}, {
    title: '篮球',
    picture: './Data/basketball.png',
    describe: '篮球运动是1891年由美国人詹姆斯·奈史密斯发明的。当时，他在马萨诸塞州斯普林菲尔德基督教青年会国际训练学校任教。由于当地盛产桃子，这里的儿童又非常喜欢玩将球投入桃子筐的游戏。这使他从中得到启发，并博采足球、曲棍球等其他球类项目的特点，创编了篮球游戏。'
}]

let index = 0
let newData = {}
let count

let header = document.querySelector('#header')
let describe = document.querySelector('#text')
let img = document.querySelector('#img')
let dots = document.querySelector('.dots')
let table = document.querySelector('.table')

function start() {
    dots.innerHTML = ''
    table.innerHTML = ''
    let tr1 = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    th1.innerHTML = '项目'
    th2.innerHTML = '图表地址'
    th3.innerHTML = '描述'
    tr1.append(th1)
    tr1.append(th2)
    tr1.append(th3)
    table.append(tr1)
    for (let i = 0; i < data.length; i++) {
        let button = document.createElement('button');
        button.className = 'dot'
        dots.append(button)
        let tr = document.createElement('tr');
        let keys = Object.keys(data[i])
        keys.forEach(item => {
            let td = document.createElement('td');
            td.innerHTML = data[i][item]
            tr.append(td)
        })
        table.append(tr)
    }

    let dot = document.querySelectorAll('.dot')

    header.innerHTML = data[0].title
    describe.innerHTML = data[0].describe
    img.src = data[0].picture
    dot[0].className = 'dot green'

    count = setInterval(() => {
        index++
        if (index === data.length) {
            index = 0
        }
        header.innerHTML = data[index].title
        describe.innerHTML = data[index].describe
        img.src = data[index].picture

        dot.forEach((item, i) => {
            if (i === index) {
                item.className = 'dot green'
            } else {
                item.className = 'dot'
            }
        })
    }, 3000);
}

function add(e) {
    newData[e] = document.querySelector('#' + e).value
}

function submit() {
    data.push(newData)
    newData = {}
    clearInterval(count)
    start()
    console.log(data);
}

start()

window.onbeforeunload = function () {
    clearInterval(count)
};