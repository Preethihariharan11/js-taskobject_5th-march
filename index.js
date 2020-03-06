/*let name=prompt("please Enter your name");
let mark1=parseInt(prompt("Mark 1 scored out of 100 "));
while(isNaN(mark1)==false && mark1<=100)
{
    alert("Please enter valid details")
    mark1=parseInt(prompt("Mark 1 scored out of 100 "));
}
let mark2=parseInt(prompt("Mark 2 scored out of 100 "));
while(isNaN(mark2)==false && mark2<=100)
{
    alert("Please enter valid details")
    mark2=parseInt(prompt("Mark 2 scored out of 100 "));
}
let mark3=parseInt(prompt("Mark 3 scored out of 100 "));
while(isNaN(mark3)==false && mark3<=100)
{
    alert("Please enter valid details")
    mark3=parseInt(prompt("Mark 3 scored out of 100 "));
}
    const objectdetails= {
        Name:name,
        Mark1:mark1,
        Mark2:mark2,
        Mark3:mark3
        }
    let n=objectdetails.Name
    let m1=objectdetails.Mark1
    let m2=objectdetails.Mark2
    let m3=objectdetails.Mark3
    const objecttotal= {
        Total:m1+m2+m3
        }
        const objectavg= {
            Average:(m1+m2+m3)/3
            }
    //define object into variable
    console.log("output 1")
    console.log("Name is",n)
    console.log("mark1 is",m1)
    console.log("mark2 is",m2)
    console.log("mark3 is",m3)
    console.log("output 2")
    console.log("Name is",n)
    console.log("total is",objecttotal.Total)
    console.log("output 3")
    console.log("Name is",n)
    console.log("average is",objectavg.Average)
    console.log("output 4")
    console.log("Name is",n)
    console.log(objecttotal.Total,objectavg.Average)