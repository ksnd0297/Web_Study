
setInterval(function() {
  al();
},1000)

function al() {
setTimeout(function() {
  alert("A");
  setTimeout(function() {
    alert("A");
  }, 5000)
}, 5000)
}

function A() {
  alert("A");
}

function B() {
  alert("B");
}
