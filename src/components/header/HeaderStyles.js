import { makeStyles } from "@material-ui/core";

export const HeaderStyles = makeStyles((theme) => ({
    container: {
        // width: '100%',
        height: '80vh',
        backgroundImage: 'url(../../images/bg.jpg)',
    },
    cover: {
        // objectFit: 'contain',
        transform: 'translate(1000px)',
        // width: '200px',
        // height: '500px',

        [theme.breakpoints.down('md')]: {
            transform: 'translate(0)',
        }
    },
    cover2: {
        transform: 'translate(-150px)',
    }
}))