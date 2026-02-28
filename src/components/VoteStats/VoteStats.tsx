import css from './VoteStats.module.css'



interface voreStatsProps{
    vote: {
        good: number;
        neutral: number;
        bad: number;
    };
    totalVotes : number;
    positiveRate : number;
}


export default function VoteStats({vote, totalVotes, positiveRate}: voreStatsProps){
    return(
        <div className={css.container}>
  <p className={css.stat}>Good: <strong>{vote.good}</strong></p>
  <p className={css.stat}>Neutral: <strong>{vote.neutral}</strong></p>
  <p className={css.stat}>Bad: <strong>{vote.bad}</strong></p>
  <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
  <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
</div>

    )
}