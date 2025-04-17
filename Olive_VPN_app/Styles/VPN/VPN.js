// This is app VPNs control file.


const appVpns = [

  'Netherlands',
  'Germany',
  'Poland'

]


const appVpnsAsset = {

  Netherlands: {  // lime

    ovpnFileName: 'netherlands',
    notificationTitle: 'RNSimpleOpenVPN',
    providerBundleIdentifier: 'com.example.OliveVPN',
    localizedDescription: 'TestRNSimpleOvpn',
    compatMode: 'MODERN_DEFAULTS'

  },

  Germany: {

    ovpnFileName: 'germany',
    notificationTitle: 'RNSimpleOpenVPN',
    providerBundleIdentifier: 'com.example.OliveVPN',
    localizedDescription: 'TestRNSimpleOvpn',
    compatMode: 'MODERN_DEFAULTS'

  },

  Poland: {

    ovpnFileName: 'poland',
    notificationTitle: 'RNSimpleOpenVPN',
    providerBundleIdentifier: 'com.example.OliveVPN',
    localizedDescription: 'TestRNSimpleOvpn',
    compatMode: 'MODERN_DEFAULTS'

  }

}


export { appVpnsAsset }