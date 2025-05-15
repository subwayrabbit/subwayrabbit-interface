import {
    makeStyles,
    tokens,
} from '@fluentui/react-components';
import { ConnectButton } from './ConnectButton/ConnectButton';
import { NavbarTabs } from './NavbarTabs/NavbarTabs';
import { MenuButton } from './MenuButton/MenuButton';
import { SearchButton } from './SearchButton/SearchButton';
import LogoImg from '@/assets/png/logo.png';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: tokens.colorNeutralBackground2,
        height: '96px',
        paddingLeft: '32px'
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
    },
    grow: {
        flexGrow: 1,
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '0px',
    },
    iconButton: {
        backgroundColor: '#1a1a1a',
        border: 'none',
        padding: tokens.spacingHorizontalS,
        color: '#d3ff3f',
        fontSize: '18px',
        cursor: 'pointer',
    },
    separator: {
        width: '1px',
        height: '96px',
        backgroundColor: tokens.colorNeutralStroke1,
        margin: `0`,
    },    
});

const Navbar = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <img
                    src={LogoImg}
                    alt="Logo"
                    width={56}
                    height={56}
                />
                <NavbarTabs />
            </div>

            {/* Spacer */}
            <div className={styles.grow} />

            {/* Right Section */}
            <div className={styles.rightSection}>
                <div className={styles.separator} />
                <SearchButton/>
                <div className={styles.separator} />
                <MenuButton/>
                <div className={styles.separator} />
                <ConnectButton />
            </div>
        </div>
    );
};

export default Navbar;