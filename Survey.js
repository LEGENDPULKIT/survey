
//var state = 0;
var VoterCount;

var answer=[];

var form, player, game;


function setup()
{
  canvas=createCanvas(400,600);
  database=firebase.database();

  email=createInput('email Id');
  email.position(500,200);

  button=createButton('SUBMIT');
  button.position(680,200);

  ans=createInput('YES/NO');
  ans.position(500,300);

  but=createButton('OK');
  but.position(680,300);

  
  ans1=createInput('YES/NO');
  ans1.position(500,370);

  but1=createButton('OK');
  but1.position(680,370);

  ans2=createInput('YES/NO');
  ans2.position(500,440);

  but2=createButton('OK');
  but2.position(680,440);

  ans3=createInput('');
  ans3.position(500,510);

  but3=createButton('OK');
  but3.position(680,510);

  but.mousePressed(put);
  but1.mousePressed(put1);
  but2.mousePressed(put2);
  but3.mousePressed(put3);





  
  
}

function draw()
{

  textSize(35);
  fill("black");
  text("SURVEY REPORT",50,50);

  textSize(15);
  text("Q1) Is CAA good for our Nation?",20,180);

  text("Q2) Is survey good idea to collect the information?",20,250);

  text("Q3) Do you support our Education system?",20,320);

  text("Q4) What change do you want for our good future?",20,390);

    

}

function put()
{
  var i=ans.value();
  answer.push(i);
}

function put1()
{
  var o=ans1.value();
  answer.push(o);
}

function put2()
{
  var p=ans3.value();
  answer.push(p);
}

function put3()
{
  var u=ans4.value();
  answer.push(u);
}

function put4()
{
  var y=ans4.value();
  answer.push(y);
}