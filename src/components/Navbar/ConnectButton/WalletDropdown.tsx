import {
    makeStyles,
    tokens,
} from '@fluentui/react-components';
import MetaMaskIcon from '@/assets/png/wallets/metamask.png';
import WalletConnectIcon from '@/assets/png/wallets/walletconnect.png';
import CoinBaseIcon from '@/assets/png/wallets/coinbase.png';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '96px',
        right: '0',
        width: '419px',
        backgroundColor: tokens.colorNeutralBackground2,
        border: `1px solid ${tokens.colorNeutralStroke1}`,
        zIndex: 1000,
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    walletItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '20px',
        paddingRight: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        ':hover': {
            backgroundColor: tokens.colorNeutralForeground4,
        },
    },
    walletIcon: {
        width: '56px',
        height: '56px',
    },
    walletName: {
        fontSize: '26px',
        color: tokens.colorNeutralForeground1,
        fontWeight: tokens.fontWeightRegular,
    },
});

interface WalletDropdownProps {
    isOpen: boolean;
}

export function WalletDropdown({ isOpen }: WalletDropdownProps) {
    const styles = useStyles();

    if (!isOpen) return null;

    return (
        <div className={styles.root}>
            <div className={styles.walletItem}>
                <img src={MetaMaskIcon} alt="MetaMask" className={styles.walletIcon} />
                <span className={styles.walletName}>MetaMask</span>
            </div>
            <div className={styles.walletItem}>
                <img src={WalletConnectIcon} alt="WalletConnect" className={styles.walletIcon} />
                <span className={styles.walletName}>WalletConnect</span>
            </div>
            <div className={styles.walletItem}>
                <img src={CoinBaseIcon} alt="Coinbase" className={styles.walletIcon} />
                <span className={styles.walletName}>Coinbase</span>
            </div>
        </div>
    );
} 