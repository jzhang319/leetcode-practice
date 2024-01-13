def checkIfPangram(self, sentence: str) -> bool:
  if (len(sentence) < 26):
      return False
  character = {}
  var2 = 'abcdefghijklmnopqrstuvwxyz'
  for char in var2:
      if char not in character:
          character[char] = 1
  for char2 in sentence:
      if char2 in character:
          character[char2] -= 1  # true
  for key in character:
      if character[key] == 1:
          return False
  return True
