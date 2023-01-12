import Link from "next/link";
import styles from  "../styles/CardPrice.module.css";

export default function CardPrice({link, title, desc, item, precioanual, textsmallyear, preciomensual, textsmallmonth}) {
  return (
    <div className={styles.contGenPrice}>
      <h2 className={styles.namePlanPrice}>{title}</h2>
      <p className={styles.descPlanPrice}>{desc}</p>
      <ul className={styles.listItems}>
        <li>
          <span>{item}</span>
        </li>
      </ul>
      <span className={styles.priceAnual}>{precioanual}<span className={styles.anualSmall}>{textsmallyear}</span></span>
      <span className={styles.auxTextPrice}>sale a</span>
      <span className={styles.priceMonth}>{preciomensual}<span className={styles.monthSmall}>{textsmallmonth}</span></span>
      <Link href={link}>
      <a href="#" className={styles.genCardPriceLink}> LO QUIERO
      </a>
    </Link>
    </div>
    
  );
}