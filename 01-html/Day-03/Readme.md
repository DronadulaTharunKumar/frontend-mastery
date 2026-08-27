# 🚀 Frontend Mastery — Day 3

## HTML Forms & Form Controls

Today we move from **static content** to something every real website needs: **user input**.

Think about websites you've already worked with:

```text
Food Delivery
     ↓
Login
     ↓
Email + Password
     ↓
Address
     ↓
Payment details
```

All of these involve **forms**.

---

# 🎯 Day 3 Goals

By the end of today, you should understand:

* `<form>`
* `<label>`
* `<input>`
* Input types
* `name`
* `value`
* `placeholder`
* `required`
* `<textarea>`
* `<select>`
* `<option>`
* `<button>`
* `GET` vs `POST` basics
* Form accessibility
* Basic HTML validation

And you'll build a **Developer Contact / Registration Form**.

---

# 1. What is a Form?

A form is used to collect information from a user.

Example:

```html
<form>
    ...
</form>
```

A form can collect:

```text
Name
Email
Password
Phone
Date
Gender
Skills
Message
```

---

# 2. `<form>`

Basic example:

```html
<form>
    <label>Name</label>
    <input type="text">
    
    <button>Submit</button>
</form>
```

Think:

```text
<form>
   ↓
Container for user input
```

---

# 3. `<label>` ⭐ Important

A label tells the user what an input field is for.

❌ Not ideal:

```html
<input type="text" placeholder="Enter name">
```

Better:

```html
<label>Name</label>
<input type="text">
```

But there's an even better professional approach.

Connect the label to the input:

```html
<label for="name">Name</label>
<input type="text" id="name">
```

Notice:

```text
label for="name"
       ↓
input id="name"
```

They match.

This improves **accessibility** and usability.

---

# 4. `<input>`

The `<input>` element allows users to enter information.

Basic:

```html
<input type="text">
```

But `<input>` has different types.

---

# 5. Input Types

## Text

```html
<input type="text">
```

For:

```text
Name
Username
City
```

---

## Email

```html
<input type="email">
```

For:

```text
Email address
```

The browser can perform basic email validation.

For example:

```text
tharun@example.com
```

is a valid-looking email format.

---

## Password

```html
<input type="password">
```

Characters are hidden while typing.

```html
<label for="password">Password</label>
<input type="password" id="password">
```

---

## Number

```html
<input type="number">
```

For numerical values.

You can add:

```html
<input type="number" min="1" max="100">
```

---

## Date

```html
<input type="date">
```

The browser provides a date picker in supported environments.

---

## Telephone

```html
<input type="tel">
```

Useful for phone numbers.

---

## URL

```html
<input type="url">
```

For website addresses.

---

## Checkbox

```html
<input type="checkbox">
```

Example:

```html
<label>
    <input type="checkbox">
    I agree to the terms
</label>
```

Checkboxes allow independent selections.

---

## Radio Button

```html
<input type="radio">
```

Radio buttons are normally used when the user should select **one option from a group**.

Example:

```html
<input type="radio" name="experience" value="fresher">
<label>Fresher</label>

<input type="radio" name="experience" value="experienced">
<label>Experienced</label>
```

Notice:

```text
name="experience"
```

Both radio buttons have the same `name`.

That groups them together.

---

# 6. `name` Attribute ⭐⭐⭐

This is extremely important for forms.

Example:

```html
<input type="text" name="username">
```

The `name` identifies the field when form data is submitted.

Imagine:

```text
username = tharun
email = tharun@example.com
```

The backend can receive the values using their names.

This will become especially important when you connect your frontend to:

**Servlet/JSP/JDBC.**

You'll eventually write something like:

```java
request.getParameter("username");
```

So remember:

```text
HTML form
   ↓
name="username"
   ↓
HTTP request
   ↓
Servlet
   ↓
request.getParameter("username")
```

🔥 This connects directly with the Jakarta EE work you're already learning.

---

# 7. `value`

`value` represents the value associated with an input.

Example:

```html
<input type="text" name="username" value="Tharun">
```

For radio:

```html
<input type="radio" name="role" value="developer">
```

If selected, the submitted value can be:

```text
role = developer
```

---

# 8. `placeholder`

A placeholder provides a temporary hint.

```html
<input 
    type="text"
    placeholder="Enter your name">
```

You'll see:

```text
┌─────────────────────────────┐
│ Enter your name             │
└─────────────────────────────┘
```

### Important

Placeholder is **not a replacement for `<label>`**.

❌ Don't rely only on:

```html
<input placeholder="Enter your email">
```

Use:

```html
<label for="email">Email</label>
<input 
    type="email"
    id="email"
    placeholder="Enter your email">
```

---

# 9. `required` ⭐

Makes a field mandatory.

```html
<input 
    type="text"
    name="username"
    required>
```

The browser won't normally allow submission if it's empty.

Example:

```html
<input 
    type="email"
    name="email"
    required>
```

---

# 10. `<textarea>`

Use `<textarea>` when the user needs to enter **multiple lines**.

Example:

