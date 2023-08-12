"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var dummy_user = {
    name: "Arya",
    email: "aryaworrior41@gmail.com",
    role: "student",
};
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function rand(generator) {
    var randomValue = generator.generateWeightedRandom();
    return randomValue;
}
function priorityCalculator(s) {
    var priority = 0;
    if (s == "easy") {
        priority = 2;
    }
    else if (s == "medium") {
        priority = 1;
    }
    else if (s == "hard") {
        priority = 0.5;
    }
    else if (s == "very hard") {
        priority = 0.25;
    }
    return priority;
}
var WeightedRandomNumberGenerator = /** @class */ (function () {
    function WeightedRandomNumberGenerator(weightedNumbers) {
        this.weightedNumbers = weightedNumbers;
    }
    WeightedRandomNumberGenerator.prototype.generateWeightedRandom = function () {
        var totalWeight = this.weightedNumbers.reduce(function (sum, _a) {
            var weight = _a[1];
            return sum + weight;
        }, 0);
        var randomValue = Math.random() * totalWeight;
        for (var _i = 0, _a = this.weightedNumbers; _i < _a.length; _i++) {
            var _b = _a[_i], number = _b[0], weight = _b[1];
            randomValue -= weight;
            if (randomValue <= 0) {
                return number;
            }
        }
        return this.weightedNumbers[this.weightedNumbers.length - 1][0];
    };
    return WeightedRandomNumberGenerator;
}());
try {
    var jsonString = fs.readFileSync('question_DataSet.json', 'utf-8');
    var jsonData = JSON.parse(jsonString);
    var topics_1 = [];
    var qs_1 = [];
    var topicIds_1 = [];
    var temp_topics = [];
    var a_1 = 0;
    var response_1 = ["hard_8", "easy_10", "easy_13", "hard_17"];
    //console.log(Object.keys(jsonData.physics))
    jsonData.physics.forEach(function (j) {
        var obj = {
            topic: j.topic,
            priority: 1
        };
        if (!topics_1.includes(obj)) {
            topics_1.push(obj);
        }
    });
    jsonData.physics.forEach(function (k) {
        var obj = {
            _id: k._id,
            subject_name: "physics",
            topic_name: k.topic,
            priority: priorityCalculator(k.difficulty)
        };
        qs_1.push(obj);
    });
    jsonData.physics.forEach(function (j) {
        if (!topicIds_1[j.topic]) {
            topicIds_1[j.topic] = [j._id];
        }
        else {
            topicIds_1[j.topic].push(j._id);
        }
    });
    qs_1.forEach(function (e) {
        if (response_1.includes(e._id)) {
            topics_1.map(function (obj) {
                if (obj.topic == e.topic_name) {
                    obj.priority += e.priority;
                }
            });
            // topics[e.topic_name] += e.priority
        }
    });
    topics_1 = topics_1.filter(function (value, index) {
        var _value = JSON.stringify(value);
        return index === topics_1.findIndex(function (obj) {
            return JSON.stringify(obj) === _value;
        });
    });
    //console.log(Object.keys(topicIds));
    //console.log(topics)
    var weightedNumbers_1 = [];
    try {
        topics_1.forEach(function (e) {
            weightedNumbers_1.push([a_1, e.priority]);
            a_1++;
        });
    }
    catch (err) {
    }
    //console.log(weightedNumbers);
    " for(let i = 0; i < topics.length; i++){\n        console.log(i+ \", \" + topics[i])\n            ;        \n      };";
    var generator = new WeightedRandomNumberGenerator(weightedNumbers_1);
    // rand(generator);
    //console.log(topics[rand(generator)].topic)
    console.log(topicIds_1[topics_1[rand(generator)].topic][randomIntFromInterval(0, topics_1.length - 1)]);
    // let objIndex = topics.findIndex((obj: any) => obj.subject_name == "optics");
    //topics[objIndex].marks = 50;
    // topics.sort((a: Subject, b: Subject) => b.marks - a.marks);
    // topics.forEach((k: any) => {
    //     if (k.marks <= 50) {
    //         fails.push(k)
    //     }
    // });
    "marks/10 ";
    //console.log(fails)
}
catch (err) {
    console.error(err);
}
//easy: 2
//medium: 1
//hard: 0.5
//very hard: 0.25
