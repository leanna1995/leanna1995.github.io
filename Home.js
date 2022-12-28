const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');
const colors = [ "deepskyblue", "deeppink", "lightgreen", "gold", "mediumorchid", "darkolivegreen", "darkorange", "gray", "cornflowerblue", "cadetblue" ];

for ( let lk of links ){
    lk.addEventListener( 'mouseenter' , mouseEnterFc );
}

function mouseEnterFc(){  // 메뉴명에 마우스가 올라갔을때 할 일
    
    if ( !this.parentNode.classList.contains( 'active' ) ){  // 만약 부모 요소에 'active'가 없다면        
        for ( let lk of links ){
            if ( this.parentNode.classList.contains( 'active' ) ){  // 만약 부모 요소에 'active'가 있다면
                lk.parentNode.classList.remove( 'active' );  // 'active' 제거
            }
            lk.style.opacity = 0.2;  // 마우스가 올라가 있지 않으면 opcity : 0.2
        }
    }

    this.parentNode.classList.add( 'active' );  // 'active' 추가
    this.style.opacity = 1;  // 마우스가 올라가 있으면 opcity : 1

    const color1 = colors[ Math.floor( Math.random() * colors.length ) ];
    this.style.color = color1;  // 메뉴의 글자색 랜덤 변경


    const width = this.offsetWidth;  // offsetWidth : element의 길이
    const height = this.offsetHeight;  // offsetHeight : element의 높이
    const top = this.offsetTop;  // offsetTop : element의 상단 공간
    const left = this.offsetLeft;  // offsetleft : element의 왼쪽 공간
    const color2 = colors[ Math.floor( Math.random() * colors.length ) ];
    console.log( 'width : ' + width );
    console.log( 'height : ' + height );
    console.log( 'top : ' + top );
    console.log( 'left : ' + left );
    
    target.style.width = `${width}px` ;
    target.style.height = `${height}px` ;
    target.style.left = `${left}px` ;
    target.style.top = `${top}px` ;
    target.style.borderColor = color2;
}