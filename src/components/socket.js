import {io} from "socket.io-client";

AFRAME.registerComponent("socket", {
    //Schema enables customization
    schema: {},
    init: function () {  
      //Create Primitive
      console.log("xD")
      const socket = io("https://192.168.0.120:8080/")
  
      //Populate Scene
    },
    update: function () {},
    tick: function () {},
    remove: function () {},
    pause: function () {},
    play: function () {},
  });
  
  function randomPos(position) {
    let newX = position.x + (Math.random() - 0.5) * 100;
    let newY = position.y;
    let newZ = position.z + (Math.random() - 0.5) * 100;
    let newPos = newX + " " + newY + " " + newZ;
    return newPos;
  }
  