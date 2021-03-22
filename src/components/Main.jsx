import { Component } from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { LoremIpsum } from 'lorem-ipsum'
import Paper from '@material-ui/core/Paper'

import Grid from '@material-ui/core/Grid'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 8,
    min: 2,
  },
})

const styles = (theme) => ({
  main: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class Main extends Component {
  render() {
    const { classes } = this.props
    return (
      <main className={classes.main}>
        <Grid container>
          {[...Array(100).keys()].map((item) => (
            <Grid container item key={item}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography>Item {item}</Typography>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <Typography>{lorem.generateParagraphs(1)}</Typography>
                </Paper>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </main>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Main)
