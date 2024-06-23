import Inpute from "@/Components/Input/Inpute";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [print, setPrint] = useState(false);
  const [save, setSave] = useState(false);
  const [billDate, setBillDate] = useState("");
  const [invoice, setInvoice] = useState("");
  const [traveler, setTraveler] = useState("");
  const [passenger, setPassenger] = useState("");
  const [bookedBy, setbookedBy] = useState("");
  const [dutyDate, setDutyDate] = useState("");
  const [dutySlipNo, setDutySlipNo] = useState("");
  const [jobID, setJobId] = useState("");

  const [openKm, setOpenKm] = useState(0);
  const [closeKm, setCloseKm] = useState(0);
  const [extraKm, setExtraKm] = useState(0);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [overTime, setOverTime] = useState(0);

  const [localFair, setLocalFair] = useState(0);
  const [kmFair, setKmFair] = useState(0);
  const [hrsFair, setHrsFair] = useState(0);
  const [parking, setParking] = useState(0);
  const [extraRs, setExtraRs] = useState(0);

  const [amount, setAmount] = useState(0);
  const [totalAmount, setTotalAmonut] = useState(0);
  function handelLocal() {
    // time
    const start: any = new Date(openTime);
    const end: any = new Date(closeTime);
    const diff: any = (end - start) / (1000 * 60 * 60);
    if (diff.toFixed(2) - 8 > 0.5) {
      setOverTime(diff.toFixed(2) - 8);
    } // km
    if (closeKm - openKm > 80) {
      setExtraKm(closeKm - openKm - 80);
    }
    const time = overTime * hrsFair;
    const km = extraKm * kmFair;

    setAmount(+localFair + +time + +km);
    setTotalAmonut(+localFair + +time + +km + +parking);
  }
  useEffect(() => {
    handelLocal();
  }, [save]);

  useEffect(() => {
    if (print) {
      window.print();
    }
  }, [print]);
  return (
    <>
      {!save && (
        <section className={styles.invoiceDetails}>
          <div className={styles.flex}>
            <Inpute
              value={invoice}
              type={"number"}
              title={"Invoice No. : "}
              placeholder={"Enter Invoice Number "}
              change={(e: any) => setInvoice(e)}
            />
            <Inpute
              value={billDate}
              type={"date"}
              title={"bill date. : "}
              placeholder={"Enter bill Date "}
              change={(e: any) => setBillDate(e)}
            />
          </div>
          <div className={styles.flex}>
            <Inpute
              value={traveler}
              type={"text"}
              title={"Travles Name : "}
              placeholder={"Enter Travles Name "}
              change={(e: any) => setTraveler(e)}
            />
            <Inpute
              value={passenger}
              type={"text"}
              title={"Passeger Name : "}
              placeholder={"Enter Passenger Name "}
              change={(e: any) => setPassenger(e)}
            />
          </div>
          <div className={styles.flex}>
            <Inpute
              value={bookedBy}
              type={"text"}
              title={"Booked By : "}
              placeholder={"Enter Booked By "}
              change={(e: any) => setbookedBy(e)}
            />
            <Inpute
              value={dutyDate}
              type={"date"}
              title={"Duty Date: "}
              placeholder={"Enter Duty date "}
              change={(e: any) => setDutyDate(e)}
            />
          </div>
          <div className={styles.flex}>
            <Inpute
              value={dutySlipNo}
              type={"text"}
              title={"Duty slip No. : "}
              placeholder={"Enter Booked By "}
              change={(e: any) => setDutySlipNo(e)}
            />
            <Inpute
              value={jobID}
              type={"text"}
              title={"Job Id: "}
              placeholder={"Enter Duty date "}
              change={(e: any) => setJobId(e)}
            />
          </div>
          <p>Km.</p>
          <div className={styles.flex}>
            <Inpute
              value={openKm}
              type={"number"}
              title={"Starting Km. : "}
              placeholder={"km."}
              change={(e: any) => setOpenKm(e)}
            />
            <Inpute
              value={closeKm}
              type={"number"}
              title={"Closing Km. "}
              placeholder={"km. "}
              change={(e: any) => setCloseKm(e)}
            />
          </div>
          <p>Time</p>
          <div className={styles.flex}>
            <Inpute
              value={openTime}
              type={"datetime-local"}
              title={"Starting Time. : "}
              placeholder={"km."}
              change={(e: any) => setOpenTime(e)}
            />
            <Inpute
              value={closeTime}
              type={"datetime-local"}
              title={"Closing Time. "}
              placeholder={"km. "}
              change={(e: any) => setCloseTime(e)}
            />
          </div>
          <div className={styles.flex}>
            <Inpute
              value={parking}
              type={"number"}
              title={"Parking. : "}
              placeholder={"parking amount "}
              change={(e: any) => setParking(e)}
            />
          </div>
          <p>Rate.</p>
          <div className={styles.flex}>
            <Inpute
              value={localFair}
              type={"number"}
              title={"8hrs / 80km "}
              placeholder={"km."}
              change={(e: any) => setLocalFair(e)}
            />
            <Inpute
              value={kmFair}
              type={"number"}
              title={"Extra Km "}
              placeholder={"km. "}
              change={(e: any) => setKmFair(e)}
            />
            <Inpute
              value={hrsFair}
              type={"number"}
              title={"Extra hrs "}
              placeholder={"hrs. "}
              change={(e: any) => setHrsFair(e)}
            />
          </div>
        </section>
      )}
      {!print && (
        <>
          <button onClick={() => setSave(!save)}>
            {save ? "cancle" : "save"}
          </button>
        </>
      )}
      {save && (
        <>
          {!print && <button onClick={() => setPrint(!print)}>Print</button>}

          <section className={styles.invoice}>
            <div>
              <h1 className={styles.cname}> SP. TRAVELS</h1>
              <p className={styles.cadd}>
                13/B/505 Gurukrupa Socity Sangharsh nagr Chandivali Famr Road ,
                Andheri (e) Mumbai-72{" "}
              </p>
            </div>
            <div
              style={{ justifyContent: "space-between" }}
              className={styles.inputArea}
            >
              <div className={styles.flex}>
                <h3>invoice no.</h3>
                <p className={styles.input}> {invoice}</p>
              </div>
              <div className={styles.flex}>
                <h3>date.</h3>
                <p className={styles.input}> {billDate}</p>
              </div>
            </div>
            <div className={styles.inputArea}>
              <h3>M/s. </h3>
              <p className={styles.inputFull}> {traveler}</p>
            </div>
            <div
              style={{ justifyContent: "space-between" }}
              className={styles.inputArea}
            >
              <div className={styles.flex}>
                <h3>car used by. </h3>
                <p className={styles.input}>{passenger}</p>
              </div>
              <div className={styles.flex}>
                <h3>booked by.</h3>
                <p className={styles.input}> {bookedBy}</p>
              </div>
            </div>
            <div
              style={{ justifyContent: "space-between" }}
              className={styles.inputArea}
            >
              <div className={styles.flex}>
                <h3>vehicle type - </h3>
                <p className={styles.input}> Toyota(etious)</p>
              </div>
              <div className={styles.flex}>
                <h3>hired on/from </h3>
                <p className={styles.input}> {dutyDate}</p>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <td>PARTICULARS</td>
                  <td>DURATION</td>
                  <td>RATE Rs</td>
                  <td>AMOUNT Rs</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>for 8 hrs / 80 kms</td>
                  <td> 1 days</td>
                  <td>{localFair}</td>
                  <td>{localFair * 1}</td>
                </tr>
                <tr>
                  <td>Extra Kms</td>
                  <td> {extraKm} KMS</td>
                  <td>{kmFair}</td>
                  <td>{kmFair * extraKm}</td>
                </tr>
                <tr>
                  <td>Extra Hrs</td>
                  <td>{overTime} hrs</td>
                  <td>{hrsFair}</td>
                  <td>{hrsFair * overTime}</td>
                </tr>
                <tr>
                  <td>short / airpot </td>
                  <td>days</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>outstation</td>
                  <td>days</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>total kms</td>
                  <td>kms</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>driver outstation d.a</td>
                  <td>days</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>cancellation chagres</td>
                  <td>days</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={2}>Extra :- </td>

                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td rowSpan={2} colSpan={2} className={styles.word}>
                    Rupees :-
                    <p>{numberToWords(totalAmount)}</p>
                  </td>

                  <td> Amount Rs</td>
                  <td>{amount}</td>
                </tr>
                <tr>
                  <td>toll / park</td>
                  <td>{parking}</td>
                </tr>
                <tr>
                  <td colSpan={2}>Duty Slip Number :- {dutySlipNo} </td>

                  <td>total Rs</td>
                  <td>{totalAmount}</td>
                </tr>
                <tr>
                  <td colSpan={2}>job id :- {jobID} </td>
                  <td colSpan={2} rowSpan={3}>
                    stamp and signature
                    <div className={styles.stamp}>
                      SP .Travels
                      <p className={styles.sign}>ईराप्पा </p>
                      Propiriter
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>pan card number :- ACVPY4152A </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    contact numbers
                    <br />
                    <ul>
                      <li>9870456426</li>
                      <li>7021999038</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </>
      )}
    </>
  );
}
function numberToWords(num: number) {
  if (num === 0) return "zero";

  const belowTwenty = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const thousands = ["", "thousand", "million", "billion"];

  function convertToWords(num: number): any {
    if (num < 20) return belowTwenty[num];
    else if (num < 100)
      return (
        tens[Math.floor(num / 10)] +
        (num % 10 !== 0 ? " " + belowTwenty[num % 10] : "")
      );
    else if (num < 1000)
      return (
        belowTwenty[Math.floor(num / 100)] +
        " hundred" +
        (num % 100 !== 0 ? " " + convertToWords(num % 100) : "")
      );
    return "";
  }

  let word = "";
  let i = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      word =
        convertToWords(num % 1000) +
        (thousands[i] ? " " + thousands[i] : "") +
        (word ? " " + word : "");
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return word.trim();
}
