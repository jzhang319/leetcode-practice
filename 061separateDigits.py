class Solution(object):
    def separateDigits(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        for num in nums:
          digits = [int(digit) for digit in str(num)]
          result += digits
        return result
