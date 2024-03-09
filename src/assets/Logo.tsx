import { Text } from '../components/Text'
import { Link } from 'react-router-dom'
import { EIcons, Icon } from '../components/Icon'

export const Logo = () => {
    return (
        <Link to={'/'}>
            <span className='logo' style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Icon typeOfIcon={EIcons.pomidor} size={40} />
                <Text As='span' size={24} weight={300} color='#DC3E22'>pomodoro_box</Text>
            </span>
        </Link>
    )
}
