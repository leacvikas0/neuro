x = 2
y = 5
truth = 80
learning_rate = 0.01
loss = 200

# Write your loop below!
while loss > 0.1:
    output = x * y
    loss = truth - output
    nudge = x * loss * learning_rate
    y = y + nudge

print("dial is at", y, " loss bro is", loss, "weirdly the nudge is", nudge)

print("it is done godamn")
