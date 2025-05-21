package JAVA;

import java.util.HashMap;

public class TwoSum {

    public static int[] twoSum(int [] nums , int target ){
        int[] result = new int[2];
        HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();
        for(int i = 0 ; i<nums.length ; i++){
            if(hm.containsKey(target - nums[i])){
                result[1] = i;
                result[0] = hm.get(target - nums[i]);
                return result;
            }else {
                hm.put(nums[i], i);
            }
        }
        return result;
    }

    public static int[] twoSumSecondMethod(int[] nums, int target){
        int[]result = new int[2];
        for(int i = 0 ; i< nums.length ; i++){
            for(int j = i+1; j<nums.length ; j++){
                if(nums[i] + nums[j] == target){
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }
        return result;
    }

    public static void main(String [] args){
        System.out.println("Hello, World!");
        int[] nums = {2,7,11,15};
        int target = 9;
        int targetTwo = 9;
        int[] result = twoSum(nums, target);
        int[] resultTwo = twoSumSecondMethod(nums, targetTwo);
        System.out.println("The indices are: " + result[0] + " and " + result[1]);
        System.out.println("The indices are: " + resultTwo[0] + " and " + resultTwo[1]);
    }
}
