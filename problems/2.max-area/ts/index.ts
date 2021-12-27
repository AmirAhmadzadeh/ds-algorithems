/// problem 2  :
// you are given an array of positive numbers
// which each number represents height of a vertical line
// on  a chart . find two lines which together with the x-axis
// forms  a container that will hold the greatest amount of water
// return  the area of the water that would hold

// [1,2,3,4,6 ,8,5]
//  0 1 2 3 4 5 6

console.log("amir is her");

// x * y
function solution(entry: number[]) {
  let maxArea = 0;
  for (let j = 0; j < entry.length; ++j) {
    for (let i = j + 1; i < entry.length; ++i) {
      let area = Math.abs(j - i) * Math.min.apply(null, [entry[i], entry[j]]);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
}

console.log(solution([1, 2, 3, 4, 6, 8, 5]));
console.log(solution([1, 2, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([1, 2]));
console.log(solution([]));
console.log(solution([1]));
console.log(solution([7, 1, 2, 3, 9]));

function opSolution(entry: number[]) {
  let maxArea = 0;
  let I = 0,
    J = entry.length - 1;

  while (I < J) {
    let height = Math.min.apply(null, [entry[I], entry[J]]);
    let width = Math.abs(I - J);
    let area = height * width;
    maxArea = Math.max.apply(null, [area, maxArea]);

    if (entry[I] <= entry[J]) {
      ++I;
    } else {
      --J;
    }
  }

  return maxArea;
}

function opSolution2(entry: number[]) {
  let maxArea = 0;
  let I = 0,
    J = entry.length - 1;

  while (I < J) {
    maxArea = Math.max.apply(null, [
      Math.min.apply(null, [entry[I], entry[J]]) * Math.abs(I - J),
      maxArea,
    ]);

    if (entry[I] <= entry[J]) {
      ++I;
    } else {
      --J;
    }
  }

  return maxArea;
}

console.log(
  "/////////////////////////////optimized solutions////////////////////"
);
console.log(opSolution([1, 2, 3, 4, 6, 8, 5]));
console.log(opSolution([1, 2, 2]));
console.log(opSolution([1, 2, 3]));
console.log(opSolution([1, 2]));
console.log(opSolution([]));
console.log(opSolution([1]));
console.log(opSolution([7, 1, 2, 3, 9]));

////// playground
type TRes = {
  respCode: number;
  respValue: string[];
};

interface IResponse {
  cb?: () => TRes;
  serilize: () => void;
}

abstract class Funny {
  abstract tellMeaJoke(): void;
}

class Test extends Funny implements IResponse {
  serilize() {
    ///...
  }

  tellMeaJoke() {
    ///...
  }
}