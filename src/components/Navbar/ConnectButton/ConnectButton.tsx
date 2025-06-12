import {
    ToggleButton,
    makeStyles,
    tokens,
} from '@fluentui/react-components';
import { WalletIcon } from '@/components/icons/WalletIcon/WalletIcon';
import { useState, useRef, useEffect } from 'react';
import { WalletDropdown } from './WalletDropdown';

const useStyles = makeStyles({
    root: {
        minWidth: '224px',
        width: '224px',
        height: '96px',
        // position: 'relative',

        fontFamily: tokens.fontFamilyBase,
        fontSize: '24px',
        fontWeight: tokens.fontWeightRegular,
        letterSpacing: '1.5px',

        backgroundColor: 'transparent',
        color: tokens.colorNeutralForeground1,
        gap: '14px',

        padding: 0,
        borderRadius: 0,
        border: 'none',
        // Transition definition
        transitionProperty: 'background-color, transform',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',

        '& svg': {
            color: tokens.colorBrandBackground,
        },

        ':hover': {
            backgroundColor: tokens.colorNeutralStroke1,
            color: tokens.colorNeutralForeground1,
        },

        ':hover:active': {
            backgroundColor: 'transparent',
            transform: 'scale(0.98)',
            color: tokens.colorNeutralForeground1,
        },

        '&[aria-pressed="true"]': {
            color: tokens.colorNeutralForeground2,
            '& svg': {
                color: tokens.colorNeutralForeground2,
            },
            ':hover': {
                color: tokens.colorNeutralForeground2,
                ':active': {
                    color: tokens.colorNeutralForeground2,
                }
            },

        },
    }
});

export function ConnectButton() {
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ position: 'relative' }}>
            <ToggleButton
                ref={buttonRef}
                className={styles.root}
                icon={
                    <span style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <WalletIcon size={32} />
                    </span>
                } // overide interal fluent-ui/ToggleButton span to apply icon size 
                appearance="transparent"
                onClick={handleClick}
                checked={isOpen}
            >
                CONNECT
            </ToggleButton>
            <WalletDropdown isOpen={isOpen} />
        </div>
    );
}

