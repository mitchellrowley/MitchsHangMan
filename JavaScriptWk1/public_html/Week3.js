/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Week3()
{
    var someArray = new Array();
    
    for( var i = 0; i < 10; i++ )
    {
        someArray[ i ]=i;
    }
    for (var i = 9; i >= 0; i --)
    {
       document.writeln (someArray [i]+"\r\n");
    }
}

