import styles from './Field.module.css';
import { SubFieldContainer } from '../SubField/SubFieldContainer';

export const FieldLayout = () => {
	return (
		<div className={styles.ticTacField}>
			<SubFieldContainer />
		</div>
	);
};
