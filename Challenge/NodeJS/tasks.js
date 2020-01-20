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
  } else if (splittext[0] === "hello") {
    if (splittext.length > 1) {
      hello(splittext[1]);
    } else {
      hello(1);
    }
  } else if (text === "help\n") {
    help();
  } else {
    unknownCommand(text);
  }
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
    console.log("hello " + name + "!");
  }
}

/**
 * Lists tasks
 *
 * @returns {void}
 */
function list() {
  let listArr = ["task1", "task2", "task3"];
  for (i = 0; i < listArr.length; i++) {
    console.log(i + 1 + " " + listArr[i]);
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

/**
 * Lists commands
 *
 *@returns {void}
 */
function help() {
  console.log(
    "'hello X' returns hello X!\n'hello' returns hello!\n'help' to list commands\n'quit' or 'exit' to quit app"
  );
}

// The following line starts the application
startApp("Tina");
