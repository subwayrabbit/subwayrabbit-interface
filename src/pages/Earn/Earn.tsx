import {
    makeStyles,
    tokens,
} from '@fluentui/react-components';

import { Text } from '@fluentui/react-components';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: tokens.colorNeutralBackground1,
        fontFamily: tokens.fontFamilyBase,
    }
});

export default function Earn() {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <Text>Earn Page</Text>
        </div>
    )
}
