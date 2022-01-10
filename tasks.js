const commandList = ["hello", "help", "exits"];
const tasks = ["codi", "coding", "exits"];
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
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', onDataReceived);
    console.log(`Welcome to ${name}'s application!`)
    console.log("--------------------")
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
    if (text === 'quit\n' || text === 'exit\n') {
        quit();
    } else if (text.startsWith(`hello`)) {
        hello(text.trim());
    } else if (text === 'help\n') {
        help();
    } else if (text === 'list\n') {
        list();

    } else if (text.startsWith(`add`)) {
        add(text.trim());
    } else if (text.startsWith(`remove`)) {
        remove(text.trim());
    } else unknownCommand(text);

}

function remove(text) {
    var splitText = text.split("remove ")
        // console.log(splitText);
    if (splitText.length > 1) {
        if (!isNaN(splitText[1])) {
            if (parseInt(splitText) < tasks.length) {
                let index = parseInt(splitText[1]);
                tasks.splice((index - 1), 1);
                list();
            } else {
                console.log("enter an exist number of task")
            }

        } else {
            console.log("enter a number");
        }
    } else {
        console.log("enter the number of the task")
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
    console.log('unknown command: "' + c.trim() + '"')

}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(txt) {
    txt = txt.replace(`hello`, ``);
    console.log('hello' + txt + "!");
}

/**     
 * prints "hello is for greeting the user, quit and exitto quit the application, help to list the commandsS"
 * @returns {void}
 */
function help() {
    // for (let i = 0; i < commandlist.length; i++) {
    //     console.log(commandlist(i));


    // }


    commandList.forEach((element, index) => {
        console.log(element);
    });

}

function list() {
    tasks.forEach(
        (element, index) => {
            console.log(index + 1 + "-" + element)
        }
    )

}

function add(task) {
    var tasksplit = task.split(`add `);
    if (tasksplit.length > 1) {
        tasks.push(tasksplit[1]);
        list();
    } else {
        console.log(`error`)
    }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
    console.log('Quitting now, goodbye!')
    process.exit();

}
// The following line starts the application
startApp("Mohamad Matar")