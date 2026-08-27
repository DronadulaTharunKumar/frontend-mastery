# 🚀 Frontend Master Course — Day 1

Today we start from the **foundation**.

Don't worry about React, Tailwind, AI tools, or advanced frameworks yet. If you understand today's concepts properly, everything later becomes much easier.

## 🎯 Day 1 Goals

By the end of today, you should understand:

1. What frontend development actually is
2. How a website works
3. Browser vs server
4. HTTP/HTTPS
5. HTML, CSS, JavaScript
6. DOM
7. What happens when you enter a URL
8. Developer tools
9. Your professional development environment
10. Your first frontend project

---

# 1. What is Frontend Development?

A website generally has two major sides:

```text
                 WEBSITE
                    │
          ┌─────────┴─────────┐
          │                   │
       FRONTEND             BACKEND
          │                   │
       Browser              Server
          │                   │
     HTML/CSS/JS       Java/Jakarta/Python/...
```

### Frontend

Everything the user **sees and interacts with**.

Examples:

* Buttons
* Navbar
* Cards
* Forms
* Animations
* Search
* Menus
* Product pages
* Restaurant pages

### Backend

The server-side logic.

Examples:

* Login
* Database
* Payment processing
* Authentication
* Orders
* APIs

For your Foodie project:

```text
USER
 ↓
React / HTML / CSS / JS
 ↓
REST API
 ↓
Jakarta EE / Servlet
 ↓
DAO
 ↓
MySQL
```

That's the complete picture we'll eventually build.

---

# 2. What Actually Happens When You Open a Website?

Suppose you type:

```text
https://example.com
```

into Chrome.

A simplified version is:

```text
You
 ↓
Browser
 ↓
DNS
 ↓
Server
 ↓
HTTP Request
 ↓
Server processes request
 ↓
HTTP Response
 ↓
Browser
 ↓
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Rendered Website
```

Let's understand each part.

---

# 3. Browser

A browser is software that understands web technologies.

Examples:

* Chrome
* Edge
* Firefox
* Safari

Chrome receives:

```html
<h1>Hello World</h1>
```

and turns it into something visual:

**Hello World**

It also understands CSS and JavaScript.

---

# 4. HTML

HTML = **HyperText Markup Language**

HTML gives a webpage its **structure**.

For example:

```html
<h1>Foodie</h1>
<p>Order delicious food online.</p>
<button>Order Now</button>
```

Think:

> HTML = Skeleton

---

# 5. CSS

CSS = **Cascading Style Sheets**

CSS controls how HTML looks.

For example:

```css
h1 {
    color: blue;
    font-size: 40px;
}
```

Think:

> CSS = Clothes + appearance

---

# 6. JavaScript

JavaScript makes the website interactive.

HTML:

```html
<button id="orderBtn">Order Now</button>
```

JavaScript:

```javascript
document.getElementById("orderBtn").onclick = function () {
    alert("Order started!");
};
```

Now clicking the button does something.

Think:

> JavaScript = Behavior/Brain

So remember:

```text
HTML       → Structure
CSS        → Appearance
JavaScript → Behavior
```

This is one of the most important concepts in frontend development.

---

# 7. What is the DOM?

This is extremely important.

DOM = **Document Object Model**

Suppose your HTML is:

```html
<body>
    <h1>Foodie</h1>
    <button>Order Now</button>
</body>
```

The browser converts it into a tree-like structure:

```text
Document
   │
   └── body
       │
       ├── h1
       │    └── "Foodie"
       │
       └── button
            └── "Order Now"
```

JavaScript can interact with this structure.

For example:

```javascript
document.querySelector("h1").textContent = "Welcome to Foodie";
```

The browser changes:

```text
Foodie
```

into:

```text
Welcome to Foodie
```

This is the foundation of interactive websites and later React.

---

# 8. Browser vs Server

This distinction is very important.

### Browser

Runs on the user's device.

Examples:

```text
HTML
CSS
JavaScript
React
```

### Server

Runs somewhere on the internet.

Examples:

```text
Java
Python
Node.js
PHP
Database
```

For your future Foodie application:

```text
             Browser
                │
                │ HTTP
                ↓
          Jakarta Server
                │
                ↓
              DAO
                │
                ↓
             MySQL
```

---

# 9. What is HTTP?

HTTP = **HyperText Transfer Protocol**

It allows the browser and server to communicate.

For example:

```text
Browser
   │
   │ GET /restaurants
   ↓
Server
   │
   │ Response
   ↓
Browser
```

Common HTTP methods:

| Method | Purpose          |
| ------ | ---------------- |
| GET    | Retrieve data    |
| POST   | Create/send data |
| PUT    | Update data      |
| PATCH  | Partially update |
| DELETE | Delete data      |

You'll work with these heavily when we reach APIs.

---

# 10. HTTP Status Codes

You'll see these constantly as a developer.

### Success

```text
200 OK
201 Created
204 No Content
```

### Client errors

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
```

### Server errors

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

If you see:

```text
404
```

don't panic.

It generally means the requested resource wasn't found.

---

# 11. HTTP vs HTTPS

HTTP:

```text
http://example.com
```

HTTPS:

```text
https://example.com
```

HTTPS encrypts communication between the browser and server using TLS.

For production websites, HTTPS is essential.

You'll learn more about security later.

---

# 12. What is a URL?

Consider:

```text
https://foodie.com/restaurants?id=25
```

Break it down:

```text
https://
   │
