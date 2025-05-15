import {
    makeStyles,
    shorthands,
    tokens,
    Text,
} from '@fluentui/react-components';
import { TokenInput } from './TokenInput';
import { TokenSelectButton } from './TokenSelectButton';

interface TokenSwapAreaProps {
    type: "sell" | "buy";
    tokenName: string;
    tokenImage: string;
    tokenAmount: string;
    tokenWalletAmount: string;
    fiatValue: string;
    onTokenAmountChange: (value: string) => void;
}

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: 'calc(100% - 240px)',
        minWidth: '1180px',
        height: '250px',
        marginLeft: '120px',
        marginRight: '120px',
        ...shorthands.gap("0px"),
    },
    tokenContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        ...shorthands.gap("0px"),
    },

    valueContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        minWidth: "1180px"
    },

    fiatValue: {
        fontFamily: tokens.fontFamilyBase,
        fontSize: '40px',
        fontWeight: tokens.fontWeightRegular,
        color: tokens.colorNeutralForeground2,
    },

    walletValueContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
    },

    walletValue: {
        fontFamily: tokens.fontFamilyBase,
        fontSize: '40px',
        fontWeight: tokens.fontWeightRegular,
        color: tokens.colorNeutralForeground2,
    },

    tokenSelectContainer: {
        marginTop: '60px'
    }
});

export function TokenSwapArea({
    type,
    tokenName,
    tokenImage,
    tokenAmount,
    fiatValue,
    tokenWalletAmount,
    onTokenAmountChange, }: TokenSwapAreaProps) {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.tokenContainer}>
                <TokenInput
                    type={type}
                    tokenAmount={tokenAmount}
                    onTokenAmountChange={onTokenAmountChange}
                />
                <div className={styles.tokenSelectContainer} >
                <TokenSelectButton tokenName={tokenName} tokenImage={tokenImage} />
                </div>
            </div>

            <div className={styles.valueContainer}>
                <Text className={styles.fiatValue}>{fiatValue}</Text>
                <div className={styles.walletValueContainer}>
                    <Text className={styles.walletValue}>
                        {parseFloat(tokenWalletAmount).toFixed(3)} {tokenName}
                    </Text>
                </div>
            </div>
        </div>
    )

}