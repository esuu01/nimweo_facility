import { config } from '@tamagui/config/v3'

import { createFont, createTamagui } from 'tamagui'


const redditMonoFace = {
    normal: {normal: 'RedditMono-Regular'},
    bold: {normal: 'RedditMono-Bold'},
    100: {normal: 'RedditMono-ExtraLight'},
    300: {normal: 'RedditMono-Light'},
    500: {normal: 'RedditMono-Regular'},
    600: {normal: 'RedditMono-Medium'},
    700: {normal: 'RedditMono-SemiBold'},
    800: {normal: 'RedditMono-Bold'},
    900: {normal: 'RedditMono-ExtraBold'},
};

const headingFont = createFont({
    size: config.fonts.heading.size,
    lineHeight: config.fonts.heading.lineHeight,
    weight: config.fonts.heading.weight,
    letterSpacing: config.fonts.heading.letterSpacing,
    face: redditMonoFace,
});

const bodyFont = createFont({
    size: config.fonts.body.size,
    lineHeight: config.fonts.body.lineHeight,
    weight: config.fonts.body.weight,
    letterSpacing: config.fonts.body.letterSpacing,
    face: redditMonoFace,
});

export const tamaguiConfig = createTamagui({
    ...config,
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: true,
    defaultFont: 'body',
    fonts: {
        heading: headingFont,
        body: bodyFont,
    },
})
export default tamaguiConfig
export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}
