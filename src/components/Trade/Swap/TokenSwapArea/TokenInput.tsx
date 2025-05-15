import {
    Input,
    Label,
    makeStyles,
    shorthands,
    tokens,
    mergeClasses,
} from "@fluentui/react-components";

import { ArrowUp, ArrowDown } from '@/components/icons/ArrowIcon/ArrowIcon';

interface TokenInputProps {
    type: "sell" | "buy";
    tokenAmount: string;
    onTokenAmountChange: (value: string) => void;
}

// Styles
const useStyles = makeStyles({
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        width: '100%',
        ...shorthands.gap("0px"),
    },

    tokenLabelContainer: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        height: '60px',
        alignItems: "center",
        ...shorthands.gap("8px"),
    },

    tokenLabel: {
        display: "flex",
        fontFamily: tokens.fontFamilyBase,
        fontSize: '48px',
        fontWeight: tokens.fontWeightRegular,
        color: tokens.colorNeutralForeground2,
    },

    tokenLabelActive: {
        color: tokens.colorBrandBackground,
    },

    arrowIcon: {
        width: '26px',
        height: '60px',
        color: tokens.colorNeutralForeground2,
    },

    arrowIconActive: {
        color: tokens.colorBrandBackground,
    },

    inputTokenContainer: {
        display: "flex",
        flexDirection: "column",
        width: '880px',
        ...shorthands.gap("0px"),
    },

    tokenInput: {
        fontFamily: tokens.fontFamilyBase,
        fontWeight: tokens.fontWeightRegular,
        backgroundColor: 'transparent',
        width: '100%',
        maxWidth: '100%',
        
        // Remove underline effect
        '&::after': {
            content: 'none',
        },
        // Input field specific styles
        '& input': {
            padding: '0',
            fontSize: '130px',
            backgroundColor: 'transparent',
            caretColor: tokens.colorBrandBackground,
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',

            // Hide number input spinners
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
            },
            '&[type=number]': {
                MozAppearance: 'textfield',
            },

            // Active/focus state
            '&:focus-within': {
                color: tokens.colorNeutralForeground1, // White text when active
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
            '&:not(:focus-within)': {
                boxShadow: 'none',
            },
        }
    },

    tokenInputDefaultState: {
        '& input': {
            color: tokens.colorNeutralForeground3,
        },
    },

    tokenInputActiveState: {
        '& input': {
            color: tokens.colorNeutralForeground1,
        },
    },
});

// TokenInput Component
export const TokenInput = ({
    type,
    tokenAmount,
    onTokenAmountChange,
}: TokenInputProps) => {
    const styles = useStyles();
    const isSell = type === "sell";
    const isActive = tokenAmount !== "" && tokenAmount !== "0.00" && tokenAmount !== "0";
    const tokenInputStyle = mergeClasses(
        styles.tokenInput,
        isActive && styles.tokenInputActiveState,
        !isActive && styles.tokenInputDefaultState
    );

    // Change label and icon color for "buy" active state
    const labelStyle = mergeClasses(
        styles.tokenLabel,
        (!isSell && isActive) && styles.tokenLabelActive
    );

    const arrowStyle = mergeClasses(
        styles.arrowIcon,
        (!isSell && isActive) && styles.arrowIconActive
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Prevent these keys from being entered
        if (['e', 'E', '+', '-'].includes(e.key)) {
          e.preventDefault();
        }
      };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        const numbersLimit = 10;

        // Process leading zeros
        if (value.length > 1) {
            if (/^0+[1-9]/.test(value)) {
                value = value.replace(/^0+/, '');
            } else if (/^0+\./.test(value)) {
                value = value.replace(/^0+/, '0');
            }
        }

        // Split into parts for digit counting
        const parts = value.split('.');
        const integerPart = parts[0] || '';
        const decimalPart = parts[1] || '';

        // Apply numbersLimit-digit total limit
        const totalDigits = integerPart.length + decimalPart.length;
        if (totalDigits > numbersLimit) {
            if (integerPart.length >= numbersLimit) {
                value = integerPart.substring(0, numbersLimit);
            } else {
                const allowedDecimalDigits = numbersLimit - integerPart.length;
                value = `${integerPart}.${decimalPart.substring(0, allowedDecimalDigits)}`;
            }
        }

        onTokenAmountChange(value);
    };

    const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.currentTarget.blur();
      };

    return (
        <div className={styles.inputContainer}>
            <div className={styles.tokenLabelContainer}>
                {isSell && ( <ArrowDown className={arrowStyle}/> )}
                <Label className={labelStyle}>
                    {type}
                </Label>
                {!isSell && (<ArrowUp className={arrowStyle}/> )}
            </div>

            <div className={styles.inputTokenContainer}>
                <Input
                    type="number"
                    value={tokenAmount}
                    className={tokenInputStyle}
                    onChange={handleAmountChange}
                    onWheel={handleWheel}
                    onKeyDown={handleKeyDown}
                    min="0"
                    step="any"
                    appearance="filled-darker"
                    placeholder="0.00"
                />
            </div>
        </div>
    );
};