/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */

function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  let splittext = text
    .trim()
    .replace("\n", "")
    .split(" ");

  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text === "list\n") {
    list();
  } else if (splittext[0] === "add") {
    if (splittext.length > 1) {
      add(splitArray(splittext));
    } else {
      console.error("error");
    }
  } else if (splittext[0] === "remove") {
    remove(splittext, splittext[1]);
  } else if (splittext[0] === "edit") {
    edit(splittext, splittext[1], editArray(splittext), splitArray(splittext));
  } else if (splittext[0] === "check") {
    check(splittext, splittext[1]);
  } else if (splittext[0] === "uncheck") {
    uncheck(splittext, splittext[1]);
  } else if (splittext[0] === "hello") {
    if (splittext.length > 1) {
      hello(splitArray(splittext));
    } else {
      hello(1);
    }
  } else if (text === "help\n") {
    help();
  } else {
    unknownCommand(text);
  }
}

let fs = require("fs");

var obj = {
  table: [
    {
      tasks: [" task1", " task2", " task3"]
    },
    {
      checked: [true, false, false]
    }
  ]
};

//let testtest = JSON.parse(table[0].stringify());
//console.log(testtest);

/*function getData(mydata) {
  let listArr = JSON.parse(mydata.tasks);
  let listBool = JSON.parse(mydata.check);
}*/

function splitArray(arr) {
  let secondPart = "";
  for (let j = 1; j < arr.length; j++) {
    secondPart += " " + arr[j];
  }
  return secondPart;
}

function editArray(arr) {
  let thirdPart = "";
  for (let j = 2; j < arr.length; j++) {
    thirdPart += " " + arr[j];
  }
  return thirdPart;
}

function checkedORunchecked(boolArr, i) {
  let checkedOrUnchecked = "";
  if (boolArr[i] === true) {
    checkedOrUnchecked = "[✓]";
  } else {
    checkedOrUnchecked = "[ ]";
  }
  return checkedOrUnchecked;
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  if (name === 1) {
    console.log("hello!");
  } else {
    console.log("hello" + name + "!");
  }
}

/**
 * Lists tasks
 *
 * @returns {void}
 */
function list() {
  for (i = 0; i < obj.table[0].tasks.length; i++) {
    console.log(
      i +
        1 +
        " - " +
        checkedORunchecked(obj.table[1].checked, i) +
        obj.table[0].tasks[i]
    );
  }
}

/**
 * Adds tasks to the list
 *
 * @returns {void}
 */
function add(task) {
  obj.table[0].tasks.push(task);
  obj.table[1].checked.push(false);
  console.log("added" + task + " to your list");
}

/**
 * Removes tasks from the list
 *
 * @returns {void}
 */
function remove(splittext, number) {
  if (splittext.length > 1) {
    if (number > obj.table[0].tasks.length || number < 1) {
      console.log("The number of the task you entered does not exist");
    } else {
      obj.table[0].tasks.splice(number - 1, 1);
      obj.table[1].checked.splice(number - 1, 1);
      console.log("removed task number " + number);
    }
  } else {
    obj.table[0].tasks.splice(obj.table[0].tasks.length - 1, 1);
    obj.table[1].checked.splice(obj.table[1].checked.length - 1, 1);
    console.log("removed last task");
  }
}

/**
 * Edits tasks
 *
 * @returns {void}
 */
function edit(splittext, number, editedTask, lastTask) {
  if (splittext.length > 1) {
    if (number > obj.table[0].tasks.length || number < 1) {
      console.log("The number of the task you entered does not exist");
    } else {
      if (number == parseInt(number)) {
        if (editedTask === "") {
          console.error("error");
        } else {
          obj.table[0].tasks[number - 1] = editedTask;
          console.log("Task " + number + " changed to" + editedTask);
        }
      } else {
        obj.table[0].tasks[obj.table[0].tasks.length - 1] = lastTask;
        console.log("Last task changed to" + lastTask);
      }
    }
  } else {
    console.error("error");
  }
}

/**
 * Checks task
 *
 * @returns {void}
 */
function check(splittext, number) {
  if (splittext.length > 1) {
    if (number > obj.table[0].tasks.length || number < 1) {
      console.log("The number of the task you entered does not exist");
    } else {
      obj.table[1].checked[number - 1] = true;
      console.log("task " + number + " is marked as checked");
    }
  } else {
    console.error("error");
  }
}

/**
 * unchecks task
 *
 * @returns {void}
 */
function uncheck(splittext, number) {
  if (splittext.length > 1) {
    if (number > obj.table[0].tasks.length || number < 1) {
      console.log("The number of the task you entered does not exist");
    } else {
      obj.table[1].checked[number - 1] = false;
      console.log("task " + number + " is marked as unchecked");
    }
  } else {
    console.error("error");
  }
}

/**
 * Reads JSON file
 *
 */
fs.readFile("database.json", function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data);
});

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  try {
    let mydata = JSON.stringify(obj.table[0].tasks);
    console.log(obj.table[0].tasks, obj.table[1].checked);
    fs.writeFile("database2.json", mydata, () => {});
  } catch (error) {
    console.log("error");
  }
  process.exit();
}

/**
 * Lists commands
 *
 *@returns {void}
 */
function help() {
  console.log(
    "'hello X' returns hello X!\n'hello' returns hello!\n'help' to list commands\n'list' to list your tasks\n'add x' to add x as a task to your list\n'remove' to remove the last task in your list\n'remove x' to remove task #x in your list\n'edit x' to edit task #x\n'edit' to edit the last task\n'check x' to check task #x\n'uncheck x' to uncheck task #x\n'quit' or 'exit' to quit app"
  );
}

// The following line starts the application
startApp("Tina");
