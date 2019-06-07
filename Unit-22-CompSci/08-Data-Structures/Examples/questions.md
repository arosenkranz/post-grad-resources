# Data Structures

The following questions are intended to get you thinking about _when_ to use _what_ data structures.

[There's always more than one way to do it](http://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it), and the "best" solution to a problem is contextual. So, don't stress about finding the _absolutely correct_ answer; it's enough to choose a data structure, and justify your response.
'

### Use Cases

#### 1. A List of Customers

You need to store a list of all customers who've purchased from your eCommerce store. You'll need to iterate over it to collect their names and most recent order numbers, but won't be doing much else with it.

#### 2. Managing Invite-Only Registration

Imagine you're developing the beta for a new mobile platform, and rolling out early access to members of a waiting list. Every once in awhile, you'll extend an invitation to the potential user who's been waiting the longest. if they respond within seven days, they get access; if not, you invite the person who's been waiting the _second_ longest; etc. 

Which data structure best models this situation?

#### 3. Who Ordered What?

Your boss has tasked you with finding a way to keep track of which of her customers have ordered which products.

Can you think of a data structure, or combination of data structures, that would make this easy? Would you do things differently if she usually wanted information on the _most recent_ orders, and only rarely for older ones?

#### 4. Finding Your MVP

Every quarter, your company sends a special "Thank You" package to whomever has donated the greatest amount to its corporate coffers.

You'll have to be able to find this donor quickly, but also be able to quickly add records for new donors, and delete records for people who haven't donated in the past 12 months.

Which data structure allows for efficient searching, insertion, and deletion?

#### 5. Tracking Execution Contexts (Bonus)

Imagine you're implementing a JavaScript engine (a program that interprets and executes JavaScript code), and you're just tackling the issue of enabling function calls.

Consider the following snippet.

```
// ...preceding omitted

var hashedPass = encrypt(password);

database.store(hashed_pass);

console.log("Password stored successfully.");

// ...remainder omitted
```

When your program is on the line where we assign `hashedPass`, we're in a certain _execution context_. That's just a fancy way of saying that JavaScript knows about all the variables currently in scope and such. We'll call this execution context **E1**.

When we make the call to `database.store`, however, JavaScript starts executing the code inside the `store` function. This means we'll have different variables in scope—_we end up in a different execution context_.

After `database.store` finishes executing, JavaScript will _return_ to the execution context it was in before—that is, it will reset its execution context to E1.

To function properly, we need to:

* Keep track of every execution context the program has spawned; and

* Be able to remove the _current_ execution context, to reset to where we were immediately before.

What data structure would you use to keep track of execution contexts like this?

_Hint_: How are we handling our data, here? Are execution contexts like customers in line—the one who's been waiting the longest gets service first? What data structure corresponds to this scheme of adding and removing elements?
