// class Car
// {
//     constructor(model, seatPlace, color, price){
//         this.model = model;
//         this.seatPlace = seatPlace;
//         this.color = color;
//         this.price = price;
//     }

//     buyCar = () => {
//         console.log("Вы купили "+ this.model + this.seatPlace + this.color + this.price);
//     }
// }

// class Driver extends Car
// {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     myCar = () => {
//         console.log("Мои тачилы : " + this.name + super.model + super.seatPlace);
//     }
// }

// let Lada = new Car("Lada", "4", "baklajan", 1000);

// Lada.buyCar();

// let Boris = new Driver("Boris Britva", 45);

// Boris.myCar();

var num = 4; // Число картинок
var wrap = 80; // Размер "холста" для расположения картинок
var radius = 250; // Радиус нашего круга

$(document).ready(function() {
  for (i=0;i<num; i++){
    var f = 2 / num * i * Math.PI  ;  // Рассчитываем угол каждой картинки в радианах
    var left = 200 + radius * Math.sin(f) + 'px';
    // var left = radius * Math.sin(f) + 'px';
    console.log('top: ' + top + ', left:' + left)
    var top = 200 + radius * Math.cos(f) + 'px';
    // var top = radius * Math.cos(f) + 'px';

    console.log('top: ' + top + ', left:' + left)

    $('.circle-inside').eq(i).css({'top':top,'left':left}); // Устанавливаем значения каждой картинке
  }

//   $('.circle-around').hover(function(){
//     for (i=0;i<num; i++){
//         var f = (2 / num * i * Math.PI) + 0.1 ;  // Рассчитываем угол каждой картинки в радианах
//         var left = 200 + radius * Math.sin(f) + 'px';
//         // var left = radius * Math.sin(f) + 'px';
//         console.log('top: ' + top + ', left:' + left)
//         var top = 200 + radius * Math.cos(f) + 'px';
//         // var top = radius * Math.cos(f) + 'px';
    
//         console.log('top: ' + top + ', left:' + left)
    
//         $('.circle-inside').eq(i).css({'top':top,'left':left}); // Устанавливаем значения каждой картинке
//       }
//   });
    var section = document.querySelectorAll('wrap');

    ball.onmousedown = function(e) {

        var coords = getCoords(ball);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
    
        // ball.style.position = 'absolute';
        document.body.appendChild(ball);
        moveAt(e);
    
        ball.style.zIndex = 1000; // над другими элементами
    
        function moveAt(e) {
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';
        }
    
        document.onmousemove = function(e) {
        moveAt(e);
        };
    
        ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
        };
    
    }
    
    ball.ondragstart = function() {
        return false;
    };
    
    function getCoords(elem) {   // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
        };
    }

    
});
