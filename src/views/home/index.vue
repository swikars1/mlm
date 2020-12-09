<template>
	<div class="bgimg">
  <div class="topleft">
    
  </div>
  <div class="middle">
  	<img class="image" src="https://cdn.discordapp.com/attachments/750348469721497620/786120675383181322/logo-removebg-preview.png" alt="">
    <h1>COMING SOON</h1>
    <hr>
    <hr>
  </div>
  <div class="bottomleft">
    <p>Some text</p>
  </div>
</div>
</template>



<style>
body, html {
  height: 100%;
  margin: 0;
}

.bgimg {
  background-image: url('https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg');
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
}

.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

hr {
  margin: auto;
  width: 100%;
}
/*.image {
	width: 200px;
	height: 200px;
	left: 15px;
	bottom: 14px;
}*/
</style>