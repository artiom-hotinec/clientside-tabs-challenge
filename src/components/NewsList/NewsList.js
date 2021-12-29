import s from './NewsList.module.css'

export default function NewsList({ data }) {
    console.log(data);
    return <ol className={s.list}>
            {data.map((item, i) => {
                return <li key={item.id} className={s.item}>
                    <a className={s.link} href={item.webUrl}><span className={s.number}>{i + 1}.</span>{item.webTitle}</a>
                </li>
            }
            )}
        </ol>
}
