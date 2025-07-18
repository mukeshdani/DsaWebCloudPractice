class Solution {
    public int[] findErrorNums(int[] nums) {
           int[] ans = new int[2];
           int i = 0 ; 
           while(i < nums.length){
            int correctIndex=i-1;
            if(nums[i] != nums[correctIndex]){
                int temp = nums[i];
                nums[i] = nums[correctIndex];
                nums[correctIndex] = temp;
            }else{
                i++;
            }
           }

           for(int j = 0 ; j<nums.length ; j++){
            if(nums[j] != j+1){
                ans[0] = nums[j];
                ans[1] = j+1;
            }
           }
           return ans;
    }
}