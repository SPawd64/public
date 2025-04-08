import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export function Home() {
	return (
		<div className={styles.grid}>

			<Link to='/todo' className={styles['menu-item']}>
				<div className={styles.card}>
					<i className={`fas fa-bars ${styles.icon}`}></i>
				</div>

				<div className={styles.title}>To do list</div>
			</Link>

			<Link to='/calculator' className={styles['menu-item']}>
				<div className={styles.card}>
					<i className={`fas fa-calculator ${styles.icon}`}></i>
				</div>

				<div className={styles.title}>Skaičiuotuvas</div>
			</Link>
		</div>
		
	);
}