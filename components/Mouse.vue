<template>
<div id="cursors">
  <div class="cursor" id="cursor-inner">
    <div class="dot">
      <i></i>
    </div>
    <div class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><g fill="none" stroke="#fff" stroke-width="3px"><path stroke-linejoin="round" d="M18 7.5v22" transform="rotate(-90 14 14) translate(-4.5 -5.5) translate(.5)"></path><path d="M29.5 18l-11 10.5L7.5 18" transform="rotate(-90 14 14) translate(-4.5 -5.5) translate(0 1)"></path></g></svg>
    </div>
    <div class="play">
      <span>Play</span>
    </div>
  </div>
  <div class="cursor" id="cursor-outer">
    <div class="circle">
      <i></i>
    </div>
    <svg width="98" height="98" class="timer" id="cursor-timer" >
      <circle class="needle" cx="49" cy="49" r="47" style="stroke-dasharray: 350px;"></circle>
    </svg>
  </div>
</div>
</template>

<script setup>
  import { PAGE_INFO } from '@/const/pageInfo'
  const route = useRoute();
  onMounted(() => {
    const cursors = document.querySelector('#cursors');
    const cursorInner = document.querySelector('#cursor-inner');
    const cursorOuter = document.querySelector('#cursor-outer');
    let dataScrollType = ''

    // 마우스 이동시 커서 이동
    document.addEventListener('mousemove', (e) => {
      cursorInner.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      // cursorOuter는 더 느리게 이동
      setTimeout(() => {
        cursorOuter.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }, 50);
      // console.log(e.target.classList)
      dataScrollType = e.target.getAttribute('data-cursor-type');
      // 현재 마우스 위치에 data-curser-type attrivute가 있는지 확인
      if(dataScrollType){
        if(dataScrollType === 'hover'){
          cursors.classList.add('hover');
        }else{
          cursors.classList.add('hover');
          cursors.classList.add(dataScrollType);
        }
      }else{
        // cursors의 모든 클래스를 제거
        cursors.className = '';
      }
    });
  })

</script>

<style lang = "scss">
*{
  cursor: none !important;
}
#cursors{
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999999;
  mix-blend-mode: difference;
  &.hover{
    .cursor{
      .circle{
        i{
          width: 96px;
          height: 96px;
        }
      }
    }
  }
  &.arrow{
    .cursor{
      .dot{
        opacity: 0 !important;
      }
      .arrow{
        opacity: 1 !important; 
      }
    }
  }
  &.play{
    mix-blend-mode: normal !important;
    .cursor{
      // width: 96px;
      // height: 96px;
      .dot{
        i{
          width: 96px;
          height: 96px;
          background: var(--cursorColor);
          transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1), background 2000ms cubic-bezier(0.19, 1, 0.22, 1)
        }
      }
      .play{
        opacity: 1 !important;
      }
      .circle{
        opacity: 0 !important;
      }
    }
  }
}
.cursor{
  position: fixed;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  .dot{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform 200ms cubic-bezier(0.19, 1, 0.22, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    i{
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1);
      box-sizing: border-box;
      background: #fff;
    }
  }
  .arrow, .play{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0;
    box-sizing: border-box;
  }
  .play{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 96px;
    span{
      font-size: 24px;
      font-weight: 700;
      // text-transform: uppercase;
      font-family: 'GmarketSans';
      color: #fff;
    
    }
  }
  .circle{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform 200ms cubic-bezier(0.19, 1, 0.22, 1);
    i{
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1), width 400ms cubic-bezier(0.19, 1, 0.22, 1), height 400ms cubic-bezier(0.19, 1, 0.22, 1);
      border: 2px solid #fff;
      box-sizing: border-box;
    }
  }
  .timer{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform: translate(-50%, -50%) rotate(-90deg);
    display: block;
    background-color: transparent;
    opacity: 0;
    .needle{
      stroke: #fff;
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      stroke-dashoffset: 0;
    }
  }
}

@keyframes cursorTimer {
  0% {
    stroke-dashoffset: 350px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>