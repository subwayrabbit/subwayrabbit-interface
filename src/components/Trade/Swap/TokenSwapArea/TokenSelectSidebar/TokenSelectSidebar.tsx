import {
    makeStyles,
    tokens,
    Text,
    CompoundButton,
} from '@fluentui/react-components';
import ethToken from '@/assets/png/tokens/eth.png';
import usdcToken from '@/assets/png/tokens/usdc.png';
import { TokenListItem } from './TokenListItem';
import { X } from 'lucide-react';
import { TokenSearch } from './TokenSearch';
import { Token } from '@/components/Token/TokenType';

const useStyles = makeStyles({
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        opacity: 0,
        transition: 'all 0.3s ease-in-out',
        visibility: 'hidden',
        pointerEvents: 'none',
    },
    overlayVisible: {
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
    },
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '560px',
        height: '100vh',
        backgroundColor: tokens.colorNeutralBackground2,
        boxShadow: tokens.shadow16,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        transform: 'translateX(100%)',
        transition: 'all 0.4s ease-in-out',
        visibility: 'hidden',
        pointerEvents: 'none',
    },
    rootVisible: {
        transform: 'translateX(0)',
        visibility: 'visible',
        pointerEvents: 'auto',
    },
    controlContainer: {
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
    },
    controlContainerVisible: {
        opacity: 1,
    },
    header: {
        display: 'flex',
        width: '100%',
        height: '72px',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexShrink: 0,
    },
    title: {
        fontSize: '25px',
        fontWeight: tokens.fontWeightRegular,
    },
    closeButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: tokens.colorNeutralForeground2,
        ':hover': {
            color: tokens.colorNeutralForeground1,
            ':active': {
                color: tokens.colorNeutralForeground1,
                transform: 'scale(0.98)',
                '& svg': {
                    transform: 'scale(0.98)',
                }
            }
        },
    },
    tokenList: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflowY: 'auto',
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
});

interface TokenSelectSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectToken: (token: Token) => void;
}

// mock data
const tokensList: Token[] = [
    { name: 'Ethereum', label: 'ETH', image: ethToken, fiat: '$52.95', amount: '0.02931', address: '0x0000000000000000000000000000000000000000' },
    { name: 'USDC Coin', label: 'USDC', image: usdcToken, fiat: '$16.15', amount: '16.152', address: '0x0000000000000000000000000000000000000001' },
];

export function TokenSelectSidebar({ isOpen, onClose, onSelectToken }: TokenSelectSidebarProps) {
    const styles = useStyles();

    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} onClick={onClose} />
            <div className={`${styles.root} ${isOpen ? styles.rootVisible : ''}`}>
                <div className={styles.header}>
                    <CompoundButton
                        className={styles.closeButton}
                        onClick={onClose}
                        appearance="transparent"
                        icon={<X size={32} />}
                    />
                </div>

                <div className={`${styles.controlContainer} ${isOpen ? styles.controlContainerVisible : ''}`}>
                    <Text className={styles.title}>All networks</Text>
                    <TokenSearch />
                </div>

                <div className={styles.tokenList}>
                    {tokensList.map((token) => (

                        <div className={styles.tokenItem}
                            onClick={() => {
                                onSelectToken(token);
                                onClose();
                            }}>

                            <TokenListItem
                                tokenName={token.name}
                                tokenLabel={token.label}
                                tokenImage={token.image}
                                tokenAmount={token.amount}
                                fiatValue={token.fiat}
                                tokenAddress={token.address}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
} 