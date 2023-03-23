const container = document.querySelector(".btn")
const text = document.querySelector(".text")
console.log(text);
alert("Voice recognition feature is available (English)")
const codes = [
    {
        id: 192,
        btn: "`",
        btnC: "`",
        spec: "~"
    },
    {
        id: 49,
        btn: "1",
        btnC: "1",
        spec: "!",
        tamil :"அ"
    },
    {
        id: 50,
        btn: "2",
        btnC: "2",
        spec: "@",
        tamil :"ஆ"
    },

    {
        id: 51,
        btn: "3",
        btnC: "3",
        spec: "#",
        tamil :"இ"
    },
    {
        id: 52,
        btn: "4",
        btnC: "4",
        spec: "$",
        tamil :"ஈ"
    },
    {
        id: 53,
        btn: "5",
        btnC: "5",
        spec: "%",
        tamil :"உ"
    },
    {
        id: 54,
        btn: "6",
        btnC: "6",
        spec: "^",
        tamil :"ஊ"
    },

    {
        id: 55,
        btn: "7",
        btnC: "7",
        spec: "&",
        tamil :"எ"
    },

    {
        id: 56,
        btn: "8",
        btnC: "8",
        spec: "*",
        tamil :"ஏ"
    },

    {
        id: 57,
        btn: "9",
        btnC: "9",
        spec: "(",
        tamil :"ஐ"
    },

    {
        id: 48,
        btn: "0",
        btnC: "0",
        spec: ")",
        tamil :"ஒ"
    },
    {
        id: 189,
        btn: "-",
        btnC: "-",
        spec: "_",
        tamil :"ஓ"
    },
    {
        id: 187,
        btn: "=",
        btnC: "=",
        spec: "+",
        tamil :"ஔ"
    },
    {
        id: 8,
        btn: "Backspace",
        btnC: "BACKSPACE",
        tamil: "Backspace"
    },
    {
        id: 9,
        btn: "Tab",
        btnC: "Tab"
    },
    {
        id: 81,
        btn: "q",
        btnC: "Q",
        tamil :"க"
    },
    {
        id: 87,
        btn: "w",
        btnC: "W",
        tamil :"ங"
    },
    {
        id: 69,
        btn: "e",
        btnC: "E",
        tamil :"ச"
    },
    {
        id: 82,
        btn: "r",
        btnC: "R",
        tamil :"ஞ"
    },
    {
        id: 84,
        btn: "t",
        btnC: "T",
        tamil :"ட"
    },
    {
        id: 89,
        btn: "y",
        btnC: "Y",
        tamil :"ண"
    },
    {
        id: 85,
        btn: "u",
        btnC: "U",
        tamil :"த"
    },
    {
        id: 73,
        btn: "i",
        btnC: "I",
        tamil :"ந"
    },
    {
        id: 79,
        btn: "o",
        btnC: "O",
        tamil :"ப"
    },
    {
        id: 80,
        btn: "p",
        btnC: "P",
        tamil :"ம"
    },
    {
        id: 219,
        btn: "[",
        btnC: "[",
        spec: "{",
        tamil :"ய"
    },
    {
        id: 221,
        btn: "]",
        btnC: "]",
        spec: "}",
        tamil :"ர"
    },
    {
        id: 220,
        btn: "|",
        btnC: "|",
    },
    {
        id: 20,
        btn: "CapsLock",
        btnC: "CAPSLOCK"
    },
    {
        id: 65,
        btn: "a",
        btnC: "A",
        tamil :"ல"
    },
    {
        id: 83,
        btn: "s",
        btnC: "S",
        tamil :"வ"
    },
    {
        id: 68,
        btn: "d",
        btnC: "D",
        tamil :"ழ"
    },
    {
        id: 70,
        btn: "f",
        btnC: "F",
        tamil :"ள"
    },
    {
        id: 71,
        btn: "g",
        btnC: "G",
        tamil :"ற"
    },
    {
        id: 72,
        btn: "h",
        btnC: "H",
        tamil :"ன"
    },
    {
        id: 74,
        btn: "j",
        btnC: "J",
        tamil :"ஜ"
    },
    {
        id: 75,
        btn: "k",
        btnC: "K",
        tamil :"ஷ"
    },
    {
        id: 76,
        btn: "l",
        btnC: "L",
        tamil :"ஸ"
    },
    {
        id: 186,
        btn: ";",
        btnC: ";",
        spec: ":",
        tamil :"ஹ"
    },
    {
        id: 222,
        btn: "'",
        btnC: "'",
        spec: '"'
    },
    {
        id: 13,
        btn: "Enter",
        btnC: "Enter",
        tamil:"Enter"
    },
    {
        id: 90,
        btn: "z",
        btnC: "Z",
        tamil :"ஂ"
    },
    {
        id: 88,
        btn: "x",
        btnC: "X",
        tamil :"ா"
    },
    {
        id: 67,
        btn: "c",
        btnC: "C",
        tamil :"ி"
    },
    {
        id: 86,
        btn: "v",
        btnC: "V",
        tamil :"ீ"
    },
    {
        id: 66,
        btn: "b",
        btnC: "B",
        tamil :"ெ"
    },
    {
        id: 78,
        btn: "n",
        btnC: "N",
        tamil :"ே"
    },
    {
        id: 77,
        btn: "m",
        btnC: "M",
        tamil :"ு"
    },
    {
        id: 188,
        btn: ",",
        btnC: ",",
        spec :"<",
        tamil :"ூ"
    },
    {
        id: 196,
        btn: ".",
        btnC: ".",
        spec:">",
        tamil:"ை"
    },
    {
        id: 191,
        btn: "/",
        btnC: "/",
        spec:"?"
    },
    {
        id: 999,
        btn: "shift",
        btnC: "shift"
    },
    {
        id: 100,
        btn: "Fn",
        btnC: "Fn",
        tamil:"ொ"
    },
    {
        id: 17,
        btn: "Ctrl",
        btnC: " Ctrl",
    },

    {
        id: 01,
        btn: "ஃ",
        btnC: "ஃ",
        tamil:"ஃ"
    },
    {
        id: 18,
        btn: "Alt",
        btnC: "Alt",
        tamil:"ோ"

    },
    {
        id: 32,
        btn: " ",
        btnC: " ",
        tamil:" "
    },
    {
        id: 18,
        btn: "AltGr",
        btnC: "AltGr",
        tamil:"ௌ"
    },
    {
        id: 44,
        btn: "PrtSc",
        btnC: "PrtSc",
        tamil:"ொ"
    },
    {
        id: 33,
        btn: "Ctrl",
        btnC: " Ctrl",
        tamil:"ௗ"
    },
]

