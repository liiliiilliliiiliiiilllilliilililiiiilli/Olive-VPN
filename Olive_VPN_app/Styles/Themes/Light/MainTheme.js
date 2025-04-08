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


const ArrowCompact_grey_PNG = require ('../../../assets/PNG/Arrows/Grey.png')

const World_black_PNG = require ('../../../assets/PNG/World/Black.png')
const Info_black_PNG = require ('../../../assets/PNG/Info/Black.png')
const Done_Black_PNG = require ('../../../assets/PNG/Done/Black.png')

const Netherlands_PNG = require ('../../../assets/PNG/Flags/Netherlands.png')
const Germany_PNG = require ('../../../assets/PNG/Flags/Germany.png')





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
    TextLink: '#4758b8',
    TextLinkPressed: '#36418c',
    Tip: '#0d0d0d',
    TipText: '#545454',
    TipTextDark: '#030a01',
    White: '#ffffff',

    StatusBar: '#ababab',
    Shadow: 'rgba(0, 0, 0, 0.5)',

    TopBarBorder: 'rgba(0, 0, 0, 0.125)',
    TopBarBackground: 'rgba(255, 255, 255, 0.625)',

    PinOutChosen: '#394335'

    // cartes: 'rgba(128, 128, 255, 0.5)',
    // olive_dark: 'rgb(41, 52, 50)'

}


const MainTheme = {

    StatusBar: {

        color: 'dark-content',
        backgroundColor: Colors.StatusBar

    },

    MainField: {

        ColorfulBackground_PNG: ColorfulBackground_PNG,


        backgroundColor: Colors.PreWhite

    },

    Shadow: {

        backgroundColor: Colors.Shadow

    },

    Window: {

        backgroundColor: Colors.PreWhite,
        boxShadow: '0px 2.5px 25px rgb(3, 10, 1)',


        TopBar: {

            boxShadow: '0px 5px 21px rgb(255, 255, 255)',

            borderColor: '#cfcfcf',
            backgroundColor: Colors.PreWhite,

            fontFamily: 'Archivo-SemiBold',
            color: Colors.Black

        },

        BottomBar: {

            fontFamily: 'Archivo-Regular',
            color: Colors.Black

        }

    },


    MainPage: {

        Top: {

            borderColor: Colors.TopBarBorder,
            backgroundColor: Colors.TopBarBackground,


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

    },

    ServersListPage: {

        Top: {

            BackButton: {

                Arrow_PNG: ArrowCompact_grey_PNG

            },

            Title: {

                fontFamily: 'Fredoka-SemiBold',
                color: Colors.Black

            }

        },

        Main: {

            Liner: {

                fontFamily: 'Archivo-SemiBold',
                color: Colors.Black,
                backgroundColor: Colors.PreWhite,

                lineColor: '#2c2c2c'

            },

            ServerInstance: {

                Netherlands_PNG: Netherlands_PNG,
                Germany_PNG: Germany_PNG,


                backgroundColor: 'transparent',


                Block: {

                    borderColor_Chosen: Colors.TopBarBorder,
                    borderColor_Unchosen: 'transparent',
                    backgroundColor: Colors.White,

                    fontFamily: 'Arimo-SemiBold',
                    color: Colors.Black,


                    Pic: {

                        borderColor: Colors.TopBarBorder

                    },

                    PilStatus: {

                        color_3: 'lightgreen',
                        color_2: 'orange',
                        color_1: 'darkred',
                        color_0: 'grey',

                    }

                }

            }

        }

    },


    MenuSlider: {

        Skeleton: {

            backgroundColor: Colors.PreWhite,


            Top: {

                borderBottomColor: '#b5b7b6',
                backgroundColor: '#cfcfcf',

                fontFamily: 'Archivo-ExtraBold',
                color: Colors.Black

            }

        },

        Separator: {

            backgroundColor: Colors.DarkGrey

        },

        LanguageButton: {

            Planet_PNG: World_black_PNG,


            fontFamily_language: 'Archivo-SemiBold',
            color_language: Colors.Black,

            fontFamily_language_value: 'Archivo-SemiBold',
            color_language_value: Colors.Black

        },

        FeedbackButton: {

            Info_PNG: Info_black_PNG,
            Arrow_PNG: ArrowCompact_black_PNG,


            fontFamily: 'Archivo-SemiBold',
            color: Colors.Black

        },

        AutoVpnToggler: {

            borderTopColor: '#b5b7b6',
            backgroundColor: '#cfcfcf',

            fontFamily: 'Archivo-SemiBold',
            color: Colors.Black,


            Toggler: {

                Done_PNG: Done_Black_PNG,


                backgroundColor_Chosen: 'rgba(255, 255, 255, 0.25)',
                backgroundColor_Unchosen: 'rgba(255, 255, 255, 0.25)',
                borderColor_Chosen: Colors.LightBorderButton,
                borderColor_Unchosen: Colors.LightBorderButton

            }

        }

    },


    AppDescriptionWindow: {

        Content: {

            fontFamily: 'Archivo-Regular',
            color: Colors.Black

        }

    },
    
    LanguageChooseWindow: {

        Content: {

            ChooseRadioButton: {

                innerColor_chosen: Colors.Olive,
                innerColor_unchosen: '',
                outerColor_chosen: Colors.LightBorderButton,
                outerColor_unchosen: Colors.LightBorderButton

            },
    
            ChooseVariant: {
    
                fontFamily_language: 'Archivo-SemiBold',
                color_language: Colors.Black,
    
                fontFamily_language_native: 'Archivo-SemiBold',
                color_language_native: Colors.Grey
    
            }

        }

    },
    
    FeedbackWindow: {

        Content: {

            fontFamily: 'Archivo-Regular',
            color: Colors.Black,
            color_link: Colors.TextLink,
            color_link_pressed: Colors.TextLinkPressed

        }

    }

}


export { MainTheme }