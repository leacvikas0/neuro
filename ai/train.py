  #START
x=2          
y=3
truth= 200  
loss=100
lrate= 0.0000001

while loss > 0.001:
         output=x*y
         loss=truth-output
         nudge=x*loss*lrate
         y=y+nudge




print("loss is", loss, "output", y) 



