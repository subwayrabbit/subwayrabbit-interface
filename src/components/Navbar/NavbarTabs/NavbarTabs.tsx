import {
    makeStyles,
    tokens,
    ToggleButton,
    shorthands
} from '@fluentui/react-components';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    buttonGroup: {
        display: 'flex',
        ...shorthands.gap('40px'),
    },
    link: {
        textDecoration: 'none',
        userSelect: 'none',
        WebkitUserDrag: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
    },
    navButton: {
        display: 'inline-flex', // Makes width content-based
        width: 'auto', // Overrides default width
        minWidth: 'unset', // Removes Fluent's default min-width

        fontFamily: tokens.fontFamilyBase,
        fontWeight: tokens.fontWeightRegular,
        fontSize: '24px',
        letterSpacing: '1.5px',
        color: tokens.colorNeutralForeground2,
        backgroundColor: 'transparent',

        ...shorthands.padding(tokens.spacingVerticalM, 0),
        ...shorthands.border('none'),
        ...shorthands.borderRadius('0'),

        cursor: 'pointer',
        transition: `all ${tokens.durationNormal} ${tokens.curveEasyEase}`,

        ':hover': {
            color: tokens.colorBrandBackground,

            '&[aria-pressed="false"]:hover': {
                color: tokens.colorBrandBackground,
            }
        },

        // Active state (only when mouse is down over button)
        ':active:not(:hover)': {
            color: tokens.colorNeutralForeground2, // Revert to default during drag-out
        },

        ':active': { // Click/pressed state
            transform: 'scale(0.97)', // Slight press-down effect
            transitionDuration: tokens.durationFaster, // Faster transition for click
            color: tokens.colorNeutralForegroundOnBrand,

            '&[aria-pressed="true"]:active': {
                transform: 'scale(0.97) translateY(1px)', // Different effect when toggled
                color: tokens.colorNeutralForegroundOnBrand,
                borderBottom: `2px solid ${tokens.colorBrandForeground1}`,
            },
        },

        '&[aria-pressed="true"]': { // Selected state
            color: tokens.colorNeutralForegroundOnBrand,
            borderBottom: `2px solid ${tokens.colorBrandForeground1}`,
            transition: `all ${tokens.durationNormal} ${tokens.curveEasyEase}`,

            // Also disable hover effects when active
            ':hover': {
                color: tokens.colorNeutralForegroundOnBrand,
                transition: 'none',
                borderBottom: `2px solid ${tokens.colorBrandForeground1}`,
            },
        }
    },
});

export function NavbarTabs() {
    const styles = useStyles();
    const location = useLocation();

    return (
        <div className={styles.buttonGroup}>
            <Link to="/trade" className={styles.link} draggable="false">
                <ToggleButton
                    appearance="transparent"
                    className={styles.navButton}
                    checked={location.pathname === '/trade'}
                >
                    TRADE
                </ToggleButton>
            </Link>

            <Link to="/earn" className={styles.link} draggable="false">
                <ToggleButton
                    appearance="transparent"
                    className={styles.navButton}
                    checked={location.pathname === '/earn'}
                >
                    EARN
                </ToggleButton>
            </Link>

            <Link to="/bridge" className={styles.link} draggable="false">
                <ToggleButton
                    appearance="transparent"
                    className={styles.navButton}
                    checked={location.pathname === '/bridge'}
                >
                    BRIDGE
                </ToggleButton>
            </Link>
        </div>
    );
}