for (let i = 0; i < codes.length; i++) {
    const div = document.createElement("button")
    div.setAttribute("id", codes[i].id)
    div.innerText = codes[i].btn
    if (codes[i].id == 9) {
        div.classList.add("tab")
    }
    if (codes[i].id == 220) {
        div.classList.add("slide")
    }
    if (codes[i].id == 90) {
        div.classList.add("z")
    }
    if (codes[i].id == 32) {
        div.classList.add("space")
    }
    if(codes[i].id == 17){
        div.classList.add("ctrl")
    }
    if(codes[i].id == 67){
        div.classList.add("c")
    }
    container.append(div)
}
const btns = document.querySelectorAll("button")

for (let p = 0; p < btns.length; p++) {
    btns[p].addEventListener("click", (e) => {
        if (e.target.innerText == "CapsLock") {
            for (let y = 0; y < btns.length; y++) {
                console.log(btns[y]);
                btns[y].classList.add("show")
                btns[y].innerText = codes[y].btnC
            }
            display()
        }
        else if (e.target.innerText == "CAPSLOCK") {
            for (let y = 0; y < btns.length; y++) {
                btns[y].classList.remove("show")
                btns[y].innerText = codes[y].btn
            }
            display()
        }
        else if (e.target.innerText == "Backspace") {
            text.value = text.value.slice(0, -1)
            display()
        }
        else if (e.target.innerText == "BACKSPACE") {
            text.value = text.value.slice(0, -1)
            display()
        }
        else if (e.target.innerText == 'Shift') {
            return;
        }
        else if (e.target.innerText == 'shift') {
            return;
        }
        else if (e.target.innerText == 'Alt' || e.target.innerText == 'AltGr' ) {
            return;
        }
        else if (e.target.innerText == 'Ctrl') {
            return;
        }
        else if (e.target.innerText == 'Tamil') {
            return;
        }
        else if (e.target.innerText == 'English') {
            return;
        }
        else if (e.target.innerText == 'Tab') {
            text.value += "    "
        }
        else if (e.target.innerText == "Enter") {
            text.value += "\n"
            display()
        }
        else if (btns[p].id == 32) {
            text.value += " "
            display()
        }
        else {
            text.value += e.target.innerText
            display()
        }
        function display() {
            for (let r = 0; r < btns.length; r++) {
                if (e.target.id == btns[r].id) {
                    btns[r].classList.add("back")
                }
                window.setTimeout(() => {
                    btns[r].classList.remove("back")
                }, 200)
            }
        }
    })

}
window.addEventListener("keydown", (e) => {

    if(tamil.innerText == "English"){

        if (e.key == "Enter") {
            text.value += "\n"
            display()
        }
        else if (e.key == "Backspace") {
            text.value = text.value.slice(0,-1)
            display()
        }
        else if (e.code == 'Space') {
            text.value += " "
            display()
        }
        for(let k=0;k<btns.length;k++){
            if (e.key == "Backspace") {
               return
            } if (e.key == "Enter") {
                return
            }
            if (e.code == 'Space') {
                return
            }

            if(e.keyCode == btns[k].id){
                text.value+=codes[k].tamil
                display()
            }
         
        }
}

    if(tamil.innerText == "Tamil"){
 
    if (e.code == "CapsLock") {
        for (let y = 0; y < btns.length; y++) {
            if (btns[y].className == "") {
                btns[y].innerText = codes[y].btnC
                btns[y].classList.add("show")
            }
            else if (btns[y].classList.contains("show")) {
                btns[y].innerText = codes[y].btn
                btns[y].classList.remove("show")
            }
        }
        display()
    }

    else if (e.key == "Backspace") {
        text.value = text.value.slice(0,-1)
        display()
    }


    else if (e.key == "Enter") {
        text.value += "\n"
        display()
    }


    else if (e.code == 'Space') {
        text.value += " "
        display()
    }


    else if (e.code == 'Tab') {
        text.value += "    "
    }


    else {
        for (let j = 0; j < codes.length; j++) {
            if (e.keyCode == codes[j].id && btns[j].classList.contains("show")) {
                text.value += codes[j].btnC
                display()
            }
            else if (e.key == codes[j].btn) {
                text.value += codes[j].btn
                display()
            }
        }
    }

}
    function display() {
        for (let r = 0; r < btns.length; r++) {
            if (e.keyCode == btns[r].id) {
                btns[r].classList.add("back")
            }
            window.setTimeout(() => {
                btns[r].classList.remove("back")
            }, 200)
        }
    }



})

