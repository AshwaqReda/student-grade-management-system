let names = ["ashwaq Reda" , "slsbil Ayman" , "aya sayed" , "randa gommaa" , "ali reda" ,"ahmed osama" , "hassan naser" , "mohammed reda"];
let grades = [99 , 98.5 , 95 , 97 , 50 , 45 , 40 , 100];



// print each student and his / her grade and his / her status in console
for(let i = 0 ; i < names.length ; i++)
{
    if(grades[i] >= 50)
    {
        console.log(names[i] + " : " + grades[i] + " :  passed");

    }
    else
    {
        console.log(names[i] + " : " + grades[i] + " :  Not passed");
    }
    
}

// average of grades
let sum = 0 ;
for(let i = 0 ; i < grades.length ; i++)
{
    sum += grades[i];

    
}
console.log("Average : " + (sum / grades.length));

// max and min grade 
let max = grades[0];
for(let i = 0 ; i < grades.length ; i++)
{
    if(max <= grades[i])
    {
        max = grades[i];
    }
}
console.log("max grade is : " + max );

let min = grades[0];
for(let i = 0 ; i < grades.length ; i++)
{
    if(min >= grades[i])
    {
        min = grades[i];
    }
}
console.log("min grade is : " + min );

// search of specific grade using student name

let student_name = document.getElementById('name');
let student_grade = document.getElementById('grade');
let student_status = document.getElementById('status');

student_name.onkeyup = function(){
    for (let i = 0 ; i < names.length ; i++) {
        if((student_name.value).toLowerCase().trim() === (names[i]).toLowerCase())
        {
            student_grade.value = Number(grades[i]) ;
            if(grades[i] >= 50 )
            {
                student_status.value = "Passed";
            }
            else
            {
                 student_status.value = "Not Passed";

            }

            return;
        }
      
    }
    student_grade.value = " this student is not available";
     student_status.value = "----";
    
};



