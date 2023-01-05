<template>
  <div v-for="item in globalImageList" :key="item">
    <img :src="item" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

// onMounted(()=>{
//   window.onload = () => {
//     const game = new Game(globalImageList);
// }
// })

const globalImageList: string = [
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/1.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/2.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/3.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/4.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/5.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/6.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/7.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/8.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/9.jpg",
  "https://www.eveningwater.com/my-web-projects/jQuery/7/img/10.jpg",
];
</script>

<style scoped>
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}
small {
  font-size: 12px;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body,
html {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  background: url("https://www.eveningwater.com/my-web-projects/js/21/img/2.gif")
    no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ew-box {
  position: absolute;
  width: 8rem;
  height: 8rem;
}

.ew-box-item {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 4px;
  border: 1px solid #535455;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.ew-collection {
  width: 8rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background: url("https://www.eveningwater.com/static/dist/20d6c430c2496590f224.jpg")
    no-repeat center/cover;
  position: fixed;
  margin: auto;
  overflow: auto;
  bottom: 10px;
}

.ew-collection > .ew-box-item {
  margin-right: 0.3rem;
}

.ew-left-source,
.ew-right-source {
  width: 2.6rem;
  height: 1.2rem;
  position: absolute;
  top: 0;
}

.ew-left-source {
  left: 0;
}

.ew-right-source {
  right: 0;
}

.ew-shadow {
  box-shadow: 0 0 50px 10px #535455 inset;
}
</style>
