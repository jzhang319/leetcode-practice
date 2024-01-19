def find_matrix(nums):
    matrix = []
    unique = set()

    while len(nums) > 0:
        row = []
        i = 0
        while i < len(nums):
            if nums[i] not in unique:
                unique.add(nums[i])
                row.append(nums[i])
                nums.pop(i)
            else:
                i += 1
        matrix.append(row)
        unique.clear()
    return matrix

print(find_matrix([1, 3, 4, 1, 2, 3, 1]))  # [[1,3,4,2],[1,3],[1]]
