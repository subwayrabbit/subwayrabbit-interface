import {
    CompoundButton,
    makeStyles,
    tokens,
} from '@fluentui/react-components';
import { WalletIcon } from '@/components/icons/WalletIcon/WalletIcon';

const useStyles = makeStyles({
    root: {
        minWidth: '224px',
        height: '96px',

        fontFamily: tokens.fontFamilyBase,
        fontSize: '24px',
        fontWeight: tokens.fontWeightRegular,
        letterSpacing: '1.5px',
        
        backgroundColor: 'transparent',
        color: tokens.colorNeutralForeground1,

        padding: 0,
        borderRadius: 0,
        border: 'none',
        // Transition definition
        transitionProperty: 'background-color, color, transform', // Specify which properties to animate
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing

        ':hover': {
            backgroundColor: tokens.colorNeutralStroke1,
            color: tokens.colorNeutralForeground1,
        },

        ':hover:active': {
            backgroundColor: 'transparent',
            transform: 'scale(0.98)',
            color: tokens.colorNeutralForeground1,
        },
    },
});


export function ConnectButton() {
    const styles = useStyles();

    return (
            <CompoundButton
            className={styles.root}
            icon={<WalletIcon size={32} color={tokens.colorBrandBackground} />}
            appearance="transparent"
        >
            CONNECT
        </CompoundButton>
    )
}

