import {
    makeStyles,
    tokens,
    Text,
    Button,
} from '@fluentui/react-components';
import ethToken from '@/assets/png/tokens/eth.png';
import usdcToken from '@/assets/png/tokens/usdc.png';
import { TokenListItem } from './TokenListItem';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '560px',
        height: '100vh',
        backgroundColor: tokens.colorNeutralBackground2,
        boxShadow: tokens.shadow16,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        zIndex: 1000,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: '24px',
        fontWeight: tokens.fontWeightSemibold,
    },
    closeButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: tokens.colorNeutralForeground2,
        ':hover': {
            color: tokens.colorNeutralForeground1,
        },
    },
    tokenList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    tokenItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        cursor: 'pointer',
        borderRadius: tokens.borderRadiusMedium,
        ':hover': {
            backgroundColor: tokens.colorNeutralBackground2,
        },
    },
    tokenImage: {
        width: '32px',
        height: '32px',
    },
    tokenName: {
        fontSize: '18px',
        fontWeight: tokens.fontWeightRegular,
    },
});

interface TokenSelectSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectToken: (token: { name: string; image: string }) => void;
}

// mock data
const tokensList = [
    { name: 'Ethereum', label: 'ETH', image: ethToken, fiat: '$52.95', amount: '0.02931' },
    { name: 'USDC Coin', label: 'USDC', image: usdcToken, fiat: '$16.15', amount: '16.152' },
];

export function TokenSelectSidebar({ isOpen, onClose, onSelectToken }: TokenSelectSidebarProps) {
    const styles = useStyles();

    if (!isOpen) return null;

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Text className={styles.title}>Select Token</Text>
                <Button
                    className={styles.closeButton}
                    onClick={onClose}
                    appearance="transparent"
                >
                    ✕
                </Button>
            </div>
            <div className={styles.tokenList}>
                {tokensList.map((token) => (

                <div className={styles.tokenItem}> 
                    <TokenListItem
                        tokenName={token.name}
                        tokenLabel={token.label}
                        tokenImage={token.image}
                        tokenAmount={token.amount}
                        fiatValue={token.fiat}
                        tokenAddress=''
                    />
                </div>
   


                    // <div
                    //     key={token.name}
                    //     className={styles.tokenItem}
                    //     onClick={() => {
                    //         onSelectToken(token);
                    //         onClose();
                    //     }}
                    // >
                    //     <img
                    //         src={token.image}
                    //         alt={token.name}
                    //         className={styles.tokenImage}
                    //     />
                    //     <Text className={styles.tokenName}>{token.name}</Text>
                    // </div>
                ))}
            </div>
        </div>
    );
} 