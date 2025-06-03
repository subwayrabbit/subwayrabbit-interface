import {
    CompoundButton,
    makeStyles,
    tokens,
} from '@fluentui/react-components';
import { ChevronDown } from 'lucide-react';

interface TokenSelectButtonProps {
    tokenName: string;
    tokenImage: string;
    onClick?: () => void;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: 'auto',
        height: '72px',
        flexDirection: 'row',
        gap: '16px'
    },
    tokeButton: {
        // Base styles
        display: 'inline-flex',
        width: 'auto',
        minWidth: 'unset',
        maxWidth: 'none',

        fontFamily: tokens.fontFamilyBase,
        fontSize: '60px',
        fontWeight: tokens.fontWeightRegular,
        
        backgroundColor: 'transparent',
        color: tokens.colorNeutralForeground1,
        padding: 0,
        borderRadius: 0,
        border: 'none',

        // Transition definition
        transitionProperty: 'color, transform',
        transitionDuration: '200ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',

        // Hover state
        ':hover': {
            backgroundColor: 'transparent',
            color: tokens.colorNeutralForeground4,

            ':active': {
                color: tokens.colorNeutralForeground4,
            },
        },

        ':active': {
            backgroundColor: 'transparent',
            color: tokens.colorNeutralForeground4,
            transform: 'scale(0.97)',
            transitionDuration: tokens.durationFaster,
        },
    },
});

export function TokenSelectButton({ tokenName, tokenImage, onClick}: TokenSelectButtonProps) {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <CompoundButton
                className={styles.tokeButton}
                icon={<ChevronDown size={32} />}
                appearance="transparent"
                onClick={onClick}
            >
                {tokenName}
            </CompoundButton>
            <img
                src={tokenImage}
                alt={`${tokenName} token`}
                width={72}
                height={72}
            />
        </div>
    )
}