```html
<label for="message">Message</label>

<textarea 
    id="message"
    name="message"
    rows="5"
    cols="30">
</textarea>
```

Typical uses:

```text
Message
Feedback
Address
Description
Comments
```

---

# 11. `<select>` and `<option>`

For dropdowns.

```html
<label for="role">Role</label>

<select id="role" name="role">
    <option value="frontend">Frontend Developer</option>
    <option value="backend">Backend Developer</option>
    <option value="fullstack">Full Stack Developer</option>
</select>
```

Structure:

```text
<select>
    ↓
<option>
<option>
<option>
```

---

# 12. `<button>`

A submit button:

```html
<button type="submit">Submit</button>
```

Inside a form, it's good practice to explicitly specify the type.

Common button types:

```text
submit → submit form
reset  → reset form
button → generic button
```

Example:

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

---

# 13. `action` and `method` ⭐⭐⭐

Now we reach an important concept.

A form can specify:

```html
<form action="/register" method="post">
```

### `action`

Specifies **where the form data should be sent**.

### `method`

Specifies **how the data should be sent**.

Common methods:

```text
GET
POST
```

---

# 14. GET vs POST

### GET

```html
<form action="/search" method="get">
```

Data is generally included in the URL.

Example conceptually:

```text
/search?query=java
```

GET is commonly used for:

* Searching
* Filtering
* Retrieving data

---

### POST

```html
<form action="/register" method="post">
```

Data is sent in the HTTP request body rather than being appended to the URL in the usual form submission.

Commonly used for:

* Login
* Registration
* Creating data
* Updating data

### Important

POST does **not** mean automatically secure.

Security requires things such as **HTTPS**, proper server-side validation, authentication, authorization, etc.

---

# 15. Form Accessibility

A professional frontend developer should connect labels to inputs.

### Good:

```html
<label for="email">Email</label>

<input 
    type="email"
    id="email"
    name="email">
```

Relationship:

```text
for="email"
     ↓
id="email"
```

This allows assistive technologies to understand what the field represents.

---

# 🛠️ DAY 3 PROJECT

Now we're going to build something more realistic.

Create:

```text
01-html/
└── day-03/
    ├── index.html
    ├── register.html
    ├── contact.html
    ├── README.md
    └── checkpoint.md
```

Your main page can contain links to:

```text
Home
Register
Contact
```

---

# 📝 `register.html`

Build a **Developer Registration Form**.

It should collect:

### Personal Information

```text
Full Name
Email
Phone
Date of Birth
```

### Account Information

```text
Username
Password
```

### Professional Information

```text
Experience → Radio buttons
Role → Dropdown
Skills → Checkboxes
```

### Additional Information

```text
About Yourself → textarea
Portfolio URL
```

### Agreement

```text
☐ I agree to the terms
```

### Buttons

```text
Submit
Reset
```

---

# 💻 Your form should use these

You MUST practice:

```text
<form>
<label>
<input>
type
id
name
value
placeholder
required
<textarea>
<select>
<option>
<button>
action
method
```

Don't worry about CSS.

**Day 3 is still HTML only.**

---

# 🧪 Day 3 Mini Challenge

Before building the complete form, create this yourself:

```text
Name:
[________________]

Email:
[________________]

Password:
[________________]

Role:
[ Frontend Developer ▼ ]

☐ JavaScript
☐ React
☐ TypeScript

Experience:
○ Fresher
○ Experienced

Message:
[________________________]
[________________________]

☐ I agree to the terms

[ Submit ] [ Reset ]
```

Don't copy the complete solution from me.

Try to build it yourself.

---

# 🎤 Day 3 Interview Checkpoint

After building the form, answer these **in your own words**.

Use our interview structure:

> **Definition → Purpose → Example → Use**

### Q1

What is an HTML `<form>`?

### Q2

Why do we use `<label>`?

### Q3

What is the difference between `id` and `name` in a form?

### Q4

What is the purpose of the `name` attribute?

### Q5

What is the difference between `placeholder` and `value`?

### Q6

What does the `required` attribute do?

### Q7

What is the difference between radio buttons and checkboxes?

### Q8

What is the purpose of `<textarea>`?

### Q9

What is the difference between GET and POST in form submission?

### Q10

What are `action` and `method` in a form?

### Q11 ⭐

Why should we use `<label>` instead of relying only on `placeholder`?

### Q12 ⭐

Why do radio buttons usually have the same `name`?

---

# 🧠 Important Connection With Your Java/Jakarta EE Learning

This is where your frontend and backend knowledge will eventually connect:

```text
HTML Form
     ↓
<form action="/login" method="post">
     ↓
HTTP Request
     ↓
Servlet
     ↓
request.getParameter("email")
     ↓
Service
     ↓
DAO
     ↓
MySQL
```

So **don't treat HTML forms as just HTML tags**.

You're learning the foundation of how real web applications communicate with a backend.

---



Don't worry if you make mistakes. Send me your code when you're done, and I'll review it like a real code review—**HTML correctness + accessibility + professional practices + interview knowledge**.
