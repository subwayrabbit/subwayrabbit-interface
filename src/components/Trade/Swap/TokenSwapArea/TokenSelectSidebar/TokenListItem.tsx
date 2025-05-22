import {
    makeStyles,
    shorthands,
    tokens,
    Text,
} from '@fluentui/react-components';

interface TokenListItemProps {
    tokenName: string;
    tokenLabel: string;
    tokenAmount: string;
    fiatValue: string;
    tokenImage: string;
    tokenAddress: string | undefined;
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: '100%',
        height: '68px',
        backgroundColor: 'transparent',
        flexDirection: "row",
        ...shorthands.gap('12px'),
    },
    infoContainer: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    pairNameFiatContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        height: '42px',
        justifyContent: 'space-between',
    },

    pairLabelAmountContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        height: '22px',
        justifyContent: 'space-between',
    },

    valueContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
    },

    imageContainer: {
        height: '100%',
        marginTop: '6px',
        marginBottom: '6px',
    },

    tokenName: {
        fontFamily: tokens.fontFamilyBase,
        fontSize: '25px',
        fontWeight: tokens.fontWeightRegular,
        color: tokens.colorNeutralForeground1,
    },

    tokenLabel: {
        fontFamily: tokens.fontFamilyBase,
        fontSize: '22px',
        letterSpacing: '1.4px',
        fontWeight: tokens.fontWeightRegular,
        color: tokens.colorNeutralForeground2,
    },
});


export function TokenListItem({ tokenName,
    tokenLabel,
    tokenAmount,
    fiatValue,
    tokenImage,
    tokenAddress }: TokenListItemProps) {
    const styles = useStyles();

    return (
        <div className={styles.container}>

            <div className={styles.imageContainer}>
                <img
                    src={tokenImage}
                    alt={`${tokenName} token`}
                    width={56}
                    height={56}
                />
            </div>

            <div className={styles.infoContainer}>

                <div className={styles.pairNameFiatContainer}>
                    <Text className={styles.tokenName}>{tokenName}</Text>
                    <div className={styles.valueContainer}>
                        <Text className={styles.tokenName}> {fiatValue} </Text>
                    </div>
                </div>

                <div className={styles.pairLabelAmountContainer}>
                    <Text className={styles.tokenLabel}>{tokenLabel}</Text>
                    <div className={styles.valueContainer}>
                        <Text className={styles.tokenLabel}> {tokenAmount} </Text>
                    </div>
                </div>
            </div>

        </div>
    )
}