Protocol

foodie.com
   │
Domain

/restaurants
   │
Path

?id=25
   │
Query parameter
```

Another example from your Foodie project could eventually look like:

```text
http://localhost:8080/foodie/restaurants
```

Here:

```text
http://
localhost
:8080
/foodie
/restaurants
```

We'll understand each part when we work with Tomcat.

---

# 13. What is localhost?

When you see:

```text
localhost
```

it generally means:

> "This computer."

For example:

```text
http://localhost:8080
```

means you're accessing a server running on your own computer.

This is why you can develop websites without publishing them to the internet.

---

# 14. What is Port 8080?

A computer can run many network services.

Ports help identify them.

For example:

```text
localhost:8080
```

means:

```text
Computer → port 8080
```

Tomcat commonly runs on port 8080 during development.

Later you'll work with:

```text
localhost:8080/Foodie
```

---

# 15. Developer Tools 🔥

This is one of the most important tools you'll learn.

Open Chrome.

Press:

```text
F12
```

or:

```text
Ctrl + Shift + I
```

You'll see:

* Elements
* Console
* Network
* Sources
* Application
* Performance
* Security

For now focus on:

### Elements

Inspect HTML/CSS.

### Console

Run JavaScript and see errors.

### Network

See requests sent to servers/APIs.

These three will become part of your daily workflow.

---

# 16. Your First DevTools Experiment

Open any webpage.

Press:

```text
F12
```

Go to:

**Console**

Type:

```javascript
document.title
```

You'll get the page title.

Now type:

```javascript
document.body.style.background = "black";
```

The page background changes.

Congratulations.

You just manipulated a real webpage through the DOM.

---

# 17. Your Professional Tools

Install these:

### Essential

**VS Code**

Your main code editor.

**Google Chrome**

Your development browser.

**Node.js**

Provides the JavaScript runtime and npm.

**Git**

Version control.

**GitHub**

Remote repository and collaboration.

---

# 18. Your First Project

Create:

```text
frontend-learning
```

Inside:

```text
frontend-learning/
│
├── 01-html/
│
├── 02-css/
│
├── 03-javascript/
│
├── 04-react/
│
├── 05-typescript/
│
├── 06-projects/
│
└── README.md
```

Don't worry about creating everything today if you haven't installed the tools yet.

---

# 19. Create Your First HTML Page

Inside:

```text
01-html
```

create:

```text
index.html
```

Start with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>

<body>

    <h1>Hello, Frontend World!</h1>

    <p>I am learning frontend development.</p>

    <button>Click Me</button>

</body>
</html>
```

Open it in Chrome.

You have created your first webpage.

---

# 20. Understand Every Important Line

### This:

```html
<!DOCTYPE html>
```

tells the browser that you're using modern HTML.

### This:

```html
<html lang="en">
```

is the root element.

### This:

```html
<head>
```

contains information about the page.

### This:

```html
<meta charset="UTF-8">
```

allows proper text encoding.

### This:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

is important for responsive/mobile websites.

### This:

```html
<title>
```

controls the browser tab title.

### This:

```html
<body>
```

contains visible page content.

---

# 🧪 DAY 1 PRACTICE

Don't copy my solution yet.

Create a page called:

**My Developer Profile**

It should contain:

```text
Your name
Your role
Short introduction
Skills
Education
Projects
Contact button
```

Use only HTML.

**No CSS.**

**No JavaScript.**

The goal is to learn structure.

---

# 🧠 Day 1 Checkpoint

Answer these without looking above.

### Q1

What are the three core technologies of frontend development?

### Q2

What is the difference between HTML, CSS and JavaScript?

### Q3

What does DOM stand for?

### Q4

What is the purpose of HTTP?

### Q5

What's the difference between frontend and backend?

### Q6

What does `localhost` mean?

### Q7

What is port `8080`?

### Q8

What is the purpose of Chrome DevTools?

### Q9

What does `document.querySelector()` interact with?

### Q10

What happens approximately when you enter a URL into your browser?

---

# 🎯 Day 1 Challenge

Build this structure **without copying a tutorial**:

```text
My Developer Profile
│
├── Header
│   └── Name
│
├── About
│   └── Introduction
│
├── Skills
│   ├── Java
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
├── Projects
│   ├── Food Delivery
│   └── ML Project
│
└── Contact
    └── Button
```

Don't worry about making it beautiful.

**Today we're training your developer brain, not your design skills.**

---

## ⭐ Most Important Rule Starting Today

**Don't memorize code. Understand the reason behind the code.**

And don't let AI write everything for you.

Our future workflow will be:

```text
YOU THINK
   ↓
YOU TRY
   ↓
AI HELPS
   ↓
YOU UNDERSTAND
   ↓
YOU IMPLEMENT
   ↓
AI REVIEWS
```

That's how we'll eventually get you from **beginner → professional frontend developer → AI-powered frontend engineer**.

**Your task now:** complete the 10 checkpoint questions + Day 1 Developer Profile. Then send me your answers/code. I'll review them like a real frontend mentor before we move to **Day 2: HTML fundamentals and semantic HTML**.
