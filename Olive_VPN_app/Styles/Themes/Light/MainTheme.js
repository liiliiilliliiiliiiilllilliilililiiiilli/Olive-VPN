/*

    This file contains style varriables on which app themes depend.


    # Pictures:

    All pictures are in .png format (.svg may increase computattional consts).

    Small ones: 150px * 150px size.
    Big ones: 500px * 500px size.


    # Colors:

    All colors are represented in HEX format for Android compatibility.


    Any stuff this file contains is either meaningfully grouped or alphabetically sorted, just for better understanding.

*/


const ColorfulBackground_PNG = require ('../../../assets/PNG/_Other_/ColorfulBackgroundImage.png')

const ArrowCompact_black_PNG = require ('../../../assets/PNG/Arrows/Black.png')

const Burger_dark_grey_PNG = require ('../../../assets/PNG/Burger/DarkGrey.png')
const Moon_dark_grey_PNG = require ('../../../assets/PNG/Moon/DarkGrey.png')
const A_dark_grey_PNG = require ('../../../assets/PNG/A/DarkGrey.png')

const Apps_black_PNG = require ('../../../assets/PNG/Apps/Black.png')
const Olive_black_PNG = require ('../../../assets/PNG/Olive/Black.png')
const Tap_black_PNG = require ('../../../assets/PNG/Tap/Black.png')
const Location_black_PNG = require ('../../../assets/PNG/Location/Black.png')
const MagicWand_black_PNG = require ('../../../assets/PNG/MagicWand/Black.png')


const Colors = {

    BarBackground: '#f8f8f8',
    BarBorder: '#171717',
    Black: '#000000',
    Button: '#202020',
    DarkBlockButton: '#bfbfbf',
    DarkGrey: '#404040',
    Grey: '#808080',
    LightBorderButton: 'rgba(0, 0, 0, 0.125)',
    Line: '#1c1c1c',
    Olive: '#8b9e80',
    OliveHightTransparent: 'rgba(139, 158, 128, 0.75)',
    OliveButtonShadow: '0px 2.5px 10px rgb(3, 10, 1)',
    OliveDark: '#687262',
    PreWhite: '#f2f2f2',
    Sun: '#9e9780',
    Text: '#bfbfbf',
    Tip: '#0d0d0d',
    TipText: '#545454',
    TipTextDark: '#030a01',
    White: '#ffffff'

    // cartes: 'rgba(128, 128, 255, 0.5)',
    // olive_dark: 'rgb(41, 52, 50)'

}


const MainTheme = {

    StatusBar: {

        color: 'dark-content',
        backgroundColor: 'rgb(171, 171, 171)'
    
    },

    MainField: {

        ColorfulBackground_PNG: ColorfulBackground_PNG,

        backgroundColor: 'rgba(0, 0, 0, 0.0)'

    },

    LanguageWindow: {},

    LocationsWindow: {},

    DescriptionWindow: {},

    MainPage: {

        Top: {

            borderColor: 'rgba(0, 0, 0, 0.125)',
            backgroundColor: 'rgba(255, 255, 255, 0.625)',


            Title: {
    
                fontFamily: 'Fredoka-SemiBold',
                color: Colors.Black,
                lineColor: Colors.Olive
    
            },
    
            Button: {

                borderColor: Colors.LightBorderButton,
                backgroundColor: 'rgba(255, 255, 255, 0.25)',


                MenuButton: {
    
                    Menu_PNG: Burger_dark_grey_PNG
    
                },

                ThemeSwitcher: {
    
                    ThemeIcon_PNG: Moon_dark_grey_PNG,
                    AutomaticThemeIcon_PNG: A_dark_grey_PNG
    
                }
    
            }
    
        },

        Main: {

            Top: {

                StatusText: {

                    fontFamily: 'Archivo-ExtraBold',
                    color: Colors.Black

                },

                Action: {

                    Apps_PNG: Apps_black_PNG,
                    Arrow_PNG: ArrowCompact_black_PNG,

                    fontFamily: 'Archivo-Bold',
                    color: Colors.Black

                }

            },

            Center: {

                VpnButton: {

                    Olive_PNG: Olive_black_PNG,

                    borderColor: Colors.Black,
                    backgroundColor: Colors.OliveHightTransparent,
                    boxShadow: Colors.OliveButtonShadow

                },

                Tip: {

                    Tap_PNG: Tap_black_PNG,

                    fontFamily: 'Archivo-Regular',
                    color: Colors.TipTextDark

                },

                Action: {

                    Location_PNG: Location_black_PNG,
                    Arrow_PNG: ArrowCompact_black_PNG,

                    fontFamily: 'Arimo-Bold',
                    color: Colors.Black

                }

            },

            Bottom: {

                ManageNetButton: {

                    MagicWand_PNG: MagicWand_black_PNG,


                    fontFamily: 'Archivo-Bold',
                    color: Colors.Black,

                    borderColor: Colors.Black,
                    backgroundColor: Colors.DarkBlockButton

                },

                NetInfo: {

                    fontFamily: 'Archivo-Bold',
                    color: Colors.PreWhite

                }

            }

        },

        Bottom: {

            fontFamily: 'Archivo-Medium',
            color: Colors.Black,
            metalinkColor: Colors.PreWhite,
            
            borderColor: 'rgba(194, 194, 194, 0.125)',
            backgroundColor: 'rgba(255, 255, 255, 0.125)'

        }

    }

}


export { MainTheme }