import type { FC } from 'react'
import styles from './page.module.css'

const Home: FC = () => (
  <div className={styles.page}>
    <main className="post">
      <h1>안녕하세요. 유월입니다.</h1>
      <span className="caption">2025년 2월 16일 오전 3:48</span>
      <p>
        아직은 아무런 내용도 없습니다. 앞으로 채워 나갈 수도, 아닐 수도
        있습니다. 잘 부탁드립니다.
      </p>
    </main>
  </div>
)

export default Home
