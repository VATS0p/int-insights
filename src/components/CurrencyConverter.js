import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import styles from './CurrencyConverter.module.css'; // Import the CSS module with updated class names

function CurrencyConverter() {
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    useEffect(() => {
        Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
            .then((res) => {
                setInfo(res.data[from]);
            });
    }, [from]);

    useEffect(() => {
        setOptions(Object.keys(info));
        convert();
    }, [info]);

    function convert() {
        var rate = info[to];
        setOutput(input * rate);
    }

    function flip() {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }

    return (
        <div><br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className={styles.currencyConverter}>
            <div className={styles.heading}>
                <h1>Currency Converter</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h3>Amount</h3>
                    <input
                        className={styles.inp} // Apply the updated class name
                        type="text"
                        placeholder="Enter the amount"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className={styles.middle}>
                    <h3>From</h3>
                    <Dropdown
                        options={options}
                        onChange={(e) => setFrom(e.value)}
                        value={from}
                        placeholder="From"
                    />
                </div>
                <div className={styles.switch}>
                    <HiSwitchHorizontal
                        size="30px"
                        onClick={() => flip()}
                    />
                </div>
                <div className={styles.right}>
                    <h3>To</h3>
                    <Dropdown
                        options={options}
                        onChange={(e) => setTo(e.value)}
                        value={to}
                        placeholder="To"
                    />
                </div>
            </div>
            <div className={styles.result}>
                <button
                    className={styles.bu} // Apply the updated class name
                    onClick={() => convert()}
                >
                    Convert
                </button>
                <h2 className={styles.h23}>Converted Amount:</h2>
                <p className={styles.pi}>
                    {input + " " + from + " = " + output.toFixed(2) + " " + to}
                </p>
            </div>
        </div>
        </div>
    );
}

export default CurrencyConverter;