const shif = document.querySelector(".shift")

shif.addEventListener("click", (e) => {
    shif.classList.toggle("lok")
    for (let f = 0; f < codes.length; f++) {
        if (shif.classList.contains("lok")) {
            if (btns[f].id >= 48 && btns[f].id <= 57) {
                btns[f].innerText = codes[f].spec
            }
            if (btns[f].id >= 65 && btns[f].id <= 90) {
                btns[f].innerText = codes[f].btnC
            }
            if (btns[f].id == 187 || btns[f].id == 189 || btns[f].id == 192 || btns[f].id == 219 || btns[f].id == 221 || btns[f].id == 186 || btns[f].id == 222 || btns[f].id == 188 || btns[f].id == 196 || btns[f].id == 191) {
                btns[f].innerText = codes[f].spec
            }
        }
        else if (btns[f].id >= 48 && btns[f].id <= 57) {
            btns[f].innerText = codes[f].btn
        }
        else if (btns[f].id >= 65 && btns[f].id <= 90) {
            btns[f].innerText = codes[f].btn
        }
        else if (btns[f].id == 187 || btns[f].id == 189 || btns[f].id == 192 || btns[f].id == 219 || btns[f].id == 221 || btns[f].id == 186 || btns[f].id == 222 || btns[f].id == 188 || btns[f].id == 196 || btns[f].id == 191) {
            btns[f].innerText = codes[f].btn
        }


    }
})


