# Inputs
x1 = 2
x2 = 4

# Dials (weights)
w1 = 3.0
w2 = 5.0

# Target
truth = 30.0
learning_rate = 0.01

# Initial state
output = (x1 * w1) + (x2 * w2)
loss = truth - output

print("Initial output:", output)
print("Initial loss:", loss)

# --- Write your loop / experiment below ---

while loss > 0.001:
           output = (x1 * w1) + (x2 * w2)
           loss = truth - output 
           nudge1= x1*loss*learning_rate
           nudge2= x2*loss*learning_rate
           w1=w1+nudge1
           w2=w2+nudge2
           


print("w1=",w1 , "w2=",w2, "nudge1=",nudge1, "nudge2=",nudge2, "loss=",loss)

              