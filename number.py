import pyttsx3
from time import sleep
def speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()
def digit_sum(n):

    return sum(int(digit) for digit in str(n))

# Define the lists
numbers = [1, 3, 5, 6, 9, 10, 14, 15, 16, 18, 21, 24, 27, 32, 33, 36, 42, 46, 50, 51]
numbers1 = [19, 23, 37, 41, 45]

# Define the range
start = 3030
end = 3700
count = 0   

for num in range(start, end + 1):
    total_sum = 29 + digit_sum(num)
    if total_sum in numbers or total_sum in numbers1:
        count += 1  
        speak(str(num))
        sleep(5)
        print(num)
print(count)