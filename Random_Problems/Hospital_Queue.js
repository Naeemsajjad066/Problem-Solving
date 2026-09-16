class HospitalQueue {
    constructor() {
        this.tokenNumber = 1;
        this.patients = [];
        this.visited = [];
        this.current = 0;
    }

    addpatient(name) {
        const patient = {
            tokenNumber: this.tokenNumber++,
            name: name,
        };
        this.patients.push(patient);
    }

    markVisited(time) {
        if (this.current >= this.patients.length) {
            console.log("No patient available");
            return;
        }
        const user = {
            ...this.patients[this.current],
            time: time,
        };
        this.visited.push(user);
        this.current++;
    }

    calculateExpectedTime(tokenNumber) {
        const patientIndex = tokenNumber - 1;

        if (tokenNumber <= this.current) {
            console.log(`Token ${tokenNumber} has already been served.`);
            return;
        }

        if (this.visited.length === 0) {
            console.log(`No visited data yet to estimate time.`);
            return;
        }

        let totalTime = 0;
        for (let patient of this.visited) {
            totalTime += patient.time;
        }

        let averageTime = totalTime / this.visited.length; 
        let remaining = (tokenNumber - this.current)-1;
        let expectedTime = averageTime * remaining; 

        const hours = Math.floor(expectedTime / 60);
        const minutes = Math.floor(expectedTime % 60);

        console.log(`Dear ${this.patients[patientIndex].name}, your expected wait time is ${hours}h ${minutes}m`);
        return expectedTime;
    }
}

const queue = new HospitalQueue();

queue.addpatient("Naeem");
queue.addpatient("waseem");
queue.addpatient("yasir");
queue.addpatient("mubashir");
queue.addpatient("afzal");

queue.markVisited(8);
queue.markVisited(10);
queue.markVisited(5);

queue.calculateExpectedTime(5);
