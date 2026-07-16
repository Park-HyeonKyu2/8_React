import styles from "./Home.module.css"
// 앞에 써져있는 컴포넌트 이름과 동일해야 함
// f12 Elements에서 볼 때 클래스 이름이 중복되지 않게 만들어짐

import "../App.css"

export default function Hone() {
    return (
        <div>
            Home <button className={styles.button}>버튼1</button>
            <button className="button">버튼2</button>
        </div>
    )
}