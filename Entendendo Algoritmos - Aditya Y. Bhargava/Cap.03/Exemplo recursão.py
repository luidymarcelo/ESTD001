def regressive(i):
  if i <= 100:
    return "yes"
  else:
    print(i)
    return regressive(i-1)
  
regressive(120)