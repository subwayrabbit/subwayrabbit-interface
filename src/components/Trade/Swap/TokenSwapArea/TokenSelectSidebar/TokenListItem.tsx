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
    root: {
        display: 'flex',
        width: '100%',
        height: '88px',
        backgroundColor: 'transparent',
        flexDirection: "row",
        justifyContent: 'center',
        ...shorthands.gap('12px'),
        paddingRight: '24px',
        paddingLeft: '24px',

        transition: 'background-color 0.2s ease',

        ':hover': {
            backgroundColor: tokens.colorNeutralForeground4,
        },

    },

    imageContainer: {
        display: 'flex',
        height: '100%',
        flexDirection: "row",
        alignItems: 'center',
    },

    infoContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: "column",
        justifyContent: 'center',
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
        <div className={styles.root}>
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