import './voteCard.styles.css';


export function VoteCard() {

    return (
        <div className="voteCard">
            <Highlighter />
            <VoteCount />
            <h1 className="voteCard__title">The title of the vote card</h1>
            <p className="voteCard__time">Created 5 days age</p>
        </div>
    )
}

function Highlighter() {
    
    return (
        <span className="highlighter">
            NEWS
        </span>
    )
}

function VoteCount() {

    return (
        <span className="voteCount">0 Votes</span>
    )
}