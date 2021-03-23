
//#region request
// Develop the following application, use the following HTML elements to get started with. 
// You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
//#endregion

window.addEventListener('DOMContentLoaded', () => {
    
})

const date = new Date()
const listColor = ['red', 'blue', 'green', 'yellow', 'gray', 'orange', 'pink', 'Brown' ,'Purple']
const wrap = document.querySelector('.wrapper')

//#region  CSS cho đẹp
wrap.classList.add('wrap')
//#endregion

//#region thay đổi content h1
document.querySelector('h1').innerHTML = 'Asabeneh Yetayeh challenges in <span>2020</span>'
document.querySelector('span').style.fontSize = '90px'
//#endregion

//#region thêm ngày vào dưới h2
const time = document.createElement('p')
const d = document.createTextNode('Null')
time.appendChild(d)
wrap.insertBefore(time, wrap.childNodes[4])
document.querySelector('p').id = 'thoigian'
//#endregion

//#region thay đỔi màu thẻ HTML mỗi giây
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const changeCl = (ele) => {
    let color = getRndInteger(0,8)
    ele.style.color = listColor[color]
}

const changeColor = (element) => {
    let ele = document.querySelector(element)
    setInterval(()=>{
        changeCl(ele)
    },1000);
}


const changeBg = (ele) => {
    var color = getRndInteger(0,8)
    ele.style.background = listColor[color]
}

const changeBackground = (element) => {
    let ele = document.querySelector(element)
    setInterval(()=>{
        changeBg(ele)
    },1000);
}

changeColor('span')
changeBackground('p')
//#endregion

//#region thêm màu cho list
const liEle = document.querySelectorAll('li')
liEle.forEach(val => 
    val.textContent.search('Done') != -1 ? val.style.background = 'green': (val.textContent.search('Ongoing') != -1 ? val.style.background = 'yellow': (val.textContent.search('Coming') != -1 ? val.style.background = 'red':console.log(val)))
)
//#endregion


//#region chạy đồng hồ thời gian
setInterval(() => {
    var d = new Date()
    var t = ""+d.getMonth() +" " + d.getDate() +', ' + d.getFullYear() +' ' + d.getHours()+':' + d.getMinutes() +':' + d.getSeconds()+""
    console.log(t);
    document.querySelector('p').textContent = t
}, 1000);
//#endregion
