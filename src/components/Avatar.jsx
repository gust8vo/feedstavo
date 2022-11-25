import styles from './Avatar.module.css'

export function Avatar(){
    return(
        <div className={styles.profile}>
        {/* <Avatar src="https://github.com/alef365.png" /> */}
        <img src="https://avatars.githubusercontent.com/u/111918084?v=4" alt="pfp" />
        <strong>Gustavo Oliveira</strong>
        <span>Programador</span>
    </div>

    )





}