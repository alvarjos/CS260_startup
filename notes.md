Notes January 12, 2024

HTML - Structure
CSS - Stlye
JavaScript - Interaction
Service - Web Service Endpoints
Database/Login - Persisted App and...

Clone deliverable repositiory
Study
Debug in dev enviornment 
Deploy to production
Apply to startup 

Learn how to make an app similar to simon 

Deliverables - Design is due on wednesday January 17
### terminal commands
cd = change directory  
dir = directory  
mkdir = make directory
rmdir = remove directory
rm = remove files
mv = move files
cp = copy files
ls = list  
curl = command line client URL browser
grep = regular expression search
find = find files
top = view running processes
df = view disk statistics
cat = output file
less = Interactive file output
wc = count words
ps = view process
kill = kill a process
sudo = execute as admin
ssh = remote shell
scp = securely copy files to a remote computer 
history = show history of commands
ping = test connection
tracert = trace network
dig = DNS information
man = look in the manual
git status, git push, git pull, git diff   
git commit -m " " -a  
-a (it adds everything and gets everything ready to commit)  
git add notes.md (commits only this file)  
Echo - Output the parameters of the command 


# 1.2 History Jan 17, 2024
The Web Father (Time Berners-Lee) HTTP, HTML, URL  
TCP: Transmission Control Protocol
Hakon Wium Lie - Creator of CSS 
Brandan Eich - Javascript, Took him about a week to write JavaScript
The 3 pillars are:  
- HTML
- CSS
- Javascript

# 2.1 Technology Stacks 
The collection of technologies that you use to create or deliver your web application
The key with a tech stack is the realization that there is no one answer to the question of what technology to use where, and the answer continually evolves.

Node.js Web services: Allows us to direct where our server goes, whether its to simon or our startup 
MongoDB: Database

example from class to use in gitbash
ssh -i ~/keys/cs260/cs260.pem unbuntu@3.238.89.253

## Operating Systems 

