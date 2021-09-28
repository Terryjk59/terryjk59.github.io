var bitmojiX = 10;
var bitmojiY = 100;

var frogX = 10;
var frogY = 100;

var bitmojiSpeed = random(1, 5);
var frogSpeed = random(1, 5);

draw = function() {
    
 //Bitmoji
    noStroke();
    background(255, 255, 255);

 //body
   fill(214, 214, 214);
   rect(bitmojiX+04, bitmojiY+114, 50, 50); //Body
   rect(bitmojiX+58, bitmojiY+125, 12, 30); //Right hand
   rect(bitmojiX-12, bitmojiY+125, 12, 30); //Left hand
 //Hat
   fill(217, 216, 202);
   ellipse(bitmojiX+30, bitmojiY+71, 52, 37); //hat top
   fill(117, 55, 64);
   ellipse(bitmojiX+30, bitmojiY+62, 23, 15); //mono
   fill(128, 93, 28);
   ellipse(bitmojiX+30, bitmojiY+65, 15, 15);//logo circle yellow
   fill(255, 255, 255);
   rect(bitmojiX+24, bitmojiY+58, 3, 3); //mono 1
   rect(bitmojiX+32, bitmojiY+58, 3, 3); //mono 2
   rect(bitmojiX+28, bitmojiY+62, 3, 3); //mono 
   fill(229, 155, 125);
   ellipse(bitmojiX+30, bitmojiY+97, 61, 66); //Head
   fill(135, 123, 123);
   arc(bitmojiX+31, bitmojiY+77, 58, 28, 177, 366); //Hat underside
 //Eyes
   fill(255, 255, 255);
   ellipse(bitmojiX+17, bitmojiY+89, 12, 6); //left eye
   ellipse(bitmojiX+45, bitmojiY+89, 12, 6); //right eye
 //Pupils
   fill(0, 0, 0);
   ellipse(bitmojiX+17, bitmojiY+89, 6, 5); //left eye
   ellipse(bitmojiX+45, bitmojiY+89, 6, 5); //right eye
 //Nose
   fill(166, 88, 88);
   triangle(bitmojiX+30, bitmojiY+98, bitmojiX+28, bitmojiY+89, bitmojiX+36, bitmojiY+100);
 //Facial hair
   fill(112, 111, 111);
   arc(bitmojiX+30, bitmojiY+105, 62, 54, 343, 556); //beard
   fill(64, 62, 62);
   arc(bitmojiX+31, bitmojiY+109, 20, 4, 150, 388); //Mustash
   fill(143, 59, 59);
   arc(bitmojiX+31, bitmojiY+114, 22, 7, 184, 356); //mouth
 //text
   textSize(24);
   text("TA", bitmojiX+16, bitmojiY+153);
   
  bitmojiX = bitmojiX + bitmojiSpeed;
  frogX = frogX + frogSpeed;
   
   
   
 //frog  
   ellipse(frogX, frogY, 200, 100); // face
  //eyesocket
   ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
   ellipse(frogX + 50, frogY - 50, 40, 40); // right eye socket
 //eyeball
   fill(255, 255, 255); // for the whites of the eyes!
   ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
   ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball
 //mouth
   fill(0, 0, 0);
   ellipse(frogX, frogY, 156, 60); // mouth
 //Pupil
   rect(frogX - 50, frogY - 56, 8, 12); // left pupil
   rect(frogX + 50, frogY - 56, 8, 12); // right pupil
};





