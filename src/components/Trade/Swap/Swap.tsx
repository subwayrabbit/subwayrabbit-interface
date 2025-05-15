import { useState } from 'react';
import {
    makeStyles,
    shorthands,
    tokens,
} from "@fluentui/react-components";
import { SwapButton } from './SwapButton';
import { TokenSwapArea } from './TokenSwapArea/TokenSwapArea';
import ethToken from '@/assets/png/tokens/eth.png';
import usdcToken from '@/assets/png/tokens/usdc.png';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        width: '100%',
        height: '100%',
        maxWidth: '100%',

        backgroundColor: "transparent",
        ...shorthands.gap('72px'),
    },

    separator: {
        height: "1px",
        backgroundColor: tokens.colorNeutralStroke3,
        margin: `${tokens.spacingVerticalM} 0`,
    },

    swapButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: "transparent",
        marginTop: '25px'
    },
});

export function Swap() {
    const styles = useStyles();
    const [sellAmount, setSellAmount] = useState("0.00");
    const [buyAmount, setBuyAmount] = useState("0.00");
    const [sellToken, setSellToken] = useState("ETH");
    const [buyToken, setBuyToken] = useState("USDC");

    const isSwapActive = (sellAmount !== "" && sellAmount !== "0.00" && sellAmount !== "0") &&
        (buyAmount !== "" && buyAmount !== "0.00" && buyAmount !== "0");

    // In a real app, you would have conversion logic here
    const calculateUsdValue = (amount: string, token: string) => {
        // Simplified conversion - in reality you'd use exchange rates
        if (token === "ETH") {
            return `$${(parseFloat(amount || "0") * 1625.87).toFixed(2)}`;
        } else if (token === "USDC") {
            return `$${amount}`; // USDC is 1:1 with USD
        }
        return "$0.00";
    };

    return (
        <div className={styles.container}>
            <TokenSwapArea
                type="sell"
                tokenAmount={sellAmount}
                tokenName="ETH"
                tokenImage={ethToken}
                tokenWalletAmount="0.123"
                fiatValue={calculateUsdValue(sellAmount, sellToken)}
                onTokenAmountChange={setSellAmount}
            />

            <div className={styles.separator} />

            <TokenSwapArea
                type="buy"
                tokenAmount={buyAmount}
                tokenName="USDC"
                tokenImage={usdcToken}
                tokenWalletAmount="110.000000"
                fiatValue={calculateUsdValue(buyAmount, buyToken)}
                onTokenAmountChange={setBuyAmount}
            />

            <div className={styles.swapButtonContainer}>
                <SwapButton isActive={isSwapActive} />
            </div>
        </div>
    );
};