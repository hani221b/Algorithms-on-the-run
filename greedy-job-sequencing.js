class JobSequencing 
{
    constructor(jobs){
        this.jobs = jobs.sort((a, b) => (b.profit / b.deadline) - (a.profit / a.deadline));;
        this.maxDeadline = 0;
        this.schedulesJobs = [];
        this.getMaxDeadline();
        this.getSchedulesJobs();
    }

    getMaxDeadline(){
        for(let job of this.jobs){
            if(job.deadline > this.maxDeadline){
                this.maxDeadline = job.deadline;
            }
        }
    }

    getSchedulesJobs(){
        this.schedulesJobs = new Array(this.maxDeadline).fill(null);
    } 

    result(){
        for(let job of this.jobs){
            for(let i = job.deadline - 1; i >=0; i--){
                if(this.schedulesJobs[i] === null){
                    this.schedulesJobs[i] = job;
                    break;
                }
            }
        }
        return this.schedulesJobs
    }
}

const array = [
    {"id": "a", "deadline":2, "profit":100},
    {"id": "b", "deadline":1, "profit":19},
    {"id": "c", "deadline":2, "profit":27},
    {"id": "d", "deadline":1, "profit":25},
    {"id": "f", "deadline":3, "profit":15},
];

const jobSequencing = new JobSequencing(array);

console.log(jobSequencing.result());