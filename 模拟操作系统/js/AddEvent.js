var search = document.querySelector('.search')
        var input = search.querySelector('input');
        input.addEventListener('focus',function (){
            // search.className = 'search searchClick';
            if(this.value === '在这里输入你要搜索的内容'){
                this.value = '';
            }
            search.style.border = '3px solid rgb(0,120,215)'
        })
        var apply = document.querySelector('.apply');
        input.addEventListener('click',function (){
               apply.style.display='block';
           
        })
        input.addEventListener('blur',function (){
            // search.className = 'search searchClick';
            console.log(this.value);
            if(this.value === ''){
                this.value = '在这里输入你要搜索的内容';
            }
            search.style.border = '1px solid rgb(189, 188, 188)'
        })

var lis = document.querySelector('.apply').querySelector('ul').querySelectorAll('li');
var partOne = document.querySelector('.apply').querySelector('.partOne');
var all = document.querySelector('.apply').querySelector('.all');
var partTwo = document.querySelector('.apply').querySelector('.partTwo');
var partThree = document.querySelector('.apply').querySelector('.partThree');
for (let i = 0; i < lis.length-1; i++) {
    lis[i].addEventListener('click',function() {
        for (var j = 0; j < lis.length-1; j++) {
            lis[j].style.color = '#59595a' ;
            lis[j].style.borderBottom = 'none';
            
        }
        this.style.color= 'rgb(6,6,6)' ;
        this.style.borderBottom = '3px solid #0078d7'
        if (lis[i] === lis[0]) {
            partOne.style.display = 'none';
            all.style.display = 'block';
            partTwo.style.display = 'none';
            partThree.style.display='none';
        }
        else if(lis[i] === lis[1]) {
            all.style.display = 'none';
            partOne.style.display = 'block';
            partTwo.style.display = 'none';
            partThree.style.display='none';
        }
        else if(lis[i] == lis[2]){
            all.style.display = 'none';
            partOne.style.display = 'none';
            partThree.style.display='none';
            partTwo.style.display = 'block';
        }
        else if(lis[i] == lis[3]){
            all.style.display = 'none';
            partOne.style.display = 'none';
            partThree.style.display='block';
            partTwo.style.display = 'none';
        }
    })
}
var menu = document.querySelector('.menu');
var nav = document.querySelector('.nav');
lis[lis.length-1].addEventListener('click',function () {
    menu.style.display = 'block'
});




