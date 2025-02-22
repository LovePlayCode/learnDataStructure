# 滑动窗口的思想
1. 先判断正常情况下该怎么做，然后进行分析。
2. 先向右移动有指针，再向右移动左指针，这样左右指针，左右指针交替执行(不回头)，可以完成一些问题。
3. 一般滑动窗口解的是暴力解法的优化相关，如何根据目标函数把暴力解法的一系列解排除掉，是使用滑动窗口的前提。
4. 参考代码如下

```java
public class Solution {

    public String slidingWindow(String s, String t) {
        // 起始的时候，都位于 0，同方向移动
        int left = 0;
        int right = 0;
        while (right < sLen) {
            if ( 在右移的过程中检测是否满足条件 ) {
                // 对状态做修改，好让程序在后面检测到满足条件
            }
            // 右边界右移 1 格
            right++;
            while ( 满足条件 ) {
                // 走到这里是满足条件的，左边界逐渐逐渐左移，可以取最小值
                if ( 在左移的过程中检测是否不满足条件 ) {
                    // 对状态做修改，好让程序在后面检测到不满足条件
                }
                // 左边界左移 1 格
                left++;
            }
            // 走到这里是不满足条件的，右边界逐渐右移，可以取最大值
        }
        return 需要的结果变量;
    }
}
```
相关题目：
1. 无重复字符的最长子串： [text](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
2. 最小覆盖子串: [text](https://leetcode.cn/problems/minimum-window-substring/)
3. 湍流数组: [text](https://leetcode.cn/problems/longest-turbulent-subarray/)
4. 字符串的排列: [text](https://leetcode.cn/problems/permutation-in-string/)
5. 替换后的最长重复字符: [text](https://leetcode.cn/problems/longest-repeating-character-replacement/description/)