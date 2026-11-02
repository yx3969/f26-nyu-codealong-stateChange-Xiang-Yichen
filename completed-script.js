// The lesson content (provided, same pattern as your Assignment 6 array)
const steps = [
  {
    title: "Be specific",
    description:
      'Point to one exact moment in the work. "The second example made this click" helps more than "Nice job."',
  },
  {
    title: "Focus on the work",
    description:
      'Describe what the work does, not who the person is. "This paragraph buries the main idea" gives them something to change.',
  },
  {
    title: "Suggest a next step",
    description:
      'Finish with one action they can take. "Try opening with your conclusion" tells them where to start.',
  },
];

// STEP 1: Name the state (no code, just the plan)
// What does the page remember?  How many steps are complete
// What does it start at?        0
// What changes it?              Clicking the button
// What does the user see?       The count and a message

// STEP 2: Check the connection
console.log("script.js is connected");

// STEP 3: Create the state
let completedSteps = 0; // let: this value changes
const totalSteps = 3; // const: this value stays the same

// STEP 5: Find the elements on the page
const progressText = document.getElementById("progress-text");
const stepTitle = document.getElementById("step-title");
const stepDescription = document.getElementById("step-description");
const message = document.getElementById("message");
const completeButton = document.getElementById("complete-button");

// STEP 6: Run this code every time the button is clicked
completeButton.addEventListener("click", () => {
  // STEP 4: Change the state
  // STEP 9: Only count a step if there are steps remaining
  if (completedSteps < totalSteps) {
    completedSteps = completedSteps + 1;
  }
  console.log("completedSteps:", completedSteps);

  // STEP 5: Show the state on the page
  progressText.textContent =
    completedSteps + " of " + totalSteps + " steps complete";

  // STEP 7: Read the state and decide how to respond
  if (completedSteps === totalSteps) {
    stepTitle.textContent = "Lesson complete";
    stepDescription.textContent = "Try all three on the next feedback you give.";
    message.textContent = "You finished!";
    completeButton.disabled = true; // STEP 9: Nothing left to click
  } else {
    stepTitle.textContent = steps[completedSteps].title;
    stepDescription.textContent = steps[completedSteps].description;
    message.textContent = "Keep going!";
  }
});
