import { makeStyles } from "@material-ui/core";


export const HomePageStyles = makeStyles((theme) => ({
    container: {
        width: '480px !important',
        height: '430px',
        background: '#e2e8f0',
        padding: '20px 26px',
        margin: '30px',
        borderRadius: '10px',
        boxShadow: '7px 7px 25px #64748b',
        transform: 'scale(1)',

        '&:hover': {
            transform: 'scale(1.1)'
        },

        '& img': {
            width: '130%',
            height: '57%',
            objectFit: 'cover',
            borderRadius: '5px !important',
            marginBottom: '20px',
        }
    },
    title: {
        textAlign: 'center',
        fontSize: '29px',
        marginBottom: '10px',
        color: '#AF730F',
        fontWeight: '600',
        overFlow: 'hidden !important'
    },
    tableLeague: {
        fontSize: '18px',
        color: theme.palette.primary.main,
    },
    logo: {
        width: '55px !important',
        height: '77px !important',
        objectFit: 'contain',

        [theme.breakpoints.down('md')]: {
            width: '40px !important',
            height: '60px !important',
        }
    }
}))