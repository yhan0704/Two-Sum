var twoSum = function(nums, target) {
    twoNum = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target){
                twoNum.push(i, j)
            }
        }
    }
    console.log(twoNum)
};

console.log(twoSum([2,7,11,15], 9))