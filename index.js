

//this creates an object, with three properites, and returns it
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false, 

    logState: function() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    }
  };
  return task; 
}


// DRIVER CODE BELOW

//creates 2 new task objects
const task1 = newTask("Clean cat litter", "Take all the shit and piss out of the litter box");
const task2 = newTask("Do Laundry", "Laundry is stupid");
//creates array of each task object
const tasks = [task1, task2];

task1.logState(); //clean cat litter has not been completed
task1.markCompleted();
task1.logState(); //clean cat litter has been completed
