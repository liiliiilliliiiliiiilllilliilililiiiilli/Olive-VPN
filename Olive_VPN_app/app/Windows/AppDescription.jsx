// This is app description window.


import { useAppOpenedWindows } from '../../Redux/Hooks/OpenedWindows'
import { ScrollView, Text } from 'react-native'
import Window from '../Components/Common/Window/Window'


const AppDescription = () => {

  const [openedAppWindows, setAppOpenedWindows] = useAppOpenedWindows ()


  // this window existence code:

  const isOpened = openedAppWindows.includes ('AppDescription')

  const setReduxIsOpened = bool => {

    bool

      ? setAppOpenedWindows (prev => [...prev, 'AppDescription'])
      : setAppOpenedWindows (prev => prev.filter (el => el != 'AppDescription'))

  }

  // .


  const handleOkayPress = () => {

    setReduxIsOpened (false)

  }


  return (

    <Window
    isOpened = {isOpened}
    closeSelf = {() => handleOkayPress()}
    title = 'Для чего создано это приложение?'
    rightButton = {{
      text: 'Хорошо',
      onPress: () => handleOkayPress()}}>

      <Content/>

    </Window>

  )

}

const Content = () => {

  return (

    <ScrollView
    showsVerticalScrollIndicator = {false}
    showsHorizontalScrollIndicator = {false}
    style = {{
    width: '100%',
    height: '100%',
    paddingHorizontal: 25}}>

      <Text style = {{
      width: '100%',
      marginVertical: 8,
      fontFamily: 'Archivo-Regular',
      color: '#f2f2f2',
      fontSize: 17.5}}>

        {`Если Вы сталкиваетесь с проблемами доступа к удаленным ресурсам или хотите сохранить конфиденциальность личных данных в небезопасной сети, одним из решений может стать надежное VPN соединение.\n\n`}
        {`VPN (Virtual Private Network) - технология межсетевой коммуникации для создания безопасных виртуальных каналов связи. Шифруемые данные трафика защищены криптографическими методами так, что злоумышленнику при перехвате на их дешифровку потребуются миллионы и миллионы лет.\n\n`}
        {`Помимо VPN сущетсвует множество иных способов обезопасить себя в сети, например сетевые прокси или изменение IP адреса. Почти каждый из них разделяет принципы работы VPN, а также имеет ряд отдельных протоколов связи, разработанных для лучшей работы в определенных сценариях (корпоративные, персональные решения или иные специфические области).\n\n`}
        {`Несмотря на свои широкие возможности, такие технологии основаны на простых математических принципах и несложны в реализации. При желании, Вы можете развернуть свой собственный VPN сервер или настроить приватный прокси - это лучший способ сохранить контроль и приватность Ваших данных.\n\n`}
        {`OliveVPN - такой же сетевой провайдер, каким Вы можете стать для самих себя, если внимательно изучите кибербезопасность и основы программирования.\n\n`}
        {`Помните: никто не может ощутить информацию физически, но кто угодно может воплотить любоую идею, основанную на этой информации.\n\n`}
        {`Берегите себя.`}

      </Text>

    </ScrollView>

  )

}


export default AppDescription