const ctrl = document.querySelector(".ctrl")
const c = document.querySelector(".c")

ctrl.addEventListener("click", async ()=>{
    ctrl.classList.toggle("lok")
    c.classList.toggle("lok")
    for (let f = 0; f < btns.length; f++) {
    if(ctrl.classList.contains("lok")){
         if(btns[f].id == 17 || btns[f].id == 67){
            const copy = text.value
            if(copy){
                await navigator.clipboard.writeText(copy)
            }
            // else{
            //     alert("Not Copied")
            // }
         }
    }
}
})

window.addEventListener("keydown", async (e) => {
    if (e.shiftKey) {
        shif.classList.toggle("lok")
        for (let f = 0; f < codes.length; f++) {
            if (shif.classList.contains("lok")) {
                if (btns[f].id >= 48 && btns[f].id <= 57) {
                    btns[f].innerText = codes[f].spec
                }
                if (btns[f].id >= 65 && btns[f].id <= 90) {
                    btns[f].innerText = codes[f].btnC
                }
                if (btns[f].id == 187 || btns[f].id == 189 || btns[f].id == 192 || btns[f].id == 219 || btns[f].id == 221 || btns[f].id == 186 || btns[f].id == 222 || btns[f].id == 188 || btns[f].id == 196 || btns[f].id == 191) {
                    btns[f].innerText = codes[f].spec
                }

            }

            else if (btns[f].id >= 48 && btns[f].id <= 57) {
                btns[f].innerText = codes[f].btn
            }
            else if (btns[f].id >= 65 && btns[f].id <= 90) {
                btns[f].innerText = codes[f].btn
            }
            else if (btns[f].id == 187 || btns[f].id == 189 || btns[f].id == 192 || btns[f].id == 219 || btns[f].id == 221 || btns[f].id == 186 || btns[f].id == 222 || btns[f].id == 188 || btns[f].id == 196 || btns[f].id == 191) {
                btns[f].innerText = codes[f].btn
            }

            if (btns[f].id >= 48 && btns[f].id <= 57) {
                if (e.key == codes[f].spec) {
                    text.value += codes[f].spec
                    display()
                }
            }
            if (btns[f].id >= 65 && btns[f].id <= 90) {
                if (e.key == codes[f].btnC) {
                    text.value += codes[f].btnC
                    display()
                }
            }
            if (btns[f].id == 187 || btns[f].id == 189 || btns[f].id == 192 || btns[f].id == 219 || btns[f].id == 221 || btns[f].id == 186 || btns[f].id == 222 || btns[f].id == 188 || btns[f].id == 196 || btns[f].id == 191) {
                if (e.key == codes[f].spec) {
                    text.value += codes[f].spec
                    display()
                }
            }

        }
    }
    function display() {
        for (let r = 0; r < btns.length; r++) {
            if (e.keyCode == btns[r].id) {
                btns[r].classList.add("back")
            }
            window.setTimeout(() => {
                btns[r].classList.remove("back")
            }, 200)
        }
    }

if(e.ctrlKey){
    ctrl.classList.toggle("lok")
        if(e.key == 'c'){
            const copy = text.value
            if(copy){
                await navigator.clipboard.writeText(copy)
            }
            else{
                alert("Not Copied")
            }
    }
}
})

