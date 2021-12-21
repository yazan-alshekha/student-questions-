def isPrime(x):
    if x==1 or x== 0:
        return True
    else:
        for i in range(2,x):
            if x%i==0:
                return False
    return True

print(2,isPrime(2))    #true
print(3,isPrime(3))    #true
print(5,isPrime(5))    #true
print(7,isPrime(7))    #true
print(1,isPrime(1))    #true
print(0,isPrime(0))    #true

print(4,isPrime(4)) #false

print(10,isPrime(10)) #false
print(11,isPrime(11)) #True
print(12,isPrime(12)) #false