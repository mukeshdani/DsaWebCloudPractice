//3442. Maximum Difference Between Even and Odd Frequency I


class Solution {
    public int maxDifference(String s) {
        int [] map = new int[26];
        int maxi = 0 , mini = s.length();
        for(char c : s.toCharArray()){
            map[c - 'a']++;
        }

        for(int i = 0 ; i< 26 ; i++){
            if(map[i] % 2 != 0 ){
                maxi = Math.max(maxi, map[i]);
            }

            if(map[i] % 2 == 0 && map[i] > 0){
               mini = Math.min(mini, map[i]);
            }
        }
        return maxi - mini;
    }
}