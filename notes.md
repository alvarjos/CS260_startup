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

1fr = 1 fractional unit 
use display: flex in the Body Tag of CSS