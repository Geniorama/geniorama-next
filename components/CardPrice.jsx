import Link from "next/link";
import styles from  "../styles/CardPrice.module.css";

export default function CardPrice({link, title, desc, item, precioanual, preciomensual}) {
  return (
    <div className={styles.contGenPrice}>
      <h2 className={styles.namePlanPrice}>{title}</h2>
      <p className={styles.descPlanPrice}>{desc}</p>
      <ul className={styles.listItems}>
        <li>
          <img src="" alt="" />
          <span>{item}</span>
        </li>
      </ul>
      <span className={styles.priceAnual}>{precioanual}</span>
      <span className={styles.auxTextPrice}>sale a</span>
      <span className={styles.priceMonth}>{preciomensual}</span>
      <Link href={link}>
      <a className={styles.genCardPriceLink}>
      </a>
    </Link>
    </div>
    
  );
}