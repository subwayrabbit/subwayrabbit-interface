import {
    createDarkTheme,
    BrandVariants,
} from '@fluentui/react-components';

const brand: BrandVariants = {
    10: '#050500',
    20: '#1a1a00',
    30: '#2e2e00',
    40: '#444400',
    50: '#5a5a00',
    60: '#707000',
    70: '#858500',
    80: '#9b9b00',
    90: '#b1b100',
    100: '#c7c700',
    110: '#dddd00',
    120: '#f3f300',
    130: '#f6f623',
    140: '#f9f946',
    150: '#fcfc69',
    160: '#ffff8c',
};

export const darkTheme = {
    ...createDarkTheme(brand),
    // Font family
    fontFamilyBase: "'Bai Jamjuree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontFamilyMonospace: "'Bai Jamjuree', monospace",
    fontFamilyNumeric: "'Bai Jamjuree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

    // Font weights
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,

    // Font sizes (optional adjustments)
    fontSizeBase300: '0.875rem',
    fontSizeBase400: '1rem',
    fontSizeBase500: '1.125rem',

    colorBrandBackground: '#efff3f', // bright yellow
    colorBrandForeground1: '#efff3f',
    colorNeutralBackground1: '#141414', // app background
    colorNeutralBackground2: '#1f1f1f', // app blocks background

    colorNeutralForeground1: '#ffffff', // main text
    colorNeutralForeground2: '#7A7A7A', // gray-100
    colorNeutralForeground3: '#525252', // gray-200
    colorNeutralForeground4: "#3D3D3D",

    colorNeutralForegroundDisabled: '#555555',
    colorNeutralStroke1: '#333333',
    colorNeutralStroke3: '#373737',
    colorNeutralBackgroundDisabled: '#0d0d0d',
};