// Seitch statement

// Find the area of circle, triangle and rectengle...
var area = "rectengle";
var PI = 3.142, l = 5, b = 4, r = 3;

 switch (area) {
     case "circle":
         console.log("The area of the circle is : " + PI*r**2);
         break;
     case "triangle":
         console.log("The area of the triangle is : " + (l*b)/2);
         break;
     case "rectengle":
         console.log("The area of the rectengle is : " + (l*b));
         break;
 
     default:
         console.log("Please enter a valid data...");
         break;
 }