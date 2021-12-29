import s from './Tabs.module.css'
import tabs from '../data/tabs.json'

export default function Tabs({currentTab, setCurrentTab}) {

    return (
        <ul className={s.tabsList}>
            {tabs.map(tab => <li className={s.tab} onClick={() => setCurrentTab(tab)} style={tab === currentTab ? {background: "#d3d3d3", cursor: 'default'} : {}} key={tab}>{tab}</li>)}
        </ul>
    )
}