- The Web runs on Linux 
1. Linux
2. Mac
3. Windows
4. WSL (Don't cross the streams)

## The Console 
Helps you navigate your disk, and run console applications 

VIM/VI -> I -> Insert(This is how you edit in Vi)

This was added using VI notes.md

# Idea for Progess bar
Find an app similar to mine in Code Pen and find out how to make a progress bar, animation, etc... 

- Create the 4 html files and add them to your index file as a reference. Don't need to add the java script and css, but just a structure for it. You will add the CSS/JS later. 

you can reference fonts using 

@import url("grab from google fonts")
body {
    font-family: Rubik Microbe, Arial;
    font-size: 20vh;
}
or
@font-face {
    font-family: "Quicksand";
    src: url("https://CS260/"Quicksand")
}
- Quicksand is the variable you would put in front of the font family for the body tag in CSS

## UNICODE AND UTF-8
- Unicode and UTF-8 is the basic universal code that they created to run all types of characters in the coding enviornment 

Animation: look at the different CSS animation tags such as 
    Animation-name: demo;
    Animation-duration: 3s;
@keyframes demo {
    from {
        color: purple;
        font-size: 0vh;
    }
    95% {
        font-size: 21vh;
    }
    to {
        color: red;
        
        font-size: 20vh;
    }
}

Use inline-end because not all languages read left to right

PBM - Pals Before Marriage
1. Padding
2. Border
3. Margin

Padding puts space around the content of the selected elements

1fr = 1 fractional unit 
use display: flex in the Body Tag of CSS

## Background for JavaScript
1995 - Eich invents JavaScript
1997 - JacaScript becomes ECMAScript
2009 - ES5: Strict, JSON, array iteration
2015-xx - ES6: let, default params, async, rest/spread, destructure, module, class, template literals 

Inspired by Scheme
Interpreted 
Dynamically Typed 

3 ways you can include javascript in your HTML
- <script>1+1</script>
- <div onclick='1+1'/>
- <script src='main.js'/>  

" = " is not proper notation for declaring an object, you need to use a " : " i.e (n:1) instead of (n=1)

# Playgrounds 
- Browser debugging console
- CodePen
- VSCode (Live Server)
- Node.js

Use let instead of var when assigning a variable 
for example : "let y = 1;" instead of "var y = 1;"


# Midterm review 
'chmod +x deploy.sh' is how you make a script exectuable in the console command line
- Look at instruction page on command page
-  <div> = division

When pointing to another DNS Record you should use "CNAME"
CNAME = Alias, you have this hostname, and want to alias to this other hostname
A = a hostname, and you are mapping into an IP Address
TXT = storing text so someone could reference text 
SOA = Start of Authority is telling you link up your DNS records with someone elses
- CNAME's are not redirects


# JAVA SCRIPT PRACTICE

### Log
The basic usage of the console object is to output a log message.
console.log('hello');

### Timers
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.
    console.time('demo time');
    // ... some code that takes a long time.
    console.timeEnd('demo time');
    // OUTPUT: demo time: 9762.74 ms

### Count
To see how many times a block of code is called you can use the count function.
    console.count('a');
    // OUTPUT: a: 1
    console.count('a');
    // OUTPUT: a: 2
    console.count('b');
    // OUTPUT: b: 1

###  Declaring variables
Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.

let x = 1;
const y = 2;

JavaScript defines several primitive types.
Type | Meaning
Null - The type of a variable that has not been assigned a value.
Undefined - The type of a variable that has not been defined.
Boolean - true or false.
Number - A 64-bit signed number.
BigInt - A number of arbitrary magnitude.
String - A textual sequence of characters.
Symbol - A unique value.

In addition to the above primitives, JavaScript defines several object types. Some of the more commonly used objects include the following:

Type - Use                                                    
Example: 
Object - A collection of properties represented by name-value pairs. Values can be of any type.	
- {a:3, b:'fish'}
Function - An object that has the ability to be called. 
- function a() {}
Date - Calendar dates and times.
- new Date('1995-12-17')
Array - An ordered sequence of any type.	
- [3, 'fish']
Map	- A collection of key-value pairs that support efficient lookups. 
- new Map()
JSON - A lightweight data-interchange format used to share information across programs.	
- {"a":3, "b":"fish"}


Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

The syntax of the ternary operator is(code provided below): 
# condition ? expression_if_true : expression_if_false;
    condition: This is the condition that is evaluated. If it is true, the expression after ? is executed; otherwise, the expression after : is executed.
    expression_if_true: The expression to be evaluated if the condition is true.
    expression_if_false: The expression to be evaluated if the condition is false.
In your specific code:
# a === 1 ? console.log(1) : console.log('not 1');
    a === 1 is the condition.
    console.log(1) is the expression to be executed if the condition is true.
    console.log('not 1') is the expression to be executed if the condition is false.

Other boolean operators
- && = and
- || = or
- ! = not

# Common Javascript loops
do while
    let i = 0;
    do {
        console.log(i);
        i++;
        } while (i < 2);
    // OUTPUT: 0 1

for in 
The for in statement iterates over an object's property names.
    const obj = { a: 1, b: 'fish' };
    for (const name in obj) {
        console.log(name);
        }
    // OUTPUT: a
    // OUTPUT: b

For arrays the object's name is the array index.
    const arr = ['a', 'b'];
    for (const name in arr) {
        console.log(name);
        }
    // OUTPUT: 0
    // OUTPUT: 1

for of
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.
    const arr = ['a', 'b'];
    for (const val of arr) {
        console.log(val);
        }
    // OUTPUT: 'a'
    // OUTPUT: 'b'

Break and continue
All of the looping constructs demonstrated above allow for either a break or continue statement to abort or advance the loop.
    let i = 0;
    while (true) {
        console.log(i);
        if (i === 0) {
            i++;
            continue;
        } else {
            break;
        }
    }
    // OUTPUT: 0 1    

# JavaScript String

A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.

'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text


String Functions
    const s = 'Example:조선글';

    console.log(s.length);
    // OUTPUT: 11
    console.log(s.indexOf('조선글'));
    // OUTPUT: 8
    console.log(s.split(':'));
    // OUTPUT: ['Example', '조선글']
    console.log(s.startsWith('Ex'));
    // OUTPUT: true
    console.log(s.endsWith('조선글'));
    // OUTPUT: true
    console.log(s.toLowerCase());
    // OUTPUT: example:조선글




