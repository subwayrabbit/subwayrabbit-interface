import {
    makeStyles,
    tokens,
    ToggleButton,
    shorthands,
} from '@fluentui/react-components';
import { Swap } from '@/components/Trade/Swap/Swap';
import { useState } from 'react';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: tokens.colorNeutralBackground1,
        fontFamily: tokens.fontFamilyBase,
        padding: 0,
        margin: 0,
    },
    buttonGroup: {
        display: 'flex',
        ...shorthands.gap('8px'),
        marginTop: '32px',
        marginLeft: '120px',
    },
    toggleButton: {
        fontFamily: tokens.fontFamilyBase,
        fontSize: '22px',
        fontWeight: tokens.fontWeightRegular,
        letterSpacing: '1.3px',
        backgroundColor: 'transparent',
        color: tokens.colorNeutralForeground2,
        border: `1px solid ${tokens.colorNeutralForeground3}`,

        minWidth: 'unset',
        height: '46px',
        weight: '96px',
        borderRadius: 0,

        ...shorthands.padding('8px', '16px'),

        // Transition definition
        transitionProperty: 'border background-color, color, transform', // Specify which properties to animate
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing

        // Hover effect only when not active
        '&[aria-pressed="false"]:hover': {
            backgroundColor: 'transparent',
            color: tokens.colorNeutralForeground1,
            border: '1px solid #ffffff'
        },

        '&[aria-pressed="true"]': {
            backgroundColor: tokens.colorNeutralForeground1,
            color: tokens.colorNeutralBackground1,

            // Explicitly disable hover effects when active
            ':hover': {
                backgroundColor: tokens.colorNeutralForeground1,
                color: tokens.colorNeutralBackground1,
            }
        },

        // Active state (only when mouse is down over button)
        ':active:not(:hover)': {
            backgroundColor: 'transparent',
            color: tokens.colorNeutralForeground2,
        },

        // Remove default button styles
        ':active': {
            backgroundColor: tokens.colorNeutralForeground1,
            color: tokens.colorNeutralBackground1,
        },

    },
    content: {
        width: '100%',
        height: '100%',
        marginTop: '32px',
    }
});

type TradeView = 'swap' | 'limit' | 'send';

export default function Trade() {
    const styles = useStyles();
    const [activeView, setActiveView] = useState<TradeView>('swap');

    const renderContent = () => {
        switch (activeView) {
            case 'swap':
                return <Swap />;
            case 'limit':
                return (
                    <div>
                        <h2>Limit Content</h2>
                    </div>
                );
            case 'send':
                return (
                    <div>
                        <h2>Send Content</h2>
                    </div>
                );
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonGroup}>
                <ToggleButton
                    checked={activeView === 'swap'}
                    onClick={() => setActiveView('swap')}
                    className={styles.toggleButton}
                >
                    SWAP
                </ToggleButton>
                <ToggleButton
                    checked={activeView === 'limit'}
                    onClick={() => setActiveView('limit')}
                    className={styles.toggleButton}
                >
                    LIMIT
                </ToggleButton>
                <ToggleButton
                    checked={activeView === 'send'}
                    onClick={() => setActiveView('send')}
                    className={styles.toggleButton}
                >
                    SEND
                </ToggleButton>
            </div>
            <div className={styles.content}>
                {renderContent()}
            </div>
        </div>
    );
}
