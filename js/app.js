//4
var pictures = new Array();
pictures[0] = "img/image5.png";
pictures[1] = "img/imagehtml.png";
pictures[2] = "img/image9.png";
pictures[3] = "img/image4.jpg";
pictures[4] = "img/image5.png";
pictures[5] = "img/image6.jpg";
pictures[6] = "img/image7.jpg";
pictures[7] = "img/image8.gif";
pictures[8] = "img/image9.png";
pictures[9] = "img/image10.png";
var previous = document.getElementById("prev");
var next = document.getElementById("next");
var pic = document.getElementById("img");
var Imgtotal = 10;
var current = 0;

function prevImage() {
    if (current > 0) {
        current = current - 1;
    } else {
        current = Imgtotal - 1;
    }
    pic.src = pictures[current];
}

function nextImage() {
    if (current < Imgtotal - 1) {
        current = current + 1;
    } else {
        current = 0;
    }
    pic.src = pictures[current];
}
previous.addEventListener("click", prevImage, false);
next.addEventListener("click", nextImage, false);

//6
// var myString = "www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your";
// var subString = myString.subString(35, 48);
// console.log(subString);

//a
// var link = "www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your";
// var newLink = link.split("/");
// console.log(newLink);
// //b
// var link = "www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your";
// var newLink = link.slice(35, 48);
// console.log(newLink);






// ImageNames = new Object();
// ImageNames.length = 9;

// for (counter = 0; counter < 9; counter++) {
//     file_number = counter + 1;
//     file_name = ("image" + file_number + ".jpg");
//     ImageNames[counter] = file_name;
// }

// function changeImage(direction) {
//     which_image_loaded += direction;
//     if (which_image_loaded < 0)
//         which_image_loaded = 9;
//     if (which_image_loaded > 9)
//         which_image_loaded = 0;
//     if (document.images)
//         document.myimage.src = ImageNames[which_image_loaded];
// }




























//
// function getcurrentImageIndex() {
//     return images.indexOf(document.getElementById("images").src);
// }

// function Next() {
//     nextImage = (getCurrentImageIndex() + 1) % images.length;
//     document.getElementById("image").src = images[nextImage];
// }

// function Prev() {
//     nextImage = (getCurrentImageIndex() - 1 + images.length) % images.length;
//     document.getElementById("image").src = images[nextImage];
// }

// var button1 = images.length;
// for (var i = 0; i < images.length; i++) {
//     console.log(images[i]);
// }




// var i = 0

// function loadImage() {
//     ("<img/>").attr("src", images[i]).load(function() {
//         ('').html(this);
//     });
// }
// loadImage();
// ('.prev, .next').click(function() {
//     class = (this.class === 'next' ? i++ : i--);
//     i = i == -1 ? tot - 1 : i % tot;
//     loadImage();
// });
// //
// (function() {

//     ('input[id$=Image1]').click(function() {
//         var button1 = (this).parent('tr').find('input[class= button1]').val();
//         var button2 = (this).parent('tr').find('input[class = button2]').val();


//     })


// })

// function button1() {
//     document.getElementsByclassName("image").innerHTML = '<img src="image2.png" />';
// }

// function button2() {
//     document.getElementsByclassName("image").innerHTML = '<img src = imghtml.png" />';
// }
// 6

// function changeImg() {
//     var image = document.getElementsByclassName("button1");
//     for (var i = 0; i < images.length; i++) {
//         if (imag[i].getAttribute('src') == 'THE IMAGE LOCATION HERE') {
//             imag[i].removeAttribute('height');
//             imag[i].setAttribute('src', 'IMAGE YOU WANT TO PUT IN PLACE');
//         }
//     }

//5
// function nextImage() {
//     var i = image.indexOf();
//     var imageSrc = document.getElementById("image").src = images[i];
//     for (var i = image.indexOf(day); i < image.length; i++)
// }

// function prevImage() {

// }
