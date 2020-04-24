import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from "./styles";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUS } from '../../constants';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const listTask = [
    { id: 1, title: "Readboook", description: "Read material book", status: 0 },
    { id: 2, title: "Watching movie", description: "on NetFlix", status: 2 },
    { id: 3, title: "Playing Game", description: "PS4", status: 1 }
]
class TaskBoard extends Component {
    renderBoard = () => {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUS.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value)
                        return (
                            <Grid key={index} item md={4} xs={12}>
                                <div className={classes.status}>{status.label}</div>
                                <div className={classes.warpperListTask}>{
                                    taskFilter.map(task => {
                                        return (
                                            <Card key={task.id} className={classes.card}>
                                                <CardContent>
                                                    <Grid container justify="space-between">
                                                        <Grid item md={8}>
                                                            
                                                        </Grid>
                                                        <Grid item md={4}></Grid>
                                                    </Grid>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small"></Button>
                                                </CardActions>
                                            </Card>
                                            
                                        )
                                    })
                                }</div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button}>
                    <AddIcon /> Them moi cong viec
                </Button>
                {this.renderBoard()}
            </div>
        )
    }
}
export default withStyles(styles)(TaskBoard);