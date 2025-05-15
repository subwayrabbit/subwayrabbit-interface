import {
    CompoundButton,
    makeStyles,
    tokens,
} from '@fluentui/react-components';
import { MenuIcon } from '@/components/icons/MenuIcon/MenuIcon';

const useStyles = makeStyles({
    root: {
        // Base styles
        width: '96px',
        height: '96px',
        minWidth: '96px',

        backgroundColor: 'transparent',
        padding: 0,
        borderRadius: 0,
        border: 'none',

        // Transition definition
        transitionProperty: 'background-color, color, transform', // Specify which properties to animate
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing

        ':hover': {
            backgroundColor: tokens.colorNeutralStroke1,
        },

        ':hover:active': {
            backgroundColor: 'transparent',
            transform: 'scale(0.98)',
            '& svg': {
                transform: 'scale(0.9)',
            }
        },
    },
    icon: {
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
});


export function MenuButton() {
    const styles = useStyles();

    return (
        <CompoundButton className={styles.root}
            icon={<MenuIcon size={32} color={tokens.colorBrandBackground} className={styles.icon}/>}
            appearance="transparent"
        >
        </CompoundButton>
    )
}

