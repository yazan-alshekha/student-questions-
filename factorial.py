def factorial(x):
    if x==2:
        return 2
    return x * factorial(x-1)


print(factorial(4)) #24