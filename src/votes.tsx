import { useState } from 'react';

function Votes() {
    const [voteChocolate, votedChocolate] = useState(0);
    const [voteVanilla, votedVanilla] = useState(0);
    const [voteStrawberry, votedStrawberry] = useState(0);
    const total = voteChocolate + voteVanilla + voteStrawberry;
    return (
        <div className='votes'>
            <h2>Votes Here</h2>
            <div className='voteButtons'>
                <button onClick={() => votedChocolate(votedC => { return votedC + 1 })}>Chocolate</button>
                <button onClick={() => votedVanilla(votedC => { return votedC + 1 })}>Vanilla</button>
                <button onClick={() => votedStrawberry(votedS => { return votedS +1 })}>Strawberry</button>
            </div>
                { total > 0 && 
                <div className='voteGraph'>
                    { voteChocolate > 0 && 
                        <div>
                            <p className='creamFlavor'>Chocolate: {voteChocolate} ({Math.round((voteChocolate / (total || 1)) * 100) + '%'}) </p>
                            <div className='graph chocolate' style={{width: voteChocolate / total * 100 + '%'}}></div>
                        </div> } { voteChocolate === 0 && <div className='noVote'>Chocolate has no votes!</div>}
                    { voteVanilla > 0 && 
                        <div>  
                            <p className='creamFlavor'>Vanilla: {voteVanilla} ({Math.round((voteVanilla / (total || 1)) * 100) + '%'})</p>
                            <div className='graph vanilla' style={{width: voteVanilla / total * 100 + '%'}}></div>
                        </div> } { voteVanilla === 0 && <div className='noVote'>Vanilla has no votes!</div>}
                    { voteStrawberry > 0 && 
                        <div>  
                            <p className='treatType'>Strawberry: {voteStrawberry} ({Math.round((voteStrawberry / (total || 1)) * 100) + '%'})</p>
                            <div className='graph strawberry' style={{width: voteStrawberry / total * 100 + '%'}}></div>
                        </div> } { voteStrawberry === 0 && <div className='noVote'>Strawberry has no votes!</div>}
                    </div>
                }
                <div className='noVotes'>
                    { total === 0 && <div>No votes yet!</div>}
                </div>
        </div>
    );
};

export default Votes;