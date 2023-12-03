//. 3 .Write a "person" class to hold all the details 

class Person {
    constructor(
      Name = 'MBS Amuthesh',
      Batch = 'B54WD-Tamil',
      age = 23,
      Qulification = 'MCA',
      Studying = 'Full Stack Development'
    ) {
      this.Name = Name
      this.Batch = Batch
      this.age = age
      this.Qulification = Qulification
      this.Studying = Studying
    }
  }
  
  const person1 = new Person()
  const person2 = new Person('MBS Amuthesh', 'B54WD-Tamil', 23, 'MCA', 'Full Stack Developer')
  
  console.log(person1)
  console.log(person2)


  // 4. Write a class to calculate the uber price


  var distance = 2
function counter(distance) {
  distance = distance * 1000;
  
  const p_r = [100,50,10]
  const d_r = [100,400, distance-500]
  
  var totalCost = 0
  
  for (i = 0; i < 3; i++) {
    distance = distance - d_r[i]
    totalCost += d_r[i]*p_r[i]
    
    console.log(distance +" "+ totalCost)
}
  
  const t_cost = totalCost-9900 
  return "t cost: "+t_cost;
}

console.log(counter(distance))
