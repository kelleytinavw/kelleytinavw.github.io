//document.write("Good Morning");

//document.write("Good Morning" + name);
//ask for schoool, hometown
//print out using 1 statement
//good morning Dr.B>, I'm going to OdJ
//and I am from bangkok, Thiland
//document.write("Good Morning");
//var name=prompt("What is your name?");
//var school=prompt("What school did you go to?");
//var hometown=prompt ("Where are you from?");
//document.write("Hello my name is" + name +"I am from" +  hometown  + "I attend" + school);

/*var score=prompt("Hey What's your score?");
if (score>450)
	{document.write("Awesome");
	}
	else if (score>350)
			{document.write("great");
			}
			else if (score>250)
					{document.write("good");
					}
					else if (score>150)
							{document.write("you tried");
							}
							else
								{document.writes("practice");
								}
*/

/*var score1=prompt ("enter Score 1");
var score2=prompt ("enter Score 2");
var score3=prompt ("enter Score 3");
var score4=prompt ("enter Score 4");
var score5=prompt ("enter Score 5");

//var total = +score1 + + score2 + + score3 + + score4 + + score5;  --> most effective
//var total = parsint (score1) +parsint(score2) +parsint(score3) +parsint(score4)+parsint(score5);

document.write(total);
*/
//var score = 5;
//var score=[5,7,4,6,1];

 //document.write(score[1]);

/* var total= score[0]+score[1]+score[2]+score[3]+score[4];

 document.write (total);
 */

/*var score=[5,7,4,6,1,3,3,3];
 var total=0 //total scores
 var index=0 //index subscript

 while (index < score.length)
 {
 	total=total+score[index];
 	index= index +1;
 }

 document.write (total);
*/

// ask user for number
//using a while loopto print number from 1 up to max
//make it to a squaare 1, 4, 9,16,25,..

/*var number=prompt("Pick a number");
var i=0;
newmax=parseInt(number);

while (i < newmax)
		{
			i++; //i=i+1
			document.write(i*i+ " ");
		}
*/


/*//create our own function
var max =prompt("Pick a number");
for (var i=1 ; i<=parseInt(max) ; i++)
{
	document.write(calPower(i,3) + "<br>");
}

//document.write(Math.pow(i,3)+ "<br>");
function calPower(base, power)
{
	var result= base; //result=1 
	while (power > 1)  //(power>0)
	{
		result*=base;  //result =result*base
		power --;  //power=power-1;
	}
	return result;
}
*/


//ask the user for a message, msg
var msg=prompt("Enter a message: ");
document.write(msg +"<br>");

//convert msg to ALL UPPERCASE, print out
var upmsg=msg.toUpperCase();
document.write(upmsg +"<br>");
//convert msg to all lovewrcase, print out
var lowmsg=msg.toLowerCase();
document.write(lowmsg + "br>");

//replace some character in the msg
var newmsg=msg.replace("old","new");
document.write(newmsg);

//write a function replaceAll--replace

function replaceAll (msg, ol, new);