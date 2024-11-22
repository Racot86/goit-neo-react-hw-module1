import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({transactions}) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                {Object.keys(transactions[0]).map((key, i) => {
                    if (i > 0) {
                        return (
                            <th key={i}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        )
                    }
                })}
            </tr>
            </thead>

            <tbody>
            {transactions.map((transaction,) => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
}
export default TransactionHistory