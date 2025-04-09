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

const ArrowCompact_green_PNG = require ('../../../assets/PNG/Arrows/Green.png')
const ArrowCompact_grey_PNG = require ('../../../assets/PNG/Arrows/Grey.png')

const A_grey_PNG = require ('../../../assets/PNG/A/Grey.png')
const Burger_grey_PNG = require ('../../../assets/PNG/Burger/Grey.png')
const Sun_grey_PNG = require ('../../../assets/PNG/Sun/Grey.png')

const Apps_grey_PNG = require ('../../../assets/PNG/Apps/Grey.png')
const Location_green_PNG = require ('../../../assets/PNG/Location/Green.png')
const MagicWand_light_PNG = require ('../../../assets/PNG/MagicWand/Light.png')
const Olive_black_PNG = require ('../../../assets/PNG/Olive/Black.png')
const Tap_dark_green_PNG = require ('../../../assets/PNG/Tap/DarkGreen.png')

const Done_white_PNG = require ('../../../assets/PNG/Done/White.png')
const Info_grey_PNG = require ('../../../assets/PNG/Info/Grey.png')
const World_grey_PNG = require ('../../../assets/PNG/World/Grey.png')

const Germany_PNG = require ('../../../assets/PNG/Flags/Germany.png')
const Netherlands_PNG = require ('../../../assets/PNG/Flags/Netherlands.png')


const Colors = {

    BarBackground: '#070707',
    BarBorder: '#171717',
    Black: '#000000',
    Button: '#202020',
    DarkBack: '#0b0b0b',
    DarkBlockButton: '#bfbfbf',
    Grey: '#808080',
    Line: '#1c1c1c',
    Liner: '#2c2c2c',
    Olive: '#8b9e80',
    OliveDark: '#687262',
    PicBorder: '#303030',
    PinGreen: 'lime',
    PinGrey: 'grey',
    PinOrange: 'orange',
    PinOutChosen: '#394335',
    PinRed: 'red',
    PreWhite: '#f2f2f2',
    Separator: '#262626',
    SoapBack: '#101010',
    Sun: '#9e9780',
    TextLink: '#9da6d9',
    TextLinkPressed: '#6c7499',
    Tip: '#0d0d0d',
    TipText: '#545454',
    ToggInner: '#1f1f1f',
    ToggOuter: '#3e3e3e',
    Transparent: 'transparent',
    White: '#ffffff',
    WindowTopBackground: '#1a1a1a',
    WindowTopBorder: '#0f0f0f',

    OliveButtonShadow: '0px 2.5px 10px rgb(3, 10, 1)',
    OliveHightTransparent: 'rgba(139, 158, 128, 0.75)',
    Shadow: 'rgba(0, 0, 0, 0.5)',
    WindowShadow: '0px 2.5px 25px rgb(3, 10, 1)'

}


const MainTheme = {

    MainBackground: {

        backgroundColor: Colors.Black

    },

    StatusBar: {

        color: 'light-content',
        backgroundColor: Colors.BarBackground

    },

    MainField: {

        ColorfulBackground_PNG: ColorfulBackground_PNG,


        backgroundColor: Colors.Black

    },

    Shadow: {

        backgroundColor: Colors.Shadow

    },

    Window: {

        backgroundColor: '#141414',
        boxShadow: Colors.WindowShadow,


        TopBar: {

            borderColor: Colors.WindowTopBorder,
            backgroundColor: Colors.WindowTopBackground,

            fontFamily: 'Archivo-SemiBold',
            color: Colors.PreWhite,

            boxShadow: '0px 5px 21px #141414'

        },

        BottomBar: {

            fontFamily: 'Archivo-Regular',
            color: Colors.Olive

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


                    borderColor: Colors.Black,
                    backgroundColor: Colors.Line,
                    
                    fontFamily: 'Archivo-Bold',
                    color: Colors.PreWhite

                },

                NetInfo: {

                    fontFamily: 'Archivo-Bold',
                    color: Colors.Grey

                }

            }

        },

        Bottom: {

            borderColor: 'rgba(0, 0, 0, 0.25)',
            backgroundColor: 'rgba(11, 11, 11, 0.80)',

            fontFamily: 'Archivo-Medium',
            color: Colors.TipText,
            metalinkColor: Colors.Olive

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

                lineColor: Colors.Liner,

                backgroundColor: Colors.Black,
                fontFamily: 'Archivo-SemiBold',
                color: Colors.PreWhite

            },

            ServerInstance: {

                Netherlands_PNG: Netherlands_PNG,
                Germany_PNG: Germany_PNG,


                backgroundColor: Colors.Black,


                Block: {

                    borderColor_Chosen: Colors.PinOutChosen,
                    borderColor_Unchosen: '',
                    backgroundColor: Colors.SoapBack,

                    fontFamily: 'Arimo-SemiBold',
                    color: Colors.PreWhite,
                    color_IsChosen: Colors.Grey,


                    Pic: {

                        borderColor_Out: Colors.PicBorder,
                        borderColor_In: Colors.Black

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

            backgroundColor: Colors.DarkBack,


            Top: {

                borderBottomColor: Colors.BarBorder,
                backgroundColor: Colors.BarBackground,

                fontFamily: 'Archivo-ExtraBold',
                color: Colors.PreWhite

            }

        },

        Separator: {

            backgroundColor: Colors.Separator

        },

        LanguageButton: {

            Planet_PNG: World_grey_PNG,


            fontFamily_Language: 'Archivo-SemiBold',
            color_Language: Colors.PreWhite,

            fontFamily_LanguageValue: 'Archivo-SemiBold',
            color_LanguageValue: Colors.DarkBlockButton

        },

        FeedbackButton: {

            Info_PNG: Info_grey_PNG,
            Arrow_PNG: ArrowCompact_grey_PNG,


            fontFamily: 'Archivo-SemiBold',
            color: Colors.PreWhite

        },

        AutoVpnToggler: {

            borderTopColor: Colors.BarBorder,
            backgroundColor: Colors.BarBackground,

            fontFamily: 'Archivo-SemiBold',
            color: Colors.PreWhite,


            Toggler: {

                Done_PNG: Done_white_PNG,


                backgroundColor_Chosen: Colors.DarkBack,
                backgroundColor_Unchosen: Colors.DarkBack,
                borderColor_Chosen: Colors.BarBorder,
                borderColor_Unchosen: Colors.BarBorder

            }

        }

    },


    AppDescriptionWindow: {

        Content: {

            fontFamily: 'Archivo-Regular',
            color: Colors.PreWhite

        }

    },
    
    LanguageChooseWindow: {

        Content: {

            ChooseRadioButton: {

                innerColor_Chosen: Colors.Olive,
                innerColor_Unchosen: Colors.ToggInner,
                outerColor_Chosen: Colors.PinOutChosen,
                outerColor_Unchosen: Colors.ToggOuter
    
            },
    
            ChooseVariant: {
    
                fontFamily_Language: 'Archivo-SemiBold',
                color_Language: Colors.PreWhite,
    
                fontFamily_LanguageNative: 'Archivo-SemiBold',
                color_LanguageNative: Colors.DarkBlockButton
    
            }

        }

    },
    
    FeedbackWindow: {

        Content: {

            fontFamily: 'Archivo-Regular',
            color: Colors.PreWhite,
            color_Link: Colors.TextLink,
            color_LinkPressed: Colors.TextLinkPressed

        }

    }

}


export { MainTheme }