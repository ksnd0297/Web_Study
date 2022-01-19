A, B = map(in, input().split())

if A < 0 and B < 0:
  A += B
  print(int(A//B))
  print()