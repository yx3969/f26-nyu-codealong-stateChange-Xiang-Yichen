# Code-Along: Make Your Page Remember

So far, your pages have looked the same no matter what a user does. Today we'll build one that responds: a small lesson tracker that counts the steps a learner has completed, shows them the next one, and tells them when they're finished.

## Getting Set Up

**1. Click the green "Use this template" button** at the top of this page, then choose **Create a new repository**.

This creates a new repository under your own GitHub account, with all the starting files in it.

**2. Name your repository** using this convention:

`f26-nyu-codealong-stateChange-lastname-firstname`

**3. Click "Create repository."**

GitHub copies the files and takes you to your new repo page. Check that the name at the top is yours before continuing.

**4. Click the green "Code" button, open the "Codespaces" tab, and click "Create codespace on main."**

**5. Wait while it boots up.** This can take a few minutes the first time.

**6. Open your page.** When VS Code appears in your browser, right-click `index.html` in the file explorer and choose **Open with Live Server**.

**7. Open the console.** On your page, right-click anywhere, choose **Inspect**, and click the **Console** tab.

**8. Open `script.js`.** The lesson content is already there, and the **STEP** comments show where our code will go. We'll type it together, one step at a time.

> **Coming back later?** Go to your repo, click **Code**, open the **Codespaces** tab, and choose your existing codespace. You don't need to create a new one.

## What We're Doing

We're building the tracker in small steps, checking that each one works before starting the next:

1. **Plan:** decide what the page needs to remember.
2. **Connect:** confirm that the script is running.
3. **Remember:** store the number of completed steps in a variable.
4. **Change:** increase that number.
5. **Show:** put the number on the page.
6. **Respond to a click:** make the button run our code.
7. **Decide:** show a different result when the learner finishes.
8. **Break it:** click too many times and read what goes wrong.
9. **Fix it:** stop the count from going past the end.

Commit after Steps 2, 5 and 7, so you always have a working version to return to.

## Core Concepts

- **State:** what the page is remembering right now. Here, that's the number of completed steps.
- **Variable:** a named place to store a value. Use `let` for a value that will change and `const` for one that won't.
- **Reassignment:** giving a `let` variable a new value. This is how the state changes.
- **Updating the page:** changing a variable doesn't change the screen. You have to tell the page to show the new value.
- **Control flow:** code that chooses what to do next. An `if/else` checks the state and picks a response.

Almost every interaction we'll build follows the same pattern:

**The user acts → the state changes → the page updates → the program decides how to respond**

## Why This Matters

Learning experiences respond to the learner. A quiz gives feedback, a module shows progress, and a lesson unlocks the next step. Each of these depends on the page remembering something and acting on it.

So the first question is a design question: *what does my learner's experience need to remember?* Once you can answer that, you can design the interaction, build a simple version, and explain it clearly to a developer or an AI tool.

You'll use this same pattern on your own project this week.

## If You Get Stuck

- **Nothing happens:** look for red text in the Console, and check that your `id` names match `index.html` exactly.
- **The console shows the new value, but the page doesn't change:** you updated the variable, but not the page.
- **Your `if` isn't working:** use `===` to compare two values. A single `=` assigns a value.
- **You fell behind:** `completed-script.js` has the finished code. Use it to compare with yours, but type your own version so the logic is yours.
