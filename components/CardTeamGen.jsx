import Image from "next/image";


export default function CardTeamGen({image}) {
    return (
      <div className={styles.CardTeamGen}>
         <Image
         src={image}
         className={styles.CardTeamGen__img}
         width={100}
         height={150}
         >
         </Image>
      </div>
    );
  }
  