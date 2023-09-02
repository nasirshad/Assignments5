//Q No.5. Develop a program that reads a list of grades and uses the splice method to 
//remove failing grades (below 50) from the array.

function removeFailingGrades(grades: number[]): number[] {
    for (let i = grades.length - 1; i >= 0; i--) {
      if (grades[i] < 33) {
        grades.splice(i, 1); // Remove the failing grade
      }
    }
    return grades;
  }
  
  // Example usage:
  var gradeList: number[] = [80, 55, 66, 30, 69, 45, 40];
  console.log("Original grades:", gradeList);
  
  var passingGrades = removeFailingGrades(gradeList);
  console.log("Passing grades:", passingGrades);
  