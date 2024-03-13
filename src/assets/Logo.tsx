import { Text } from '../components/Text'
import { Link } from 'react-router-dom'
import { EIcons, Icon } from '../components/Icon'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const Logo = () => {
    const appTheme = useSelector<RootState, string>(state => state.Local.appTheme);
    return (
        <Link to={'/'}>
            <span className='logo' style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Icon typeOfIcon={EIcons.pomidor} size={40} fill={appTheme === 'dark' ? '#EE5237' : '#DC3E22'} />
                <Text As='span' size={24} weight={300} color='#DC3E22'>pomodoro_box</Text>
            </span>
        </Link>
    )
}
