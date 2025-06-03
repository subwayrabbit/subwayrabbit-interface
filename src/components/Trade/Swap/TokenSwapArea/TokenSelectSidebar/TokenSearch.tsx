import {
    makeStyles,
    tokens,
    SearchBox,
} from '@fluentui/react-components';
import { Search } from 'lucide-react';

const useStyles = makeStyles({
    root: {
        width: '512px',
        height: '52px',
        marginBottom: '12px',
        backgroundColor: 'transparent',
    },
    searchInput: {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        borderRadius: '12px',
        backgroundColor: 'transparent',
        fontSize: '20px',
        color: tokens.colorNeutralForeground2,
        fontWeight: tokens.fontWeightRegular,
        border: `1px solid ${tokens.colorNeutralForeground4}`,

        // Transition definition
        transitionProperty: 'border background-color, color, transform',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing

        ':hover': {
            border: `1px solid ${tokens.colorNeutralForeground1}`
        },

        '&:focus-within': {
            border: `1px solid ${tokens.colorNeutralForeground1} !important`,
        },

        '&:active': {
            border: `1px solid ${tokens.colorNeutralForeground1}`,
        },

        '& input::placeholder': {
            color: tokens.colorNeutralForeground2,
        },

        '&::after': {
            content: 'none',
        },
    },
});


export function TokenSearch() {

    const styles = useStyles();

    return (
        <div className={styles.root}>
        <SearchBox
            className={styles.searchInput}
            placeholder="Search..."
            contentBefore={<Search size={20} color={tokens.colorNeutralForeground2} />}
            appearance="outline"
        />
    </div>
    )
}
