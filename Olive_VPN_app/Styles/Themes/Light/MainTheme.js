/*

    This is app styles control file.


    # Pictures:

    All pictures are in .png format (.svg may increase computattional consts).

    Small ones: 150px * 150px size.
    Big ones: 500px * 500px size.


    # Colors:

    All colors are represented in HEX format for Android compatibility.


    Any stuff this file contains is either meaningfully grouped or/and alphabetically sorted, just for better understanding.

*/


const ColorfulBackground_PNG = require ('../../../assets/PNG/_Other_/ColorfulBackgroundImage.png')

const ArrowCompact_black_PNG = require ('../../../assets/PNG/Arrows/Black.png')
const ArrowCompact_grey_PNG = require ('../../../assets/PNG/Arrows/Grey.png')

const A_dark_grey_PNG = require ('../../../assets/PNG/A/DarkGrey.png')
const Burger_dark_grey_PNG = require ('../../../assets/PNG/Burger/DarkGrey.png')
const Moon_dark_grey_PNG = require ('../../../assets/PNG/Moon/DarkGrey.png')

const Apps_black_PNG = require ('../../../assets/PNG/Apps/Black.png')
const Location_black_PNG = require ('../../../assets/PNG/Location/Black.png')
const MagicWand_black_PNG = require ('../../../assets/PNG/MagicWand/Black.png')
const Olive_black_PNG = require ('../../../assets/PNG/Olive/Black.png')
const Tap_black_PNG = require ('../../../assets/PNG/Tap/Black.png')

const Done_black_PNG = require ('../../../assets/PNG/Done/Black.png')
const Info_black_PNG = require ('../../../assets/PNG/Info/Black.png')
const World_black_PNG = require ('../../../assets/PNG/World/Black.png')

const Germany_PNG = require ('../../../assets/PNG/Flags/Germany.png')
const Netherlands_PNG = require ('../../../assets/PNG/Flags/Netherlands.png')
const Finland_PNG = require ('../../../assets/PNG/Flags/Finland.png')

const Colors = {

    Black: '#000000',
    Button: '#202020',
    DarkBlockButton: '#bfbfbf',
    DarkGrey: '#404040',
    Grey: '#808080',
    LightBlock: '#b5b7b6',
    LightBorder: '#cfcfcf',
    Line: '#2c2c2c',
    Olive: '#8b9e80',
    PinGreen: 'lime',
    PinGrey: 'grey',
    PinOrange: 'orange',
    PinOutChosen: '#394335',
    PinRed: 'red',
    PreWhite: '#f2f2f2',
    StatusBar: '#ababab',
    TextLink: '#4758b8',
    TextLinkPressed: '#36418c',
    Tip: '#0d0d0d',
    TipTextDark: '#030a01',
    Transparent: 'transparent',
    White: '#ffffff',

    OliveButtonShadow: '0px 2.5px 10px rgb(3, 10, 1)',
    OliveHightTransparent: 'rgba(139, 158, 128, 0.75)',
    Shadow: 'rgba(0, 0, 0, 0.5)',
    TopBarBackground: 'rgba(255, 255, 255, 0.625)',
    TopBarBorder: 'rgba(0, 0, 0, 0.125)',
    WindowShadow: '0px 2.5px 25px rgb(3, 10, 1)'

}


