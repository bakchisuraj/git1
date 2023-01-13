function isprime(a){
  let count=0;
for(i=0;i<=a;i++)
  {
    if(a%i==0)
    {
      count++
    }
  }
if(count!=2)
{
  console.log("prime number");
}
else
{
  console.log("not a prime number");  
}
}
isprime(4);