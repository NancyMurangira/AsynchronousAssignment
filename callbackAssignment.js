//Q1

async function messageDelay(message, delay){
    await new Promise(resolve =>
        setTimeout(resolve, delay)
        );
    console.log(message);
}

messageDelay("Stay Positive!", 2000)

//Q2:  Asynchronous function to fetch and log user data for each ID in sequence


async function getUserData(id) {
    return new Promise((resolve) => setTimeout(() => resolve({ id, data: `User ${id} is a software developer` }), 3000));
}

async function storeUserData(userIds) {
    for (const userId of userIds) {
        try {
            const userData = await getUserData(userId);
            console.log(userData);
        } catch (error) {
            console.error(`Error fetching user data for ID ${userId}: ${error.message}`);
        }
    }
}


const userIds = [37, 62, 54];
storeUserData(userIds);


//Q3

function performATask() {
    performATask().then(() =>
        console.log("Task successful")
    ).catch(error =>
        console.error(`Task failed: ${error.message}`)
    );
}

performATask();

//Q4

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
            resolve(`${taskName} succeeded`);
        } else {
            reject(`${taskName} failed`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
}

executeWithRetry("SampleTask", 3, 0.5);
