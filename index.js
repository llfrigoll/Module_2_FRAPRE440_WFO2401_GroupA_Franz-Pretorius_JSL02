const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');

    //Created a const for the NodeList containing the list items in the goal list
    const goalListArray = document.querySelectorAll('#goalList > li');
    //Created a duplicate boolean that is false
    let isDuplicate = false;

    //If statement that checks if the NodeList is empty
    if(goalListArray.length === 0) {
        //Empty NodeList enables normal list item creation
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
    } else {
        //Non-empty NodeList enables looping through the list
        for(let i = 0; i < goalListArray.length; i++) {
            //Checks if any item in the NodeList is equal to the entered input of a new goal
            if(goalListArray[i].textContent === goalInput) {
                //If there is a duplicate the boolean is set to true
                isDuplicate = true;
            }
        }
        if(isDuplicate) {
            //True boolean displays alert and exits function
            alert("This goal already exists");
            return;
        } else {
            //False boolean enables creation of list item
            const newGoal = document.createElement('li');
            newGoal.textContent = goalInput;
            goalList.appendChild(newGoal);
        }
    }
    
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
