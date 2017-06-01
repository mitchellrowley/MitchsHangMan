/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * The first section within this code is where we have identified our global variables
 * for each variable used within the main code we found it necessary to first call on them as a global entity so that the meaning of each could traverse the different uses throughout. 
 */
var secretWord;
var encryptWord;
var numChar;
var NooseKnot;
<<<<<<< Updated upstream
LoadPictures;
imageArray;
image;
indexImg;
=======
var LoadPictures;
var imageArray;
var image;
var indexImg;
>>>>>>> Stashed changes

/*
 * The function onload is used to populate the html with the information needed to begin the game
 * the for loop in this function simply populates the positioning of the characters within the array
 */
function onload()
{
   
   secretWord="magician";
   encryptWord = new Array();
   imageArray = new Array ();
   indexImg = 0;
   NooseKnot = 0;
   numChar = secretWord.length; 
   var imageDir = "HangManPNGs/";
   var imageNum = 0;
   imageArray[0] = new Image();imageArray[0].src= imageDir + "HMstart.png";
   imageArray[1] = new Image();imageArray[1].src=imageDir + "HM-1.png";
   imageArray[2] = new Image();imageArray[2].src=imageDir + "HM-2.png";
   imageArray[3] = new Image();imageArray[3].src=imageDir + "HM-3.png";
   imageArray[4] = new Image();imageArray[4].src=imageDir + "HM-4.png";
   imageArray[5] = new Image();imageArray[5].src=imageDir + "HM-5.png";
   imageArray[6] = new Image();imageArray[6].src=imageDir + "HM-6.png";
   imageArray[7] = new Image();imageArray[7].src=imageDir + "HM-7.png";
   imageArray[8] = new Image();imageArray[8].src=imageDir + "HM-8.png";
   imageArray[9] = new Image();imageArray[9].src=imageDir + "HM-9.png";
   imageArray[10] = new Image();imageArray[10].src=imageDir + "HMfinal.png";
   
   for (var i= 0; i < numChar; i ++)
        {
            encryptWord[i]=" * ";              
        }
    var totalImgs = imageArray.length;
    
}
/*
 * The function showGuess is the bread and butter of this code, it is the bulk of the program
 * in that it contains all of the elements of this code that are essential for the code to properly
 * function. 
 * The first portion of this code is the variable counter, without the counter the game would have no
 * frame in which the player is to start nor would it have a criteria for the game to cease. 
 * The first if statement is simply identifing that if the secretWord is not guessed and the guess
 * is not the encryptWord then the counter will increase by one and the player will be one step 
 * closer to the end of the game. 
 * the variable NooseKnot is called within this function because it sets the ending to the game
 * as nooseKnot increases and counter increases the closer the user is to loosing the game. 
 */
function showGuess()
{
   var guess=document.HangMan.guess.value;
//    window.alert(guess);
    var counter = 0;
    for (var i= 0; i < secretWord.length; i ++ )
    {                   
        if ( (guess == secretWord.charAt(i)) && ( guess != encryptWord[ i ] ) )
        {
            counter ++;
            encryptWord[i]= secretWord[i];
            
        }
        
    }
        if (counter == 0)
        {
//        window.alert(1+indexImg+","+NooseKnot +","+ document.getElementById("Gallows").src);
//        window.alert(2+imageArray[2].src);   
        indexImg ++;
        NooseKnot ++;            
        document.getElementById("Gallows").src = imageArray[indexImg].src;
        document.HangMan.Noose.value=NooseKnot.toString();
            
        }
        if (NooseKnot >= 10)
        {
            window.alert("Game Over!");
        }
        String = encryptWord.join("");
        if (String == secretWord)
        {
            window.alert("You Win!");
        }
  
    display_encryptWord(encryptWord);
//    windows.alert(imageArray[indexImg]);
}
  /*
     * display_encryptWord is the first function created that we used multiple times in the code
     * the function is used to display the values of the secret word as well as used to  display the correctly
     * guessed letters in their proper placement within the array. this specific piece of code uses
     * a few different elements to perform its intended function. 
     * The  .join;  was used to alieviate the comma seperators in the output of the encryptWord
  */
function display_encryptWord(array)
{
//    for( var j = 0; j < array.length; j++ )
//        {
//            
//            document.write (array[j]);
//        }
//            document.write ("</br>");
    String = array.join("");
    document.HangMan.holder.value=String;
}
function HangMan()
{
//        window.alert("hey");
        var secretWord = "magician";
        var  numChar = secretWord.length;
//        window.alert(numChar);
        var encryptWord = new Array();
        for (var i= 0; i < numChar; i ++)
        {
            encryptWord[i]=" * ";
            
               
        }
//        for( var j = 0; j < numChar; j++ )
//        {
//            document.write (encryptWord[j]);
//        }
//            document.write ("</br>");

//        var guess = 'g';
//        var result = secretWord.charAt(0);
//        document.write(result);
    
        display_encryptWord(encryptWord);
}