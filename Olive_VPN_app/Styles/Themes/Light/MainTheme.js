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


const ColorfulBackgroundImage_PNG = require ('../../../assets/PNG/_General_/ColorfulBackgroundImage.png')

const ArrowCompact_grey_PNG = require ('../../../assets/PNG/Arrows/Grey.png')
const ArrowCompact_green_PNG = require ('../../../assets/PNG/Arrows/Green.png')

const Burger_grey_PNG = require ('../../../assets/PNG/Burger/Grey.png')
const Moon_grey_PNG = require ('../../../assets/PNG/Moon/Grey.png')
const Sun_grey_PNG = require ('../../../assets/PNG/Sun/Grey.png')

const Apps_grey_PNG = require ('../../../assets/PNG/Apps/Grey.png')
const Olive_black_PNG = require ('../../../assets/PNG/Olive/Black.png')
const Tap_dark_green_PNG = require ('../../../assets/PNG/Tap/DarkGreen.png')
const Location_green_PNG = require ('../../../assets/PNG/Location/Green.png')
const Magic_wand_light_PNG = require ('../../../assets/PNG/Magic_wand/Light.png')


const Colors = {

    BarBackground: '#070707',
    BarBorder: '#171717',
    Black: '#000000',
    Button: '#202020',
    Grey: '#808080',
    Line: '#1c1c1c',
    Olive: '#8b9e80',
    OliveButtonShadow: '0px 2.5px 10px rgb(3, 10, 1)',
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

        backgroundColor: Colors.Black
    
    },


    StatusBar: {

        backgroundColor: Colors.BarBackground
    
    },

    MainField: {

        backgroundColor: Colors.Black

    },


    MainPage: {

        Top: {

            borderColor: Colors.BarBorder,
            backgroundColor: Colors.BarBackground,


            Title: {
    
                fontFamily: 'Fredoka-SemiBold',
                color: Colors.PreWhite,
                lineColor: Colors.Olive
    
            },
    
            Button: {
    
                borderColor: Colors.Button,
                backgroundColor: Colors.Black,


                ThemeSwitcher: {
    
                    Light_PNG: Sun_grey_PNG,
                    Dark_PNG: Moon_grey_PNG
    
                },
    
                MenuButton: {
    
                    Menu_PNG: Burger_grey_PNG
    
                }
    
            }
    
        },

        Main: {

            Top: {

                StatusText: {

                    fontFamily: 'Archivo-Bold',
                    color: Colors.PreWhite

                },

                Action: {

                    Apps_PNG: Apps_grey_PNG,
                    Arrow_PNG: ArrowCompact_grey_PNG,

                    fontFamily: 'Archivo-SemiBold',
                    color: Colors.Grey

                }

            },

            Center: {

                VPN_button: {

                    Olive_PNG: Olive_black_PNG,

                    borderColor: Colors.Black,
                    backgroundColor: Colors.Olive,
                    boxShadow: Colors.OliveButtonShadow

                },

                Tip: {

                    Tap_PNG: Tap_dark_green_PNG,

                    fontFamily: 'Archivo-SemiBold',
                    color: Colors.OliveDark

                },

                Action: {

                    Location_PNG: Location_green_PNG,
                    Arrow_PNG: ArrowCompact_green_PNG,

                    fontFamily: 'Arimo-SemiBold',
                    color: Colors.Olive

                }

            },

            Bottom: {

                NetButton: {

                    MagicWand_PNG: Magic_wand_light_PNG,


                    fontFamily: 'Archivo-SemiBold',
                    color: Colors.PreWhite,

                    borderColor: Colors.Black,
                    backgroundColor: Colors.Line


                },

                NetInfo: {

                    fontFamily: 'Archivo-SemiBold',
                    color: Colors.Grey

                }

            }

        },

        Bottom: {

            fontFamily: 'Archivo-Regular',
            color: Colors.TipText,
            metalinkColor: Colors.Olive,
            
            backgroundColor: Colors.Tip

        }

    }

}


export { MainTheme }