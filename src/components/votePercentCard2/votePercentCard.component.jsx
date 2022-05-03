import { Grid } from '@mui/material'
import { ProgressBar } from '../progressBar/progressBar.component'
import './votePercentCard.styles.css'

export function VotePercentCard2() {

    return (
      <div className="votePercentCard">
        <Grid container>
          <Grid item xs={10}>
            <h1 className="votePercentCard__title">Donald Trump</h1>
          </Grid>
          <Grid item xs={2}>
            <h1 className="votePercentCard__title votePercentCard__percent">5%</h1>
          </Grid>
          <ProgressBar value={5} />
        </Grid>
        <p className="votePercentCard__votes">500 votes</p>
      </div>
    );
}