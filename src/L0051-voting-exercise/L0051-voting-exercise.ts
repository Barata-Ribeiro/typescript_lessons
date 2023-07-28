// Define a type for VotingOption, which includes the option name and its vote count
type VotingOption = {
    numberOfVotes: number;
    option: string;
};

// Define a Voting class, which represents a voting event
export class Voting {
    // An array to hold all voting options
    private _votingOptions: VotingOption[] = [];

    // The constructor takes a string which describes the voting event
    constructor(public details: string) {}

    // Method to add a new voting option
    addVotingOption(votingOption: VotingOption): void {
        this._votingOptions.push(votingOption);
    }

    // Method to vote for a given option, specified by its index
    vote(voteIndex: number): void {
        // Check if voteIndex is valid, return if not
        if (!this._votingOptions[voteIndex]) return;
        // Increment the vote count of the specified option
        this._votingOptions[voteIndex].numberOfVotes += 1;
    }

    // Getter method to return all voting options
    get votingOptions(): VotingOption[] {
        return this._votingOptions;
    }
}

// Define a VotingApp class, which manages multiple Voting instances
export class VotingApp {
    // An array to hold all Voting instances
    private _votings: Voting[] = [];

    // Method to add a new Voting instance
    addVoting(voting: Voting): void {
        this._votings.push(voting);
    }

    // Method to print the details of each voting event and its options' vote counts
    showVotingDetails(): void {
        // Loop over each Voting instance
        for (const voting of this._votings) {
            // Print the voting details
            console.log(voting.details);
            // Loop over each VotingOption in the current Voting instance
            for (const votingOption of voting.votingOptions) {
                // Print the option and its vote count
                console.log(votingOption.option, votingOption.numberOfVotes);
            }
            console.log('###');
            console.log('');
        }
    }
}

// Create a new Voting instance and add options
const voting1 = new Voting('What is your favorite programming language?');
voting1.addVotingOption({ option: 'JavaScript', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'Python', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'PHP', numberOfVotes: 0 });
voting1.addVotingOption({ option: 'C++', numberOfVotes: 0 });

// Simulate some votes
voting1.vote(1);
voting1.vote(2);
voting1.vote(1);
voting1.vote(0);
voting1.vote(0);
voting1.vote(0);
voting1.vote(0);

// Create a second Voting instance and add options
const voting2 = new Voting('What is your favorite color?');
voting2.addVotingOption({ option: 'Red', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Green', numberOfVotes: 0 });
voting2.addVotingOption({ option: 'Blue', numberOfVotes: 0 });

// Simulate some votes
voting2.vote(1);
voting2.vote(1);
voting2.vote(1);
voting2.vote(2);
voting2.vote(0);
voting2.vote(2);
voting2.vote(0);

// Create a VotingApp instance and add the Voting instances to it
const votingApp = new VotingApp();
votingApp.addVoting(voting1);
votingApp.addVoting(voting2);

// Show the voting details of all the Voting instances in the VotingApp
votingApp.showVotingDetails();
