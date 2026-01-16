let electionAge=45;
let numberOfVoter=10000;

const postVote=(voterName,voterAge)=>{

    console.log(voterName)
    if (voterAge>electionAge) {
        console.log("You Can Vote")
        
    } else { console.log("You Can Not Vote")
        
    }
}

let name='dev'
let age= 35

postVote(name,age)

[{name:"dev" ,
    number:"11111"
    }]