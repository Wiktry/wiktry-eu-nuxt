<script setup>
const six = [0,1,2,3,4,5]
const ten = [0,1,2,3,4,5,6,7,8,9]

const numbers = {
  hours_l: [0,1,2],
  hours_r: ten,
  min_l: six,
  min_r: ten,
  sec_l: six,
  sec_r: ten
}

const current = reactive({
  hours_l: 0,
  hours_r: 0,
  min_l: 0,
  min_r: 0,
  sec_l: 0,
  sec_r: 0,
})

const setTime = () => {
  const date = new Date();

  const hour = date.getHours();
  if (hour < 10) {
    current.hours_r = hour;
  } else if (hour < 20) {
    current.hours_l = 1;
    current.hours_r = hour - 10;
  } else {
    current.hours_l = 2;
    current.hours_r = hour - 20;
  }

  const min = date.getMinutes();
  current.min_l = Math.floor(min / 10);
  current.min_r = min % 10;

  const sec = date.getSeconds();
  current.sec_l = Math.floor(sec / 10);
  current.sec_r = sec % 10;
}

onMounted(() => {
  setInterval(() => {
    setTime()
  }, 1000)
})
</script>

<template>
<div class="main">
  <div class="container">
    <span class="space" />
    <css-fancy-clock-number :numbers="numbers.hours_l" :current="current.hours_l" />
    <css-fancy-clock-number :numbers="numbers.hours_r" :current="current.hours_r"/>
    <span class="divider">:</span>
    <css-fancy-clock-number :numbers="numbers.min_l" :current="current.min_l"/>
    <css-fancy-clock-number :numbers="numbers.min_r" :current="current.min_r"/>
    <span class="divider">:</span>
    <css-fancy-clock-number :numbers="numbers.sec_l" :current="current.sec_l"/>
    <css-fancy-clock-number :numbers="numbers.sec_r" :current="current.sec_r"/>
    <span class="space" />
  </div>
</div>
</template>

<style>
@import url('http://fonts.cdnfonts.com/css/gotham');

.main {
  height: 100%;
  width: 100%;
  background-color: rgb(16, 33, 41);

  display: flex;
  justify-content: center;
  align-content: center;

  font-size: 3rem;
  font-family: 'Gotham';

  overflow: hidden;
}
.container {
  height: 100px;
  width: 360px;

  box-sizing: content-box;
  border-width: 6px;
  border-style: solid;
  border-image: linear-gradient(to bottom right, purple, orange 140%) 1;
  border-radius: 20px;

  display: flex;
  align-items: flex-start;

  transform-style: preserve-3d;
}
.number-row {
  width: calc(100% / 9);

  transition: .5s;
  transform: translateZ(-10px) translateY(calc(-70px * var(--i) - 10px));
}
.divider {
  width: calc(100% / 9);
  text-align: center;
  align-self: center;
}
.space {
  width: calc(100% / 18);
}
</style>