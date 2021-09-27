var sum = 0;
var count = 0;
function input1(x)
{
  sum = sum+x;
 count = count+1;
  document.getElementById("output").innerHTML = "Sum: "+sum   + "<br> Count: " +count;
}
function Clear()
{
sum=0;
count=0;
  document.getElementById("output").innerHTML = "Sum: "+sum   + "<br> Count: " +count;
}
