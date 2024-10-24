import { Inter, Frank_Ruhl_Libre, Mrs_Saint_Delafield, } from 'next/font/google'
// import localFont from 'next/font/local'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const frankRuhlLibre = Frank_Ruhl_Libre({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-frank-ruhl-libre',
})

export const mrsSaintDelafield = Mrs_Saint_Delafield({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mrs_saint_delafield',
    weight: '400'
})