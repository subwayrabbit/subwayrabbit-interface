import {
    Button,
    makeStyles,
    tokens,
    mergeClasses,
} from '@fluentui/react-components';

const useStyles = makeStyles({
    swapButton: {
        // Base styles
        width: '318px',
        height: '136px',

        fontFamily: tokens.fontFamilyBase,
        fontSize: '56px',
        fontWeight: tokens.fontWeightRegular,
        letterSpacing: '2.5px',
        
        backgroundColor: tokens.colorNeutralBackground2,
        color: tokens.colorNeutralForeground3,
        padding: 0,
        borderRadius: 0,
        border: 'none',

        // Transition definition
        transitionProperty: 'border background-color, color, transform', // Specify which properties to animate
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing

        // Hover state
        ':hover': {
            backgroundColor: tokens.colorNeutralBackground2,
            color: tokens.colorNeutralForeground3,
        },

        // Active state
        ':active': {
            backgroundColor: tokens.colorBrandBackground,
            color: tokens.colorNeutralBackground1,
        },
    },

    swapButtonActive: {
        backgroundColor: tokens.colorBrandBackground,
        color: tokens.colorNeutralBackground1,

        ':hover': {
            backgroundColor: tokens.colorBrandBackground,
            color: tokens.colorNeutralBackground1,
        },
    },
});

interface SwapButtonProps {
    isActive: boolean;
}

export function SwapButton({ isActive }: SwapButtonProps) {
    const styles = useStyles();

    return (
        <Button 
            className={mergeClasses(styles.swapButton, isActive && styles.swapButtonActive)}
            disabled={!isActive}
        >
            SWAP
        </Button>
    )
}

