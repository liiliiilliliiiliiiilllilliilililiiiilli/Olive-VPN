/*  This file contains style varriables on which app themes depend.


    # Pictures:

    All pictures are in .png format (.svg may increase computattional consts).
    
    Small ones: 150px * 150px size.
    Big ones: 500px * 500px size.


    # Colors:

    All colors are represented in HEX format for Android compatibility.


    Any stuff this file contains is either meaningfully grouped or alphabetically sorted, just for better understanding.
    
*/


const ColorfulBackgroundImage_PNG = require ('../../../assets/PNG/_General_/ColorfulBackgroundImage.png')

const Burger_grey_PNG = require ('../../../assets/PNG/Burger/Grey.png')
const Moon_grey_PNG = require ('../../../assets/PNG/Moon/Grey.png')
const Sun_grey_PNG = require ('../../../assets/PNG/Sun/Grey.png')

const ArrowCompact_grey_PNG = require ('../../../assets/PNG/Arrows/Grey.png')
const ArrowCompact_green_PNG = require ('../../../assets/PNG/Arrows/Green.png')

const Apps_grey_PNG = require ('../../../assets/PNG/Apps/Grey.png')
const Olive_black_PNG = require ('../../../assets/PNG/Olive/Black.png')
const Tap_dark_green_PNG = require ('../../../assets/PNG/Tap/DarkGreen.png')
const Location_green_PNG = require ('../../../assets/PNG/Location/Green.png')
const Magic_wand_grey_PNG = require ('../../../assets/PNG/Magic_wand/Grey.png')


const colors = {

    BarBackground: '#070707',
    BarBorder: '#171717',
    Black: '#000000',
    Button: '#202020',
    Grey: '#808080',
    Line: '#1c1c1c',
    Olive: '#8b9e80',
    OliveDark: '#687262',
    PreWhite: '#f2f2f2',
    Sun: '#9e9780',
    Text: '#bfbfbf',
    Tip: '#0d0d0d',
    TipText: '#545454'

    // cartes: 'rgba(128, 128, 255, 0.5)',
    // olive_dark: 'rgb(41, 52, 50)'

}


const MainTheme = {

    _General_: {

        ColorfulBackgroundImage_PNG: ColorfulBackgroundImage_PNG,

        backgroundColor: colors.Black
    
    },


    StatusBar: {

        backgroundColor: colors.BarBackground
    
    },

    MainField: {

        backgroundColor: colors.Black

    },


    MainPage: {

        Top: {

            borderColor: colors.BarBorder,
            backgroundColor: colors.BarBackground,


            Title: {
    
                fontFamily: 'Fredoka-SemiBold',
                color: colors.PreWhite
    
            },
    
            Button: {
    
                borderColor: colors.Button,
                backgroundColor: colors.Black,
    
    
                // BackButton: {
    
                //     pic: ArrowCompact_light_PNG
    
                // },
    
                ThemeSwitcher: {
    
                    pic_Light: Sun_grey_PNG,
                    pic_Dark: Moon_grey_PNG
    
                },
    
                MenuButton: {
    
                    pic: Burger_grey_PNG
    
                }
    
            },
    
            SearchField: {
    
                SearchInputField: {
    
                    borderColor: colors.Button,
                    backgroundColor: colors.Black,
    
                    fontFamily: 'Fredoka-SemiBold',
                    color: colors.PreWhite
                
                },
    
                SuperCastSearchField: {
    
                    fontFamily: 'Fredoka-SemiBold',
                    color: colors.PreWhite
    
                }
    
            }
    
        },

        Main: {

            Top: {

                StatusText: {

                    fontFamily: 'Fredoka-SemiBold',
                    color: colors.PreWhite

                },

                Action: {

                    Apps_PNG: Apps_grey_PNG,
                    Arrow_PNG: ArrowCompact_grey_PNG,

                    fontFamily: 'Archivo-Bold',
                    color: colors.Grey

                }

            },

            Center: {

                VPN_button: {

                    Olive_PNG: Olive_black_PNG,
                    backgroundColor: colors.Olive

                },

                Tip: {

                    Tap_dark_green_PNG: Tap_dark_green_PNG,
                    fontFamily: 'Arimo-SemiBold',
                    color: colors.OliveDark

                },

                Action: {

                    Location_green_PNG: Location_green_PNG,
                    ArrowCompact_green_PNG: ArrowCompact_green_PNG,
                    fontFamily: 'Arimo-SemiBold',
                    color: colors.Olive

                }

            },

            Bottom: {

                backgroundColor: colors.Line,


                NetButton: {

                    Magic_wand_PNG: Magic_wand_grey_PNG,

                    fontFamily: 'Archivo-Bold',
                    color: colors.PreWhite

                },

                NetInfo: {

                    fontFamily: 'Archivo-Bold',
                    color: colors.Grey

                }

            }

        },

        Bottom: {

            backgroundColor: colors.Tip,

            textColor: colors.TipText,
            metalinkColor: colors.Olive

        }

    }

}


export { MainTheme }