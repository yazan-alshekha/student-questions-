def reverse_string(x):
    new_string=''
    for i in range( len(x)-1, -1 ,-1 ):
        new_string +=x[i]
    return new_string    

# another solution
print(reverse_string('hello'))


def my_function(x):
    return x[::-1]

print(my_function('hello'))