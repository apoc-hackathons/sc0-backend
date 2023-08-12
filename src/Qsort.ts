import * as fs from 'fs-extra';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs';
  const dummy_user = {
    name: "Arya",
    email: "aryaworrior41@gmail.com",
    role: "student",
    
    
  }
  function randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function rand(generator:any){
    const randomValue = generator.generateWeightedRandom();
    return  randomValue;
   }
function priorityCalculator(s:string){
    let priority = 0;
    if(s == "easy"){
        priority = 2;
    }
    else if(s == "medium"){
        priority = 1;
    }
    else if(s == "hard"){
        priority = 0.5;
    }
    else if(s == "very hard"){
        priority = 0.25;
    }
    return priority;
}

class WeightedRandomNumberGenerator {
    public weightedNumbers: [number, number][];
  
    constructor(weightedNumbers: [number, number][]) {
      this.weightedNumbers = weightedNumbers;
    }
  
    generateWeightedRandom(): number {
      const totalWeight = this.weightedNumbers.reduce((sum, [, weight]) => sum + weight, 0);
      let randomValue = Math.random() * totalWeight;
  
      for (const [number, weight] of this.weightedNumbers) {
        randomValue -= weight;
        if (randomValue <= 0) {
          return number;
        }
      }
  
      return this.weightedNumbers[this.weightedNumbers.length - 1][0];
    }
  }
  

  
  

try {
    const jsonString = fs.readFileSync('question_DataSet.json', 'utf-8');
    const jsonData = JSON.parse(jsonString);
    let topics: any = [];
    let qs:any = []
    let topicIds: any = [];
    let temp_topics: any = [];
    let a: number = 0;
    let response = ["hard_8","easy_10","easy_13","hard_17"];

    interface ids{
        
        
    }

    //console.log(Object.keys(jsonData.physics))
    jsonData.physics.forEach((j: any) =>{
        let obj = {
            topic: j.topic,
            priority: 1
        }
        if(!topics.includes(obj)){
            topics.push(obj)
        }
    });
    jsonData.physics.forEach((k: any) => {
        let obj = {
            _id: k._id,
            subject_name: "physics",
            topic_name: k.topic,
            priority: priorityCalculator(k.difficulty)
        }
        qs.push(obj)
    });
    jsonData.physics.forEach((j: any) =>{
        if(!topicIds[j.topic]) {
            topicIds[j.topic] = [j._id];
        }else{
            topicIds[j.topic].push(j._id);
        }
    });



    qs.forEach((e:any) => {
        if(response.includes(e._id)){
            topics.map((obj:any)  =>{
                if(obj.topic == e.topic_name){
                    obj.priority += e.priority;
                }
            })
           // topics[e.topic_name] += e.priority
        }
    });

     topics = topics.filter((value:any, index:any) => {
        const _value = JSON.stringify(value);
        return index === topics.findIndex((obj:any) => {
          return JSON.stringify(obj) === _value;
        });
      });

    //console.log(Object.keys(topicIds));
    //console.log(topics)
    const weightedNumbers: [number, number][] = [  
      ];

      try{
        topics.forEach((e:any) => {
            weightedNumbers.push([a, e.priority])
            a++;
        })
      } catch(err){
      }
      //console.log(weightedNumbers);

        
      
    
     ` for(let i = 0; i < topics.length; i++){
        console.log(i+ ", " + topics[i])
            ;        
      };`

       const generator = new WeightedRandomNumberGenerator(weightedNumbers);
       
      // rand(generator);
       //console.log(topics[rand(generator)].topic)
       console.log(topicIds[topics[rand(generator)].topic][randomIntFromInterval(0, topics.length-1)])
      // console.log(topicIds) //



    //console.log(topics)
    //console.log(qs);
     
    



    //console.log(topics)



    //insert quiz here

    interface Subject {
        subject_name: string;
        marks: number;
    }

   // let objIndex = topics.findIndex((obj: any) => obj.subject_name == "optics");
    //topics[objIndex].marks = 50;

    // topics.sort((a: Subject, b: Subject) => b.marks - a.marks);


    // topics.forEach((k: any) => {
    //     if (k.marks <= 50) {
    //         fails.push(k)
    //     }
    // });

    "marks/10 "

    //console.log(fails)
} catch (err) {
    console.error(err);
}

//easy: 2
//medium: 1
//hard: 0.5
//very hard: 0.25