const MainTheme = {

    MainBackground: {

        backgroundColor: Colors.PreWhite

    },

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
        boxShadow: Colors.WindowShadow,


        TopBar: {

            borderColor: Colors.LightBorder,
            backgroundColor: Colors.PreWhite,
            
            fontFamily: 'Archivo-SemiBold',
            color: Colors.Black,
            
            boxShadow: '0px 5px 21px #ffffff'

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
    
                fontFamily: 'Archivo-Bold',
                color: Colors.Black,
                lineColor: Colors.Olive
    
            },
    
            Button: {

                borderColor: Colors.TopBarBorder,
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

                    fontFamily: 'Archivo-Bold',
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


                    fontFamily: 'Archivo-Bold',
                    color: Colors.Black

                }

            },

            Bottom: {

                ManageNetButton: {

                    MagicWand_PNG: MagicWand_black_PNG,


                    borderColor: Colors.Black,
                    backgroundColor: Colors.DarkBlockButton,
                    
                    fontFamily: 'Archivo-Bold',
                    color: Colors.Black

                },

                NetInfo: {

                    fontFamily: 'Archivo-Bold',
                    color: Colors.PreWhite

                }

            }

        },

        Bottom: {
            
            borderColor: 'rgba(194, 194, 194, 0.125)',
            backgroundColor: 'rgba(255, 255, 255, 0.125)',

            fontFamily: 'Archivo-Medium',
            color: Colors.Black,
            metalinkColor: Colors.PreWhite

        }

    },

    ServersListPage: {

        Top: {

            BackButton: {

                Arrow_PNG: ArrowCompact_grey_PNG

            },

            Title: {

                fontFamily: 'Archivo-Bold',
                color: Colors.Black

            }

        },

        Main: {

            Liner: {

                lineColor: Colors.Line,
                
                backgroundColor: Colors.PreWhite,
                fontFamily: 'Archivo-SemiBold',
                color: Colors.Black,

            },

            ServerInstance: {

                Netherlands_PNG: Netherlands_PNG,
                Germany_PNG: Germany_PNG,
                Finland_PNG: Finland_PNG,


                backgroundColor: 'transparent',


                Block: {

                    borderColor_Chosen: Colors.TopBarBorder,
                    borderColor_Unchosen: 'transparent',
                    backgroundColor: Colors.White,

                    fontFamily: 'Arimo-SemiBold',
                    color: Colors.Black,
                    color_IsChosen: Colors.Grey,


                    Pic: {

                        borderColor_Out: Colors.TopBarBorder,
                        borderColor_In: Colors.PreWhite

                    },

                    PinStatus: {

                        green: Colors.PinGreen,
                        orange: Colors.PinOrange,
                        red: Colors.PinRed,
                        transparent: Colors.Transparent

                    }

                }

            }

        }

    },


    MenuSlider: {

        Skeleton: {

            backgroundColor: Colors.PreWhite,


            Top: {

                borderBottomColor: Colors.LightBlock,
                backgroundColor: Colors.LightBorder,

                fontFamily: 'Archivo-ExtraBold',
                color: Colors.Black

            }

        },

        Separator: {

            backgroundColor: Colors.DarkGrey

        },

        LanguageButton: {

            Planet_PNG: World_black_PNG,


            fontFamily_Language: 'Archivo-SemiBold',
            color_Language: Colors.Black,

            fontFamily_LanguageValue: 'Archivo-SemiBold',
            color_LanguageValue: Colors.Black

        },

        FeedbackButton: {

            Info_PNG: Info_black_PNG,
            Arrow_PNG: ArrowCompact_black_PNG,


            fontFamily: 'Archivo-SemiBold',
            color: Colors.Black

        },

        AutoVpnToggler: {

            borderTopColor: 'rgba(0, 0, 0, 0.08)',
            backgroundColor: 'hsl(0, 0%, 87.50%)',

            fontFamily: 'Archivo-SemiBold',
            color: Colors.Black,


            Toggler: {

                Done_PNG: Done_black_PNG,


                backgroundColor_Chosen: 'rgba(255, 255, 255, 0.25)',
                backgroundColor_Unchosen: 'rgba(255, 255, 255, 0.25)',
                borderColor_Chosen: Colors.TopBarBorder,
                borderColor_Unchosen: Colors.TopBarBorder

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

                innerColor_Chosen: Colors.Olive,
                innerColor_Unchosen: Colors.White,
                outerColor_Chosen: Colors.TopBarBorder,
                outerColor_Unchosen: Colors.TopBarBorder

            },
    
            ChooseVariant: {
    
                fontFamily_Language: 'Archivo-SemiBold',
                color_Language: Colors.Black,
    
                fontFamily_LanguageNative: 'Archivo-SemiBold',
                color_LanguageNative: Colors.Grey
    
            }

        }

    },
    
    FeedbackWindow: {

        Content: {

            fontFamily: 'Archivo-Regular',
            color: Colors.Black,
            color_Link: Colors.TextLink,
            color_LinkPressed: Colors.TextLinkPressed

        }

    }

}


export { MainTheme }