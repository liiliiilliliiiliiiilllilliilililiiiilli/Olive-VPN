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

const ArrowCompact_grey_PNG = require ('../../../assets/PNG/Arrows/Grey.png')
const ArrowCompact_green_PNG = require ('../../../assets/PNG/Arrows/Green.png')

const Burger_grey_PNG = require ('../../../assets/PNG/Burger/Grey.png')
const Sun_grey_PNG = require ('../../../assets/PNG/Sun/Grey.png')
const A_grey_PNG = require ('../../../assets/PNG/A/Grey.png')

const Apps_grey_PNG = require ('../../../assets/PNG/Apps/Grey.png')
const Olive_black_PNG = require ('../../../assets/PNG/Olive/Black.png')
const Tap_dark_green_PNG = require ('../../../assets/PNG/Tap/DarkGreen.png')
const Location_green_PNG = require ('../../../assets/PNG/Location/Green.png')
const MagicWand_light_PNG = require ('../../../assets/PNG/MagicWand/Light.png')

const World_grey_PNG = require ('../../../assets/PNG/World/Grey.png')
const Info_grey_PNG = require ('../../../assets/PNG/Info/Grey.png')
const Done_Black_PNG = require ('../../../assets/PNG/Done/Black.png')
const Done_White_PNG = require ('../../../assets/PNG/Done/White.png')

const Netherlands_PNG = require ('../../../assets/PNG/Flags/Netherlands.png')
const Germany_PNG = require ('../../../assets/PNG/Flags/Germany.png')


const Colors = {

    BarBackground: '#070707',
    BarBorder: '#171717',
    Black: '#000000',
    Button: '#202020',
    DarkBlockButton: '#bfbfbf',
    DarkGrey: '#404040',
    Grey: '#808080',
    LightBorderButton: '#cdcdcd',
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
    White: '#ffffff'

    // cartes: 'rgba(128, 128, 255, 0.5)',
    // olive_dark: 'rgb(41, 52, 50)'

}


const MainTheme = {

    StatusBar: {

        color: 'light-content',
        backgroundColor: Colors.BarBackground
    
    },

    MainField: {

        ColorfulBackground_PNG: ColorfulBackground_PNG,

        backgroundColor: Colors.Black

    },


    LanguageChooseWindow: {},

    LocationsWindow: {},

    AppDescriptionWindow: {},


    MenuSlider: {

        Skeleton: {},

        Separator: {},

        LanguageButton: {

            Planet_PNG: World_grey_PNG

        },

        FeedbackButton: {

            Info_PNG: Info_grey_PNG,
            Arrow_PNG: ArrowCompact_grey_PNG

        },

        AutoVpnToggler: {

            Done_PNG: Done_Black_PNG,

            backgroundColor_Chosen: 'rgb(175, 192, 168)',
            backgroundColor_Unchosen: '#171717',
            borderColor_Chosen: '#f2f2f2',
            borderColor_Unchosen: '#f2f2f2'

        }

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


                MenuButton: {
    
                    Menu_PNG: Burger_grey_PNG
    
                },

                ThemeSwitcher: {
    
                    ThemeIcon_PNG: Sun_grey_PNG,
                    AutomaticThemeIcon_PNG: A_grey_PNG

                }
    
            }
    
        },

        Main: {

            Top: {

                StatusText: {

                    fontFamily: 'Archivo-ExtraBold',
                    color: Colors.PreWhite

                },

                Action: {

                    Apps_PNG: Apps_grey_PNG,
                    Arrow_PNG: ArrowCompact_grey_PNG,

                    fontFamily: 'Archivo-Bold',
                    color: Colors.Grey

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

                    Tap_PNG: Tap_dark_green_PNG,

                    fontFamily: 'Archivo-Regular',
                    color: Colors.OliveDark

                },

                Action: {

                    Location_PNG: Location_green_PNG,
                    Arrow_PNG: ArrowCompact_green_PNG,

                    fontFamily: 'Arimo-Bold',
                    color: Colors.Olive

                }

            },

            Bottom: {

                ManageNetButton: {

                    MagicWand_PNG: MagicWand_light_PNG,


                    fontFamily: 'Archivo-Bold',
                    color: Colors.PreWhite,

                    borderColor: Colors.Black,
                    backgroundColor: Colors.Line

                },

                NetInfo: {

                    fontFamily: 'Archivo-Bold',
                    color: Colors.Grey

                }

            }

        },

        Bottom: {

            fontFamily: 'Archivo-Regular',
            color: Colors.TipText,
            metalinkColor: Colors.Olive,
            
            borderColor: 'rgba(0, 0, 0, 0.25)',
            backgroundColor: 'rgba(11, 11, 11, 0.80)'

        }

    },

    ServersListPage: {

        Top: {

            BackButton: {

                Arrow_PNG: ArrowCompact_grey_PNG

            },

            Title: {

                fontFamily: 'Fredoka-SemiBold',
                color: Colors.PreWhite

            }

        },

        Main: {

            Liner: {



            },

            ServerInstance: {

                Netherlands_PNG: Netherlands_PNG,
                Germany_PNG: Germany_PNG

            }

        }

    }

}


export { MainTheme }