const head = document.querySelector(".head")
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.interinResults = true
recognition.addEventListener("result",(e)=>{
    const trans = Array.from(e.results)
     for( f in trans){
        let p = trans[f]
            text.value+=p[0].transcript
     }
})

const micro = document.querySelector(".fa-microphone-slash")
micro.addEventListener("click",()=>{
    if(micro.classList.contains("fa-microphone-slash")){
        micro.className = "fa-solid fa-microphone"
        recognition.start()
        display()
    }
    else{
        micro.className = "fa-solid fa-microphone-slash"
        recognition.addEventListener("end",recognition.start)
    }
   
})
function display(){
    head.innerText = "Voice recognition is ON"
    head.style.color = "green"
    window.setTimeout(()=>{
        head.innerText = ""
    },1500)
}

const tamil = document.querySelector("#tamil")
const h2 = document.querySelector("marquee")
tamil.addEventListener("mouseenter",()=>{
    tamil.innerText = "English"
    tamil.classList.toggle("lok")
    for(let u=0;u<codes.length;u++){
    if(tamil.classList.contains("lok")){
        display()
        if(btns[u].id >= 48 &&  btns[u].id <=57 || btns[u].id == 187 || btns[u].id == 189 || btns[u].id ==8 || btns[u].id ==13  || btns[u].id ==32) {
            btns[u].innerText = codes[u].tamil
        }
       else  if(btns[u].id >=65 && btns[u].id <= 90){
            btns[u].innerText = codes[u].tamil
        }
        else  if(btns[u].id ==219 || btns[u].id == 221 || btns[u].id ==186 || btns[u].id ==188 ||btns[u].id ==196 ){
            btns[u].innerText = codes[u].tamil
        }
        else  if(btns[u].id ==100 || btns[u].id == 01 ||btns[u].id == 18 ||btns[u].id == 18 ||btns[u].id == 44 || btns[u].id == 33){
            btns[u].innerText = codes[u].tamil
        }
    }
    else if(btns[u].id >= 48 &&  btns[u].id <=57 || btns[u].id == 187 || btns[u].id == 189 ||  btns[u].id ==8 || btns[u].id ==13){
        btns[u].innerText = codes[u].btn
    }
   else  if(btns[u].id >=65 && btns[u].id <= 90){
        btns[u].innerText = codes[u].btn
    }
    else  if(btns[u].id ==219 || btns[u].id == 221 || btns[u].id ==186 || btns[u].id ==188 ||btns[u].id ==196 ){
        btns[u].innerText = codes[u].btn
    }
    else  if(btns[u].id ==100 || btns[u].id == 01 ||btns[u].id == 18 ||btns[u].id == 18 ||btns[u].id == 44 || btns[u].id == 33 || btns[u].id ==32){
        btns[u].innerText = codes[u].btn
    }
     else{
        tamil.innerText = "Tamil"
     }

}  
if(tamil.innerText == "English"){
    h2.innerText = "Please Mouse Over The English Button To Change English KeyBoard"
}
else{
    h2.innerText = "தமிழ் விசைப்பலகையை மாற்ற தமிழ் பட்டனை வட்டமிடுங்கள்";
}

function display(){
    head.innerText = "You Swithed To Tamil Keyboard"
    head.style.color = "gold"
    window.setTimeout(()=>{
        head.innerText = ""
    },2000)
}


})
// var utterance = new SpeechSynthesisUtterance('Hello,உங்கள் பதிவு செயல்முறை நிறைவடைந்தது');
// utterance.lang='ta-IN'; // for US english, en-GR for british
// window.speechSynthesis.speak(utterance);
// let a = window.navigator.onLine ? "online" : "offile";

// console.log(a)


function disable() {
    document.onkeydown=function(e)
    {
    return false;
    } 
}