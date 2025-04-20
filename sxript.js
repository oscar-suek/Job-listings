document.addEventListener('DOMContentLoaded', function(){
    fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData
        showListings()
        doThis()
    })

    function showListings(){
        let output = "";
        if (data.length > 0){
            data.forEach((item, index) => {
                output += `
                        <div class="listing">
                            <div class="div2">
                                <img src="${item.logo}" alt="${item.logo}" class="img1">
                                <div class="job">
                                    <div class="job-det">
                                        <div class="nae">${item.company}</div>
                                        <div class="naf">${item.new}</div>
                                        <div class="nag">${item.featured}</div>
                                    </div>
                                    <div class="jp">${item.position}</div>
                                    <div class="job-info">
                                       <div>${item.postedAt}</div> .
                                       <div>${item.contract}</div> .
                                       <div>${item.location}</div> 
                                    </div>
                                </div>
                            </div>
                            <div class="div3">
                                <span class="span1">${item.role}</span>
                                <span class="span1">${item.level}</span>
                                <span class="span1">${item.languages[0]}</span>
                                <span class="span1">${item.languages[1]}</span>
                                <span class="span1">${item.languages[2]}</span>
                                <span class="span1">${item.tools[0]}</span>
                                <span class="span1">${item.tools[1]}</span>
                            </div>
                        </div>
                    `
                    /* console.log(item.languages.forEach(a => {console.log(a)})) */
                    /* for(let d of item.languages){console.log(d)} */
            })
            document.querySelector("#maindiv").innerHTML = output;
            span1 = document.querySelectorAll('.span1')
            span1.forEach(b => {
                if (b.innerHTML == 'undefined'){
                    b.remove()
                    /* b.style.display = 'none' */
                }
            })
            
            naf = document.querySelectorAll('.naf')
            naf.forEach(c => {
                if(c.innerHTML == 'true'){
                    c.innerHTML = 'NEW!'
                }else{c.style.display = 'none'}
            })
            nag = document.querySelectorAll('.nag')
            nag.forEach(c => {
                if(c.innerHTML == 'true'){
                    c.innerHTML = 'FEATURED'
                }else{c.style.display = 'none'}
            })
        }
    }
    function doThis(){
        nag = document.querySelectorAll('.nag')
        list = document.querySelectorAll('.listing')
        div3 = document.querySelectorAll('.div3')
        span2 = document.querySelectorAll('.span1')
        sd = document.querySelector('#select-div')
        d2 = document.querySelector('#d2')
        d1 = document.querySelector('#d1')
        db = document.querySelector('.db')
        al = []
        firstList = []
        secondList = []
        thirdList = []
        fourthList = []
        fifthList = []
        sixthList = []
        seventhList = []
        eightList = []
        ninthList = []
        tenthList = []
        filter = document.querySelector('.filter')
        function check(){
            if(d1.innerText == ''){
                sd.style.display = 'none'
            }
        }
        nag.forEach(c => {
            if (c.innerHTML == 'FEATURED'){
                c.parentElement.parentElement.parentElement.parentElement.style.borderLeft = '3px solid hsl(180, 29%, 50%)'
            }
        })
        span2.forEach(v=>{
            let addThis = ""
            addThis += `
                    <div class="filter">
                        <div class = "db">${v.innerHTML}</div>
                        <div class = "remove"><img src="./images/icon-remove.svg"></div>
                    </div>
                `
            v.addEventListener('click', function(){
                sd.style.display = 'flex'
                document.querySelector('#d1').innerHTML += addThis
                remove = document.querySelectorAll('.remove')
                remove.forEach(q => {
                    q.addEventListener('click', function(){
                        q.parentElement.remove()
                        /* console.log(q.previousSibling.previousSibling.innerHTML) */
                        function checkvalues(value){
                            return value !== q.previousSibling.previousSibling.innerHTML 
                        }
                        function myFunction(){
                            al = al.filter(checkvalues)
                        }
                        myFunction()
                        console.log(al)
                        newer = removeDuplicates(al)
                        console.log(newer)
                        compare(newer)
                        check()
                    })
                })
                d2.addEventListener('click', function(){
                    d1.innerHTML = ''
                    sd.style.display = 'none'
                    for (let i = 0; i < 10; i++){  
                        if(600 >= window.innerWidth){
                            list[i].style.display = 'block'
                        }
                        else{list[i].style.display = 'flex'}
                        al = []
                    }
                })
                for (let i = 0; i < d1.children.length; i++){
                    al.push(d1.children[i].children[0].innerHTML)
                    function removeDuplicates(arr) {
                        return [...new Set(arr)];
                    }
                    removed = removeDuplicates(al)
                    console.log(removed)
                    for (let i = 0; i < 10; i++){
                        list[i].style.display = 'none'
                    }
                    compare(removed)
                    /* console.log(compare()) */
                }
            })    
        })
        for (let i = 0; i < div3[0].children.length; i++){
            firstList.push(div3[0].children[i].innerHTML)
            thirdList.push(div3[2].children[i].innerHTML)
            fifthList.push(div3[4].children[i].innerHTML)
            seventhList.push(div3[6].children[i].innerHTML)
            eightList.push(div3[7].children[i].innerHTML)
            ninthList.push(div3[8].children[i].innerHTML)
            tenthList.push(div3[9].children[i].innerHTML)
        }
        for (let i = 0; i < div3[1].children.length; i++){
            secondList.push(div3[1].children[i].innerHTML)
            fourthList.push(div3[3].children[i].innerHTML)
            sixthList.push(div3[5].children[i].innerHTML)
        }
        function compare(asd){
            const includesAll = (arr, values) => values.every(v => arr.includes(v));
            a = (includesAll(firstList, asd))
            b = (includesAll(secondList, asd))
            c = (includesAll(thirdList, asd))
            d = (includesAll(fourthList, asd))
            e = (includesAll(fifthList, asd))
            f = (includesAll(sixthList, asd))
            g = (includesAll(seventhList, asd))
            h = (includesAll(eightList, asd))
            j = (includesAll(ninthList, asd))
            k = (includesAll(tenthList, asd))
            console.log(a)
            if (a == true){
                if(600 >= window.innerWidth){
                    list[0].style.display = 'block'
                }
                else{
                    list[0].style.display = 'flex'
                }  
            }
            if (b == true){
                if(600 >= window.innerWidth){
                    list[1].style.display = 'block'
                }
                else{
                    list[1].style.display = 'flex'
                }
            }
            if (c == true){
                if(600 >= window.innerWidth){
                    list[2].style.display = 'block'
                }
                else{
                    list[2].style.display = 'flex'
                }
            }
            if (d == true){
                if(600 >= window.innerWidth){
                    list[3].style.display = 'block'
                }
                else{
                    list[3].style.display = 'flex'
                }
            }
            if (e == true){
                if(600 >= window.innerWidth){
                    list[4].style.display = 'block'
                }
                else{
                    list[4].style.display = 'flex'
                }
            }
            if (f == true){
                if(600 >= window.innerWidth){
                    list[5].style.display = 'block'
                }
                else{
                    list[5].style.display = 'flex'
                }
            }
            if (g == true){
                if(600 >= window.innerWidth){
                    list[6].style.display = 'block'
                }
                else{
                    list[6].style.display = 'flex'
                }
            }
            if (h == true){
                if(600 >= window.innerWidth){
                    list[7].style.display = 'block'
                }
                else{
                    list[7].style.display = 'flex'
                }
            }
            if (j == true){
                if(600 >= window.innerWidth){
                    list[8].style.display = 'block'
                }
                else{
                    list[8].style.display = 'flex'
                }
            }
            if (k == true){
                if(600 >= window.innerWidth){
                    list[9].style.display = 'block'
                }
                else{
                    list[9].style.display = 'flex'
                }
            }
        }
    }
})

