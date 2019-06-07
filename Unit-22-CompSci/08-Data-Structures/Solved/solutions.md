# Data Structures Solutions

#### 1. A List of Customers

Our main concern is storing a list of customers we can _iterate_ over. Presumably, we'll also want to be able to _insert_ new customers from time to time. Additionally, we're not concerned with the order in which we iterate over those customers—just the data we get at each point.

An **array** satisfies these needs. A **linked list** is a fine answer, as well.

Both are maximally efficient for iteration (O(n)). A linked list is arguably a better choice if we expect to insert new customers frequently.

#### 2. Managing Invite-Only Registration

Conceptually, a **queue** solves this problem. 

In JavaScript, you'd most likely implement this using an array.

#### 3. Who Ordered What?

The best choice for this sort of problem is to use a **map**. In JavaScript specifically, an **object** would work fine, conceptually, but the native [Map data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is probably a better choice.

#### 4. Finding Your MVP

The best data structure for fast insertion, deletion, and search over an ordered list is a **binary search tree**.

#### 5. Tracking Execution Contexts

Classically, this problem is solved with a **stack**, and this kind of record of function calls is known as a **call stack**.

To "return" from a function call to the previous execution context, we **pop** the stack. Repeatedly popping the stack—as we might do after hitting the base case in a series of recursive calls—is popularly known as _unwinding_ the stack.

If you're interested in how stacks are used in tracking execution contexts in JavaScript checkout out [the MDN documentation](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack).
