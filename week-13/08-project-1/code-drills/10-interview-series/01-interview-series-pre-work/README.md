# Interview Series Part One 

1. [General Overview](#general-overview)
2. [Whiteboarding](#whiteboarding)

<hr>

## General Overview


Greetings! 

Welcome to to your first mock interview module. 

As you progress through this course you will widen the breadth choices when confronted with a programmatic problem to solve and deepen your knowledge about where one path of inquiry or exploration may lead you over another. 

When the time is right, when you are both Employer Ready and Employer Competitive, you will begin your job search. 

<hr>
<hr>
<hr>

### Job Application Steps

Likely you will engage in the following series of events:

1. Apply, Apply Apply

> You will be apply to many many jobs and leveraging your polished portfolio site, your interesting project / application builds, your LinkedIn profile, and your network. 

2. You will hear back from recruiters. 

> If you are diligent in your job search you will, eventually, begin to hear back from recruiters. This stage is likely akin to `human captcha test`. 

**Once you hear back from recruiters the following is likely to occur..**

3. A soft call from someone from the team. 

> Likely someone from the team would like to chat with you about your work, your goals, your experience. 

> Be yourself! Remember this is as much about you getting to know them as them getting to know you. 

4. Code Challenge or Online `Coding Interview`  

> This will likely come in the form of an application build or an online, shared IDE, light coding interview. We will return to this last bit, `coding interview` in just a bit. 

5. Onsite! Wohoot! You made it all the way to an onsite. 

**A onsite will typically follow the following Pattern..**

`a`. Coffee, Tea, Tour

> The team is likely aware of how uncomfortable the interview process can be: 

- Visit a place you've never been,
- To Talk with people you've likely never met before
- To be asked questions and be observed on your response 

Awkward! 

They will likely make some reasonable efforts to make you feel welcome and comfortable. 

`b`. Meet a range of people from the team. 

> Topics can include: 

- Past team dynamics
- Past Challenges and how you overcame them
- Whiteboarding, a coding interview. 

`c`. Whiteboarding 

It is now time to talk about the whiteboarding / Coding Interview section of your interview process. In place of the term `whiteboarding` or `Coding Interview` we could refer to this 
as the `an exercise in communicating a mental model using spoken words and illustrations`. 

### Modeling is the New Literacy 

If you have a moment explore this medium post by Chris Granger, [Coding is not the new literacy](http://www.chris-granger.com/2015/01/26/coding-is-not-the-new-literacy/). 

The basic premise is: 

>  If we want computers to be able to compute for us, then we have to accurately extract these models from our heads and record them...Modeling is creating a representation of a system (or process) that can be explored or used...The process of creating a model is an act of discovery - we find out what pieces we need as we shape our material.

> Fundamentally, "We are not trying to model how a computer does something. Instead, we are modeling human interaction...."

![alt text](/images/communication.png)

Please keep this in mind when you are asked to enter into a "coding interview".

`d`. The Problem

The interviewer will aim to ask you an obscure problem set with the hope to observe your attempt at: 

- communication 
- problem solving
- emotional reaction to confusion
- coding knowledge

`Remember` it is a conversation, a playful dance of exploration that is intended to quickly evaluate your communication skills, problem solving skills, emotional disposition in the face of stress / confusion, and finally, your coding knowledge. 

Fortunately there are some things you can do to prepare. 

**Memorize every single possible algorithm possible and perfect the explanation for each**

Ok...just kidding. That's not the answer. 

Practicing problem sets will reveal `patterns` and `approaches` that may be applicable to a challenge presented during an interview. 

One should focus on the `ability to breakdown complex problems`, not memorizing explicit solutions.  


<hr>
<hr>
<hr>

### Whiteboarding 

Welcome to the `Whiteboarding Section`. 

`Note`: If the interviewer presents a question that you are familiar with let them know. 

- They will likely be able to detect that you have worked through this question before
- If you let them know they will take note of your integrity and your welcoming of a challenge. 
- They are NOT interested in having you solve the problem, they are interested in working with you to observe you problem solving teques. 

<hr>
<hr>
<hr>

### Example Prompt


```code
Input: Write a function that takes an element, string or num, and  array as input. 
Output: 

* If that element exist on the array it returns the index

* If that element does not exist on the array it returns -1

Case #1: 

Example Input: [1,3,13,3], target = 13
Expected Output: 2. 
Reasoning: The target, 13, exist at index 2.

Case #2: 

Example Input: [1,3,13,33], target = 42
Expected Output: -1. 
Reasoning: The target, 13, does not exist in the array. 

```

<hr>
<hr>
<hr>

### Communication Steps 

1. **Clarify** 

> Start by repeating the problem back to the interviewer and ask any clarifying questions and test assumptions about the problem. Request a sample input and expected output if one is not given. 

<hr>  

2. **Inputs/Outputs** 

> Talk through the following: Given a set of inputs what are expected outputs for the problem? 

<hr>  

3. **Test & Edge Cases** 

> Inquire about any edge cases. 

Example: 

* Single character / Empty string
* Empty array
* Negative Numbers

>Write down at least one original concrete test case - you will be using this test case to walk your interviewer through your Pseudocode. 

<hr>  

4. **Naive Solution**

>Start with pseudo/coding the most obvious/naive solution, and let interviewer know this is where you are starting. Remember to talk through your process out loud, and if you get stuck prompt your interviewer for feedback or hints.

For each step of your algorithm you should make the following items clear: 

1. What are you going to do?
2. How are you going to do it? 
3. Why are you going to do it? 

<hr>
<hr>
<hr>

**Example**:
 

####  **Step One**:

**Q**: What are you going to do? 

**A**: I want to iterate through the array.

**Q**: How are you going to do it? 

**A**: With a for loop

**Q**: Why are you going to do it? 

**A**: To examine each element of the Array. 

<hr> 

####  **Step Two**:


**Q**: What are you going to do? 

**A**: Return the index if the value at that index is the same as the input target

**Q**: How are you going to do it? 

**A**: With comparison operators, by comparing for equal values. 

**Q**: Why are you going to do it? 

**A**: To check for matching values. 


<hr> 

####  **Step Three**:

**Q**: What are you going to do? 

**A**: once we compare all elements to the target return -1 if no matches are found

**Q**: How are you going to do it? 

**A**: With comparison operator, by comparing for equal values and completing the for loop

**Q**: Why are you going to do it? 

**A**: To determine if the element exist in the array. 


<hr> 

**Hint**

Play special attention to what you, as a human, are doing to solve the problem. 

Break down those steps into something you could communicate into code. 

<hr>  

5. **Reach an agreement**

> Only once you and your interviewer are both clear on what your intentions are, communicated with Pseudocode, do you begin to code. 

<hr>  

6. **Code It Out** 

> You will be coding it out on a whiteboard. No autocompletes, no syntax highlighting. Be sure to pay attention to the details and to utilizing proper style guides and conventions. 

While this is considered a `coding interview` this last section, the coding section, is actually the least important. While you should be mindful of syntax and naming convention the interviewer is primarily interested in your technical knowledge, ability to model problems in your head, and the clear communication of said model. 

Your Goal at the coding stage: 

a. Follow the Pseudocode.

b. Be mindful of syntax and naming convention.

c. Focus on clarity and communication (proper / indicative variable and function names). 


```javascript
function indexof(arr, element){
    for(var i =0;i<arr.length;i++){
        if(arr[i] === element)
            return i;
    }
    return -1;
}

console.log(indexof([1,2,3,4],3))
```

<hr>

**Good Luck**


<hr>

