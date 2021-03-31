import React from 'react';
import './PastSong.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container } from "./PastSongElements"
import SpotifyPlayer from 'react-spotify-player'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      border : 'none',
      boxShadow : 0,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accordion: {
        border : 'none',
        outline: 'none',
        boxShadow : 0,
    }
  }));

function PastSongs() {
    const classes = useStyles();
    const size = {
        width: '100%',
        height: 375,
      };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'
    return (
        // <div>
        <Container>
            <h3 className="topLevel__Text"> Past Songs</h3>
            <div className="accordion">
                <Accordion className ="classes.accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>02/10/21</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SpotifyPlayer
                            uri="spotify:playlist:37i9dQZF1DXdQvOLqzNHSW"
                            size={size}
                            view={view}
                            theme={theme}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                    <Typography className={classes.heading}>02/09/21</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SpotifyPlayer
                            uri="spotify:playlist:37i9dQZF1DXdQvOLqzNHSW"
                            size={size}
                            view={view}
                            theme={theme}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion className ="classes.accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography className={classes.heading}>02/08/21</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SpotifyPlayer
                            uri="spotify:playlist:37i9dQZF1DXdQvOLqzNHSW"
                            size={size}
                            view={view}
                            theme={theme}
                        />
                    </AccordionDetails>
                </Accordion>
                <Accordion className ="classes.accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>02/07/21</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SpotifyPlayer
                            uri="spotify:playlist:37i9dQZF1DXdQvOLqzNHSW"
                            size={size}
                            view={view}
                            theme={theme}
                        />
                    </AccordionDetails>
                </Accordion>
            </div>
         
        </Container>
        // {/* </div> */}

    )
}

export default PastSongs